import React from 'react';
import {
  Container,
  Inner,
  Title,
  Item,
  Text
} from './styles/info';

export default function Info({ children, ...restProps }) {
  return (
    <Container>
      <Inner {...restProps}> {children} </Inner>
    </Container>
  );
};

Info.Title = function InfoTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

Info.Item = function InfoItem({ children, ...restProps }) {
  return <Item {...restProps}> {children} </Item>;
};

Info.Text = function InfoText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>;
};