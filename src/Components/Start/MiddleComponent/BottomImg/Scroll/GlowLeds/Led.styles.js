import styled from 'styled-components';

export const BottomStyles = styled.span`
transform: translate(-50%, -50%); 
    span{
        animation: loading2 0.4s linear infinite;
        position: absolute;
        border-radius: 50px;
        height: 10px;
        width: 10px;
        background-color: green;
        z-index: 3;
        @media (max-width: 892px){
            top: -50px;
            margin-left: -16px;
        }
        @keyframes loading2 { 
            0%, 100%{ 
             transform: translateY(0) scale(0.7);
             background-color: green;
            }  
            100%{ 
             transform: translateY(70px) scale(1); 
             background-color: green;
            } 
        }
        &:nth-child(0){ 
        animation-delay: 0s; 
        } 
        &:nth-child(2){ 
        animation-delay: 0.4s; 
        } 
        &:nth-child(3){ 
        animation-delay: 0.6s; 
        } 
        &:nth-child(1){ 
        animation-delay: 0.2s; 
        } 
        &:nth-child(4){ 
        animation-delay: 0.8s; 
        } 
        &:nth-child(5){ 
        animation-delay: 1s; 
        } 
        &:nth-child(6){ 
        animation-delay: 1.2s; 
        }
    }   
`;