import React from 'react';
import { 
  Background,
  Inner,
  Container,
  Logo,
  ButtonLink,
  Instagram
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
  return (
    <Inner>
      {bg ? <Background {...restProps}> {children} </Background> : children}
    </Inner>
  )
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
};

Header.Logo = function HeaderLogo({ children, ...restProps}) {
  return <Logo {...restProps}> {children} </Logo>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}> {children} </ButtonLink>;
};

Header.Instagram = function HeaderInstagram({...restProps }) {
  return <Instagram {...restProps} />
};



