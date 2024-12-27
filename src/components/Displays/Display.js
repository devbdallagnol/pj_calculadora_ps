import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { DisplayContainer } from "./styles";

const Display = () => {
  const [salary, setSalary] = useState("");
  const [inss, setInss] = useState("");
  const [result, setResult] = useState(null);

  const handleSalaryChange = (e) => {
    const salaryValue = e.target.value;
    setSalary(salaryValue);

    const salaryNumber = parseFloat(salaryValue);
    let inssNumber = 0;

    if (!isNaN(salaryNumber)) {
      if (salaryNumber <= 1412.00) {
        inssNumber = salaryNumber * 0.075;
      } else if (salaryNumber <= 2666.68) {
        inssNumber = salaryNumber * 0.09;
      } else if (salaryNumber <= 4000.03) {
        inssNumber = salaryNumber * 0.12;
      } else if (salaryNumber <= 7786.02) {
        inssNumber = salaryNumber * 0.14;
      } else if (salaryNumber > 7786.02) {
        setInss(null);
        setResult("Limite de INSS atingido");
        return;
      }

      setInss(inssNumber.toFixed(2));
    }
  };

  const handleInssChange = (e) => {
    setInss(e.target.value);
  };

  const handleCalculation = () => {
    if (inss === null) {
      setResult("Limite de INSS atingido");
      return;
    }

    const salaryNumber = parseFloat(salary);
    const inssNumber = parseFloat(inss);

    if (!isNaN(salaryNumber) && !isNaN(inssNumber)) {
      if (inssNumber > 0) {
        setResult(((salaryNumber - inssNumber) * 0.3).toFixed(2));
      }
    } else {
      setResult("Valores inválidos");
    }
  };

  return (
    <>
      <DisplayContainer>
        <h1>Calculadora PS</h1>
        <Input
          placeholder="Salário"
          value={salary}
          onChange={handleSalaryChange}
        />
        <Input
          placeholder="INSS"
          value={inss !== null ? inss : ""}
          onChange={handleInssChange}
        />
        <Button onClick={handleCalculation}>Calcular</Button>
        {result !== null && (
          <h3>
            Resultado: <span style={{ color: inss === null ? 'red' : 'green' }}>{result}</span>
          </h3>
        )}
      </DisplayContainer>
    </>
  );
};

export default Display;
