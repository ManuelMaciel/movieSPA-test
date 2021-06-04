import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
  return (  
    <HeaderContainer>
      <Button href='#' >Movies</Button>
      <Heading>Movie Test</Heading>
      <Button href='#' >Login</Button>
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
  justify-content: space-around; 
  align-items: center;
  padding: 0px 10px;
  background-color: #f50537;
  z-index: 10;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #f1f1f1;
  text-align: left;
  font-weight: 700;
  font-size: 25px;
  &::after{
    content: '';
    width: 90px;
    height: 6px;
    background-color: #f1f1f1;
    display: block;
  }
  @media (max-width: 1000px){
    flex-direction: column;            
    align-items: flex-start;
  }
`;

const Button = styled.a`
  font-family: 'Bebas Neue', cursive;
  color: #f1f1f1;
  text-align: right;
  font-weight: 700;
  font-size: 25px;
  float: right;
  &:hover {
    color: #fff;
  }
`;
// colors
// https://brandcolors.net/b/audi

export default Header;