import {
  BookingInfo,
  Container,
  HostInfo,
  ImgDiv,
  PeriodAndPrice,
  TotalPrice,
} from "./style";

import { useState, useEffect } from "react";

import api from "../../services/api";

function CardRent({ myRents }) {
  const [owner, setOwner] = useState({});

  useEffect(() => {
    async function getHomeAndOwner(houseId) {
      try {
        const response = await api.get(`/homes/${houseId}?_expand=user`);

        setOwner(response.data);
        return response.data;
      } catch (error) {}
    }

    getHomeAndOwner(myRents.houseId);
  }, [myRents.houseId]);

  function getTotalDays(start, end) {
    const startDate = new Date(start);

    const endDate = new Date(end);

    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return days;
  }

  function fixDateToShow(date) {
    const dateFix = date.split("-");

    const dateShow = `${dateFix[2].slice(0, 2)}/${dateFix[1]}/${dateFix[0]}`;

    return dateShow;
  }

  function formatPhone(phone) {
    const ddd = phone.slice(0, 2);
    const firstPart = phone.slice(2, 7);
    const secondPart = phone.slice(7, 11);

    const adjustedPhone = `(${ddd}) ${firstPart}-${secondPart}`;

    return adjustedPhone;
  }

  const totalInDays = getTotalDays(myRents.startDate, myRents.endDate);

  const startDateShow = fixDateToShow(myRents.startDate);

  const endDateShow = fixDateToShow(myRents.endDate);

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
            <p>
              Hóspedes: <span>{owner.capacity}</span>
            </p>
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
            <h3>Dados Locador</h3>
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
          <button onClick={() => console.log(owner?.user?.phone)}>
            Cancelar Reserva
          </button>
        </BookingInfo>
      </Container>
    </>
  );
}
export default CardRent;
