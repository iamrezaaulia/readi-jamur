import styled from 'styled-components/macro';

export const Item = styled.div`
	display: flex;
	padding: 50px 5%;
	border-bottom: 5px solid #ededed;
	color: #121212;
	overflow: hidden;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction };
	align-items: center;
	justify-content: space-between;
	max-width: 1100px;
	margin: auto;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Container = styled.div`
	@media (max-width: 1000px) {
		${Item}:last-of-type h2 {
			margin-bottom: 50px;
		}
	}
`;

export const Pane = styled.div`
	padding: 0 40px;
	width: 50%;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`;

export const PaneImage = styled.div`
	padding: 0 40px;
	width: 50%;
	display: flex;
	justify-content: ${({ flex }) => flex };

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		display: flex;
		justify-content: center;
	}
`;

export const Title = styled.h1`
	color: #121212;
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const SubTitle = styled.h2`
	color: #404852;
	font-size: 26px;
	font-family: 'Montserrat';
	font-weight: normal;
	line-height: normal;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

export const Image = styled.img`
	max-width: 400px;
	width: 100%;
	height: auto;
`;
