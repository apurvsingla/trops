import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';


export const Graph = styled.div`
    background-color: #ffffff;
    background-size: 100px 50px, 50px 50px, 10px 10px, 10px 10px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    background-image: -webkit-linear-gradient(rgba(56, 56, 56, 0.5) 2px, transparent 2px), -webkit-linear-gradient(0, rgba(56, 56, 56, 0.5) 2px, transparent 2px), -webkit-linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), -webkit-linear-gradient(0, rgba(56, 56, 56, 0.5) 1px, transparent 1px);
    background-image: -moz-linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), -moz-linear-gradient(0, rgba(56, 56, 56, 0.5) 1px, transparent 1px), -moz-linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), -moz-linear-gradient(0, rgba(56, 56, 56, 0.5) 1px, transparent 1px);
    background-image: linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 56, 56, 0.5) 1px, transparent 1px), linear-gradient(rgba(56, 56, 56, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 56, 56, 0.5) 1px, transparent 1px);
    height: 100%;
    opacity: 0.2;
    z-index: 1;
`;

export const Bottom = styled.div`
    width: 20vw;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    right: -10px;
`;

export const BottomDesk = styled.div`
    width: 90vw;
    background-color: white;
    border: 1px solid #fc846a;
    height: 100px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 10vw;
    border-left: none;
    border-right: none;
    border-bottom: none;
    z-index: 100;
    @media (min-width: 893px){
        height: 120px;
    }
`;


export const Dots = styled.button`
    position: fixed;
    bottom: 7px;
    border: none;
    border-radius: 25px;
    width: 12px;
    height: 12px;
    outline: none;
`;

export const Icon = styled(AddCircleIcon)`
    position: relative;
    bottom: 78px;
    left: 14px;
    @media (max-width: 892px){
        bottom: 51px
    }
`;

export const IconMob = styled(AddCircleIcon)`
    position: absolute;
    right: 50px;
    margin-top: 100px;
    z-index: 5000000;
`;

export const IconMobi = styled(AddCircleIcon)`
    position: absolute;
    right: 50px;
    z-index: 5000000;
    margin-top: 20px;
`;


export const MiddleIcon = styled(AddCircleIcon)`
    position: relative;
    top: 25px;
    right: 85px;
    @media (max-width: 892px){
        bottom: 51px;
    }
`;

export const MiddleIconDesk = styled(AddCircleIcon)`
    position: relative;
    bottom: 78px;
    left: 30px;
    @media (max-width: 892px){
        bottom: 51px;
    }
`;

export const Img = styled.img`
    width: 75px;
    height: 75px;
    @media (min-width: 893px){
        width: 100px;
        height: 100px;
    }  
`;

export const ConditionSourceImg = styled.img`
    width: 100px;
    height: 100px;
    @media (min-width: 893px){
        width: 120px;
        height: 120px;
    } 
`;
    

