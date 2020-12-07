import React from 'react';
import Slider from '@material-ui/core/Slider';
import './Scroll.scss';

const ScrollBottom = ({marks, 
    valueLabelFormat, index, id, key,
     bottomImg, setBottomImg, className, style, i
}) => {
    const sliderFunc = (e) => {
        const num = Number(e.target.innerText);
        const numId = Number(e.target.parentNode.parentNode.id);
        const newArray = [...bottomImg];
        newArray.forEach((val, index) => {
            const array = newArray[index]
            if(array.id === numId+1){
                        newArray[index] = {id: array.id, src: array.src, bools: num, pos: 'normal', bottomPos: i.bottomPos};
                    
            }
        })
        setBottomImg(newArray);
    }
    return (
        <>
        <span id={id}>
        <Slider 
        key={key}
        className={className}
        defaultValue={0}
        marks={marks}
        valueLabelFormat={valueLabelFormat}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
       style={style}
    onChange={(e)=> sliderFunc(e)}
    onTouchStart={(e) => sliderFunc(e)}
        />
        </span>
        </>
    );
}

export default ScrollBottom;
