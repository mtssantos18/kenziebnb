import styled from "styled-components";

export const Container = styled.div`
	width: 280px;
	height: 420px;
	display: flex;
	flex-direction: column;
	outline: 1px solid var(--grey-3);
	border-radius: 20px;
	box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.3);
	position: relative;
	box-sizing: border-box;
	transition: 0.3s;

	&:hover {
		outline: 3px solid var(--blue-3);
		scale: 1.03;
	}

	button {
		width: 200px;
		height: 45px;
		position: absolute;
		bottom: -20px;
		right: 0;
		left: 0;
		margin: 0 auto;
	}

	div {
		padding: 4px 8px;

		h2 {
			max-width: 280px;
			font-family: "Inter";
			font-weight: 700;
			font-size: 16px;
			line-height: 19px;
			color: var(--grey-4);
			padding-top: 17px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		p {
			font-family: "Inter";
			font-weight: 400;
			font-size: 14px;
			line-height: 17px;
			display: flex;
			align-items: center;
			color: var(--grey-4);
		}
	}

	figure {
		display: flex;
		justify-content: center;

		img {
			width: 100%;
			height: 202px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-radius: 20px 20px 0px 0px;
		}

		.mySwiper,
		.containerImgs,
		.slider,
		.swiper-wrapper {
			border-radius: 20px 20px 0px 0px;
			padding: 0;
			width: 100%;
		}
	}
`;

export const ContainerEvaluation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 0.5rem;
	margin-top: 20px;
	overflow: hidden;

	svg {
		color: #ffe600;
		font-size: 2rem;
	}
`;

export const Price = styled.p`
	height: 35px;
	font-family: "Inter";
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: var(--black);
	padding-top: 16px;
	padding-left: 7px;

	span {
		font-family: "Inter";
		color: var(--black);
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
	}
`;
