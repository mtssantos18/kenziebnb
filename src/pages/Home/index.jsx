import Header from "./../../components/Header";
import CardHouse from "../../components/CardHouse/index.js";

import {
  List,
  Container,
  FilterButton,
  ContentContainer,
  FooterContainer,
<<<<<<< HEAD
  ContainerFilterAndSelect,
=======
>>>>>>> 7ff841b5efb7204daecaa02e869ef68e3abb0dac
} from "./styles.js";

import mockup from "./../../images/mockup.png";

import Footer from "../../components/Footer";

import { useContext, useEffect, useState } from "react";
import { HomesContext } from "../../providers/Homes/Homes";
import Button from "../../components/Button";
import FilterModal from "../../components/FilterModal";
import { IoFilterOutline } from "react-icons/io5";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { FilterContext } from "../../providers/Filter/Filter";

function Home() {
  const { homeList, showFilterModal, setShowFilterModal } =
    useContext(HomesContext);

  const { filterList } = useContext(FilterContext);

  function onCLickFilter() {
    setShowFilterModal(true);
  }

<<<<<<< HEAD
  const [selectList, setSelectList] = useState("");
  console.log(selectList);

  return (
    <>
      <Header />

      <Container>
        {showFilterModal && <FilterModal />}

        <ContentContainer>
          <ContainerFilterAndSelect>
            <FilterButton onClick={onCLickFilter}>
              <IoFilterOutline size={22} />
              <p>Filtros</p>
            </FilterButton>
            <div>
              Ordenar por:
              <select onChange={(e) => setSelectList(e.target.value)}>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
              </select>
            </div>
          </ContainerFilterAndSelect>
          <List>
            {selectList === "maior" ? (
              filterList.length === 0 ? (
                <div className="no_filter_message">
                  <HiOutlineEmojiSad size={40} />
                  <h1>Não há casas com o filtro aplicado.</h1>
                </div>
              ) : filterList ? (
                filterList
                  .sort(function (a, b) {
                    if (a.price < b.price) {
                      return 1;
                    }
                    if (a.price > b.price) {
                      return -1;
                    }

                    return 0;
                  })
                  .map((product, index) => (
                    <CardHouse key={index} product={product} />
                  ))
              ) : (
                homeList
                  .sort(function (a, b) {
                    if (a.price < b.price) {
                      return 1;
                    }
                    if (a.price > b.price) {
                      return -1;
                    }

                    return 0;
                  })
                  .map((product, index) => (
                    <CardHouse key={index} product={product} />
                  ))
              )
            ) : filterList.length === 0 ? (
              <div className="no_filter_message">
                <HiOutlineEmojiSad size={40} />
                <h1>Não há casas com o filtro aplicado.</h1>
              </div>
            ) : filterList ? (
              filterList
                .sort(function (a, b) {
                  if (a.price > b.price) {
                    return 1;
                  }
                  if (a.price < b.price) {
                    return -1;
                  }

                  return 0;
                })
                .map((product, index) => (
                  <CardHouse key={index} product={product} />
                ))
            ) : (
              homeList
                .sort(function (a, b) {
                  if (a.price > b.price) {
                    return 1;
                  }
                  if (a.price < b.price) {
                    return -1;
                  }

                  return 0;
                })
                .map((product, index) => (
                  <CardHouse key={index} product={product} />
                ))
=======
  return (
    <>
      <Header />

      <Container>
        {showFilterModal && <FilterModal />}

        <ContentContainer>
          <FilterButton onClick={onCLickFilter}>
            <IoFilterOutline size={22} />
            <p>Filtros</p>
          </FilterButton>
          <List>
            {filterList.length === 0 ? (
              <div className="no_filter_message">
                <HiOutlineEmojiSad size={40} />
                <h2>Não há casas com o filtro aplicado.</h2>
              </div>
            ) : filterList ? (
              filterList.map((product, index) => (
                <CardHouse key={index} product={product} />
              ))
            ) : (
              homeList.map((product, index) => (
                <CardHouse key={index} product={product} />
              ))
>>>>>>> 7ff841b5efb7204daecaa02e869ef68e3abb0dac
            )}
          </List>
        </ContentContainer>
      </Container>
    </>
  );
}

export default Home;
