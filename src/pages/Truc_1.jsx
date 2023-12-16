import React from 'react';
import styled from "styled-components";
import Spline from '@splinetool/react-spline';




const StyledPage = styled.div`
    width: 100vw;
    height: 100vh;
    backgroung-color: var(--beigeColor);


`;


function Truc1() {
    return (
        <StyledPage>
            
            <h1 className='detect-titre'>Truc 1</h1>
            <Spline className='spline' scene="https://prod.spline.design/r3A344E3FyVxjANh/scene.splinecode" />
            <div className='fond'></div>
        </StyledPage>
    );
}


export default Truc1;