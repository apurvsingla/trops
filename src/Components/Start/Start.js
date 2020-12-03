/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';
import ReactSwipe from 'react-swipe';

import MiddleComponent from './MiddleComponent/MiddleComponent';

import {useSessionStorage} from '../SessionStorage/SessionStorage';
import {
lightSource,
powerSource,
tactSource,
ledSource,
beeperSource,
distanceSource,
magSource,
tempSource,
soundSource,
conditionSource,
motorSource,
graphSource
} from './MiddleComponent/Source/source';

import {ReactComponent as Back} from './button_back.svg';
import {ReactComponent as Retry} from './button_retry.svg';
import {Graph,
Bottom,
Dots,
Icon,
MiddleIcon,
Img
} from './Start.styles';

import './Start.styles.scss';

const Start = () => {

    //media query
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 892 ? true : false,
      });

    React.useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width: 892px)");
        mediaQuery.addListener(setMQuery);
        return () => mediaQuery.removeListener(setMQuery);
      }, []);

    // + sign
    const [displayDot1, setDisplayDot1] = useState(true);
    const [displayDot2, setDisplayDot2] = useState(false);
    const [displayDot3, setDisplayDot3] = useState(false);
    const [displayDot4, setDisplayDot4] = useState(false);

    //images
    const [img1, setImg1] = useSessionStorage('img1', []);
    const [bottomImg, setBottomImg] = useSessionStorage('bottom-img', []);
    const [rightImg, setRightImg] = useSessionStorage('right-img', []);
    const [rightRImg, setRightRImg]= useSessionStorage('right-bottom-Img', []);
    
    const [id, setId] = useSessionStorage('id', 1);
    const [num, setNum] = useSessionStorage('num', 0);

    //dots active or not
    const [active, setActive] = useSessionStorage('active-right-dot', {});
    const [activeother, setActiveother] = useSessionStorage('active-bottom-dot', {});
    const [activeRightBottom,setActiveRightBottom] = useSessionStorage('active-right-bottom',{}); //new for right

    //index dictionary
    const [activeIndex, setActiveIndex] = useSessionStorage('active-bottom-index',{});
    const [activeRightIndex, setActiveRightIndex] = useSessionStorage('active-right-index',{});
    const [activeRightBottomIndex, setActiveRightBottomIndex] = useSessionStorage('right-bottom-index', {}); //new for right

    //active index
    const [current, setCurrent] = useSessionStorage('current-bottom',null);
    const [currentRight, setCurrentRight] = useSessionStorage('current-right',null);
    const [currentRightDot, setCurrentRightDot] = useSessionStorage('right-right-dot', null); //new for right

    //tact
    // const [tact, setTact]= React.useState({});
    // const [lights, setLights] = React.useState({});
    // const [meter, setMeter] = React.useState(1);
    // const [lightMeter, setLightMeter] = React.useState(1);
    // const [staticVal, setStaticVal] = React.useState(null);
    const [range, setRange] = useSessionStorage('range',{});
    const [rangeMeter, setRangeMeter] = React.useState(1);
    const [staticRange, setStaticRange] = useSessionStorage('static-range',null);
    const [tactID, setTactID] = useSessionStorage('tact-id', id);
    const [ledID, setLedID] = useSessionStorage('led-id', 0);

    const history = useHistory();

    const back = () => {
        history.push('/sandbox');
    }

    const reset = () => {
        window.sessionStorage.clear();
        setImg1([]);
        setId(1);
        setNum(0);
        setBottomImg([]);
        setRightImg([]);
        setActive({});
        setActiveother({});
        setRightRImg([]);
        setActiveRightBottom({});
    }

    // populating images
    const onImage1Concat = (src) => {
        if(src === lightSource){
            range[rangeMeter] = rangeMeter;
            setRange(range);
            setStaticRange(rangeMeter);
        }
        // if(src === tactSource){
        //     tact[meter]= true;
        //     setTact(tact);
        //     setStaticVal(meter);
        // }
        // if(src === ledSource){
        //     lights[tact[staticVal] + '-tact-led'] = lightMeter;
        //     setLights(lights);
        // }
        if(activeother[activeIndex[current] + '-bottom']=== true){
            setBottomImg(i => i.concat({id: current, src: src}));
            setId(id+1);
        }else if(active[activeRightIndex[currentRight] + '-right'] === true){
            setRightImg(i => i.concat({id: currentRight, src: src}));
            setId(id+1);
        }else if(activeRightBottom[activeRightBottomIndex[currentRightDot] + '-bottom'] === true){
            setRightRImg(i=> i.concat({id: currentRightDot, src: src}));
            setId(id+1);
        }else{
            if(src!==powerSource){
                if(num > 0){
                    if(src === tactSource || src === lightSource || src === magSource){
                        setImg1(i => i.concat({id: id, src: src}));
                        setTactID(id+1);
                        setId(id+1);
                        return;
                    }else if(src === ledSource || src === graphSource || src === beeperSource || src === soundSource || src === motorSource){
                        setImg1(i => i.concat({id: id, src: src}));
                        return;
                    }else{
                        setImg1(img1 => img1.concat({id: id, src: src}));
                        setId(id + 1);
                        setRangeMeter(rangeMeter + 1);
                        return;
                    }
                }
            }else if(src=== powerSource){
                if(num === 1){
                    return;
                }
                setNum(num+1);
                setImg1(img1 => img1.concat({id: num, src: src}));
                return;
            }
        }
    }

    //swipe
    let reactSwipeEl;

    return (
        <>
           <Graph 
           style={{position: 'absolute',
                    minWidth: `${10*(img1.length)+ 100}%`,
                    height: `${20*(bottomImg.length)+ 20*(rightRImg.length) + 100}%`,
        }}/>
           <div style={{
               display: 'flex',
               flexDirection: 'column',
           }}>
            <Back width="120" height="120"
                style={{position: 'absolute', cursor: 'pointer'}}
                onClick={() => back()}
            />
            <Retry width="120" height="120" 
            style={{position: 'absolute',
                    top: '75px',
                    cursor: 'pointer'
                }}
                onClick={() => reset()}
            />
           </div>

            {/* Middle Component render */}
            <MiddleComponent img1={img1} 
            setImg1={setImg1}
            active={active} setActive={setActive}
            activeother={activeother} 
            setActiveother={setActiveother}
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex}
            activeRightIndex={activeRightIndex} 
            setActiveRightIndex={setActiveRightIndex}
            current={current} setCurrent={setCurrent} 
            currentRight={currentRight} 
            setCurrentRight={setCurrentRight}
            bottomImg={bottomImg} setBottomImg={setBottomImg}
            rightImg={rightImg} setRightImg={setRightImg}
            activeRightBottom={activeRightBottom} 
            setActiveRightBottom={setActiveRightBottom}
            activeRightBottomIndex={activeRightBottomIndex}
            setActiveRightBottomIndex={setActiveRightBottomIndex}
            currentRightDot={currentRightDot}
            setCurrentRightDot={setCurrentRightDot}
            rightRImg={rightRImg} 
            // lights={lights} tact={tact}
            range={range} staticRange={staticRange}
            setRange={setRange} setStaticRange={setStaticRange}
            rangeMeter={rangeMeter} setRangeMeter={setRangeMeter}
            tactID={tactID} ledID={ledID} setLedID={setLedID}
            />
            {/* end */}


            {/* swipeable area */}
           <Bottom>
               <>
                    {mQuery && !mQuery.matches ?( <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
                >
                <div className={JSON.stringify(displayDot1)} onTouchEnd={() => {
                    setDisplayDot2(false);
                    setDisplayDot1(true);
                    setDisplayDot3(false);
                    setDisplayDot4(false);
                    }}>
                    <Icon onClick={(e) =>  onImage1Concat(powerSource)}/>
                    <Img src={powerSource} 
                    alt="power" style={{marginRight: '20px'}}/>

                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/sequence.png')}/>
                    <Img src={process.env.PUBLIC_URL + '/images/components/sequence.png'} 
                    alt="beeper" style={{marginRight: '20px'}}/>

                    <Icon onClick={(e) =>  onImage1Concat(beeperSource)}/>
                    <Img src={beeperSource} 
                    alt="beeper" />

                    <MiddleIcon onClick={() => onImage1Concat(conditionSource)}/>
                    <Img src={conditionSource} 
                    alt="beeper" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>
                </div>
                
                <div className={JSON.stringify(displayDot2)} onTouchEnd={() => {
                    setDisplayDot2(true);
                    setDisplayDot1(false);
                    setDisplayDot3(false);
                    setDisplayDot4(false);
                }}>

                    <Icon onClick={() => onImage1Concat(graphSource)}/>
                    <Img src={graphSource} 
                    alt="beeper" style={{marginRight: '20px'}}/>

                    <Icon onClick={() => onImage1Concat(distanceSource)}  />
                    <Img src={distanceSource} 
                    alt="beeper" style={{marginRight: "20px"}}/>


                    <MiddleIcon onClick={() => onImage1Concat(ledSource)}/>
                    <Img src={ledSource} 
                    alt="beeper" 
                    style={{
                    marginRight: '20px'
                    }}/>
                    
                    <Icon onClick={() => onImage1Concat(lightSource)}/>
                    <Img src={lightSource} 
                    alt="beeper" />
                </div>

                <div className={JSON.stringify(displayDot3)} onTouchEnd={() => {
                    setDisplayDot2(false);
                    setDisplayDot1(false);
                    setDisplayDot3(true);
                    setDisplayDot4(false);
                }}>
                    <Icon onClick={() => onImage1Concat(magSource)}/>
                    <Img src={magSource} 
                    alt="beeper" style={{marginRight: '20px'}}/>

                    <Icon onClick={() => onImage1Concat(tempSource)}/>
                    <Img src={tempSource} 
                    alt="temperature" style={{marginRight: '20px'}}/>
                    
                    <MiddleIcon onClick={() => onImage1Concat(motorSource)}/>
                    <Img src={motorSource} 
                    alt="beeper" 
                    style={{
                    marginRight: '20px'
                    }}/>
                    
                    <Icon onClick={() => onImage1Concat(soundSource)}/>
                    <Img src={soundSource} 
                    alt="beeper" />
                </div>

                <div className={JSON.stringify(displayDot4)} onTouchEnd={() => {
                    setDisplayDot2(false);
                    setDisplayDot1(false);
                    setDisplayDot3(false);
                    setDisplayDot4(true);
                }}>                   
                    <Icon onClick={() => onImage1Concat(tactSource)}/>
                    <Img src={tactSource} 
                    alt="beeper" />
                    
                </div>
                </ReactSwipe>) : (
                         <ReactSwipe
                         className="carousel"
                         swipeOptions={{ continuous: true }}
                         ref={el => (reactSwipeEl = el)}
                         >
                        <div className={JSON.stringify(displayDot1)} onTouchEnd={() => {
                            setDisplayDot2(false);
                            setDisplayDot1(true);
                            setDisplayDot3(false);
                            }}>
                            <Icon onClick={(e) =>  onImage1Concat(process.env.PUBLIC_URL + '/images/components/power.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/power.png'} 
                            alt="power" style={{marginRight: '20px'}}/>
        
                            <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/sequence.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/sequence.png'} 
                            alt="beeper" style={{marginRight: '20px'}}/>
        
                            <Icon onClick={(e) =>  onImage1Concat(process.env.PUBLIC_URL + '/images/components/beeper.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/beeper.png'} 
                            alt="beeper" />
        
                            <MiddleIcon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/condition.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/condition.png'} 
                            alt="beeper" 
                            style={{
                            marginLeft: '20px',
                            marginRight: '20px'
                            }}/>
        
                            <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/distance.png')} />
                            <Img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                            alt="beeper" />
                        </div>
        
                        <div className={JSON.stringify(displayDot2)} onTouchEnd={() => {
                            setDisplayDot2(true);
                            setDisplayDot1(false);
                            setDisplayDot3(false);
                        }}>
        
                            <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/graph.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/graph.png'} 
                            alt="beeper" style={{marginRight: '20px'}}/>
        
                            <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/distance.png')}  />
                            <Img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                            alt="beeper" style={{marginRight: "20px"}}/>
        
                            <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/tact.png')}  />
                            <Img src={process.env.PUBLIC_URL + '/images/components/tact.png'} 
                            alt="magnetic" />
        
                            <MiddleIcon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/LED.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/LED.png'} 
                            alt="beeper" 
                            style={{
                            marginLeft: '20px',
                            marginRight: '20px'
                            }}/>
                            
                            <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/light.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/light.png'} 
                            alt="beeper" />
                        </div>
        
                        <div className={JSON.stringify(displayDot3)} onTouchEnd={() => {
                            setDisplayDot2(false);
                            setDisplayDot1(false);
                            setDisplayDot3(true);
                        }}>
                            <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/Magnetic.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/Magnetic.png'} 
                            alt="beeper" style={{marginRight: '20px'}}/>
        
                            <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/temperature.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/temperature.png'} 
                            alt="beeper" />
                            
                            <MiddleIcon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/Motor.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/Motor.png'} 
                            alt="beeper" 
                            style={{
                            marginLeft: '20px',
                            marginRight: '20px'
                            }}/>
                            
                            <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/sound.png')}/>
                            <Img src={process.env.PUBLIC_URL + '/images/components/sound.png'} 
                            alt="beeper" />
                        </div>
                        </ReactSwipe>
                    ) }
            </>

            {/* Swipeable Dots Beggining */}
            <Dots onClick={() => {
            reactSwipeEl.slide(1);
            setDisplayDot1(true);
            setDisplayDot2(false);
            setDisplayDot3(false);
            setDisplayDot4(false);

            }}
            style={{
                marginRight: '10px',
            }}
            className={JSON.stringify(displayDot1) + 'dot'}
            />
            <Dots onClick={() => {
            reactSwipeEl.slide(2);
            setDisplayDot2(true);
            setDisplayDot1(false);
            setDisplayDot3(false);
            setDisplayDot4(false);

            }} 
            style={{
                marginRight: '15px',
                marginLeft: '15px'
            }}
            className={JSON.stringify(displayDot2) + 'dot'}
            />
            <Dots onClick={() => {
                reactSwipeEl.slide(3);
                setDisplayDot1(false);
                setDisplayDot2(false);
                setDisplayDot3(true);
                setDisplayDot4(false);

            }} 
            style={{
                marginLeft: '30px'
            }}
            className={JSON.stringify(displayDot3) + 'dot'}
            />

            <Dots onClick={() => {
                reactSwipeEl.slide(4);
                setDisplayDot1(false);
                setDisplayDot2(false);
                setDisplayDot3(false);
                setDisplayDot4(true);
            }} 
            style={{
                marginLeft: '45px'
            }}
            className={JSON.stringify(displayDot4) + 'dot'}
            />
            {/* Swipeable Dots End */}
           </Bottom>
        </>
    );
}

export default Start;
