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
                                top: `${140*i.bottomRightPos + 10}px`
                        }}
                        />
        ) : 
        
                <NormalRImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${140*i.id+ 124}px`,
                        marginTop:`${140*i.bottomRightPos+ 40}px`,
                        // top: `${-250}px`
                }}
                />
                }                
                {mQuery && !mQuery.matches ? (
                <LargeRowLine style={{
                        marginLeft: `${140*i.id - 160}px`,
                        top: `${140*i.bottomRightPos + 43}px`,
                        zIndex: '-8'
                        }}
                key={index+'--icon'} />): (
                        <LargeRowLine style={{
                                marginLeft: `${140*i.id - 160}px`,
                                top: `${140*i.bottomRightPos + 95}px`
                                }}
                        key={index+'--icon'} />)}
        </>)
}

export default RightImgs;
