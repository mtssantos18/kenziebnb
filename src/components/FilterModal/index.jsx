import React, { useEffect, useState } from "react";
import {
	Container,
	FilterContainer,
	RadioContainer,
	CapacityContainer,
	CheckboxContainer,
	RangeInfoContainer,
	SelectButton,
} from "./style";
import {
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
} from "@chakra-ui/react";
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
		price: 663,
		capacity: 2,
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
	const [buttonSelectionState, setButtonSelectionState] = useState([
		{ label: "Sem Filtro", state: true },
		{ label: 1, state: false },
		{ label: 2, state: false },
		{ label: 3, state: false },
		{ label: 4, state: false },
		{ label: "5+", state: false },
	]);
	const [filterObj, setFilterObj] = useState({ capacity: 0 });

	function onChangeEventSlider(priceRange) {
		setMinPrice(priceRange[0]);
		setMaxPrice(priceRange[1]);
	}

	function radioSelectEvent(event) {
		console.log(event);
	}

	function capacityButtonEvent(buttonIndex) {
		setButtonSelectionState([
			{ label: "Sem Filtro", state: false },
			{ label: 1, state: false },
			{ label: 2, state: false },
			{ label: 3, state: false },
			{ label: 4, state: false },
			{ label: "5+", state: false },
		]);

		setButtonSelectionState((prevState) => {
			const copy = [...prevState];

			const newArray = copy.map((elem, index) => {
				if (index === buttonIndex) {
					return { ...elem, state: true };
				}
				return elem;
			});

			return newArray;
		});
		// console.log(buttonSelectionState);
	}

	function applyFilter() {
		// buttonSelectionState
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
				<RadioContainer>
					<div>
						<input
							type="radio"
							name="filter_review"
							onClick={() => radioSelectEvent(1)}
						/>
						<label>1</label>
					</div>
					<div>
						<input type="radio" name="filter_review" />
						<label>2</label>
					</div>
					<div>
						<input type="radio" name="filter_review" />
						<label>3</label>
					</div>
					<div>
						<input type="radio" name="filter_review" />
						<label>4</label>
					</div>
					<div>
						<input type="radio" name="filter_review" />
						<label>5</label>
					</div>
				</RadioContainer>
			</FilterContainer>
			<FilterContainer>
				<h3>Capacidade</h3>
				<CapacityContainer>
					{buttonSelectionState?.map((buttonInfo, index) => (
						<SelectButton
							key={index}
							isSelected={buttonInfo.state}
							onClick={() => capacityButtonEvent(index)}
						>
							{buttonInfo.label}
						</SelectButton>
					))}
				</CapacityContainer>
			</FilterContainer>
			<FilterContainer>
				<h3>Comodidade</h3>
				<CheckboxContainer>
					<div>
						<input type="checkbox" value="wi-fi" />
						<label>Wi-Fi</label>
					</div>
					<div>
						<input type="checkbox" value="parking" />
						<label>Estacionamento</label>
					</div>
					<div>
						<input type="checkbox" value="pool" />
						<label>Piscina</label>
					</div>
				</CheckboxContainer>
			</FilterContainer>
			<Button onClick={applyFilter}>Aplicar filtro</Button>
		</Container>
	);
}

export default FilterModal;

// aa
//bb
