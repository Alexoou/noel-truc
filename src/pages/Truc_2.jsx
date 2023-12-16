import React from 'react';
import styled from "styled-components";
import Spline from '@splinetool/react-spline';




const StyledPage = styled.div`
    width: 100vw;
    height: 100vh;
    backgroung-color: var(--beigeColor);
    
`;


function Truc2() {
    return (
        <StyledPage>
            <h1 className='detect-titre'>Truc 2</h1>
            <Spline className='3d' scene="https://prod.spline.design/IwI3DSXuwe7nEbVW/scene.splinecode" />
            <div className='fond'></div>
        </StyledPage>
    );
}

export default Truc2;