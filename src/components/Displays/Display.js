import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { DisplayContainer, h2 } from "./styles";

const Display = () => {
  const [result, setResult] = useState(null);
  const salaryRef = useRef("");
  const inssRef = useRef("");

  const handleCalculation = () => {
    const salaryNumber = parseFloat(salaryRef.current.value);
    const inssNumber = parseFloat(inssRef.current.value);

    if (!isNaN(salaryNumber) && !isNaN(inssNumber)) {
      setResult((salaryNumber - inssNumber) * 0.3);
    } else {
      setResult("Valores inválidos");
    }
  };

  return (
    <>
      <DisplayContainer>
        <h1>Calculadora PS</h1>
        <Input ref={salaryRef} placeholder="Salário" />
        <Input ref={inssRef} placeholder="INSS" />
        <Button onClick={handleCalculation}>Calcular</Button>
        {result !== null && <h2>Resultado: <span style={{ color: "green" }}>R$ {result.toFixed(2)}</span></h2>}
      </DisplayContainer>
    </>
  );
};

export default Display;
