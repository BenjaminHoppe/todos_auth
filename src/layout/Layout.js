import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styled from 'styled-components';


const MainWrapper = style.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
`;

const Layout = ({children}) => (
  <>
    <Navbar/>
    <MainWrapper>{children}</MainWrapper>
  </>
);

export default Layout;
