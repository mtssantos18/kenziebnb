import Header from "./../../components/Header";

import CardHouse from "../../components/CardHouse/index";

import {
  List,
  Container,
  FilterButton,
  ContentContainer,
  ContainerFilterAndSelect,
} from "./styles.js";

import { IoFilterOutline } from "react-icons/io5";
import { HiOutlineEmojiSad } from "react-icons/hi";

import { useContext, useState } from "react";

import FilterModal from "../../components/FilterModal";

import { HomesContext } from "../../providers/Homes/Homes";
import { FilterContext } from "../../providers/Filter/Filter";

function Home() {
  const { homeList, showFilterModal, setShowFilterModal } =
    useContext(HomesContext);

  const { filterList } = useContext(FilterContext);

  function onCLickFilter() {
    setShowFilterModal(true);
  }

  const [selectList, setSelectList] = useState("");

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
            )}
          </List>
        </ContentContainer>
      </Container>
    </>
  );
}

export default Home;
