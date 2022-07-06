import styled from "styled-components";

export const ScreenContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	padding: 5px;
`;

export const Container = styled.div`
	width: 100%;
	/* max-width: 300px; */
	padding: 10px;
	margin: 10px;
	height: 600px;
	display: flex;
	/* outline: 1px solid red; */
	flex-direction: column;
	z-index: 1;

	h1 {
		color: white;
		margin-top: 40px;
		margin-bottom: 60px;
	}

	h1,
	button {
		align-self: center;
	}

	@media (min-width: 400px) {
		max-width: 400px;

		h1 {
			color: #0077b6;
		}
	}
`;

export const LoginFormStyle = styled.form`
	background: white;
	height: 280px;
	padding: 35px 5px 0px 5px;
	box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	position: relative;
	gap: 30px;

	& > button {
		position: absolute;
		bottom: -10px;
		width: 100%;

		@media (min-width: 400px) {
			max-width: 350px;
			position: static;
			margin-top: 40px;
		}
	}

	@media (min-width: 400px) {
		box-shadow: none;
		position: none;
		height: 350px;
	}
`;

export const SignupContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 40px;
	color: #4d5b63;
	font-size: 14px;
	margin-top: 40px;

	button {
		color: #4d5b63;
		background: none;
		font-size: 14px;

		span {
			text-decoration: 1.2px solid underline;
			text-decoration-color: #adb5bd;
			transition: 0.3s;
		}
		span:hover {
			text-decoration-color: #495057;
		}
	}

	@media (min-width: 400px) {
		margin-top: 0px;
	}
`;
