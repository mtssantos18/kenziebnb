import React, { useContext } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiOutlineEmojiSad } from "react-icons/hi";

import { Link, useHistory } from "react-router-dom";

import CardRent from "../../components/CardRent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { RentsContext } from "../../providers/Rents/Rents";
import { UserContext } from "../../providers/User/User";

import { Container, Content, Message, Title } from "./style";

function TenantPanel() {
  const history = useHistory();

  const { user } = useContext(UserContext);
  const { rents } = useContext(RentsContext);

  const myRents = rents?.filter((elem) => elem.tenantId === user?.id);

  return (
    <Container>
      <Header />
      <button className="btnHome" onClick={() => history.push("/")}>
        <AiOutlineArrowLeft /> Home
      </button>
      <Title>Minhas Reservas</Title>
      <Content>
        {myRents.length !== 0 ? (
          myRents.map((elem, index) => (
            <CardRent key={index} myRent={elem} user={user} />
          ))
        ) : (
          <Message>
            <HiOutlineEmojiSad size={40} />
            <h2>Você ainda não tem nenhuma reserva.</h2>
            <p>
              Que tal fazer uma reserva? <Link to="/">clique aqui!</Link>
            </p>
          </Message>
        )}
      </Content>
    </Container>
  );
}

export default TenantPanel;
