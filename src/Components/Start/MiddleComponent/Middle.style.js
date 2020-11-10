import styled from 'styled-components';
import MaximizeIcon from '@material-ui/icons/Maximize';

export const Img = styled.img`
    width: 70px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const NormalImg = styled.img`
    width: 70px;
    height: 70px;
    position: relative;
`;

export const Span = styled.span`
    position: relative;
    left: 100px;
    top: 100px;
`;

export const Line = styled(MaximizeIcon)`
    position: absolute;
    transform: scale(2);
    top: 141px;
`;


export const ColumnLine = styled(MaximizeIcon)`
    display: flex;
    flex-direction: column;
    position: absolute;
    transform: rotate(90deg);   
    width: 150px;
`;

// export const RightDot = styled.span`
//     position: absolute;
//     height: 15px;
//     width: 15px;
//     top: 130px;
//     border-radius: 25px;
//     background-color: black;
// `;

// export const BottomDot = styled.span`
//     position: absolute;
//     top: 154px;
//     background-color: black;
//     height: 15px;
//     width: 15px;
//     border-radius: 25px;
// `;