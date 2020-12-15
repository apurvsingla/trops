import React from 'react';
import {
        LargeRowLine,
// RightSpan,
NormalRImg,
// LargeRowLine
} from '../Middle.style';
// import { tactSource } from '../Source/source';
// import {conditionSource} from '../Source/source';


const RightImgs = ({mQuery, currentRight, activeRightIndex, 
    activeDot, activeSecondRightLink, index, 
     pos, i}) => {
    return(<>
        {mQuery && !mQuery.matches ? (
         
                <NormalRImg src={i.src} 
                        alt="alt" 
                        style={{
                                left: `${140*i.id+ 100}px`,
                                marginTop: `${140*i.bottomRightPos + 147}px`
                        }}
                        />
        ) : 
        
                <NormalRImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${140*i.id+ 114}px`,
                        marginTop:`${140*i.bottomRightPos+ 185}px`,
                        // top: `${-250}px`
                }}
                />
                }                
                {mQuery && !mQuery.matches ? (
                <LargeRowLine style={{
                        left: `${140*i.id +27}px`,
                        top: `${140*i.bottomRightPos + 183}px`,
                        zIndex: '-8'
                        }}
                key={index+'--icon'} />): (
                        <LargeRowLine style={{
                                left: `${140*i.id +70}px`,
                                top: `${140*i.bottomRightPos + 235}px`,
                                zIndex: '-8'
                                }}
                        key={index+'--icon'} />)}
        </>)
}

export default RightImgs;
