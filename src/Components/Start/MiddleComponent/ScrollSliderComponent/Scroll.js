import React from 'react';
import Slider from '@material-ui/core/Slider';
import './Scroll.scss';

const Scroll = ({marks, 
    valueLabelFormat, index, id, key,
    // appearDotRange, setAppearDotRange, dict,setGlowNum,
// code try
    range, setRange, 
    // rangeMeter, setRangeMeter, staticRange,
    setStaticRange, staticRange
}) => {
    // const sliderFunc = (e) => {
    //     const inner = JSON.parse(e.target.innerText);
    //     appearDotRange['text' + inner] = dict[inner]; 
    //     setAppearDotRange(appearDotRange);
    //     setGlowNum(inner);
    // }
    // let boolean = false;
    const sliderFunc = (e) => {
        // boolean = !boolean;
        const num = Number(e.target.innerText);
        const numId = (e.target.parentNode.parentNode.id);
        range[numId] = true;
        setRange(range);
        setStaticRange(num);
    }
    return (
        <>
        <span id={id}>
        <Slider 
        key={key}
        className="scroll-large"
        defaultValue={0}
        marks={marks}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        style={{
            marginLeft: `${140*index}px`,
    }}
    onChange={(e)=> sliderFunc(e)}
    onTouchStart={(e) => sliderFunc(e)}
        />
        </span>
        </>
    );
}

export default Scroll;
