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
import ChatModal from "../ChatModal";

function CardRent({ myRent, user }) {
  const [owner, setOwner] = useState({});
  const [tenant, setTenant] = useState(false);
  const [showModalChat, setShowModalChat] = useState(false);

  const { deleteBookHouse, editBook } = useContext(RentsContext);

  useEffect(() => {
    async function getHomeAndOwner(houseId) {
      try {
        const response = await api.get(`/homes/${houseId}?_expand=user`);

        setOwner(response.data);
        const newTenant = await getTenant();
        setTenant(newTenant);
        return response.data;
      } catch (error) {}
    }

    getHomeAndOwner(myRent.houseId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myRent.houseId, myRent.status]);

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

  async function handleConfirmRent() {
    myRent.status = "confirmed";
    await editBook(myRent.id, myRent);
  }
  async function getTenant() {
    const response = await api.get(`/users/${myRent.tenantId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@Kenziebnb:token")}`,
      },
    });
    return response.data;
  }

  const totalInDays = getTotalDays(myRent.startDate, myRent.endDate) + 1;

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

  const phoneNumber =
    user.atribution !== "host"
      ? owner?.user?.phone && formatPhone(owner?.user?.phone)
      : tenant?.phone && formatPhone(tenant?.phone);

  return (
    <>
      <Container>
        {showModalChat && (
          <ChatModal
            myRent={myRent}
            messages={myRent?.messages}
            setShowModalChat={setShowModalChat}
            owner={owner}
            tenant={tenant}
          />
        )}
        <ImgDiv>
          <img src={owner.imgs && owner?.imgs[0]} alt="Casa" />
        </ImgDiv>
        <BookingInfo>
          <PeriodAndPrice>
            <DivFlex>
              <p>
                Hóspedes: <span>{owner.capacity}</span>
              </p>
              <button onClick={() => setShowModalChat(true)}>
                <div className="iconMsg">{myRent.messages.length}</div>
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
            {user.atribution !== "host" ? (
              <>
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
              </>
            ) : (
              <>
                <h3>Dados Locatário</h3>
                <p>
                  Nome: <span>{tenant?.name}</span>
                </p>
                <p>
                  Telefone: <span>{phoneNumber}</span>
                </p>
                <p>
                  Email: <span>{tenant?.email}</span>
                </p>
              </>
            )}
          </HostInfo>
          <div className="containerBtn">
            {myRent?.status === "pending" && user.atribution === "host" && (
              <button className="btnPending" onClick={handleConfirmRent}>
                Confirmar
              </button>
            )}
            <button onClick={() => deleteBookHouse(myRent.id)}>
              Cancelar Reserva
            </button>
          </div>
        </BookingInfo>
      </Container>
    </>
  );
}
export default CardRent;
