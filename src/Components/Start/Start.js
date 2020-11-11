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
MiddleIcon
} from './Start.styles';

import './Start.styles.scss';

const Start = () => {
    // + sign
    const [displayDot1, setDisplayDot1] = useState(true);
    const [displayDot2, setDisplayDot2] = useState(false);
    const [displayDot3, setDisplayDot3] = useState(false);

    //images
    const [img1, setImg1] = useSessionStorage('img1', []);
    const [bottomImg, setBottomImg] = useSessionStorage('bottom-img', []);
    const [rightImg, setRightImg] = useSessionStorage('right-img', []);
    const [id, setId] = useSessionStorage('id', 1);
    const [num, setNum] = useSessionStorage('num', 0);

    //dots active or not
    const [active, setActive] = useSessionStorage('active-right-dot', {});
    const [activeother, setActiveother] = useSessionStorage('active-bottom-dot', {});

    //right dot left pos(relative)
    const [rightDotPosLeft, setRightDotPosLeft] = useSessionStorage('right-dot-pos-left', {});
    const [bottomDotPosLeft, setbottomDotPosLeft] = useSessionStorage('bottom-dot-pos-left', {});
    //bottom dot top pos(relative)
    const [rightDotPosTop, setRightDotPosTop] = useSessionStorage('right-dot-pos-left', {});
    const [bottomDotPosTop, setBottomDotPosTop] = useSessionStorage('bottom-dot-pos-left', {});
    //index dictionary
    const [activeIndex, setActiveIndex] = useSessionStorage('active-bottom-index',{});
    const [activeRightIndex, setActiveRightIndex] = useSessionStorage('active-right-index',{});
    //active index
    const [current, setCurrent] = useSessionStorage('current-bottom',null);
    const [currentRight, setCurrentRight] = useSessionStorage('current-right',null);
    const [currentColumnRight, setCurrentColumnRight] = useSessionStorage('current-column-right', {});
    const [currentColumnBottom, setCurrentColumnBottom] = useSessionStorage('current-column-left', {});
    const [currentRowRight, setCurrentRowRight] = useSessionStorage('current-column-right', {});
    const [currentRowBottom, setCurrentRowBottom] = useSessionStorage('current-column-left', {});

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
            setBottomImg(i => i.concat({id: id, src: src}));
            setId(id+1);
        }else if(active[activeRightIndex[currentRight] + '-right'] === true){
            setRightImg(i => i.concat({id: id, src: src}));
            setId(id+1);
        }else{
            if(src!==(process.env.PUBLIC_URL + '/images/components/beeper.png')){
                if(num > 0){
                    setImg1(img1 => img1.concat({id: id, src: src}));
                    setId(id + 1);
                }
            }else if(src=== (process.env.PUBLIC_URL + '/images/components/beeper.png')){
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
                    height: `${10*(img1.length)+ 100}%`,
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
            active={active} setActive={setActive}
            activeother={activeother} 
            setActiveother={setActiveother}
            rightDotPosLeft={rightDotPosLeft} 
            setRightDotPosLeft={setRightDotPosLeft}
            bottomDotPosLeft={bottomDotPosLeft} 
            setbottomDotPosLeft={setbottomDotPosLeft}
            rightDotPosTop={rightDotPosTop} 
            setRightDotPosTop={setRightDotPosTop}
            bottomDotPosTop={bottomDotPosTop} 
            setBottomDotPosTop={setBottomDotPosTop}
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex}
            activeRightIndex={activeRightIndex} 
            setActiveRightIndex={setActiveRightIndex}
            current={current} setCurrent={setCurrent} 
            currentRight={currentRight} 
            setCurrentRight={setCurrentRight}
            bottomImg={bottomImg} setBottomImg={setBottomImg}
            rightImg={rightImg} setRightImg={setRightImg}
            currentColumnRight={currentColumnRight}
            setCurrentColumnRight={setCurrentColumnRight}
            currentColumnBottom={currentColumnBottom}
            setCurrentColumnBottom={setCurrentColumnBottom}
            currentRowBottom={setCurrentColumnBottom}
            setCurrentRowRight={setCurrentRowRight}
            setCurrentRowBottom={setCurrentRowBottom}
            currentRowRight={currentRowRight}
            />
            {/* end */}


            {/* swipeable area */}
           <Bottom>
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
                    <Icon onClick={(e) =>  onImage1Concat(process.env.PUBLIC_URL + '/images/components/beeper.png')}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/beeper.png'} 
                    alt="beeper" width="60" />

                    <MiddleIcon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/condition.png')}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/condition.png'} 
                    alt="beeper" 
                    width="60" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>

                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/distance.png')} />
                    <img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                    alt="beeper" width="65" />
                </div>

                <div className={JSON.stringify(displayDot2)} onTouchEnd={() => {
                    setDisplayDot2(true);
                    setDisplayDot1(false);
                    setDisplayDot3(false);
                }}>
                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/distance.png')}  />
                    <img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                    alt="beeper" width="65" />

                    <MiddleIcon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/LED.png')}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/LED.png'} 
                    alt="beeper" 
                    width="60" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>
                    
                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/light.png')}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/light.png'} 
                    alt="beeper" width="65" />
                </div>

                <div className={JSON.stringify(displayDot3)} onTouchEnd={() => {
                    setDisplayDot2(false);
                    setDisplayDot1(false);
                    setDisplayDot3(true);
                }}>
                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/Magnetic.png')}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/Magnetic.png'} 
                    alt="beeper" width="65" />
                    
                    <MiddleIcon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/Motor.png')}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/Motor.png'} 
                    alt="beeper" 
                    width="65" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>
                    
                    <Icon onClick={() => onImage1Concat(process.env.PUBLIC_URL + '/images/components/Power.png')}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/Power.png'} 
                    alt="beeper" width="65" />
                </div>
            </ReactSwipe>

            {/* Swipeable Dots Beggining */}
            <Dots onClick={() => {
            reactSwipeEl.slide(1);
            setDisplayDot1(true);
            setDisplayDot2(false);
            setDisplayDot3(false);
            }}
            style={{
                marginRight: '10px'
            }}
            className={JSON.stringify(displayDot1) + 'dot'}
            />
            <Dots onClick={() => {
            reactSwipeEl.slide(2);
            setDisplayDot2(true);
            setDisplayDot1(false);
            setDisplayDot3(false);
            }} 
            style={{
                marginRight: '10px'
            }}
            className={JSON.stringify(displayDot2) + 'dot'}
            />
            <Dots onClick={() => {
                reactSwipeEl.slide(3);
                setDisplayDot1(false);
                setDisplayDot2(false);
                setDisplayDot3(true);
            }} 
            className={JSON.stringify(displayDot3) + 'dot'}
            />
            {/* Swipeable Dots End */}
           </Bottom>
        </>
    );
}

export default Start;
