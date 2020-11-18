import React from 'react';
import useSessionStorage from '../../SessionStorage/SessionStorage';

import {Img,
NormalImg, 
Span, 
RightSpan,
LargeLine,
BottomSpan,
ScrollSlider,
NormalRImg,
LargeColLine,
LargeRowLine} from './Middle.style';
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

const twentyStyle={
        backgroundColor: 'red',
        width: '40px',
        height: '40px',
        borderRadius: '25px',
        position: 'absolute'
}

const lightControl = () => {
        if(marks.value === 20){
                return twentyStyle;
        }
}
lightControl();

const MiddleComponent = ({img1,setImg1, active, setActive, 
        activeother, setActiveother,
        activeIndex, setActiveIndex, 
        activeRightIndex, setActiveRightIndex, 
        current, setCurrent, currentRight, 
        setCurrentRight, bottomImg, rightImg,
        activeRightBottomIndex,setActiveRightBottomIndex,
        activeRightBottom,setActiveRightBottom,
        currentRightDot,setCurrentRightDot,
        rightRImg
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

        const [pos, setPos] = useSessionStorage('bottom-dot-pos', {});
        const [activeDot, setActiveDot] = React.useState(null);
        const [bottomTop,setBottomTop] = useSessionStorage('right-img-pos', {});

        const [posRight,setPosRight] = useSessionStorage('right-dot-bottom',{});
        const [activeDotRight,setActiveDotRight] = React.useState(null);
        let boolean = false;
        let boolean2 = false;
        const activeLink = (e,index) => {
                if(e){
                        boolean = !boolean;
                        active[e.target.id] = boolean;
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

        const activeSecondRightLink = (e,index) => {
                if(e){
                        boolean2 = !boolean2;
                        activeRightBottom[e.target.id] = boolean2;
                        if(boolean2 === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'black';   
                        }
                        activeRightBottomIndex[index] = index;
                        setActiveRightBottom(activeRightBottom);
                        setActiveRightBottomIndex(activeRightBottomIndex);
                        setCurrentRightDot(index);
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
                                        }}
                                        onChange={() => lightControl()}
                                        />
                                ) : null}

                                {i.src === (process.env.PUBLIC_URL + '/images/components/LED.png') ? (mQuery && !mQuery.matches ? 
                                <span 
                                style={{
                                        backgroundColor: 'red',
                                        width: '20px',
                                        height: '20px',
                                        zIndex: '15',
                                        position: 'absolute',
                                        top: '75px',
                                        left: `${140*index + 145}px`,
                                        borderRadius: '25px'
                                }}
                                />
                                :
                                        <span
                                        style={{
                                                backgroundColor: 'red',
                                                width: '20px',
                                                height: '20px',
                                                zIndex: '15',
                                                position: 'absolute',
                                                left: `${140*index + 160}px`,
                                                top: '95px',
                                                borderRadius: '25px'
                                        }}
                                        >

                                        </span>
                                ): null}

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

                        {(bottomImg.length) === index ? null : (
                                <LargeColLine style={{
                                        marginLeft: `${i.id === current ? 140*activeIndex[current]: null}px`,
                                        height: `${140*index + 78}px`,
                                        zIndex: '-2'
                                        }}
                                key={index+'--icon'} />) }
                        
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
                })) : null}
                {rightImg.length>=1 ? (rightImg.map((i,index) => {
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


                                {(rightImg.length) === index ? null : (
                                <LargeRowLine style={{
                                        marginLeft: `${ pos[activeDot+'-left']  - 210}px`,
                                        marginTop: `${i.id === currentRight ?
                                                100*currentRight + 44*activeRightIndex[currentRight] + 148: null}px`,
                                                width: `${140*index + 78}px`,
                                                zIndex: '-4'
                                        }}
                                key={index+'--icon'} />) }

                                {/* dots start */}
                                {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
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
                })) : null}
                {rightRImg.length >=1 ? (rightRImg.map((i,index) => {
                         return(<>
                                <BottomSpan style={{left: `60px`,}}>
                                        <Img src={i.src} alt="alt"
                                        style={{
                                                
                                                left: `${ i.id === currentRightDot ?
                                                         pos[activeDot+'-left'] + 140*currentRightDot: null }px`,
                                        }} />
                                </BottomSpan>

                                {(rightRImg.length) === index ? null : (
                                <LargeColLine style={{
                                        marginLeft: `${i.id === currentRightDot ?  pos[activeDot+'-left'] + 140*currentRightDot - 61: null}px`,
                                        height: `${140*index + 78}px`,
                                        zIndex: '-2',
                                        top: '280px'
                                        }}
                                key={index+'--icon'} />) }
                                
                                {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
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
                })): null}
        </>)
                
}

export default MiddleComponent;