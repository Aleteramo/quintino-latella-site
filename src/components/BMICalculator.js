import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './BMICalculator.css';

const BMICalculator = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [bmi, setBMI] = useState(null);
  const [calories, setCalories] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    calculateBMI();
    calculateCalories();
  }, [height, weight, age, gender, activityLevel]);

  const calculateBMI = () => {
    const bmiValue = weight / ((height / 100) * (height / 100));
    setBMI(bmiValue.toFixed(1));
  };

  const calculateCalories = () => {
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    setCalories(Math.round(bmr * activityFactors[activityLevel]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="bmi-calculator">
      <h2>Calcolatore BMI e Fabbisogno Calorico</h2>
      <div className="calculator-container">
        <form onSubmit={handleSubmit}>
          <motion.div className="input-group" whileHover={{ scale: 1.05 }}>
            <label htmlFor="height">Altezza (cm)</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </motion.div>
          <motion.div className="input-group" whileHover={{ scale: 1.05 }}>
            <label htmlFor="weight">Peso (kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </motion.div>
          <motion.div className="input-group" whileHover={{ scale: 1.05 }}>
            <label htmlFor="age">Età</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </motion.div>
          <motion.div className="input-group" whileHover={{ scale: 1.05 }}>
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
          </motion.div>
          <motion.div className="input-group" whileHover={{ scale: 1.05 }}>
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
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
              <h3>Risultati</h3>
              <p>Il tuo BMI è: {bmi}</p>
              <p>Il tuo fabbisogno calorico giornaliero è: {calories} kcal</p>
              <Canvas>
                <BMIVisualizer bmi={bmi} />
              </Canvas>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={generateCalorieData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="calories" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.location.href = 'https://docs.google.com/forms/d/1DNV4ILY1yXnH-Vbkdhk5ZdRSRA0RkFT4sX8rT8HbN9E/edit'}
              >
                Ottieni un piano personalizzato
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
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
    <mesh ref={meshRef}>
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