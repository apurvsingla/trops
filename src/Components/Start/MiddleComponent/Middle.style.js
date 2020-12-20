import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const Img = styled.img`
    width: 70px;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 23px;
    height: 70px;
    @media (min-width: 893px){
        width: 100px;
        height: 100px;
    }
`;


export const CImg = styled.img`
    width: 70px;
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 23px;
    height: 70px;
    @media (min-width: 893px){
        width: 95px;
        height: 95px;
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

export const NormalRImg = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    z-index: -3;
    @media (min-width: 893px){
        width: 100px;
        height: 100px;
    }
`;


export const Span = styled.span`
    position: relative;
    left: 100px;
    top: 50px;
    margin-right:40px;
`;

export const BottomSpan = styled.span`
    position: relative;
    left: 100px;
    top: 170px;
    @media (max-width:892px){
        top: 128px;
    }
`;

export const RightSpan = styled.span`
    position: absolute;
`;

export const columnLineSpan = styled.span`
    position: relative;
    bottom: 57px;
`;

export const LargeLine = styled.span`
    background-color: black;
    width: 53px;
    height: 8px;
    position: absolute;
    top: 101px;
    left: 213px;
    opacity: 0.8;
    z-index: 1;
    border-radius: 25px;
    @media (max-width: 893px){
        width: 77px;
        left: 186px;
        top: 82px;
        height: 8px;
    }
`;

export const Arrow = styled(ArrowForwardIosIcon)`
    position: absolute;
    top: 93px;
    transform: scale(1.2);
    left: 248px;
    z-index: 4;
    @media (max-width: 893px){
        top: 74px;
        margin-left: -5px
    }
`

export const LargeColLine = styled.span`
    background-color: transparent;
    width: 0.4rem;
    position: absolute;
    top: 150px;
    left: 166px;
    z-index: 4;
    border-radius: 25px;
    height: 60px;
    margin-top:50px;
    @media (max-width: 893px){
        margin-top: 0px;
        height: 66px;
        width: 0.35rem;
        left: 150px;
    }
    border: 2px solid black;
`;


export const LargeRowLine = styled.span`
    background-color: black;
    width: 48px;
    height: 2px;
    position: absolute;
    top: 101px;
   
    @media (max-width: 893px){
        width: 75px;
        z-index: 8;
        left: 188px;
        top: 87px;
    }
`;
