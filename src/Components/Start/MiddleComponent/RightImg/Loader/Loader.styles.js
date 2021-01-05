import styled from 'styled-components';


export const Style = styled.span`
transform: translate(-50%, -50%); 
    span{
        animation: loading 0.4s linear infinite;
        position: absolute;
        border-radius: 50px;
        height: 8px;
        width: 8px;
        background-color: green;
        top: 102px;
        z-index: 3;
        @media (max-width: 892px){
            top: 82px;
        }
        @keyframes loading { 
            0%{ 
             transform: translateX(0);
            }  
            100%{ 
             transform: translateX(70px);
            } 
        }
        &:nth-child(0){ 
            animation-delay: 0s; 
            } 
    }   
        
    
`;