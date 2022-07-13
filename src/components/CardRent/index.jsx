import {
  BookingInfo,
  Container,
  DivFlex,
  HostInfo,
  ImgDiv,
  PeriodAndPrice,
  SpanPending,
  SpanSuccess,
  TotalPrice,
} from "./style";

import { useState, useEffect, useContext } from "react";

import { BsFillChatTextFill } from "react-icons/bs";

import api from "../../services/api";
import { RentsContext } from "../../providers/Rents/Rents";

function CardRent({ myRent, user }) {
  const [owner, setOwner] = useState({});

  const { deleteBookHouse } = useContext(RentsContext);

  useEffect(() => {
    async function getHomeAndOwner(houseId) {
      try {
        const response = await api.get(`/homes/${houseId}?_expand=user`);

        setOwner(response.data);
        return response.data;
      } catch (error) {}
    }

    getHomeAndOwner(myRent.houseId);
  }, [myRent.houseId]);

  function getTotalDays(start, end) {
    const startDate = new Date(start);

    const endDate = new Date(end);

    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return days;
  }

  function formatPhone(phone) {
    const ddd = phone.slice(0, 2);
    const firstPart = phone.slice(2, 7);
    const secondPart = phone.slice(7, 11);

    const adjustedPhone = `(${ddd}) ${firstPart}-${secondPart}`;

    return adjustedPhone;
  }

  const totalInDays = getTotalDays(myRent.startDate, myRent.endDate);

  const startDateApi = new Date(myRent.startDate);

  const endDateApi = new Date(myRent.endDate);

  const startDateShow = `${startDateApi.getDate()}/${
    startDateApi.getMonth() < 10
      ? `0${startDateApi.getMonth()}`
      : startDateApi.getMonth()
  }/${startDateApi.getFullYear()}`;

  const endDateShow = `${endDateApi.getDate()}/${
    endDateApi.getMonth() < 10
      ? `0${endDateApi.getMonth()}`
      : endDateApi.getMonth()
  }/${endDateApi.getFullYear()}`;

  const housePrice = owner?.price * totalInDays;

  const phoneNumber = owner?.user?.phone && formatPhone(owner?.user?.phone);

  return (
    <>
      <Container>
        <ImgDiv>
          <img src={owner.imgs && owner?.imgs[0]} alt="Casa" />
        </ImgDiv>
        <BookingInfo>
          <PeriodAndPrice>
            <DivFlex>
              <p>
                Hóspedes: <span>{owner.capacity}</span>
              </p>
              <button>
                <BsFillChatTextFill size={18} />
              </button>
              {myRent?.status === "pending" ? (
                <SpanPending>Pendente</SpanPending>
              ) : (
                <SpanSuccess>Confirmado</SpanSuccess>
              )}
            </DivFlex>
            <h3>Período</h3>
            <p>
              Entrada: <span>{startDateShow}</span>
            </p>
            <p>
              Saída: <span>{endDateShow}</span>
            </p>
            <TotalPrice>
              <p>Total de dias:</p>
              <p>{totalInDays}</p>
            </TotalPrice>
            <TotalPrice>
              <p>Total da reserva:</p>
              <p>
                {housePrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </TotalPrice>
          </PeriodAndPrice>
          <HostInfo>
            <h3>
              {user.atribution === "host" ? "Dados Locatário" : "Dados Locador"}
            </h3>
            <p>
              Nome: <span>{owner?.user?.name}</span>
            </p>
            <p>
              Telefone: <span>{phoneNumber}</span>
            </p>
            <p>
              Email: <span>{owner?.user?.email}</span>
            </p>
          </HostInfo>
          <button onClick={() => deleteBookHouse(myRent.id)}>
            Cancelar Reserva
          </button>
        </BookingInfo>
      </Container>
    </>
  );
}
export default CardRent;
