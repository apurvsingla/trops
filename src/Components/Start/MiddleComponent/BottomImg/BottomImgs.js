import React from 'react';
import {
BottomSpan,
Img,
LargeColLine
} from '../Middle.style';
import {conditionSource} from '../Source/source';
import '../Middle.styles.scss';

const BottomImgs = ({i, current, activeIndex, index, activeLink, pos, 
    setPos, setActiveDot, bottomImg, activeDot}) => {
    return(<>
        <BottomSpan>
                <Img src={i.src} alt="alt"
                style={{
                        left: `${i.id === current ? (140*activeIndex[current]) + 20: null}px`,
                }} />
        </BottomSpan>

        {(bottomImg.length) === index ? null : (
                <LargeColLine style={{
                        marginLeft: `${i.id === current ? 140*activeIndex[current]: null}px`,
                        height: `${140*index + 78}px`,
                        zIndex: '-2'
                        }}
                key={index+'--icon'} />) }
        
        {i.src === conditionSource ? 
        <>
        <span 
        className="right-dot-bottom"
        style={{
                marginTop: `${i.id === current ? 10*current + 70 -2*index: null}px`,
                marginLeft: `${i.id ===current ? 140*activeIndex[current] + 80: null}px`
                }}
                onClick={(e) => activeLink(e,index)}
                id={index+'-right'}
                key={index+'-right'}
                ref={e => {
                        if(!e){
                                return;
                        }
                        pos[index + '-left'] = (e.getBoundingClientRect().left);
                        setPos(pos);
                        setActiveDot(index);
                }}
                />
        </>
        : null }
        </>)
}

export default BottomImgs;
