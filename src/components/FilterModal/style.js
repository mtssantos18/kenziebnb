import styled from "styled-components";

export const ScreenBackground = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	background: rgba(0, 0, 0, 0.3);
	position: fixed;
	inset: 0;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 450px;
	display: flex;
	flex-direction: column;
	/* height: 400px; */
	/* outline: 1px solid red; */
	background: var(--white);
	gap: 35px;
	padding: 10px 20px;
	border-radius: 15px;
	box-shadow: 3px 2px 2px 0px rgba(0, 0, 0, 0.24);
	z-index: 100;

	& > button {
		align-self: center;
	}

	h3 {
		margin-bottom: 8px;
		color: var(--blue-2);
		font-weight: 600;
	}
`;

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RangeInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 50px;
	margin-top: 10px;

	div {
		display: flex;
		flex-direction: column;
		outline: 1px solid #adb5bd;
		box-shadow: 3px 2px 2px 0px rgba(0, 0, 0, 0.24);
		border-radius: 5px;
		padding: 5px 7px;

		p {
			font-size: 15px;
		}
		span {
			color: var(--grey-4);
		}
	}
`;

export const SelectButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 12px;
	flex-wrap: wrap;
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

export const SelectButton = styled.button`
	outline: 1px solid #adb5bd;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 3px 2px 2px 0px rgba(0, 0, 0, 0.24);
	gap: 5px;
	border-radius: 15px;
	padding: 8px;
	min-width: 50px;
	height: 30px;
	font-size: 15px;
	color: ${(props) => (props.isSelected ? "white" : "black")};
	background: ${(props) => (props.isSelected ? "#023E8A" : "none")};
`;
