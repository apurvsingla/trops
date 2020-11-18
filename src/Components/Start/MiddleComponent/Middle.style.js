import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';

// import MaximizeIcon from '@material-ui/icons/Maximize';

export const Img = styled.img`
    width: 70px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 23px;
    height: 70px;
    @media (min-width: 893px){
        width: 100px;
        height: 100px;
    }
`;

export const NormalImg = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    @media (min-width: 893px){
        width: 100px;
        height: 100px;
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
    top: 50px;
    margin-right:40px;
    top: 150px;
    @media (max-width:892px){
        top: 125px;
    }
`;

export const RightSpan = styled.span`
    position: absolute;
    top: 194px;

    @media (max-width: 892px){
        top: 169px;
    }
`;

export const ScrollSlider = styled(Slider)`
    position: absolute;
    left: 150px;
    top: 120px;
    width: 50px;

    @media (max-width: 892px){
        width: 40px;
        top: 87px;
        left: 138px;
    }
`;

export const columnLineSpan = styled.span`
    position: relative;
    bottom: 57px;
`;

export const LargeLine = styled.span`
    background-color: black;
    width: 48px;
    height: 2px;
    position: absolute;
    top: 101px;
    left: 216px;
    @media (max-width: 893px){
        width: 75px;
        z-index: 8;
        left: 188px;
        top: 87px;
    }
`;

export const LargeColLine = styled.span`
    background-color: black;
    width: 2px;
    position: absolute;
    top: 151px;
    left: 170px;
    @media (max-width: 893px){
        height: 75px;
        z-index: 8;
        left: 188px;
        top: 87px;
    }
`;


export const LargeRowLine = styled.span`
    background-color: black;
    width: 48px;
    height: 2px;
    position: absolute;
    top: 101px;
    left: 216px;
    @media (max-width: 893px){
        width: 75px;
        z-index: 8;
        left: 188px;
        top: 87px;
    }
`;
