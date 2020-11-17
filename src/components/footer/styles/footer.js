import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  @media screen and (max-width: 1000px) {
    transition: 0.8s all ease;
  }
`;

export const Frame = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  padding: 0 24px;
`;

export const SocialMedia = styled.div`
  display: flex;
`;

export const Logo = styled(ReactRouterLink)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.2;
  color: black;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Born = styled.h2`
  color: #121212;
	font-size: 22px;
	font-weight: 500;
  font-family: 'Montserrat';
  line-height: 1.2;
	text-align: center;

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const IconLink = styled.a`
  white-space: nowrap;
  transition: all 0.5s ease-in-out;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;

export const Instagram = styled(FaInstagram)`
  color: black;
  font-size: 42px;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(0.9);
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;