import React from 'react';
import * as ROUTES from '../constants/route';
import { Feature, Order } from '../components';
import { 
  FooterContainer, 
  HeaderContainer, 
  InfoContainer, 
  JumbotronContainer, 
} from '../containers';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Hidup Sehat Dengan Jamur
          </Feature.Title>
          <Feature.SubTitle>
            Banyak Manfaat, Organik, Lebih Murah.
          </Feature.SubTitle>

          <Order>
            <Order.Text>
              Mau Jamur Tiram Segar, Silahkan Hubungi Nomor Dibawah Ini.
            </Order.Text>
            <Order.Break />
            <Order.Button href={ROUTES.MESSAGE} target='_blank'>
              Pesan Sekarang
            </Order.Button>
          </Order>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <InfoContainer />
      <FooterContainer />
    </>
  );
};
