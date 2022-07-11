import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { HomesContext } from "../../providers/Homes/Homes";
import { UserContext } from "../../providers/User/User";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./styles";
import { FilterContext } from "../../providers/Filter/Filter";
import { CheckboxContainer } from "../../components/FilterModal/style";
import House from "../House";
import Button from "../../components/Button";

export const MyPanel = () => {
  const { getUser, user } = useContext(UserContext);
  const { homeList } = useContext(HomesContext);
  const history = useHistory();
  // const [user, setUser] = useState(false);
  const [home, setHome] = useState({});
  const [host, setHost] = useState(false);
  const [myHouse, setMyHouse] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const [confortsElements, setConfortsElements] = useState([
    { label: "Wi-Fi", value: "wifi", state: false },
    { label: "Estacionamento", value: "parking", state: false },
    { label: "Animais", value: "pet", state: false },
    { label: "Ar Condicionado", value: "airConditioning", state: false },
    { label: "Piscina", value: "pool", state: false },
  ]);

  function confortButtonEvent(buttonIndex) {
    setConfortsElements((currentConfortElem) => {
      const copy = [...currentConfortElem];

      const newArray = copy.map((elem, index) => {
        const currState = elem.state;
        if (index === buttonIndex) {
          return { ...elem, state: !currState };
        }
        return elem;
      });
      return newArray;
    });
  }

  useEffect(() => {
    getUser(localStorage.getItem("@Kenziebnb:id"))
      .then((res) => {
        // setUser(res);
        if (res.atribution === "host") {
          setHost(true);
        }
        const newHome = homeList.find((e) => {
          return e.userId === res?.id;
        });
        if (newHome) {
          const conforts = [...confortsElements];
          const newConforts = conforts.map((elem) => {
            elem.state = newHome.conforts[elem.value];

            return elem;
          });

          setConfortsElements(newConforts);
        }

        return newHome;
      })
      .then((res) => {
        setHome(res);
      });
  }, [, homeList]);

  // Add method
  yup.addMethod(yup.string, "stripEmptyString", function () {
    return this.transform((value) => (value === "" ? undefined : value));
  });
  let [img] = home?.imgs;

  console.log(img);
  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.title),
    street: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.address?.street),
    number: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.address?.number),
    city: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.address?.city),
    description: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.description),
    capacity: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.capacity),
    price: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.price),
    img: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(),
    /* img1: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.imgs[1]),
    img2: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.imgs[2]),
    img3: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.imgs[3]),
    img4: yup
      .string()
      .required("Campo Obrigatorio")
      .stripEmptyString()
      .default(home?.imgs[4]), */
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(data) {
    const newConforts = {};
    confortsElements.map((elem) => {
      const value = elem.value;

      return (newConforts[value] = elem.state);
    });
    data.conforts = newConforts;
    console.log(data);
  }

  return (
    <Container>
      <Header />

      <div className="containerMyHouse">
        <div className="btnContainer">
          <button className="btnHome" onClick={() => history.push("/")}>
            <AiOutlineArrowLeft /> Home
          </button>
          {host && <button className="btnMyHouse">Minha Casa</button>}
        </div>
        {host && myHouse && (
          <div className="houseForm">
            <h3>Minha Casa</h3>
            <div className="containerForm">
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <Input
                  label="Titulo"
                  name="title"
                  type="text"
                  placeholder="Titulo da casa"
                  defaultValue={home?.title}
                  register={register}
                  error={errors.title?.message}
                />
                <div className="address">
                  <h2>Endereço:</h2>
                  <Input
                    label="Rua"
                    name="street"
                    type="text"
                    placeholder="Titulo da casa"
                    defaultValue={home?.address?.street}
                    register={register}
                    error={errors.street?.message}
                  />
                  <div className="addressNumberCity">
                    <Input
                      label="Número"
                      name="number"
                      type="text"
                      placeholder="Número"
                      defaultValue={home?.address?.number}
                      register={register}
                      error={errors.number?.message}
                    />
                    <Input
                      label="Cidade"
                      name="city"
                      type="text"
                      placeholder="Cidade"
                      defaultValue={home?.address?.city}
                      register={register}
                      error={errors.city?.message}
                    />
                  </div>
                  <div className="conforts">
                    <h2>Comodidade:</h2>
                    <CheckboxContainer>
                      {confortsElements?.map((buttonInfo, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            value={buttonInfo.value}
                            onChange={() => confortButtonEvent(index)}
                            checked={buttonInfo.state}
                          />
                          <label>{buttonInfo.label}</label>
                        </div>
                      ))}
                    </CheckboxContainer>
                  </div>
                  <div className="description">
                    <h2>Descrição</h2>
                    <textarea
                      name="description"
                      defaultValue={home?.description}
                      placeholder="Descreva sua acomodação"
                      cols="35"
                      rows="10"
                      {...register("description")}
                    ></textarea>
                  </div>
                  <div className="capacityPrice">
                    <h2>Valor e quantidade de hóspedes</h2>
                    <div>
                      <Input
                        label="Hóspedes"
                        name="capacity"
                        type="text"
                        placeholder="Capacidade"
                        defaultValue={home?.capacity}
                        register={register}
                        error={errors.capacity?.message}
                      />
                      <Input
                        label="Valor da locação"
                        name="price"
                        type="text"
                        placeholder="Valor..."
                        defaultValue={home?.price}
                        register={register}
                        error={errors.price?.message}
                      />
                    </div>
                  </div>
                  {
                    <div className="containerImgs">
                      <h2>Imagens</h2>
                      <Input
                        name="img"
                        label="Imagem 1"
                        type="text"
                        placeholder="Insira o link de sua imagem"
                        defaultValue={home?.imgs[0]}
                        register={register}
                        error={errors.img0?.message}
                      />
                      {/* <Input
                      name="img1"
                      label="Imagem 2"
                      type="text"
                      placeholder="Insira o link de sua imagem"
                      defaultValue={home?.imgs[1]}
                      register={register}
                      error={errors.img1?.message}
                    />
                    <Input
                      name="img2"
                      label="Imagem 3"
                      type="text"
                      placeholder="Insira o link de sua imagem"
                      defaultValue={home?.imgs[2]}
                      register={register}
                      error={errors.img2?.message}
                    />
                    <Input
                      name="img3"
                      label="Imagem 4"
                      type="text"
                      placeholder="Insira o link de sua imagem"
                      defaultValue={home?.imgs[3]}
                      register={register}
                      error={errors.img3?.message}
                    />
                    <Input
                      name="img4"
                      label="Imagem 5"
                      type="text"
                      placeholder="Insira o link de sua imagem"
                      defaultValue={home?.imgs[4]}
                      register={register}
                      error={errors.img4?.message}
                    /> */}
                    </div>
                  }
                </div>
                <div className="btnEditHome">
                  {home ? (
                    <Button type="submit">Salvar Alterações</Button>
                  ) : (
                    <Button>Nova hospedagem</Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </Container>
  );
};
