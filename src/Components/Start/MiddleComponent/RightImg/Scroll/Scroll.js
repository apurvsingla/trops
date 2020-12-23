import React from 'react';
import Slider from '@material-ui/core/Slider';
import './Scroll.scss';

const Scroll = ({marks, 
    valueLabelFormat, index, id, key,
     bottomImg, setBottomImg, className, style, nid
}) => {
    const sliderFunc = (e) => {
        const num = Number(e.target.innerText);
        const numId = Number(e.target.parentNode.parentNode.id);
        const newArray = [...bottomImg];
        console.log(num,numId)
        newArray.forEach((val, index) => {
            const array = newArray[index]
            if(array.nid === numId+1){
                        newArray[index] = {...newArray[index], bools: num};
                    
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

export default Scroll;
