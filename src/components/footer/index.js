import React from 'react';
import {
  Container,
  Frame,
  Logo,
  Born,
  SocialMedia,
  IconLink,
  Instagram
} from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>;
};

Footer.Frame = function FooterFrame({ children, ...restProps }) {
  return <Frame {...restProps}> {children} </Frame>;
}

Footer.Logo = function FooterLogo({ to, children, ...restProps }) {
  return <Logo to={to} {...restProps}> {children} </Logo>;
};

Footer.Born = function FooterBorn({ children, ...restProps }) {
  return <Born {...restProps}> {children} </Born>;
};

Footer.SocialMedia = function FooterSocialMedia({ children, ...restProps }) {
  return <SocialMedia {...restProps}> {children} </SocialMedia>;
};

Footer.IconLink = function FooterIconLink({ href, children, ...restProps }) {
  return <IconLink href={href} {...restProps}> {children} </IconLink>;
};

Footer.Instagram = function FooterInstagram({ href, children, ...restProps }) {
  return <Instagram {...restProps} />
};

