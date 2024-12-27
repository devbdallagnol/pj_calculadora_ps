import React from "react";
import { ButtonContainer, h2 } from "./styles";

const Button = ({ onClick, children }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
