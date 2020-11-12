import React from 'react';
import {Img,
NormalImg, 
Span,
Line, 
// ColumnLine,
// columnLineSpan,
RightSpan} from './Middle.style';

const MiddleComponent = ({img1, active, setActive, 
        activeother, setActiveother,
        activeIndex, setActiveIndex, 
        activeRightIndex, setActiveRightIndex, 
        current, setCurrent, currentRight, 
        setCurrentRight, bottomImg, rightImg,
        //unused
        currentColumnRight, setCurrentColumnRight,
        currentColumnBottom, setCurrentColumnBottom, 
        currentRowRight, setCurrentRowRight,
        currentRowBottom, setCurrentRowBottom,
        rightRImg, setRightRImg,
        bottomBImg, setBottomBImg
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
        return(<> 
                {img1.length>=1 ? (img1.map((i,index) => {
                        return(<>
                                <Span>
                                        <NormalImg src={i.src} 
                                        alt="alt" 
                                        style={{
                                                left: `${100*index + 20}px`
                                        }}/>
                                </Span>

                                 {/* line */}
                                {(img1.length-1) === index ? null : (
                                <Line style={{
                                        left: `${100*index + 194}px`,
                                        }}
                                key={index+'--icon'} />) }

                                {/* line end */}

                                {/* dots start */}
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
                                        />
                                </>
                                : null }
                                {/* dots end */}
                        </>)
                })) : null}

                {bottomImg.length>=1 ? (bottomImg.map((i,index) => {
                        return(<>
                         {/* {activeother[activeIndex[current] + '-bottom'] === true} */}
                                <Span style={{top: `${175}px`}}>
                                <Img src={i.src} alt="alt"
                                style={{
                                        left: `${i.id === current ?100*activeIndex[current] + 20: null}px`,
                                        top: `${i.id === current ? 0: null}px`,
                                        // marginTop: `${100*index}px`
                                }} />
                        </Span>
                        {/* line */}
                
                        {/* <columnLineSpan>
                                <span  style={{left: `${i.id === current ? 100*activeIndex[current] + 130: null}px`,
                                marginTop: `${i.id === current ? 2*activeIndex[current]: null}px`,
                                width: '4px',
                                height: `${40*activeIndex[current]}px`,
                                backgroundColor: 'black',
                                position: 'absolute'
                                }}
                                key={index+'--icon'}/>
                        </columnLineSpan> */}
                        {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                        <>
                        <span style={{
                                position: 'absolute',
                                left: `${i.id === current ?100*activeIndex[current] + 175: null}px`,
                                height: '15px',
                                width: '15px',
                                borderRadius: '25px',
                                backgroundColor : 'black',
                                marginTop: `${i.id === current ? index + 130 : null}px`
                                }}
                                onClick={(e) => activeLink(e,index)}
                                id={index+'-right'}
                                key={index+'-right'}
                                />

                        <span style={{
                                position: 'absolute',
                                left: `${i.id === current ? 100*activeIndex[current] + 148 : null}px`,
                                marginTop: `${i.id === current ? index + 150 : null}px`,
                                backgroundColor: 'black',
                                height: '15px',
                                width: '15px',
                                borderRadius: '25px'
                                }}
                                key={index+'-bottom'}
                                id={index+'-bottom'}
                                onClick={(e) => activeSecondLink(e,index)}
                                />
                        </>
                        : null }
                        </>)
                })) : null}
                {rightImg.length>=1 ? (rightImg.map((i,index) => {
                        return(<>
                        <RightSpan style={{
                                left: `${i.id === currentRight ?
                                        100*activeRightIndex[currentRight] + 100 : null}px`,
                                top: `${i.id === current ? 100*activeRightIndex[currentRight] + 80: null}px`
                                        }}>
                                <NormalImg src={i.src} 
                                alt="alt" 
                                style={{
                                        left: `${100*index + 120}px`,
                                        top: '103px'
                                }}/>
                        </RightSpan>
                        {/* line */}
                        {/* {(rightImg.length-1) === index ? null : (
                                <Line style={{
                                        left: `${100*index + 393}px`,
                                        }}
                                key={index+'--icon'} />) } */}

                                {/* line end */}

                                {/* dots start */}
                                {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                                <>
                                <span style={{
                                        position: 'absolute',
                                        left: `${100*index + 375}px`,
                                        height: '15px',
                                        width: '15px',
                                        top: '130px',
                                        borderRadius: '25px',
                                        backgroundColor : 'black'
                                }}
                                onClick={(e) => activeLink(e,index)}
                                id={index+'-right'}
                                key={index+'-right'}
                                />

                                <span style={{
                                        position: 'absolute',
                                        left: `${100*index + 348}px`,
                                        top: '154px',
                                        backgroundColor: 'black',
                                        height: '15px',
                                        width: '15px',
                                        borderRadius: '25px'
                                        }}
                                        key={index+'-bottom'}
                                        id={index+'-bottom'}
                                        onClick={(e) => activeSecondLink(e,index)}
                                        />
                                </>
                                : null }
                                {/* dots end */}
                        </>)
                })) : null}

        </>)
                
}

export default MiddleComponent;