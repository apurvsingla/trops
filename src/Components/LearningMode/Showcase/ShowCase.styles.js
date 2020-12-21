import styled from 'styled-components';

export const Main = styled.div`
    background-color: #DCDCDC;
    min-height: 100vh;
    letter-spacing: 0.05em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 893px){
        width: 100%;
        height: 100%;
        display: block;
    } 
`;

export const Imgs = styled.img`
    width: 75px;
    height: 75px;
    @media (min-width: 893px){
        width: 100px;
        height: 100px;
    }  
`;

export const NormalImg = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    z-index: 2;
    @media (min-width: 893px){
        width: 100px;
        height: 100px;
        position: absolute;
    }
`;