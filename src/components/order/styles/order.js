import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
	justify-content: center;
	height: 100%;
	margin-top: 32px;
	flex-wrap: wrap;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Text = styled.h2`
	padding-bottom: 10px;
	color: #ffffff;
	font-size: 22px;
	font-weight: 500;
  font-family: 'Montserrat';
  line-height: 1.2;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 18px;
		line-height: 22px;
	}
`;

export const Button = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 300px;
	width: 100%;
	height: 60px;
	background: #F8CF70;
	color: #121212;
	padding: 0 24px;
	font-size: 24px;
	font-weight: 500;
  font-family: 'Montserrat';
  line-height: 1.1;
	border: 0;
  border-radius: 2px;
	box-sizing: border-box;
	outline: none;
  text-decoration: none;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.024),
  0 6.7px 5.3px rgba(0, 0, 0, 0.038),
  0 12.5px 10px rgba(0, 0, 0, 0.05),
  0 22.3px 17.9px rgba(0, 0, 0, 0.052),
  0 41.8px 33.4px rgba(0, 0, 0, 0.068),
  0 100px 80px rgba(0, 0, 0, 0.072);

	&:hover {
		background-color: #F8D88D;
		transition: all 0.2s ease-in-out;
		transform: scale(0.9);
	}

	@media (max-width: 1000px) {
		height: 60px;
		max-width: 200px;
		margin-top: 20px;
		font-size: 20px;
	}
`;

export const Break = styled.div`
  flex-basis: 100%;
	height: 0;
`;