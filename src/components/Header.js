import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
  return (  
    <HeaderContainer>
      <p>Hola Mundo</p>
    </HeaderContainer>
  );
}

// Styled Components
const HeaderContainer = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: #f50537;
  z-index: 10;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
`;

// colors
// https://brandcolors.net/b/audi

export default Header;