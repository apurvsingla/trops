import styled from 'styled-components';
import MaximizeIcon from '@material-ui/icons/Maximize';

export const Img = styled.img`
    width: 70px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 23px;
`;

export const NormalImg = styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
`;

export const Span = styled.span`
    position: relative;
    left: 100px;
    top: 100px;
`;

export const RightSpan = styled.span`
    position: absolute;
    top: 100px;
`;

export const Line = styled(MaximizeIcon)`
    position: absolute;
    transform: scale(2);
    top: 141px;
`;


export const ColumnLine = styled(MaximizeIcon)`
    transform: scale(1.7) rotate(90deg);
    position: absolute;
    margin-top: 8px
`;

export const columnLineSpan = styled.span`
    position: relative;
    bottom: 57px;
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