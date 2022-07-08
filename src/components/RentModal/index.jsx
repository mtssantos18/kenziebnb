import React, { useEffect, useState } from "react";

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

  function checkDates(rents) {
    const dates = [
      {
        startDate: new Date("2022/7/10"),
        endDate: new Date("2022/7/15"),
      },
      {
        startDate: new Date("2022/7/20"),
        endDate: new Date("2022/7/25"),
      },
    ];
    let totalDisabled = [new Date()];
    for (let j = 0; j < dates.length; j++) {
      let disabled = [dates[j].startDate];
      let diference = differenceInDays(dates[j].endDate, dates[j].startDate);
      for (let i = 0; i < diference; i++) {
        disabled.push(addDays(new Date(disabled[disabled.length - 1]), 1));
      }
      totalDisabled = [...totalDisabled, ...disabled];
    }
    setDisabledDays(totalDisabled);
  }

  function handleRent(selection) {
    selection[0].totalDays =
      differenceInDays(selection[0].endDate, selection[0].startDate) + 1;
    selection[0].totalPrice = selection[0].totalDays * 1254;
    console.log(selection);
    setSelectDate([...selection]);
  }

  function rentHouse() {
    if (selectDate[0].totalDays < 2) {
      toast.error("Selecione pelo menos 2 dias");
      return;
    }

    const user = [
      {
        id: 0,
      },
      //Aguardar user da context
    ];
    const rent = {
      startDate: selectDate[0].startDate,
      endDate: selectDate[0].endDate,
      houseId: 5,
      tenantId: user[0].id,
      status: "pendent",
    };
    setSuccessRent(true);
    setTimeout(() => history.push("/rents"), 2500);
    console.log(rent);
  }

  useEffect(() => {
    checkDates();
    // console.log(selectDate);
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
