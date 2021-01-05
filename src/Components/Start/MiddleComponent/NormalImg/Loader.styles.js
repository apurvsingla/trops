import styled from 'styled-components';


export const Style = styled.span`
transform: translate(-50%, -50%); 
    span{
        animation: loading 0.4s linear infinite;
        position: absolute;
        border-radius: 50px;
        height: 10px;
        width: 10px;
        background-color: green;
        top: 100px;
        z-index: 3;
        @media (max-width: 892px){
            top: 82px;
        }
        @keyframes loading { 
            0%{ 
             transform: translateX(0px) scale(0.7);; 
             background-color: green;
            } 
            100%{ 
             transform: translateX(60px) scale(0.8); 
            } 
            
        }            
    }    
`;