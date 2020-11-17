import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 45px;

  @media (max-width: 430px) {
    padding: 125px 45px;
  }

  @media (max-width: 380px) {
    padding: 45px 45px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  max-width: 768px;
  margin: auto;
  font-size: 56px;
	line-height: 1.1;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: #ffffff;
  margin: 16px auto;
  font-size: 32px;
  font-weight: 500;
  font-family: 'Montserrat';
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;