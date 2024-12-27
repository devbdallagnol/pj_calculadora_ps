import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { DisplayContainer } from "./styles";

const Display = () => {
  return (
    <>
      <DisplayContainer>
        <h1>Calculadora PS</h1>
        <Input />
        <Input />
        <Button />
      </DisplayContainer>
    </>
  );
};

export default Display;
