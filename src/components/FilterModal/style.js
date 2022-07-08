import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	height: 400px;
	outline: 1px solid red;
	gap: 20px;
	padding: 10px;
`;

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;

	input {
		outline: 1px solid black;
	}
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

export const RadioContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;

	div {
		display: flex;
		gap: 5px;
	}
`;

export const CapacityContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;

	button {
		outline: 1px solid black;
		border-radius: 15px;
		padding: 5px;
		min-width: 50px;
	}
`;

export const CheckboxContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	flex-wrap: wrap;

	div {
		display: flex;
		gap: 5px;
	}
`;
