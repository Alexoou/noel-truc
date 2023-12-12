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
            <Spline scene="https://prod.spline.design/JnxKcJHkYHJILHf9/scene.splinecode" />
        </StyledPage>
    );
}


export default Truc1;