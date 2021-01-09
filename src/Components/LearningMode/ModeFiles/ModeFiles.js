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
import useSessionStorage from '../../SessionStorage/SessionStorage';
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import { makeStyles } from '@material-ui/core/styles';

const ModeFiles = () => {
    const [front] = React.useState(JSON.parse(sessionStorage.getItem("front")));
    const [bottom] = React.useState(JSON.parse(sessionStorage.getItem("bottom")));
    const [state, setState] = useSessionStorage('statealt',[]);
    const [stateB, setStateB] = useSessionStorage('statealtBottom',[]);
    
    React.useEffect(() => {
        const func = () => {
            let arr = [];
            let ar = [];
            front.map(i => arr.push(i.alt));
            setState(arr);
            bottom.map(i => ar.push(Number(i.cur),i.alt));
            setStateB(ar);
        }
        return func()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
    <LearningStart frontData={state} bottomData={stateB} />
    );
}

export default ModeFiles;
