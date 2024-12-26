import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background-color: #007BFF;
  color: #ffffff;
  font-size: 1.2em;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out, transform 0.2s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

const Button = () => {
  return (
    <ButtonContainer>
      <span>Calcular</span>
    </ButtonContainer>
  );
}

export default Button;
