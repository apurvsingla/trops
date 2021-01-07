import React from 'react';
// import { useLocation } from "react-router-dom";
// import { Img, 
// LargeColLine,
// } from '../../Start/MiddleComponent/Middle.style';
// import {
// Graph,
// Bottom,
// Icon,
// MiddleIcon,
// } from '../../Start/Start.styles';
import '../../Start/Start.styles.scss';
// import { Scrollbars } from 'react-custom-scrollbars';
import 'reactjs-popup/dist/index.css';
// import { beeperSource, conditionSource, distanceSource, graphSource, ledSource, lightSource, magSource, motorSource, powerSource, sequenceSource, soundSource, splitterSource, tactSource, tempSource } from '../../Start/MiddleComponent/Source/source';
// import {useHistory} from 'react-router-dom';
// import {
// Imgs,
// NormalImg
// } from '../Showcase/ShowCase.styles';
import LearningStart from '../../Start/LearningStart';
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import { makeStyles } from '@material-ui/core/styles';

const ModeFiles = () => {
    const [front] = React.useState(JSON.parse(sessionStorage.getItem("front")));
    // const [bottom] = React.useState(JSON.parse(sessionStorage.getItem("bottom")));
    const [state, setState] = React.useState([]);
    
    React.useEffect(() => {
        const func = () => {
            front.map(i => state.push(i.alt));
            setState(state);
            // bottom.map(i => console.log(i.alt));
        }
        return func()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
    <LearningStart frontData={state}/>
    );
}

export default ModeFiles;
