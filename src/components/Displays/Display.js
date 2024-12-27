import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const DisplayContainer = styled.div`  
  background-color: #1e1e1e;
  color: #ffffff;
  font-size: 2em;
  height: 70vh;
  padding: 10px;
  margin: 50px 0;
  border-radius: 10px;
  border: 3px solid #c1c1c1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #333;
  }
`;

const Display = () => {
  return (
    <DisplayContainer>
      <Button />
    </DisplayContainer>
  );
}

export default Display;
