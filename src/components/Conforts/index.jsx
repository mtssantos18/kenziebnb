import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { BsSnow } from "react-icons/bs";
import { MdDirectionsCar, MdPets, MdPool, MdWifi } from "react-icons/md";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const Conforts = ({ conforts, reviews }) => {
  const [grade, setGrade] = useState([]);

  useEffect(() => {
    if (reviews) {
      let grades = [];
      for (let i = 0; i < reviews; i++) {
        grades.push("Fill");
      }
      if (grades.length < 5) {
        for (let i = 0; i <= 5 - grades.length; i++) {
          grades.push("Round");
        }
      }
      setGrade(grades);
    }
  }, [reviews]);

  return (
    <Container>
      <h3>Avaliação</h3>
      <div className="grades">
        {grade.map((e, i) => {
          return e === "Fill" ? (
            <AiFillStar key={i} />
          ) : (
            <AiOutlineStar key={i} />
          );
        })}
      </div>
      <h3>Comodidades</h3>

      {conforts ? (
        <div className="containerConforts">
          {conforts.airConditioning && (
            <div className="confort">
              <div className="circle">
                <BsSnow />
              </div>
              <p>Ar Condicionado</p>
            </div>
          )}
          {conforts.wifi && (
            <div className="confort">
              <div className="circle">
                <MdWifi />
              </div>
              <p>Wifi</p>
            </div>
          )}
          {conforts.pool && (
            <div className="confort">
              <div className="circle">
                <MdPool />
              </div>
              <p>Piscina</p>
            </div>
          )}
          {conforts.pet && (
            <div className="confort">
              <div className="circle">
                <MdPets />
              </div>
              <p>Permitido Animais</p>
            </div>
          )}
          {conforts.parking && (
            <div className="confort">
              <div className="circle">
                <MdDirectionsCar />
              </div>
              <p>Estacionamento</p>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};
