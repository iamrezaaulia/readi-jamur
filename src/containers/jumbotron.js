import React from 'react';
import jumbotronData from '../fixtures/jumbotron.json';
import { Jumbotron } from '../components';

export default function JumbotronContainer() {
	return (
		<Jumbotron.Container>
			{jumbotronData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.Pane>
						<Jumbotron.Title> {item.title} </Jumbotron.Title>
						<Jumbotron.SubTitle> {item.subtitle} </Jumbotron.SubTitle>
					</Jumbotron.Pane>
					<Jumbotron.PaneImage flex={item.flex}>
						<Jumbotron.Image src={item.image} alt={item.alt} />
					</Jumbotron.PaneImage>
				</Jumbotron>
			))}
		</Jumbotron.Container>
	);
};
