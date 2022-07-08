import React from "react";
import {
	Container,
	FilterContainer,
	RadioContainer,
	CapacityContainer,
	CheckboxContainer,
	RangeInfoContainer,
} from "./style";
import {
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
} from "@chakra-ui/react";
import Button from "../Button";

function FilterModal() {
	function onChangeEvent(data) {
		console.log(data);
	}

	return (
		<Container>
			<FilterContainer>
				<h3>Faixa de Preço</h3>
				<RangeSlider
					aria-label={["min", "max"]}
					min={0}
					max={500}
					defaultValue={[10, 30]}
					onChange={onChangeEvent}
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
						<span>R$ 10</span>
					</div>
					<div>
						<p>Preço máximo</p>
						<span>R$ 10</span>
					</div>
				</RangeInfoContainer>
			</FilterContainer>
			<FilterContainer>
				<h3>Avaliaçao</h3>
				<RadioContainer>
					<div>
						<input type="radio" name="filter_review" />
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
					<button>Sem Filtro</button>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>4</button>
					<button>5+</button>
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
			<Button>Aplicar filtro</Button>
		</Container>
	);
}

export default FilterModal;

// aa
//bb
