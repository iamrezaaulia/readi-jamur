import React from 'react'
import { 
  Container, 
  Text,
  Button,
  Break
} from './styles/order';

export default function Order({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Order.Text = function OrderText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Order.Button = function OrderButton({ children, ...restProps }) {
	return (
		<Button {...restProps}>
			{children}
		</Button>
	);
};

Order.Break = function OrderBreak({ children, ...restProps }) {
	return <Break {...restProps}>{children}</Break>;
};