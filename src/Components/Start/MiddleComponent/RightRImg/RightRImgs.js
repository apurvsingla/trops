import React from 'react';
import {
BottomSpan,
// LargeColLine,
Img
} from '../Middle.style';
import {conditionSource} from '../Source/source';


const RightRImgs = ({i,index,pos,activeDot,activeDotRight,activeRightBottomIndex,
        currentRightDot,rightRImg, posRight,activeSecondRightLink,
        setActiveDotRight,setPosRight}) => {
    return(<>
        <BottomSpan style={{left: `60px`,}}>
                <Img src={i.src} alt="alt"
                style={{
                        
                        left: `${ i.id === currentRightDot ?
                                 pos[activeDot+'-left'] + 140*currentRightDot: null }px`,
                }} />
        </BottomSpan>

        {/* {(rightRImg.length) === index ? null : (
        <LargeColLine style={{
                marginLeft: `${i.id === currentRightDot ?  
                        pos[activeDot+'-left'] + 140*currentRightDot - 61: null}px`,
                height: `${140*index +78}px`,
                zIndex: '-2',
                top: `${i.id === currentRightDot ?
                         pos[activeDot+ '-left'] - 65: null}px`
                }}
        key={index+'--icon'} />) } */}
        
        {i.src === conditionSource ? 
        <>
        <span 
        className="right-dot-bottom"
        style={{
                marginTop: `${i.id === currentRightDot ? 10*currentRightDot + 80 -2*index: null}px`,
                marginLeft: `${i.id ===currentRightDot ?pos[activeDot+'-left']+ 140*activeRightBottomIndex[currentRightDot] + 18: null}px`
                }}
                onClick={(e) => activeSecondRightLink(e,index)}
                id={index+'-right'}
                key={index+'-right'}
                ref={e => {
                        if(!e){
                                return;
                        }
                        posRight[activeDotRight + '-left'] = (e.getBoundingClientRect().left);
                        setPosRight(posRight);
                        setActiveDotRight(index);
                }}
                />
        </>
        : null }
        </>)
}

export default RightRImgs;
