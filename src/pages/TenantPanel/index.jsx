import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import CardRent from "../../components/CardRent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Content } from "./style";

function TenantPanel() {
  const history = useHistory();
  return (
    <Container>
      <Header />
      <button className="btnHome" onClick={() => history.push("/")}>
        <AiOutlineArrowLeft /> Home
      </button>
      <Content>
        <CardRent />
      </Content>
      <Footer />
    </Container>
  );
}

export default TenantPanel;
