import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const StyledPage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--beigeColor);

    h1 {
        position: absolute;
        left: 9vw;
        z-index: 2;
        color: var(--beigeColor)

    }

    h2 {
        position: absolute;
        font-size: 8vw;
        padding: 0;
        font-family: Brown-Sugar;
        letter-spacing: 2vw;
        z-index: 2;
    }

    .truc-1 {
        top: 30%;
        left: 32vw;
        cursor: pointer;  // Ajout du curseur pointer pour indiquer que c'est cliquable
    }

    .truc-2 {
        top: 70%;
        left: 32vw;
        cursor: pointer;  // Ajout du curseur pointer pour indiquer que c'est cliquable
    }

   
`;

function Detecteur() {
    const navigate = useNavigate();

    const handleTruc1Click = () => {
        navigate("/Truc_1");  // Assurez-vous que le chemin correspond à la configuration de votre route
    };

    const handleTruc2Click = () => {
        navigate("/Truc_2");  // Assurez-vous que le chemin correspond à la configuration de votre route
    };

    return (
        <StyledPage>
            <h1 className='detect-titre-gros'>DÉTECTEUR DE TRUCS</h1>
            <h2 className='truc-1' onClick={handleTruc1Click}>Truc 1</h2>
            <h2 className='truc-2' onClick={handleTruc2Click}>Truc 2</h2>
            <div className="cercle-truc"></div>
            <div className='fond'></div>
        </StyledPage>
    );
}

export default Detecteur;
