import React from 'react';

import {Img,
NormalImg, 
Span, 
RightSpan,
LargeLine,
BottomSpan,
ScrollSlider} from './Middle.style';
import './Middle.styles.scss';

const marks = [
        {
          value: 0,
        },
        {
          value: 20,
        },
        {
          value: 40,
        },
        {
          value: 60,
        },
        {
          value: 80,
        },
        {
          value: 100,
        },
      ];

function valueLabelFormat(value) {
return marks.findIndex((mark) => mark.value === value) + 1;
}

const MiddleComponent = ({img1,setImg1, active, setActive, 
        activeother, setActiveother,
        activeIndex, setActiveIndex, 
        activeRightIndex, setActiveRightIndex, 
        current, setCurrent, currentRight, 
        setCurrentRight, bottomImg, rightImg,
        //unused
        // currentColumnRight, setCurrentColumnRight,
        // currentColumnBottom, setCurrentColumnBottom, 
        // currentRowRight, setCurrentRowRight,
        // currentRowBottom, setCurrentRowBottom,
        // rightRImg, setRightRImg,
        // bottomBImg, setBottomBImg
}) => {
        
        //media query
        const [mQuery, setMQuery] = React.useState({
                matches: window.innerWidth > 892 ? true : false,
        });

        React.useEffect(() => {
                let mediaQuery = window.matchMedia("(max-width: 892px)");
                mediaQuery.addListener(setMQuery);
                return () => mediaQuery.removeListener(setMQuery);
        }, []);

        let boolean = false;
        let boolean2 = false;
        const activeLink = (e,index) => {
                if(e){
                        boolean = !boolean;
                        active[e.target.id] = boolean;
                        // e.target.className = `${boolean}-right-icondot`;
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
                        // e.target.className = `${boolean2}-bottom-icondot`;
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

        const deleteImage = (e) => {
                setImg1(i => i.filter(a => {
                        return a.id !== JSON.parse(e.target.id)
                }));
        }

        return(<> 
                {img1.length>=1 ? (img1.map((i,index) => {
                        return(<>
                                <Span>
                                        <NormalImg src={i.src} 
                                        alt="alt" 
                                        style={{
                                                left: `${100*index + 20}px`,
                                        }}
                                        id={index}
                                        onClick={(e) => deleteImage(e)}
                                        />
                                </Span>

                                 {/* line */}
                                {(img1.length-1) === index ? null : (
                                <LargeLine style={{
                                        marginLeft: `${140*index}px`,
                                        }}
                                key={index+'--icon'} />) }

                                {/* special case */}
                                {(i.src === (process.env.PUBLIC_URL + '/images/components/tact.png'))|| 
                                (i.src === (process.env.PUBLIC_URL + '/images/components/beeper.png')) || 
                                (i.src === (process.env.PUBLIC_URL + '/images/components/Motor.png')) ? (
                                        <>
                                        <span 
                                        className="middle-dot-normal"
                                        style={{
                                              marginLeft: `${140*index}px`
                                        }}
                                        key={index+'-middle'}
                                        />
                                        {/* <Slider /> */}
                                        </>
                                ): null}

                                {(i.src === (process.env.PUBLIC_URL + '/images/components/light.png'))|| 
                                (i.src === (process.env.PUBLIC_URL + '/images/components/temperature.png')) ||
                                (i.src === (process.env.PUBLIC_URL + '/images/components/sound.png')) ||
                                (i.src === (process.env.PUBLIC_URL + '/images/components/Magnetic.png')) ||
                                (i.src === (process.env.PUBLIC_URL + '/images/components/distance.png')) ? (mQuery && !mQuery.matches ?
                                        (<ScrollSlider 
                                                defaultValue={0}
                                                marks={marks}
                                                valueLabelFormat={valueLabelFormat}
                                                aria-labelledby="discrete-slider-restrict"
                                                step={null}
                                                valueLabelDisplay="auto"

                                        style={{
                                                marginLeft: `${140*index}px`,
                                                position: "absolute",
                                                width: '40px',
                                                top: '87px',
                                                left: '138px'
                                        }}/>) 
                                        :
                                        <ScrollSlider 
                                        defaultValue={0}
                                        marks={marks}
                                        valueLabelFormat={valueLabelFormat}
                                        aria-labelledby="discrete-slider-restrict"
                                        step={null}
                                        valueLabelDisplay="auto"
                                        style={{
                                                marginLeft: `${140*index}px`,
                                                position: "absolute",
                                                left: "150px",
                                                top: "120px",
                                                width: "50px",
                                        }}/>
                                ) : null}

                                {/* dots start */}
                                {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                                <>
                                <span 
                                className="bottom-dot-normal"
                                style={{
                                        marginLeft: `${140*index}px`
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
                        <BottomSpan>
                                <Img src={i.src} alt="alt"
                                style={{
                                        left: `${i.id === current ? (140*activeIndex[current]) + 20: null}px`,
                                }} />
                        </BottomSpan>
                        
                        {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
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
                                />
                        </>
                        : null }
                        </>)
                })) : null}
                {rightImg.length>=1 ? (rightImg.map((i,index) => {
                        return(<>
                        <RightSpan style={{
                                
                                top: `${i.id === currentRight ? 
                                        10*activeRightIndex[currentRight] + 194: null}px`,
                                marginTop: `${i.id === currentRight ?
                                        100*currentRight + 34*activeRightIndex[currentRight]: null}px`,       
                                        }}>
                                <NormalImg src={i.src} 
                                alt="alt" 
                                style={{
                                        left: `${140*index + 400}px`,
                                }}/>
                        </RightSpan>
                                {/* dots start */}
                                {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                                <>

                                <span 
                                className="right-right-dot"
                                style={{
                                        position: 'absolute',
                                        marginTop:`${i.id === currentRight ? 
                                                40*activeRightIndex[currentRight] + 100*currentRight: null}px`,
                                        marginLeft:`${i.id === currentRight ? 
                                                (140*index ) + 443: null}px`,
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