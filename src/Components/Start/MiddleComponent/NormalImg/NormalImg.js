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
conditionSource,
graphSource
} from '../Source/source';

import './Glow.scss';
import '../Middle.styles.scss';

const NormalImgs = ({index, i, deleteImage, marks, valueLabelFormat, 
     activeSecondLink, img1,setAppearDot, appearDot,setImg1
}) => {
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 892 ? true : false,
    });
 
    React.useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width: 892px)");
        mediaQuery.addListener(setMQuery);
        return () => mediaQuery.removeListener(setMQuery);     
    }, []);

    const func = (e) => {
        // boolean =!boolean;
        const num = Number(i.id);
        if(appearDot[num] === true){
                appearDot[num] = false;
        }else{
                appearDot[num] = true;
        }
        setAppearDot(appearDot);
        let newArray = [...img1];
        newArray.forEach((val, index) => {
                const array = newArray[index]
                if(array.id === num+1){
                        if(appearDot[num] === true){
                                newArray[index] = {id: array.id, src: array.src, bool: false, pos: 'normal'};
                        }else{
                                newArray[index] = {id: array.id, src: array.src, bool: true, pos: 'normal'};  
                        }
                }
        })
        setImg1(newArray);
    }

    const glowDot = () => {
        if(i.bool){
                return(<span 
                 className='glow-small'
                 key={index}
                 style={{
                         left: `${140*index}px`,
                         backgroundColor: `${'red'}`
                 }}
                 />)
        }
    }

    const glowGraph = () => {
            if(i.bool){
                    return(<span className="graphDesign"
                    style={{
                            left: `${140*index}px`,
                    }}
                    />)
            }
    }

    const rangeGlow = () => {
            if(mQuery && !mQuery.matches){
                    if(i.bools){
                        return(
                                <span
                                style={{
                                        height: `${i.bools*6 + 5 }px`,
                                        width: `${i.bools*6 + 5}px`,
                                        backgroundColor: `${true ?'red':null}`,
                                        borderRadius: '50px',
                                        zIndex: '15',
                                        position: 'absolute',
                                        top: `${92 - 4*i.bools}px`,
                                        marginLeft: `${i.bools*(-4)}px`,
                                        left: `${140*index + 162}px`,
                                        opacity: '0.7',
                                }}
                                />
                        )
                }
            }else{
                if(i.bools){
                        return(
                                <span
                                style={{
                                        height: `${i.bools*8 + 5 }px`,
                                        width: `${i.bools*8 + 5}px`,
                                        backgroundColor: `${true ?'red':null}`,
                                        borderRadius: '50px',
                                        zIndex: '15',
                                        position: 'absolute',
                                        top: `${95 - 4*i.bools}px`,
                                        marginLeft: `${i.bools*(-4)}px`,
                                        left: `${140*index + 168}px`,
                                        opacity: '0.7',
                                }}
                                />
                        )
                }
        }
    }

    const rangeGraph = () => {
        if(mQuery && !mQuery.matches){
            if(i.bools){
                return(<span className="graphDesign"
                        style={{
                                height: `${i.bools*6 + 5 }px`,
                                width: `${i.bools*6 + 5}px`,
                                top: `${92 - 4*i.bools}px`,
                                marginLeft: `${i.bools*(-4)}px`,
                                left: `${140*index + 162}px`,
                        }}
                />)
                }
        }else{
                if(i.bools){
                        return(<span className="graphDesign"
                        style={{
                                height: `${i.bools*8 + 5 }px`,
                                width: `${i.bools*8 + 5}px`,
                                top: `${95 - 4*i.bools}px`,
                                marginLeft: `${i.bools*(-4)}px`,
                                left: `${140*index + 168}px`,
                        }}
                />)
                }
        }
    } 
        
    return(<>
        <Span>
                <NormalImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${100*index + 20}px`,
                }}
                id={i.id}
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
        {(i.src === tactSource) 
                ? (
                <span 
                className="middle-dot-normal"
                onTouchStart={(e) => func(e)}
                onTouchEnd={(e) => func(e)}
                onClick={(e,arr) => {
                        func(e,arr);
                }}
                style={{
                      marginLeft: `${140*index}px`,
                      cursor: 'pointer'
                }}
                key={index+'-middle'}
                id={index}
                />
        ): null}

        {(i.src===lightSource)|| (i.src === tempSource) || 
        (i.src === soundSource) ||(i.src === magSource) ||
        (i.src === distanceSource)
                ? 
                <Scroll marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                index={index}
                id={i.id}
                key={index + '-scroll'}
                img1={img1} setImg1={setImg1}
                />
         : null}
        {(((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource)) 
        )? 
                glowDot()
     
       : null}

        {(i.src === graphSource)? 
        glowGraph()
        : null}

        {((i.src === graphSource)) ? 
            rangeGraph()
        : null}

        {(((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource)))? 
                rangeGlow()
        : null}

        

        {/* dots start */}
        {i.src === conditionSource ? 
        <span 
        className="bottom-dot-normal"
        style={{
                marginLeft: `${140*index}px`
                }}
                key={index+'-bottom'}
                id={i.id}
                onClick={(e) => activeSecondLink(e,index)}
                // onClick={true}
                />
        : null }
        {/* dots end */}
</>)
}

export default NormalImgs;