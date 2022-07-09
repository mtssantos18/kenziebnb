import React, { useContext, useEffect, useState } from "react";
import {
	Container,
	FilterContainer,
	CheckboxContainer,
	RangeInfoContainer,
	SelectButtonContainer,
	SelectButton,
	ScreenBackground,
} from "./style";
import {
	RangeSlider,
	RangeSliderTrack,
	RangeSliderFilledTrack,
	RangeSliderThumb,
	Box,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { MdGraphicEq } from "react-icons/md";
import Button from "../Button";
import { FilterContext } from "../../providers/Filter/Filter";

function FilterModal() {
	const {
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
	} = useContext(FilterContext);

	return (
		<ScreenBackground>
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
						<RangeSliderTrack bg="blue.100">
							<RangeSliderFilledTrack bg="#023E8A" />
						</RangeSliderTrack>
						<RangeSliderThumb
							boxSize={6}
							index={0}
							borderWidth="1px"
							borderColor="#ADB5BD"
						>
							<Box color="tomato" as={MdGraphicEq} />
						</RangeSliderThumb>
						<RangeSliderThumb
							boxSize={6}
							index={1}
							borderWidth="1px"
							borderColor="#ADB5BD"
						>
							<Box color="tomato" as={MdGraphicEq} />
						</RangeSliderThumb>
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
							<SelectButton
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
							</SelectButton>
						))}
					</SelectButtonContainer>
				</FilterContainer>
				<FilterContainer>
					<h3>Capacidade</h3>
					<SelectButtonContainer>
						{capacityElements?.map((buttonInfo, index) => (
							<SelectButton
								key={index}
								isSelected={buttonInfo.state}
								onClick={() => capacityButtonEvent(index)}
							>
								{buttonInfo.label}
							</SelectButton>
						))}
					</SelectButtonContainer>
				</FilterContainer>
				<FilterContainer>
					<h3>Comodidade</h3>
					<CheckboxContainer>
						{confortsElements?.map((buttonInfo, index) => (
							<div key={index}>
								<input
									type="checkbox"
									value={buttonInfo.value}
									onChange={() => confortButtonEvent(index)}
								/>
								<label>{buttonInfo.label}</label>
							</div>
						))}
					</CheckboxContainer>
				</FilterContainer>
				<Button onClick={applyFilter}>Aplicar filtro</Button>
			</Container>
		</ScreenBackground>
	);
}

export default FilterModal;

// aa
//bb
