import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HomesContext } from "../../providers/Homes/Homes";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Container } from "./styles";
import { SlideImg } from "../../components/SlideImg";
import { Conforts } from "../../components/Conforts";
import Map from "../../components/Map";
import Button from "../../components/Button";
import RentModal from "../../components/RentModal";
import api from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../../providers/User/User";

function House() {
  const selected = useParams();
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [house, setHouse] = useState({});
  const { homeList } = useContext(HomesContext);
  const [screenWidth, setScreenWidth] = useState(window.screen.width > 900);

  useEffect(() => {
    setHouse(homeList.find((e) => e.id === +selected.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps, no-sparse-arrays
  }, [, homeList]);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth >= 900) {
        setScreenWidth(true);
      } else {
        setScreenWidth(false);
      }
    });
  }, []);

  async function handleClickBtnRent() {
    let verification;
    await api
      .get("/rents", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@Kenziebnb:token")}`,
        },
      })
      .then((res) => {
        verification = false;
      })
      .catch((err) => {
        verification = true;
      });
    if (!localStorage.getItem("@Kenziebnb:token")) {
      history.push("/login");
    } else if (verification) {
      toast.error("Sessão expirada");
      localStorage.clear();
      setTimeout(() => history.push("/login"), 2500);
    } else if (user?.atribution === "host") {
      toast.error("Somente usuários atribuidos como locatário podem reservar");
    } else {
      setShowModal(true);
    }
  }

  return (
    <Container>
      {showModal && <RentModal house={house} setShowModal={setShowModal} />}
      {house && (
        <>
          <Header />
          <div className="Container">
            <div className="btnContainer">
              <button className="btnHome" onClick={() => history.push("/")}>
                <AiOutlineArrowLeft /> Home
              </button>
            </div>
            <div className="containerHouse">
              {!screenWidth && <h2>{house.title}</h2>}

              <div className="containerImgs">
                <SlideImg house={house.imgs} />
              </div>

              <div className="containerInfo">
                <div className="titleCapacity">
                  {screenWidth && <h2>{house.title}</h2>}
                  <p className="capacity">
                    Capacidade: <span>{house.capacity} hóspedes</span>
                  </p>
                </div>
                <span className="value">
                  {house.price > 0
                    ? house.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : 0}
                  <span>/noite</span>
                </span>
                <div className="descriptionContainer">
                  <h3>Descrição</h3>
                  <p className="description">{house.description}</p>
                </div>
                {screenWidth && (
                  <Button onClick={handleClickBtnRent} className="btnRent">
                    Reservar
                  </Button>
                )}
              </div>

              <Conforts conforts={house.conforts} reviews={house.reviews} />
              <Map address={house.address} />
            </div>
            {!screenWidth && (
              <Button onClick={handleClickBtnRent} className="btnRent">
                Reservar
              </Button>
            )}
          </div>
          <Footer />
        </>
      )}
    </Container>
  );
}

export default House;
