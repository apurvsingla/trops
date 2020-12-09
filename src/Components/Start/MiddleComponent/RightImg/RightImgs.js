import React from 'react';
import {
RightSpan,
NormalRImg,
// LargeRowLine
} from '../Middle.style';
import {conditionSource} from '../Source/source';


const RightImgs = ({mQuery, currentRight, activeRightIndex, 
    activeDot, activeSecondRightLink, bottomTop, index, 
    setBottomTop, pos, rightImg, i}) => {
    return(<>
        {mQuery && !mQuery.matches ? (
        <RightSpan> 
                <NormalRImg src={i.src} 
                        alt="alt" 
                        style={{
                                left: `${140*i.id+ 170}px`,
                                top: `${140*i.bottomRightPos + 43}px`
                        }}
                        />
        </RightSpan>) : 
        <RightSpan>
                <NormalRImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${140*i.id+ 170}px`,
                        top: `${140*i.bottomRightPos + 43}px`
                }}
                />
        </RightSpan>}

                {i.src === conditionSource ? 
                <>
                 {mQuery && !mQuery.matches ? (<span 
                 className="right-right-dot"
                 style={{
                         position: 'absolute',
                         marginTop:`${i.id === currentRight ? 
                                 120*activeRightIndex[currentRight] - 40: null}px`,
                         marginLeft:`${i.id === currentRight ? 
                                 (140*index ) + 103+ pos[activeDot+'-left']: null}px`,
                         backgroundColor: 'black',
                         height: '15px',
                         width: '15px',
                         borderRadius: '25px'
                         }}
                         key={index+'-bottom'}
                         id={index+'-bottom'}
                         onClick={(e) => activeSecondRightLink(e,index)}
                         />
                 ) : 
                <span 
                className="right-right-dot"
                style={{
                        position: 'absolute',
                        marginTop:`${i.id === currentRight ? 
                                40*activeRightIndex[currentRight] + 100*currentRight: null}px`,
                        marginLeft:`${i.id === currentRight ? 
                                (140*index ) + 103+ pos[activeDot+'-left']: null}px`,
                        backgroundColor: 'black',
                        height: '15px',
                        width: '15px',
                        borderRadius: '25px'
                        }}
                        key={index+'-bottom'}
                        id={index+'-bottom'}
                        onClick={(e) => activeSecondRightLink(e,index)}
                        />}
                </>
                : null }
                {/* dots end */}
        </>)
}

export default RightImgs;
