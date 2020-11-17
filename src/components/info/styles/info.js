import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
	border-bottom: 5px solid #ededed;
`;

export const Inner = styled.div`
  display: flex;
	padding: 70px 45px;
	flex-direction: column;
	max-width: 1100px;
	margin: auto;
`;

export const Item = styled.div`
  background: #F8CF70;
	margin-bottom: 10px;
	max-width: 100%;
	border: 0;
	box-sizing: border-box;
	border-radius: 2px;
`;

export const Title = styled.h1`
  font-size: 50px;
	line-height: 1.1;
	margin-top: 0;
	color: #121212;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const Text = styled.div`
  color: #121212;
	font-size: 26px;
	font-family: 'Montserrat';
	font-weight: 400;
	line-height: 1.1;
	padding: 0.8em 1.2em;
  text-align: center;

  @media (max-width: 600px) {
		font-size: 16px;
	}
`;