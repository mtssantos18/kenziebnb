import React, { useEffect, useState } from "react";
import {
	Container,
	FilterContainer,
	CheckboxContainer,
	RangeInfoContainer,
	SelectButtonCapacity,
	SelectButtonReview,
	SelectButtonContainer,
} from "./style";
import {
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import Button from "../Button";

const homes = [
	{
		title: "Cabana na selva da Jaguatirica",
		owner: "ownerId",
		description: `Esta nova cabana inserida no meio da Fazenda Ressaca é para quem aprecia design e procura paz, tranqüilidade, conforto e um profundo contato com a natureza.
          Elegante, discreta, pequena e bela, esta localizada dentro de uma propriedade com mais de 700 mil mts de área verde preservada, a poucos minutos das praias mais lindas de Ubatuba.
          Fazemos a limpeza todos os dias e deixamos todos os ingredientes para que vocês possam preparar seu cafe da manhã.
          Ficamos 100% a disposição =)`,
		address: {
			street: "Rua da Garoupa",
			city: "Ubatuba",
			number: 1700,
		},
		conforts: {
			pool: false,
			wifi: true,
			pet: false,
			parking: true,
			airConditioning: true,
		},
		reviews: 4,
		price: 835,
		capacity: 2,
		id: 0,
		imgs: [
			"https://a0.muscache.com/im/pictures/miso/Hosting-53540620/original/e0cfe1e8-9757-4e4a-9ed4-774f52d497cb.jpeg?im_w=960",
			"https://a0.muscache.com/im/pictures/miso/Hosting-53540620/original/1917f0e2-b90e-4b26-a444-a9f2dc2503e6.jpeg?im_w=1200",
			"https://a0.muscache.com/im/pictures/miso/Hosting-53540620/original/d990fbdc-114d-441c-bbde-d714c341a2e0.jpeg?im_w=1200",
			"https://a0.muscache.com/im/pictures/miso/Hosting-53540620/original/97cbab2d-82f7-4d29-bf7b-086d65eab707.jpeg?im_w=1200",
			"https://a0.muscache.com/im/pictures/miso/Hosting-53540620/original/a71bc0db-60cd-471f-9cd4-24f04be0d08f.jpeg?im_w=1200",
		],
	},
	{
		title: "Chalé Baguari c/banheira hidro",
		owner: "ownerId",
		description: `Chalé aconchegante com vista perfeita na Praia Vermelha do Centro; cercado pela Mata Atlântica.
      Várias espécies de pássaros, beija-flor, esquilo e lindas borboletas, dividem esses espaço conosco.
      Nosso chalé fica próximo ao bairro do Itaguá, onde se encontram supermercados, farmácias, padarias, lojas e restaurantes.`,
		address: {
			street: "Ac. Franklin de Tolêdo Piza",
			city: "Ubatuba",
			number: 1391,
		},
		conforts: {
			pool: false,
			wifi: true,
			pet: true,
			parking: true,
			airConditioning: true,
		},
		reviews: 5,
		price: 300,
		capacity: 9,
		id: 1,
		imgs: [
			"https://a0.muscache.com/im/pictures/miso/Hosting-24644722/original/2aa59f85-def4-45cd-b0f8-be61eb48dde1.jpeg?im_w=1200",
			"https://a0.muscache.com/im/pictures/f5664aec-f09c-488f-a9c8-4499d4463ee7.jpg?im_w=1200",
			"https://a0.muscache.com/im/pictures/miso/Hosting-24644722/original/bbc6bc38-6ec7-43db-bb7b-bbee08ba32b2.jpeg?im_w=1200",
			"https://a0.muscache.com/im/pictures/miso/Hosting-24644722/original/ee2135fe-4e60-4148-aab3-96574b859bc5.jpeg?im_w=1200",
			"https://a0.muscache.com/im/pictures/miso/Hosting-24644722/original/86c77d1c-102b-4505-af53-39a10f703ee9.jpeg?im_w=1200",
		],
	},
];

function FilterModal() {
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

	function radioSelectEvent(event) {
		console.log(event);
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
		// console.log(capacityElements);
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
		// console.log(capacityElements);
	}

	function applyFilter() {
		const capacityIndex = capacityElements.findIndex(
			(elem, index) => elem.state === true
		);

		const reviewIndex = reviewElements.findIndex(
			(elem, index) => elem.state === true
		);

		let filterHomes = [];

		setFilterObj({
			...filterObj,
			capacity: capacityIndex,
			minPrice: minPrice,
			maxPrice: maxPrice,
			reviews: reviewIndex,
		});

		setFilterObj((currFilterObj) => {
			filterHomes = homes.filter((home) => {
				return (
					priceFilter(currFilterObj, home) &&
					capacityFilter(currFilterObj, home) &&
					reviewFilter(currFilterObj, home)
				);
			});

			console.log(filterHomes);
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

	return (
		<Container>
			<FilterContainer>
				<h3>Faixa de Preço</h3>
				<RangeSlider
					aria-label={["min", "max"]}
					min={priceRange[0]}
					max={priceRange[1]}
					defaultValue={priceRange}
					onChange={onChangeEventSlider}
				>
					<RangeSliderTrack>
						<RangeSliderFilledTrack />
					</RangeSliderTrack>
					<RangeSliderThumb index={0} />
					<RangeSliderThumb index={1} />
				</RangeSlider>
				<RangeInfoContainer>
					<div>
						<p>Preço mínimo</p>
						<span>{`R$ ${minPrice}`}</span>
					</div>
					<div>
						<p>Preço máximo</p>
						<span>{`R$ ${maxPrice}`}</span>
					</div>
				</RangeInfoContainer>
			</FilterContainer>
			<FilterContainer>
				<h3>Avaliaçao</h3>
				<SelectButtonContainer>
					{reviewElements?.map((buttonInfo, index) => (
						<SelectButtonReview
							key={index}
							isSelected={buttonInfo.state}
							onClick={() => reviewButtonEvent(index)}
						>
							<p>{buttonInfo.label}</p>
							{buttonInfo.hasStar && (
								<AiFillStar
									size={17}
									color="rgb(228, 228, 15)"
								/>
							)}
						</SelectButtonReview>
					))}
				</SelectButtonContainer>
			</FilterContainer>
			<FilterContainer>
				<h3>Capacidade</h3>
				<SelectButtonContainer>
					{capacityElements?.map((buttonInfo, index) => (
						<SelectButtonCapacity
							key={index}
							isSelected={buttonInfo.state}
							onClick={() => capacityButtonEvent(index)}
						>
							{buttonInfo.label}
						</SelectButtonCapacity>
					))}
				</SelectButtonContainer>
			</FilterContainer>
			<FilterContainer>
				<h3>Comodidade</h3>
				<CheckboxContainer>
					{confortsElements?.map((buttonInfo, index) => (
						<div key={index}>
							<input type="checkbox" value={buttonInfo.value} />
							<label>{buttonInfo.label}</label>
						</div>
					))}
				</CheckboxContainer>
			</FilterContainer>
			<Button onClick={applyFilter}>Aplicar filtro</Button>
		</Container>
	);
}

export default FilterModal;

// aa
//bb
