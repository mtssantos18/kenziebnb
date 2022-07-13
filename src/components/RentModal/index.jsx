import React, { useContext, useEffect, useState } from "react";

import {
  CheckinCheckoutContainer,
  Container,
  ContainerSuccess,
} from "./styles";
import { AiOutlineCheck } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import { addDays } from "date-fns/esm";
import { differenceInDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Button from "../Button";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { RentsContext } from "../../providers/Rents/Rents";
import { UserContext } from "../../providers/User/User";

function RentModal({ setShowModal, house }) {
  const history = useHistory();
  const [selectDate, setSelectDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      totalDays: 0,
    },
  ]);

  const [successRent, setSuccessRent] = useState(false);
  const [disabledDays, setDisabledDays] = useState([]);
  const [user, setUser] = useState({});
  const { rents, bookHouse } = useContext(RentsContext);
  const { getUser } = useContext(UserContext);

  function checkDates(books) {
    let totalDisabled = [new Date()];
    for (let j = 0; j < books.length; j++) {
      let disabled = [new Date(books[j].startDate)];
      let diference = differenceInDays(
        new Date(books[j].endDate),
        new Date(books[j].startDate)
      );
      for (let i = 0; i < diference; i++) {
        disabled.push(addDays(new Date(disabled[disabled.length - 1]), 1));
      }
      totalDisabled = [...totalDisabled, ...disabled];
    }
    setDisabledDays(totalDisabled);
  }

  function handleRent(selection) {
    selection[0].totalDays =
      differenceInDays(
        new Date(selection[0].endDate),
        new Date(selection[0].startDate)
      ) + 1;
    selection[0].totalPrice = selection[0].totalDays * house.price;
    setSelectDate([...selection]);
  }

  function rentHouse() {
    if (selectDate[0].totalDays < 2) {
      toast.error("Selecione pelo menos 2 dias");
      return;
    }

    const rent = {
      startDate: new Date(selectDate[0].startDate),
      endDate: new Date(selectDate[0].endDate),
      houseId: house.id,
      tenantId: user?.id,
      status: "pending",
      messages: [
        {
          sentBy: "host",
          message:
            "Obrigado por escolher a minha residência, para maiores informações fico à disposição!",
          time: new Date(),
          id: 1,
          tenantId: user?.id,
          hostId: house?.userId,
        },
      ],
    };
    setSuccessRent(true);
    bookHouse(rent);
    setTimeout(() => history.push("/tenant"), 2500);
  }

  useEffect(() => {
    const datesOff = rents.filter((e) => e.houseId === house.id);
    checkDates(datesOff);
    async function reloadUser() {
      const newUser = await getUser(localStorage.getItem("@Kenziebnb:id"));
      setUser(newUser);
    }
    reloadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps, no-sparse-arrays
  }, [, selectDate]);

  return (
    <Container>
      {!successRent ? (
        <div className="containerModal">
          <header>
            <h2>Reserva</h2>
            <MdClose onClick={() => setShowModal(false)} />
          </header>
          <CheckinCheckoutContainer>
            <h3>Checkin</h3>
            <h3>Checkout</h3>
          </CheckinCheckoutContainer>
          <div className="containerDates">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => handleRent([item.selection])}
              moveRangeOnFirstSelection={false}
              disabledDates={disabledDays}
              dateDisplayFormat="d ,MMM, yyyy"
              ranges={selectDate}
              locale={locales.pt}
              rangeColors={["#0077B6"]}
            />
          </div>
          <div className="containerInfos">
            <p>Informações da Reserva</p>
            <div className="totalDayRent">
              <p>Total de dias:</p>
              <p>{selectDate[0].totalDays ? selectDate[0].totalDays : 0}</p>
            </div>
            <div className="totalPriceRent">
              <p>Total da Reserva:</p>
              <p>
                {selectDate[0].totalPrice &&
                  selectDate[0].totalPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </p>
            </div>
          </div>
          <Button className="btnModalRent" onClick={rentHouse}>
            Confirmar Reserva
          </Button>
        </div>
      ) : (
        <ContainerSuccess>
          <div>
            <AiOutlineCheck />
          </div>
        </ContainerSuccess>
      )}
    </Container>
  );
}
export default RentModal;
