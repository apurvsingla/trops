import styled from 'styled-components';
import {ReactComponent as ReactLogo} from './button_back.svg';

export const Heading = styled.div`
    text-align: center;
    color: #553795;
    letter-spacing: 0.05rem;
    z-index: 5;
    margin-top: 17rem;
    h1{
        font-weight: 600
    }
    p{
        font-weight: 500;
        font-size: 1.1rem;
        color: #735dab;
    }
    @media (max-width: 540px){
        margin-top: 22rem;
    }
`;

export const Img = styled.img`
    z-index: -1;
    width: 340px;
    @media (max-width: 540px){
        width: 540px;
        height: 450px;
    }
    @media (max-width: 414px){
        width: 412px;  
    }
    @media (max-width: 384px){
        width: 384px;  
    }
    @media (max-width: 375px){
        width: 375px;
        height: 410px;
    }
    @media (max-width: 360px){
        width: 360px;
    }
    @media (max-width: 320px){
        width: 320px;
    }
    @media (max-width: 280px){
        width: 280px;
    }
   

`;

export const SandboxBackIcon = styled(ReactLogo)`
    transform: scale(1.4);
    cursor: pointer;
    margin-top: 2rem;
    margin-left: 1rem;
`;

export const Start = styled.div`
    
    text-align: center;
    button{
        background-color: red;
        border: none;
        padding: 0.3rem 7rem 0.3rem 7rem;
        border-radius: 25px;
        color: white;
        font-size: 1.3rem;
        font-weight: 500;
        outline: none;
        cursor: pointer;
    }
`;