/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

// import {v4} from 'uuid';
import {useHistory} from 'react-router-dom';
import ReactSwipe from 'react-swipe';

import MiddleComponent from './MiddleComponent/MiddleComponent';

import {useSessionStorage} from '../SessionStorage/SessionStorage';

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
    
    const [id, setId] = useSessionStorage('id', 1);
    const [num, setNum] = useSessionStorage('num', 0);

    //dots active or not
    const [active, setActive] = useSessionStorage('active-right-dot', {});
    const [activeother, setActiveother] = useSessionStorage('active-bottom-dot', {});

    //index dictionary
    const [activeIndex, setActiveIndex] = useSessionStorage('active-bottom-index',{});
    const [activeRightIndex, setActiveRightIndex] = useSessionStorage('active-right-index',{});
    //active index
    const [current, setCurrent] = useSessionStorage('current-bottom',null);
    const [currentRight, setCurrentRight] = useSessionStorage('current-right',null);

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
    }

    // populating images
    const onImage1Concat = (src) => {
        if(activeother[activeIndex[current] + '-bottom']=== true){
            setBottomImg(i => i.concat({id: current, src: src}));
            setId(id+1);
        }else if(active[activeRightIndex[currentRight] + '-right'] === true){
            setRightImg(i => i.concat({id: currentRight, src: src}));
            setId(id+1);
        }else{
            if(src!==(process.env.PUBLIC_URL + '/images/components/power.png')){
                if(num > 0){
                    setImg1(img1 => img1.concat({id: id, src: src}));
                    setId(id + 1);
                }
            }else if(src=== (process.env.PUBLIC_URL + '/images/components/power.png')){
                if(num === 1){
                    return;
                }
                setNum(num+1);
                setImg1(img1 => img1.concat({id: num, src: src}));
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
                    height: `${20*(bottomImg.length)+ 100}%`,
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
                    top: '75px'
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
                </div>
                
                <div className={JSON.stringify(displayDot2)} onTouchEnd={() => {
                    setDisplayDot2(true);
                    setDisplayDot1(false);
                    setDisplayDot3(false);
                    setDisplayDot4(false);
                }}>

                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/graph.png')}/>
                    <Img src={process.env.PUBLIC_URL + '/images/components/graph.png'} 
                    alt="beeper" style={{marginRight: '20px'}}/>

                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/distance.png')}  />
                    <Img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                    alt="beeper" style={{marginRight: "20px"}}/>


                    <MiddleIcon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/LED.png')}/>
                    <Img src={process.env.PUBLIC_URL + '/images/components/LED.png'} 
                    alt="beeper" 
                    style={{
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
                    setDisplayDot4(false);
                }}>
                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/Magnetic.png')}/>
                    <Img src={process.env.PUBLIC_URL + '/images/components/Magnetic.png'} 
                    alt="beeper" style={{marginRight: '20px'}}/>

                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/temperature.png')}/>
                    <Img src={process.env.PUBLIC_URL + '/images/components/temperature.png'} 
                    alt="temperature" style={{marginRight: '20px'}}/>
                    
                    <MiddleIcon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/Motor.png')}/>
                    <Img src={process.env.PUBLIC_URL + '/images/components/Motor.png'} 
                    alt="beeper" 
                    style={{
                    marginRight: '20px'
                    }}/>
                    
                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/sound.png')}/>
                    <Img src={process.env.PUBLIC_URL + '/images/components/sound.png'} 
                    alt="beeper" />
                </div>

                <div className={JSON.stringify(displayDot4)} onTouchEnd={() => {
                    setDisplayDot2(false);
                    setDisplayDot1(false);
                    setDisplayDot3(false);
                    setDisplayDot4(true);
                }}>                   
                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/sound.png')}/>
                    <Img src={process.env.PUBLIC_URL + '/images/components/tact.png'} 
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
