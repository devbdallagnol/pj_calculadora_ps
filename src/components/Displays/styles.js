import styled from "styled-components";

export const DisplayContainer = styled.div`  
  background-color: #1e1e1e;
  color: #ffffff;
  font-size: 2em;
  width: 80%;
  max-width: 600px;
  height: 70vh;
  padding: 20px 10px;
  margin: 50px auto;
  border-radius: 10px;
  border: 3px solid #c1c1c1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
    padding: 15px 5px;
    width: 95%;
  }
`;

export const H2 = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
  color: #ff0000;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;
