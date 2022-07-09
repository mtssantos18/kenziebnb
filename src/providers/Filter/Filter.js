import { createContext, useContext, useState } from "react";
import { HomesContext } from "../Homes/Homes";

export const FilterContext = createContext([]);

export const FilterProvider = ({ children }) => {
	const { homeList } = useContext(HomesContext);

	const [filterList, setFilterList] = useState([]);
	const [priceRange, setPriceRange] = useState([0, 5000]);
	const [minPrice, setMinPrice] = useState(priceRange[0]);
	const [maxPrice, setMaxPrice] = useState(priceRange[1]);
	const [filterObj, setFilterObj] = useState({});
	const [capacityElements, setCapacityElements] = useState([
		{ label: "Sem Filtro", state: true },
		{ label: 1, state: false },
		{ label: 2, state: false },
		{ label: 3, state: false },
		{ label: 4, state: false },
		{ label: "5+", state: false },
	]);
	const [reviewElements, setReviewElements] = useState([
		{ label: "Sem Filtro", state: true, hasStar: false },
		{ label: 1, state: false, hasStar: true },
		{ label: 2, state: false, hasStar: true },
		{ label: 3, state: false, hasStar: true },
		{ label: 4, state: false, hasStar: true },
		{ label: 5, state: false, hasStar: true },
	]);
	const [confortsElements, setConfortsElements] = useState([
		{ label: "Wi-Fi", value: "wifi", state: false },
		{ label: "Estacionamento", value: "parking", state: false },
		{ label: "Animais", value: "pet", state: false },
		{ label: "Ar Condicionado", value: "airConditioning", state: false },
		{ label: "Piscina", value: "pool", state: false },
	]);

	function onChangeEventSlider(priceRange) {
		setMinPrice(priceRange[0]);
		setMaxPrice(priceRange[1]);
	}

	function capacityButtonEvent(buttonIndex) {
		setCapacityElements([
			{ label: "Sem Filtro", state: false },
			{ label: 1, state: false },
			{ label: 2, state: false },
			{ label: 3, state: false },
			{ label: 4, state: false },
			{ label: "5+", state: false },
		]);

		setCapacityElements((currentCapacityElem) => {
			const copy = [...currentCapacityElem];

			const newArray = copy.map((elem, index) => {
				if (index === buttonIndex) {
					return { ...elem, state: true };
				}
				return elem;
			});

			return newArray;
		});
	}

	function reviewButtonEvent(buttonIndex) {
		setReviewElements([
			{ label: "Sem Filtro", state: false, hasStar: false },
			{ label: 1, state: false, hasStar: true },
			{ label: 2, state: false, hasStar: true },
			{ label: 3, state: false, hasStar: true },
			{ label: 4, state: false, hasStar: true },
			{ label: 5, state: false, hasStar: true },
		]);

		setReviewElements((currentReviewElem) => {
			const copy = [...currentReviewElem];

			const newArray = copy.map((elem, index) => {
				if (index === buttonIndex) {
					return { ...elem, state: true };
				}
				return elem;
			});

			return newArray;
		});
	}

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

	function applyFilter() {
		const capacityIndex = capacityElements.findIndex(
			(elem) => elem.state === true
		);

		const reviewIndex = reviewElements.findIndex(
			(elem) => elem.state === true
		);

		const confortsSelected = confortsElements.filter(
			(elem) => elem.state === true
		);
		const confortsSelectedNames = [];
		confortsSelected.forEach((elem) => {
			confortsSelectedNames.push(elem.value);
		});

		setFilterObj({
			...filterObj,
			capacity: capacityIndex,
			minPrice: minPrice,
			maxPrice: maxPrice,
			reviews: reviewIndex,
			conforts: confortsSelectedNames,
		});

		setFilterObj((currFilterObj) => {
			const filterHomes = homeList.filter((home) => {
				return (
					priceFilter(currFilterObj, home) &&
					capacityFilter(currFilterObj, home) &&
					reviewFilter(currFilterObj, home) &&
					confortFilter(currFilterObj, home)
				);
			});

			setFilterList(filterHomes);

			//Revisar
			setFilterList((currentFilterList) => {
				console.log(currentFilterList);

				return currentFilterList;
			});

			return currFilterObj;
		});
	}

	function capacityFilter(currFilterObj, home) {
		if (currFilterObj.capacity === 0) return true;
		if (currFilterObj.capacity === 5)
			return home.capacity > currFilterObj.capacity;
		return home.capacity === currFilterObj.capacity;
	}

	function priceFilter(currFilterObj, home) {
		if (
			home.price >= currFilterObj.minPrice &&
			home.price <= currFilterObj.maxPrice
		)
			return true;
		return false;
	}

	function reviewFilter(currFilterObj, home) {
		if (currFilterObj.reviews === 0) return true;
		return home.reviews === currFilterObj.reviews;
	}

	function confortFilter(currFilterObj, home) {
		let filterResult = true;

		for (let nameFilterObj of currFilterObj.conforts) {
			if (home.conforts[nameFilterObj]) {
				filterResult = true;
			} else {
				filterResult = false;
			}
		}

		return filterResult;
	}

	return (
		<FilterContext.Provider
			value={{
				onChangeEventSlider,
				capacityButtonEvent,
				priceRange,
				minPrice,
				maxPrice,
				capacityElements,
				reviewElements,
				confortsElements,
				reviewButtonEvent,
				confortButtonEvent,
				applyFilter,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
