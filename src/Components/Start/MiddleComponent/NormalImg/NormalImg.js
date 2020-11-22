import React from 'react';

//styled components
import {
NormalImg,
Span,
LargeLine
} from '../Middle.style';
import Scroll from '../ScrollSliderComponent/Scroll';

//image source
import {
lightSource,
tempSource,
soundSource,
magSource,
distanceSource,
ledSource,
tactSource,
beeperSource,
motorSource,
conditionSource
} from '../Source/source';

//css files
// import {
// one,
// two,
// three,
// four,
// five,
// six 
// } from './GlowStyle';
import './Glow.scss';
import '../Middle.styles.scss';


// const dict = {1: one, 2: two, 
//         3: three, 4: four, 5:five, 6: six
// }


const NormalImgs = ({index, i, deleteImage, marks, valueLabelFormat, 
     activeSecondLink, img1,setAppearDot, appearDot,
//     appearDotRange, setAppearDotRange, lights, tact,
    arr,
// range
    range, setRange, setStaticRange, staticRange, rangeMeter,
    setRangeMeter
}) => {

//     const [glowNum, setGlowNum] = React.useState(null);
    let boolean = false;

    const func = (e) => {
        boolean =! boolean;
        const num = Number(e.target.id);
        appearDot[num] = boolean;
        setAppearDot(appearDot);
    }
    
        
    return(<>
        <Span>
                <NormalImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${100*index + 20}px`,
                }}
                id={index}
                // onClick={(e) => deleteImage(e)}
                />
        </Span>

         {/* line */}
        {(img1.length-1) === index ? null : (
        <LargeLine style={{
                marginLeft: `${140*index}px`,
                }}
        key={index+'--icon'} />) }

        {/* special case */}
        {(i.src === tactSource)|| (i.src === beeperSource) || (i.src === motorSource) 
                ? (
                <span 
                className="middle-dot-normal"
                onTouchStart={(e) => func(e)}
                // onTouchEnd={(e) => func(e)}
                onClick={(e) => func(e)}
                style={{
                      marginLeft: `${140*index}px`
                }}
                key={index+'-middle'}
                id={index}
                />
        ): null}

        {(i.src===lightSource)|| i.src === tempSource || i.src === soundSource ||(i.src === magSource) ||(i.src === distanceSource)
                ? 
                <Scroll marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                index={index}
                // appearDotRange={appearDotRange}
                // dict={dict} setAppearDotRange={setAppearDotRange}
                // setGlowNum={setGlowNum}
                id={index}
                key={index + '-scroll'}
                //code try
                range={range} setRange={setRange} rangeMeter={rangeMeter}
                setRangeMeter={setRangeMeter} staticRange={staticRange}
                setStaticRange={setStaticRange}
                />
         : null}

        {i.src === ledSource? (
        appearDot[index-1] === true || 
        ((appearDot[index-2] === true) && (arr[index-1].src !== (tactSource || beeperSource || motorSource)))|| 
        ((appearDot[index-3] === true) && (arr[index-1].src !== (tactSource || beeperSource || motorSource)))||
        ((appearDot[index-4] === true) && (arr[index-1].src !== (tactSource || beeperSource || motorSource)))||
        ((appearDot[index-5] === true) && (arr[index-1].src !== (tactSource || beeperSource || motorSource)))||
        ((appearDot[index-6] === true) && (arr[index-1].src !== (tactSource || beeperSource || motorSource))) 
        ? 
            <span 
            className='glow-small'
            key={index}
            style={{
                    left: `${140*index}px`,
            }}
        //     onClick={() => console.log(arr[index].src)}
            />
            : null) 
        : null}

        {/* {i.src === (process.env.PUBLIC_URL + '/images/components/LED.png')?  <span 
        style={{
                ...appearDotRange['text' + glowNum], 
                left: `${140*index + 160}px`,
        }}
        /> : null} */}

        {/* <Slider /> */}
        {/* { ((i.src === ledSource) || appearDotRange)? <span 
        style={{
                ...appearDotRange['text' + glowNum],
                left: `${140*index + 300}px`
        }}
        />: null} */}

        {i.src === ledSource? (
        range[index-1] === true || 
        ((range[index-2] === true) && (arr[index-1].src !== (lightSource)))|| 
        ((range[index-3] === true) && (arr[index-1].src !== (lightSource)))||
        ((range[index-4] === true) && (arr[index-1].src !== (lightSource)))||
        ((range[index-5] === true) && (arr[index-1].src !== (lightSource))) ||
        ((range[index-6] === true) && (arr[index-1].src !== (lightSource))) 

        ? 
        <span
        onClick={e=>console.log(index)}
        style={{
                height: `${staticRange*10 + 5}px`,
                width: `${staticRange*10 + 5}px`,
                backgroundColor: 'red',
                borderRadius: '50px',
                zIndex: '15',
                position: 'absolute',
                top: `${95 - 5*staticRange}px`,
                marginLeft: `${staticRange*(-5)}px`,
                left: `${140*index + 168}px`
        }}
        />
            : null) 
        : null}

        

        {/* dots start */}
        {i.src === conditionSource ? 
        <span 
        className="bottom-dot-normal"
        style={{
                marginLeft: `${140*index}px`
                }}
                key={index+'-bottom'}
                id={index+'-bottom'}
                onClick={(e) => activeSecondLink(e,index)}
                />
        : null }
        {/* dots end */}
</>)
}

export default NormalImgs;
