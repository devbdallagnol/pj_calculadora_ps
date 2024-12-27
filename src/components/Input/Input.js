import React from "react";
import { InputContainer } from "./styles";
import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputContainer
      type="text"
      placeholder="Digite um número"
      onChange={(e) => setInputValue(e.target.value)}
    >
      {inputValue}
    </InputContainer>
  );
};

export default Input;
