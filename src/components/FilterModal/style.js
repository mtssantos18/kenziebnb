import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	/* height: 400px; */
	outline: 1px solid red;
	gap: 20px;
	padding: 10px;
`;

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RangeInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;

	div {
		display: flex;
		flex-direction: column;
		outline: 1px solid black;
		border-radius: 5px;
		padding: 5px 7px;
	}
`;

export const SelectButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
`;

export const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	flex-wrap: wrap;

	div {
		display: flex;
		gap: 5px;
	}
`;

export const SelectButtonReview = styled.button`
	outline: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	border-radius: 15px;
	padding: 5px;
	min-width: 50px;
	background: ${(props) => (props.isSelected ? "blue" : "none")};
`;

export const SelectButtonCapacity = styled.button`
	outline: 1px solid black;
	border-radius: 15px;
	padding: 5px;
	min-width: 50px;
	background: ${(props) => (props.isSelected ? "blue" : "none")};
`;
