/* eslint-disable no-unused-vars */
import React from 'react';
import {Img,
NormalImg, 
Span,
Line, 
ColumnLine} from './Middle.style';

const MiddleComponent = ({img1, active, setActive, 
        activeother, setActiveother, rightDotPosLeft, 
        setRightDotPosLeft, bottomDotPosLeft, 
        setbottomDotPosLeft, rightDotPosTop, 
        setRightDotPosTop, bottomDotPosTop, 
        setBottomDotPosTop, activeIndex, setActiveIndex, 
        activeRightIndex, setActiveRightIndex, 
        current, setCurrent, currentRight, setCurrentRight,
        bottomImg, setBottomImg, rightImg, setRightImg
}) => {
        
        
        let boolean = false;
        let boolean2 = false;
        const activeLink = (e,index) => {
                if(e){
                        boolean = !boolean;
                        active[e.target.id] = boolean;
                        e.target.className = `${boolean}-right-icondot`;
                        if(boolean === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'black';   
                        }
                        activeRightIndex[index] = index;
                        setActive(active);
                        setActiveRightIndex(activeRightIndex);
                        setCurrentRight(index);
                }
                
        }
        
        const activeSecondLink = (e,index) => {
                if(e){
                        boolean2 = !boolean2;
                        activeother[e.target.id] = boolean2;
                        e.target.className = `${boolean2}-bottom-icondot`;
                        if(boolean2 === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'black';   
                        }
                        activeIndex[index] = index;
                        setActiveother(activeother);
                        setActiveIndex(activeIndex);
                        setCurrent(index);
                }
        }
        return(
                <>
                {img1.length >= 1 ? img1.map((i,index) => 
                (
                        ((index > activeIndex[current]) && 
                activeother[activeIndex[current] + '-bottom'] === true) ? 
                (<>
                <Span style={{top: '-20px', marginTop: '-5px'}}>
                    <Img src={i.src} alt="alt"
                    style={{
                        left: `${100*activeIndex[current] + 20}px`,
                        top: `${100*index}px`
                }} />
                </Span>
                {/* line */}
                
                <span style={{
                        position: 'relative',
                        bottom: '57px'
                }}>
                <ColumnLine  style={{left: `${100*activeIndex[current] + 130}px`,
                top: `${100*index + 20}px`
                }}
                key={index+'--icon'}/>
                </span>

                {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                 <>
                 <span style={{
                        position: 'absolute',
                        left: `${100*activeIndex + 175}px`,
                        height: '15px',
                        width: '15px',
                        borderRadius: '25px',
                        backgroundColor : 'black',
                        marginTop: `${100*index + 30}px`,
                }}
                onClick={(e) => activeLink(e,index)}
                id={index+'-right'}
                key={index+'-right'}
                ref={(el) => {
                        if(!el) return;
                        rightDotPosLeft[index+'-right'] = el.getBoundingClientRect().left;
                        rightDotPosTop[index+'-bottom'] = el.getBoundingClientRect().top;
                        setRightDotPosLeft(rightDotPosLeft);
                        setRightDotPosTop(rightDotPosTop);
                }}
                />

                <span style={{
                        position: 'absolute',
                        left: `${100*activeIndex + 148}px`,
                        marginTop: `${100*index + 55}px`,
                        backgroundColor: 'black',
                        height: '15px',
                        width: '15px',
                        borderRadius: '25px'
                        }}
                        key={index+'-bottom'}
                        id={index+'-bottom'}
                        onClick={(e) => activeSecondLink(e,index)}
                        ref={(el) => {
                                if(!el) return;
                                bottomDotPosLeft[index+'-bottom'] = el.getBoundingClientRect().left;
                                bottomDotPosTop[index+'-bottom'] = el.getBoundingClientRect().top;
                                setbottomDotPosLeft(bottomDotPosLeft);
                                setBottomDotPosTop(bottomDotPosTop);
                        }}
                        />
                </>
                : null }
                </>
                ) : 
                (
                <>
                {active[activeRightIndex[currentRight] + '-right'] === true && index > 
                activeRightIndex[currentRight] ? (<Span>
                        <NormalImg src={i.src} 
                        alt="alt" 
                        style={{
                                left: `${100*index + 20}px`
                        }}/>
                </Span>) : 
                <>
                <Span>
                <NormalImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${100*index + 20}px`
                }}/>
                </Span>

                {/* line */}
                {(img1.length-1) === index ? null : (<Line 
                style={{
                        left: `${100*index + 194}px`,
                }}
                key={index+'--icon'}
                        />) }

                {/* dots */}
                {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                 <>
                 <span style={{
                        position: 'absolute',
                        left: `${100*index + 175}px`,
                        height: '15px',
                        width: '15px',
                        top: '130px',
                        borderRadius: '25px',
                        backgroundColor : 'black'
                }}
                onClick={(e) => activeLink(e,index)}
                id={index+'-right'}
                key={index+'-right'}
                ref={(el) => {
                        if(!el) return;
                        rightDotPosLeft[index+'-right'] = el.getBoundingClientRect().left;
                        rightDotPosTop[index+'-bottom'] = el.getBoundingClientRect().top;
                        setRightDotPosLeft(rightDotPosLeft);
                        setRightDotPosTop(rightDotPosTop);
                }}
                />

                <span style={{
                        position: 'absolute',
                        left: `${100*index + 148}px`,
                        top: '154px',
                        backgroundColor: 'black',
                        height: '15px',
                        width: '15px',
                        borderRadius: '25px'
                        }}
                        key={index+'-bottom'}
                        id={index+'-bottom'}
                        onClick={(e) => activeSecondLink(e,index)}
                        ref={(el) => {
                                if(!el) return;
                                bottomDotPosLeft[index+'-bottom'] = el.getBoundingClientRect().left;
                                bottomDotPosTop[index+'-bottom'] = el.getBoundingClientRect().top;
                                setbottomDotPosLeft(bottomDotPosLeft);
                                setBottomDotPosTop(bottomDotPosTop);
                        }}
                        />
                </>
                : null }
                </>
                }
               
                </>
                ))): null}
                </>)
}

export default MiddleComponent;