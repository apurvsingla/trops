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
        {mQuery && !mQuery.matches ? (<RightSpan style={{
                marginTop: `${i.id === currentRight ?
                        100*currentRight + 14*activeRightIndex[currentRight]: null}px`,     
                        }}> 
                         <NormalRImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${ pos[activeDot+'-left'] + 58 + 140*index}px`,
                }}
                ref={e=>{
                        if(!e){
                                return;
                        }
                        bottomTop[index] = (e.getBoundingClientRect().top);
                        setBottomTop(bottomTop);
                }}/>
        </RightSpan>) : 
        <RightSpan style={{
                marginTop: `${i.id === currentRight ?
                        100*currentRight + 44*activeRightIndex[currentRight]: null}px`,       
                        }}>
                <NormalRImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${ pos[activeDot+'-left'] + 58 + 140*index}px`,
                }}
                ref={e=>{
                        if(!e){
                                return;
                        }
                        bottomTop[index] = (e.getBoundingClientRect().top);
                        setBottomTop(bottomTop);
                }}/>
        </RightSpan>}


                {/* {(rightImg.length) === index ? null : (
                <LargeRowLine style={{
                        marginLeft: `${ pos[activeDot+'-left']  - 210}px`,
                        marginTop: `${i.id === currentRight ?
                                100*currentRight + 44*activeRightIndex[currentRight] + 148: null}px`,
                                width: `${140*index + 78}px`,
                                zIndex: '-4'
                        }}
                key={index+'--icon'} />) } */}

                {/* dots start */}
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
