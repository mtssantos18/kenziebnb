import Header from "./../../components/Header";
import CardHouse from "../../components/CardHouse/index.js";

import { List, Container, FilterButton, ContentContainer } from "./styles.js";

import mockup from "./../../images/mockup.png";

import Footer from "../../components/Footer";

import { useContext, useEffect, useState } from "react";
import { HomesContext } from "../../providers/Homes/Homes";
import Button from "../../components/Button";
import FilterModal from "../../components/FilterModal";
import { IoFilterOutline } from "react-icons/io5";
import { FilterContext } from "../../providers/Filter/Filter";

function Home() {
	const { homeList, showFilterModal, setShowFilterModal } =
		useContext(HomesContext);

	const { filterList } = useContext(FilterContext);

	// useEffect(()=> {

	// },[])

	function onCLickFilter() {
		setShowFilterModal(true);
	}

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
						{filterList
							? filterList.map((product, index) => (
									<CardHouse key={index} product={product} />
							  ))
							: homeList.map((product, index) => (
									<CardHouse key={index} product={product} />
							  ))}
					</List>
				</ContentContainer>
			</Container>

			{/* <Button header onClick={() => console.log(homeList)}>
				console homeList
			</Button> */}

			<Footer />
		</>
	);
}

export default Home;
