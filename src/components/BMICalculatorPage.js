import React from 'react';
import BMICalculator from './BMICalculator';

const BMICalculatorPage = () => {
  return (
    <div className="bmi-calculator-page">
      <h1>Calcolatore BMI e Fabbisogno Calorico</h1>
      <BMICalculator />
    </div>
  );
};

export default BMICalculatorPage;