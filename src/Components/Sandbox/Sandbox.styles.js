import styled from 'styled-components';
import {ReactComponent as ReactLogo} from './button_back.svg';

export const Heading = styled.div`
    text-align: center;
    color: #553795;
    letter-spacing: 0.05rem;
    z-index: 5;
    margin-top: 27%;
    height: 80%;
    h1{
        font-weight: 600
    }
    p{
        font-weight: 500;
        font-size: 1.1rem;
        color: #735dab;
    }
`;

export const Img = styled.img`
    z-index: -1;
    width: 100%;
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