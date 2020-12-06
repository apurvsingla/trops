import React from 'react';
import Slider from '@material-ui/core/Slider';
import './Scroll.scss';

const Scroll = ({marks, 
    valueLabelFormat, index, id, key,
     img1, setImg1
}) => {
    const sliderFunc = (e) => {
        const num = Number(e.target.innerText);
        const numId = Number(e.target.parentNode.parentNode.id);
        const newArray = [...img1];
        newArray.forEach((val, index) => {
            const array = newArray[index]
            if(array.id === numId+1){
                        newArray[index] = {id: array.id, src: array.src, bools: num, pos: 'normal'};
                    
            }
        })
        setImg1(newArray);
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
