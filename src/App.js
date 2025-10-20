import React, { useState, useEffect } from 'react';
import { dilemas } from './dilemas';
import { motion, AnimatePresence } from 'framer-motion'; // Importando do Framer Motion
import './App.css';

// Componente para o Botão de Tema
const ThemeToggler = ({ theme, toggleTheme }) => (
  <button className="theme-toggler" onClick={toggleTheme}>
    {theme === 'light' ? '🌙 Escuro' : '☀️ Claro'}
  </button>
);

// Componente da Tela de Boas-vindas
const WelcomeScreen = ({ onStart }) => (
  <motion.div 
    className="game-card"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div>
      <h1>Dilemas</h1>
      <h2>Qual caminho você escolheria?</h2>
      <p>
        Um quiz interativo projetado para educar sobre as principais ameaças à segurança, 
        integridade e bem-estar no ambiente acadêmico e corporativo.
      </p>
      <p>
        Para cada pergunta, leia o dilema e **clique** na opção que você acredita ser a mais correta.
      </p>
    </div>
    <button className="btn-card" onClick={onStart}>Iniciar Quiz</button>
  </motion.div>
);

// --- NOVO Componente de Texto Animado ---
const AnimatedText = ({ text }) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: i * 0.04 },
    }),
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="animated-text"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={text} // Adicionar key para forçar re-render e re-animar quando o texto mudar
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ marginRight: '0.5rem', display: 'inline-block' }}
          variants={childVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};


// --- Tela de Pergunta ATUALIZADA com Animações ---
const QuestionScreen = ({ dilema, onAnswer }) => (
  <motion.div 
    className="question-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="option-box A"
      onClick={() => onAnswer('A')}
      whileHover={{ scale: 1.03 }} // Efeito de zoom no hover
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <AnimatedText text={dilema.opcoes.A} />
    </motion.div>
    <motion.div
      className="option-box B"
      onClick={() => onAnswer('B')}
      whileHover={{ scale: 1.03 }} // Efeito de zoom no hover
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <AnimatedText text={dilema.opcoes.B} />
    </motion.div>
  </motion.div>
);

// Componente da Tela de Feedback (Integrado em um Card)
const FeedbackScreen = ({ feedback, dilema, onNext }) => (
    <motion.div 
        className="feedback-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h3>
            <span className={`feedback-icon ${feedback.correto ? 'correct' : 'incorrect'}`}>
                {feedback.correto ? '✅' : '❌'}
            </span>
            {feedback.correto ? 'Escolha Correta!' : 'Escolha de Risco!'}
        </h3>
        <p><strong>Cenário:</strong> {dilema.cenario}</p> {/* CORRIGIDO para mostrar o cenário atual */}
        <p><strong>Consequência:</strong> {feedback.consequencia}</p>
        <p><strong>Justificativa:</strong> {feedback.justificativa}</p>
        <button className="btn-card" onClick={onNext}>Próximo Dilema</button>
    </motion.div>
);


// Componente da Tela de Conclusão (Usando o game-card)
const ConclusionScreen = ({ onRestart }) => (
  <motion.div 
    className="game-card"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div>
      <h1>Quiz Concluído!</h1>
      <p>
        Obrigado por participar. A conscientização é a ferramenta mais poderosa para um ambiente 
        digital e físico mais seguro. Continue praticando o pensamento crítico no seu dia a dia.
      </p>
    </div>
    <button className="btn-card" onClick={onRestart}>Jogar Novamente</button>
  </motion.div>
);


function App() {
  const [theme, setTheme] = useState('light');
  const [gameState, setGameState] = useState('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentFeedback, setCurrentFeedback] = useState(null); // ADICIONADO

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleStartGame = () => setGameState('playing');

  // Atualizado: captura o feedback no momento da escolha para evitar leituras indefinidas ao renderizar
  const handleAnswer = (choice) => {
    const current = dilemas[currentQuestionIndex];
    const fb = current && current.feedback ? current.feedback[choice] : null;
    setSelectedAnswer(choice);
    setCurrentFeedback(fb);
    setGameState('feedback');
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < dilemas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setCurrentFeedback(null); // Limpa o feedback ao avançar
      setGameState('playing');
    } else {
      setGameState('finished');
    }
  };

  const handleRestart = () => {
    setGameState('welcome');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCurrentFeedback(null); // Limpa também no restart
  };

  const renderContent = () => {
    const currentDilema = dilemas[currentQuestionIndex];
    if (!currentDilema) return null; // Guarda extra para evitar erros se o índice estiver fora do alcance

    switch (gameState) {
      case 'playing':
        return <QuestionScreen key={currentQuestionIndex} dilema={currentDilema} onAnswer={handleAnswer} />;
      case 'feedback':
        if (!currentFeedback) return null; // evita acessar propriedades de undefined
        return <FeedbackScreen key="feedback" feedback={currentFeedback} dilema={currentDilema} onNext={handleNextQuestion} />;
      case 'finished':
        return <ConclusionScreen key="conclusion" onRestart={handleRestart} />;
      case 'welcome':
      default:
        return <WelcomeScreen key="welcome" onStart={handleStartGame} />;
    }
  };

  return (
    <div className="app-container">
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  );
}

export default App;
