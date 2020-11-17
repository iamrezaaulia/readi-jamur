import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/route';

export default function HeaderContainer({ children }) {
  return (
    <>
      <Header src='fungi'>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME}> readi jamur </Header.Logo>
          <Header.ButtonLink href={ROUTES.INSTAGRAM} target='_blank'> 
            <Header.Instagram /> 
          </Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
};
