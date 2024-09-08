import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Questionnaire.css';

const questions = [
  {
    id: 'goal',
    question: "Qual è il tuo obiettivo?",
    options: ["Dimagrire", "Mettere massa muscolare", "Tonificare", "Mantenimento"]
  },
  {
    id: 'bodyShape',
    question: "Qual è la forma del tuo corpo?",
    options: ["Mela o Androide", "Pera o Ginoide", "Clessidra", "Non sono sicura"]
  },
  {
    id: 'pregnancy',
    question: "Hai partorito?",
    options: ["No, non ho partorito e non sono in gravidanza", "Sì, ho partorito", "Sono incinta"]
  },
  {
    id: 'lifestyle',
    question: "Come descriveresti il tuo stile di vita?",
    options: ["Attivo", "Sedentario", "Non so rispondere"]
  },
  // ... aggiungi le altre domande qui
];

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Qui puoi gestire l'invio delle risposte
      console.log(answers);
    }
  };

  return (
    <div className="questionnaire">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Questionnaire;