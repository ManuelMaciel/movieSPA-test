import React from 'react';
import styled from '@emotion/styled';

//styled components
const ErrorMessage = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`;

const Error = ({message}) => {
  return (  
    <ErrorMessage>{message}</ErrorMessage>
  );
}

export default Error;