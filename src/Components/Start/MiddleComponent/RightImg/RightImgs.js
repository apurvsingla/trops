import React from 'react';
import {
// RightSpan,
NormalRImg,
// LargeRowLine
} from '../Middle.style';
// import {conditionSource} from '../Source/source';


const RightImgs = ({mQuery, currentRight, activeRightIndex, 
    activeDot, activeSecondRightLink, index, 
     pos, i}) => {
    return(<>
        {mQuery && !mQuery.matches ? (
         
                <NormalRImg src={i.src} 
                        alt="alt" 
                        style={{
                                left: `${140*i.id+ 250}px`,
                                top: `${140*i.bottomRightPos - 135}px`
                        }}
                        />
        ) : 
        
                <NormalRImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${140*i.id+ 124}px`,
                        marginTop:`${140*i.bottomRightPos+ 40}px`,
                        zIndex: '50'
                }}
                />
        }                
        {/* dots end */}
        </>)
}

export default RightImgs;
