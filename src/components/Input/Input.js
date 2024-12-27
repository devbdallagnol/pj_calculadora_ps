import React, { forwardRef } from "react";
import { InputContainer } from "./styles";

const Input = forwardRef(({ placeholder }, ref) => {
  return (
    <InputContainer
      type="number"
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Input;
