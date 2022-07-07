import styled from "styled-components";

export const ScreenContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--grey-1);

	@media (min-width: 800px) {
		padding: 5px;
	}
`;

export const LoginModal = styled.div`
	width: 100%;
	max-width: 980px;
	display: flex;
	flex-direction: column;
	height: 650px;

	img {
		width: 100%;
		height: auto;
		position: absolute;
		top: -100px;

		@media (min-width: 800px) {
			width: 650px;
			position: static;
		}
	}

	@media (min-width: 800px) {
		box-shadow: 3px 4px 16px 4px rgba(0, 0, 0, 0.11);
		position: static;
		flex-direction: row;
	}
`;

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
`;
