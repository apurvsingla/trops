import styled from 'styled-components';


export const Style = styled.span`
transform: translate(-50%, -50%); 
    span{
        animation: loading 0.8s linear infinite;
        position: absolute;
        border-radius: 50px;
        height: 15px;
        width: 15px;
        background-color: green;
        top: 98px;
        z-index: 3;
        @media (max-width: 892px){
            top: 77px;
        }
        @keyframes loading { 
            0%, 100%{ 
             transform: translateX(0) scale(0.7);; 
             background-color: green;
            } 
            25%{ 
             transform: translateX(2px) scale(0.8);; 
             height: 18px;
            } 
            50%{ 
             transform: translateX(-2px) scale(1);; 
             height: 15px;
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