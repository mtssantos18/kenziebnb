import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px 0px 5px 20px;
	/* height: 100%; */
	height: 700px;

	@media (min-width: 650px) {
		padding: 10px 20px 5px 20px;
		height: auto;
	}
`;

export const ContentContainer = styled.div`
	width: 100%;
	max-width: 950px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media (min-width: 650px) {
		padding: 10px 20px 5px 20px;
		height: auto;
		margin-top: 20px;
	}
`;

export const List = styled.ul`
	display: flex;
	height: 480px;
	flex-direction: row;
	overflow: scroll;
	scrollbar-width: none;
	row-gap: 45px;
	column-gap: 20px;
	padding: 20px 0px 50px 5px;

	.no_filter_message {
		/* text-align: center; */
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		font-size: 24px;
		gap: 10px;
		color: var(--grey-4);

		h1 {
			text-align: center;
		}

		@media (min-width: 650px) {
		}
	}

	@media (min-width: 650px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		max-width: 950px;
		height: auto;
		flex-wrap: wrap;
		overflow: hidden;
	}
`;

export const FilterButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	margin-left: 20px;
	gap: 10px;
	background: var(--grey-3);
	border-radius: 15px;
	padding: 5px 10px;
	font-size: 18px;
	color: white;

	&:hover {
		background: var(--grey-4);
	}
`;
