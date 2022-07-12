import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import CardRent from "../../components/CardRent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { RentsContext } from "../../providers/Rents/Rents";
import { UserContext } from "../../providers/User/User";
import { Container, Content, Title } from "./style";

function TenantPanel() {
  const history = useHistory();

  const { user } = useContext(UserContext);
  const { rents } = useContext(RentsContext);

  // const owner = get info about house owner;

  const myRents = rents.filter((elem) => elem.tenantId === user?.id);

  return (
    <Container>
      <Header />
      <button className="btnHome" onClick={() => history.push("/")}>
        <AiOutlineArrowLeft /> Home
      </button>
      <Title>Minhas Reservas</Title>
      <Content>
        {myRents.map((elem, index) => (
          <CardRent key={elem.id} myRents={myRents[index]} />
        ))}
      </Content>
      <Footer />
    </Container>
  );
}

export default TenantPanel;
