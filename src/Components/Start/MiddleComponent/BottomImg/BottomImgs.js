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
                        left: `${(140*i.bottomPos) + 20}px`,
                }} />
        </BottomSpan>

        {(bottomImg.length) === index ? null : (
                <LargeColLine style={{
                        marginLeft: `${140*i.bottomPos}px`,
                        height: `${140*index + 78}px`,
                        zIndex: '-2'
                        }}
                key={index+'--icon'} />) }
        
        {i.src === conditionSource ? 
        <>
        <span 
        className="right-dot-bottom"
        style={{
                marginTop: `${10*activeDot + 45}px`,
                marginLeft: `${140*i.bottomPos + 80}px`,
                // zIndex: '25'
                }}
                onClick={(e) => activeLink(e,index)}
                id={index+'-right'}
                key={index+'-right'}
                // ref={e => {
                //         if(!e){
                //                 return;
                //         }
                //         pos[index + '-left'] = (e.getBoundingClientRect().left);
                //         setPos(pos);
                //         setActiveDot(index);
                // }}
                />
        </>
        : null }
        </>)
}

export default BottomImgs;
