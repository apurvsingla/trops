import React from 'react';
import {
BottomSpan,
Img,
LargeColLine,
} from '../Middle.style';
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
import '../Middle.styles.scss';
import ScrollBottom from './Scroll/ScrollBottom';

const BottomImgs = ({i, index, activeLink, bottomImg, activeDot,
                appearDot, setAppearDot, setBottomImg, marks, valueLabelFormat
}) => {
        const func = (e) => {
                const num = Number(i.id);
                if(appearDot[num] === true){
                        appearDot[num] = false;
                }else{
                        appearDot[num] = true;
                }
                setAppearDot(appearDot);
                let newArray = [...bottomImg];
                newArray.forEach((val, index) => {
                        const array = newArray[index]
                        if(array.id === num+1){
                                if(appearDot[num] === true){
                                        newArray[index] = {id: array.id, src: array.src, bool: false, pos: 'normal', bottomPos: array.bottomPos, trackValue: array.trackValue};
                                }else{
                                        newArray[index] = {id: array.id, src: array.src, bool: true, pos: 'normal', bottomPos: array.bottomPos, trackValue: array.trackValue};  
                                }
                        }
                })
                setBottomImg(newArray);
            }

            const [mQuery, setMQuery] = React.useState({
                matches: window.innerWidth > 892 ? true : false,
            });
         
            React.useEffect(() => {
                let mediaQuery = window.matchMedia("(max-width: 892px)");
                mediaQuery.addListener(setMQuery);
                return () => mediaQuery.removeListener(setMQuery);     
            }, []);

            const glowDot = () => {
                if(i.bool){
                        return(<span 
                         className='glow-small-bottom'
                         key={index}
                         style={{
                                // top: `${140*index}px`,
                                marginTop: `${140*i.trackValue}px`,
                                left: `${140*i.bottomPos}px`,
                                backgroundColor: `${'red'}`,
                                position: 'absolute',
                         }}
                         />)
                }
            }
        
            const glowGraph = () => {
                    if(i.bool){
                            return(<span className="graphDesign-bottom"
                            style={{
                                marginTop: `${140*i.trackValue}px`,
                                left: `${140*i.bottomPos}px`,
                                position: 'absolute',
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
                                                height: `${i.bools*4 + 5 }px`,
                                                width: `${i.bools*4 + 5}px`,
                                                backgroundColor: `${true ?'red':null}`,
                                                borderRadius: '50px',
                                                zIndex: '15',
                                                position: 'absolute',
                                                left: `${140*i.bottomPos + 152 - 2*i.bools}px`,
                                                marginTop: `${140*i.trackValue}px`,
                                                top: `${175 -2*i.bools}px`,
                                                // left: `${140*i.bottomPos- 22}px`,
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
                                                height: `${i.bools*7 + 5 }px`,
                                                width: `${i.bools*7 + 5}px`,
                                                backgroundColor: `${true ?'red':null}`,
                                                borderRadius: '50px',
                                                zIndex: '15',
                                                position: 'absolute',
                                                left: `${140*i.bottomPos - 3.3*i.bools + 166}px`,
                                                marginTop: `${140*i.trackValue + 220 - 3*i.bools}px`,
                                                // left: `${140*i.bottomPos + 132}px`,
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
                                        height: `${i.bools*4 + 5 }px`,
                                        width: `${i.bools*4 + 5}px`,
                                        // marginLeft: `${140*i.bottomPos - 100 - 4*i.bools}px`,
                                        left: `${140*i.bottomPos - 2.1*i.bools + 27}px`,
                                        marginTop: `${140*i.trackValue + 125 - 2.3*i.bools}px`,
                                }}
                        />)
                        }
                }else{
                        if(i.bools){
                                return(<span className="graphDesign-bottom"
                                style={{
                                        height: `${i.bools*7 + 5 }px`,
                                        width: `${i.bools*7 + 5}px`,
                                        // marginLeft: `${140*i.bottomPos - 100 - 4*i.bools}px`,
                                        left: `${140*i.bottomPos - 3.3*i.bools + 166}px`,
                                        marginTop: `${140*i.trackValue + 220 - 3*i.bools}px`,
                                        
                                }}
                        />)
                        }
                }
            } 

    return(<>
        <BottomSpan>
                <Img src={i.src} alt="alt"
                style={{
                        marginLeft: `${(140*i.bottomPos) + 20}px`,
                        marginTop: `${140*i.trackValue + 20}px`,
                }} />
        </BottomSpan>

        {(bottomImg.length) === index ? null : (
                <LargeColLine style={{
                        marginLeft: `${140*i.bottomPos}px`,
                        height: `${i.trackValue? 140*i.trackValue + 108 : 108}px`,
                        zIndex: '-2'
                        }}
                key={index+'--icon'} />) }

                {(i.src === tactSource) 
                ? (
                <>
                <span 
                className="bottom-middle-dot"
                onTouchStart={(e) => func(e)}
                onTouchEnd={(e) => func(e)}
                onClick={(e,arr) => {
                        func(e,arr);
                }}
                style={{
                //       top: `${140*index + 110}px`,
                      cursor: 'pointer',
                      marginTop: `${140*i.trackValue}px`,
                      left: `${140*i.bottomPos}px`,
                      
                }}
                key={index+'-middle'}
                id={index}
                /> 
                </>
        ): null}

        {(i.src===lightSource)|| (i.src === tempSource) || 
        (i.src === soundSource) ||(i.src === magSource) ||
        (i.src === distanceSource)
                ? 
                <>
                {mQuery && !mQuery.matches ? <ScrollBottom marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                index={index}
                i={i}
                id={i.id}
                key={index + '-scroll'}
                bottomImg={bottomImg} setBottomImg={setBottomImg}
                className="bottom-scroll"
                style={{
                        top: `${185}px`,
                        cursor: 'pointer',
                        marginTop: `${140*i.trackValue}px`,
                      left: `${140*i.bottomPos + 137}px`
                }}
                />: <ScrollBottom marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                index={index}
                i={i}
                id={i.id}
                key={index + '-scroll'}
                bottomImg={bottomImg} setBottomImg={setBottomImg}
                className="bottom-scroll"
                style={{
                        top: `${255}px`,
                        cursor: 'pointer',
                        marginTop: `${140*i.trackValue}px`,
                      left: `${140*i.bottomPos + 152}px`
                }}
                />}
                
                </>
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
        
        {i.src === conditionSource ? 
        <>
         {mQuery && !mQuery.matches  ?
        <span 
        className="right-dot-bottom"
        style={{
                cursor: 'pointer',
                marginTop: `${140*i.trackValue + 175}px`,
                left: `${140*i.bottomPos + 172}px`
                }}
                onClick={(e) => activeLink(e,index)}
                id={index+'-right'}
                key={index+'-right'}
                />: <span 
        className="right-dot-bottom"
        style={{
                cursor: 'pointer',
                marginTop: `${140*i.trackValue + 227}px`,
                left: `${140*i.bottomPos + 202}px`
                }}
                onClick={(e) => activeLink(e,index)}
                id={index+'-right'}
                key={index+'-right'}
                />}
        </>
        : null }
        </>)
}

export default BottomImgs;
