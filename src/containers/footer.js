import React from 'react';
import { Footer } from '../components';

export default function FooterContainer() {
  return (
    <>
      <Footer>
        <Footer.Frame>
          <Footer.Born>
            <b>readi jamur</b> © {new Date().getFullYear()} | Made with ❤️ using React Hooks 16.8
          </Footer.Born>
        </Footer.Frame>
      </Footer> 
    </> 
  );
};
