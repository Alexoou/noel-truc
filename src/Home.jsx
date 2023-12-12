import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  backgroung-color: var(--beigeColor);

  .fond{
    z-index:-1;
  }

  
`;

const Button = styled(motion.button)`

`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const Input = styled.input`
  &.shake {
    animation: ${shakeAnimation} 0.2s ease-in-out;
  }
`;

function Home(props) {
  const [inputValue, setInputValue] = useState("");
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (inputValue.toLowerCase() === "wallah") {
      navigate("/Detecteur");
    } else {
      setShake(true);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShake(false);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [shake]);

  return (
    <StyledHome>
      <h1 className="code">CODE DE <br/>DÉMARRAGE</h1>
      <p>© 321 - 2023 facteur-inc - All Rights Reserved.</p>
      <div className="cercle"></div>
      <div className="saisi-ombre"></div>
      <Input
        className={`saisi ${shake ? "shake" : ""}`}
        type="text"
        maxLength="20"
        autoComplete="off"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="bouton-ombre"></div>
      <Button
        className="bouton"
        whileTap={{ y: 5 }} // Zoom lors du clic
        transition={{ duration: 0.1 }} // Durée de l'animation
        onClick={handleButtonClick}
      >
        &rsaquo;&rsaquo;
      </Button>
      <div className='fond'></div>
    </StyledHome>
  );
}

export default Home;
