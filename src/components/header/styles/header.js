import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa'

export const Inner = styled.div``;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 108px;
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : `../images/misc/jamur.jpg`}) center bottom / cover no-repeat;

  @media (max-width: 1000px) {
    ${({ dontShowOnSmallView }) => dontShowOnSmallView && `background: none;`};
    padding: 0 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 24px 0;
  width: 100%;

  a {
    display: flex;
  }

  @media (max-width: 768px) {
    margin: 0 24px;
  }
`;

export const Logo = styled(ReactRouterLink)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.2;
  color: #ffffff;
  text-decoration: none;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Instagram = styled(FaInstagram)`
  color: #ffffff;
  font-size: 42px;
  transition: 0.2s ease-in-out;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  outline: none;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;