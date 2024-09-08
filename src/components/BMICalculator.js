import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './BMICalculator.css';

const InputField = ({ label, value, onChange, id }) => (
  <div className="input-field">
    <label htmlFor={id}>{label}</label>
    <div className="input-wrapper">
      <input
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        min="0"
        max="999"
      />
      {value && (
        <button className="clear-input" onClick={() => onChange({ target: { value: '' } })}>
          ×
        </button>
      )}
    </div>
  </div>
);

const BMICalculator = () => {
  const [height, setHeight] = useState('170');
  const [weight, setWeight] = useState('70');
  const [age, setAge] = useState('30');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [bmi, setBMI] = useState(null);
  const [calories, setCalories] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const calculateBMI = () => {
    if (height && weight) {
      const bmiValue = Number(weight) / ((Number(height) / 100) * (Number(height) / 100));
      setBMI(bmiValue.toFixed(1));
    } else {
      setBMI(null);
    }
  };
  
  const calculateCalories = () => {
    if (height && weight && age) {
      let bmr;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age));
      } else {
        bmr = 447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age));
      }
  
      const activityFactors = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9
      };
  
      setCalories(Math.round(bmr * activityFactors[activityLevel]));
    } else {
      setCalories(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
    calculateCalories();
    setShowResults(true);
  };

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= 999)) {
      setter(value);
    }
  };

  useEffect(() => {
    if (showResults) {
      const resultsElement = document.querySelector('.results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [showResults]);

  return (
    <div className="bmi-calculator">
      <h2>Calcolatore BMI e Fabbisogno Calorico</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Altezza (cm)" value={height} onChange={handleInputChange(setHeight)} id="height" />
        <InputField label="Peso (kg)" value={weight} onChange={handleInputChange(setWeight)} id="weight" />
        <InputField label="Età" value={age} onChange={handleInputChange(setAge)} id="age" />
        
        <div className="input-field">
          <label>Genere</label>
          <div className="radio-group">
            <input
              type="radio"
              id="male"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Maschio</label>
            <input
              type="radio"
              id="female"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Femmina</label>
          </div>
        </div>
        
        <div className="input-field">
          <label htmlFor="activity">Livello di Attività</label>
          <select
            id="activity"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="sedentary">Sedentario</option>
            <option value="light">Leggera attività</option>
            <option value="moderate">Moderata attività</option>
            <option value="active">Attiva</option>
            <option value="veryActive">Molto attiva</option>
          </select>
        </div>
        
        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Calcola
        </motion.button>
      </form>
      
      <AnimatePresence>
        {showResults && (
          <motion.div
            className="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="results-summary">
              <div className="result-item">
                <span className="result-label">BMI:</span>
                <span className="result-value">{bmi || 'N/A'}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Fabbisogno calorico:</span>
                <span className="result-value">{calories ? `${calories} kcal` : 'N/A'}</span>
              </div>
            </div>
            <div className="results-visuals">
              <div className="bmi-visualizer">
                <Canvas>
                  <BMIVisualizer bmi={bmi} />
                </Canvas>
              </div>
              <div className="calorie-chart">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={generateCalorieData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="calories" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <motion.a
              href="https://docs.google.com/forms/d/1DNV4ILY1yXnH-Vbkdhk5ZdRSRA0RkFT4sX8rT8HbN9E/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ottieni un piano personalizzato
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BMIVisualizer = ({ bmi }) => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const getColor = () => {
    if (bmi < 18.5) return 'blue';
    if (bmi < 25) return 'green';
    if (bmi < 30) return 'yellow';
    return 'red';
  };

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={getColor()} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </mesh>
  );
};

const generateCalorieData = () => {
  const data = [];
  for (let i = -500; i <= 500; i += 100) {
    data.push({
      name: i < 0 ? `${i}` : `+${i}`,
      calories: 2000 + i,
    });
  }
  return data;
};

export default BMICalculator;