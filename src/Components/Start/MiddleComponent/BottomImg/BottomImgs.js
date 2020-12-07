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
                                        newArray[index] = {id: array.id, src: array.src, bool: false, pos: 'normal', bottomPos: array.bottomPos};
                                }else{
                                        newArray[index] = {id: array.id, src: array.src, bool: true, pos: 'normal', bottomPos: array.bottomPos};  
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
                                marginLeft: `${130+140*i.bottomPos}px`,
                                marginTop: '60px',
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
                                marginLeft: `${137+140*i.bottomPos}px`,
                                marginTop: '67px',
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
                                                marginLeft: `${140*i.bottomPos - 100 - 4*i.bools}px`,
                                                marginTop: `${-4*i.bools + 100}px`,
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
                                                marginLeft: `${140*i.bottomPos - 100 - 4*i.bools}px`,
                                                marginTop: `${-4*i.bools + 100}px`,
                                                left: '272px',
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
                                        marginLeft: `${140*i.bottomPos - 100 - 4*i.bools}px`,
                                        marginTop: `${-4*i.bools + 100}px`,
                                        left: '268px',
                                }}
                        />)
                        }
                }else{
                        if(i.bools){
                                return(<span className="graphDesign-bottom"
                                style={{
                                        height: `${i.bools*7 + 5 }px`,
                                        width: `${i.bools*7 + 5}px`,
                                        marginLeft: `${140*i.bottomPos - 100 - 4*i.bools}px`,
                                        marginTop: `${-4*i.bools + 100}px`,
                                        left: '268px',
                                }}
                        />)
                        }
                }
            } 

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
                        height: `${140*index + 108}px`,
                        zIndex: '-2'
                        }}
                key={index+'--icon'} />) }

                {(i.src === tactSource) 
                ? (
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
                      marginLeft: `${162+140*i.bottomPos}px`,
                      marginTop: '125px'
                }}
                key={index+'-middle'}
                id={index}
                />
        ): null}

        {(i.src===lightSource)|| (i.src === tempSource) || 
        (i.src === soundSource) ||(i.src === magSource) ||
        (i.src === distanceSource)
                ? 
                <ScrollBottom marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                index={index}
                i={i}
                id={i.id}
                key={index + '-scroll'}
                bottomImg={bottomImg} setBottomImg={setBottomImg}
                className="bottom-scroll"
                style={{
                        // top: `${110 + 140*i.index}px`,
                        cursor: 'pointer',
                        marginLeft: `${155+140*i.bottomPos}px`,
                        marginTop: '120px'
                }}
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
        
        {i.src === conditionSource ? 
        <>
        <span 
        className="right-dot-bottom"
        style={{
                cursor: 'pointer',
                marginLeft: `${78+140*i.bottomPos}px`,
                marginTop: '100px'
                }}
                onClick={(e) => activeLink(e,index)}
                id={index+'-right'}
                key={index+'-right'}
                />
        </>
        : null }
        </>)
}

export default BottomImgs;
