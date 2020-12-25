import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import {ReactComponent as ReactLogo2} from './button_back.svg';

export const BackButton = styled(ReactLogo2)`
    position: absolute;
    top: 7.7rem;
    transform: scale(1.2);
    left: 1rem;
    cursor: pointer;
`;

export const Section = styled.div`
    position: relative;
    border: 1px solid black;
    margin-top: 25px;
    width: 80%;
    margin-left: 10%;
    border-radius: 25px;
`;

export const HeaderIcon = styled.div`
    margin-left: 1rem;
    margin-top: 1rem;
    cursor: pointer;
`;

export const HeaderContent = styled.div`
    margin-left: 3rem;
    padding-bottom: 2rem;
    h1 {
        letter-spacing: 0.1rem;
        font-weight: 400;
    }
    p{
        letter-spacing: 0.1rem;
        font-size: 1.1rem;
        @media (max-width: 325px){
            letter-spacing: 0;
        }
    }
`;

export const HeaderComponent = styled(AppBar)`
    background: rgb(251,72,94) !important;
`;

export const LastIcon = styled.div`
    @media (min-width: 250px){
        position: fixed;
        bottom: 0;
        left: 74%;
        cursor: pointer;
    }
    @media (min-width: 450px){
        position: fixed;
        bottom: 0;
        left: 82%;
    }
    @media (min-width: 700px){
        position: fixed;
        bottom: 0;
        left: 85%;
    }

    @media (min-width: 900px){
        position: fixed;
        bottom: 0;
        left: 90%;
    }
`;

export const Img = styled.img`
    width: 35%;
    position: relative;
    top: -12rem;
`;
