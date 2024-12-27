import React from "react";
import { InputContainer } from "./styles";


const Input = ({ placeholder, value, onChange }) => {
  return (
    <InputContainer
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
