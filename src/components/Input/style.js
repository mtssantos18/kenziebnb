import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 70px;
	padding: 10px;

	label {
		color: ${(props) => (props.error ? "red" : "#0077B6")};
		font-weight: 400;
		font-size: 13px;
		line-height: 0px;
		margin-bottom: 11px;
	}

	& > span {
		color: red;
		align-self: center;
	}
`;

export const InputContainer = styled.div`
	height: 39px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: #e9ecef;
	padding: 5px 13.0293px;
	border-radius: 3.20867px;
	margin-bottom: 2px;
	outline: ${(props) => (props.error ? "1px solid red" : "none")};

	&:focus-within {
		outline: ${(props) =>
			props.error ? "1px solid #ff0000" : "0.9772px solid #f8f9fa"};
	}

	input {
		width: 100%;
		background: none;
		color: #495057;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;

		&::placeholder {
			font-weight: 400;
			font-size: 14px;
			line-height: 21px;
			/* color: ${(props) =>
				props.events === "none" ? "white" : "#F8F9FA"}; */
		}
	}

	.EyeIcon {
		background: none;
		color: #868e96;
		&:hover {
			color: #0077b6;
		}
	}
`;
