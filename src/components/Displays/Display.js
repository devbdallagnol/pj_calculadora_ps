import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { DisplayContainer } from "./styles";

const Display = () => {
  const [salary, setSalary] = useState("");
  const [inss, setInss] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = () => {
    const salaryNumber = parseFloat(salary);
    const inssNumber = parseFloat(inss);

    if (!isNaN(salaryNumber) && !isNaN(inssNumber)) {
      setResult(salaryNumber - inssNumber);
    } else {
      setResult("Valores inválidos");
    }
  };

  return (
    <>
      <DisplayContainer>
        <h1>Calculadora PS</h1>
        <Input placeholder="Salário" value={salary} onChange={(e) => setSalary(e.target.value)} />
        <Input placeholder="INSS" value={inss} onChange={(e) => setInss(e.target.value)} />
        <Button onClick={handleCalculation}>Calcular</Button>
        {result !== null && <h2>Resultado: {result}</h2>}
        {console.log(result)}
      </DisplayContainer>
    </>
  );
};

export default Display;

