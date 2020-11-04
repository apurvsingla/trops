/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

import {v4} from 'uuid';
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
    const [displayDot1, setDisplayDot1] = useState(true);
    const [displayDot2, setDisplayDot2] = useState(false);
    const [displayDot3, setDisplayDot3] = useState(false);
    const [img1, setImg1] = useSessionStorage('img1', []);
    const [img2, setImg2] = useSessionStorage('img2', []);
    const [img3, setImg3] = useSessionStorage('img3', []);
    const [img4, setImg4] = useSessionStorage('img4', []);
    const [img5, setImg5] = useSessionStorage('img5', []);
    const [img6, setImg6] = useSessionStorage('img6', []);
    const [img7, setImg7] = useSessionStorage('img7', []);
    const [img8, setImg8] = useSessionStorage('img8', []);
    const [img9, setImg9] = useSessionStorage('img9', []);

    const history = useHistory();

    const back = () => {
        history.push('/sandbox');
    }

    // populating images
    const onImage1Concat = () => {
        setImg1(img1 => img1.concat({id: v4()}));
    }

    const onImage2Concat = () => {
        setImg2(img2 => img2.concat({id: v4()}));
    }

    const onImage3Concat = () => {
        setImg3(img1 => img1.concat({id: v4()}));
    }

    const onImage4Concat = () => {
        setImg4(img1 => img1.concat({id: v4()}));
    }
    
    const onImage5Concat = () => {
        setImg5(img1 => img1.concat({id: v4()}));
    }

    const onImage6Concat = () => {
        setImg6(img1 => img1.concat({id: v4()}));
    }

    const onImage7Concat = () => {
        setImg7(img1 => img1.concat({id: v4()}));
    }

    const onImage8Concat = () => {
        setImg8(img1 => img1.concat({id: v4()}));
    }

    const onImage9Concat = () => {
        setImg9(img1 => img1.concat({id: v4()}));
    }

    //swipe
    let reactSwipeEl;

    return (
        <div>
           <Graph style={{position: 'absolute'}}/>
           <div style={{
               display: 'flex',
               flexDirection: 'column',
           }}>
            <Back width="120" height="120"
                style={{position: 'absolute'}}
                onClick={() => back()}
            />
            <Retry width="120" height="120" 
            style={{position: 'absolute',
                    top: '75px'
                }}
            />
           </div>

            {/* Middle Component render */}
            <MiddleComponent img1={img1} 
            img2={img2} img3={img3}
            img5={img5} img4={img4}
            img6={img6} img7={img7}
            img8={img8} img9={img9}
            />
            {/* end */}

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
                    <Icon onClick={() => onImage1Concat()}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/beeper.png'} 
                    alt="beeper" width="60" />

                    <MiddleIcon onClick={() => onImage2Concat()}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/condition.png'} 
                    alt="beeper" 
                    width="60" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>

                    <Icon onClick={() => onImage3Concat()} />
                    <img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                    alt="beeper" width="65" />
                </div>

                <div className={JSON.stringify(displayDot2)} onTouchEnd={() => {
                    setDisplayDot2(true);
                    setDisplayDot1(false);
                    setDisplayDot3(false);
                }}>
                    <Icon onClick={() => onImage4Concat()}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                    alt="beeper" width="65" />

                    <MiddleIcon onClick={() => onImage5Concat()}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/LED.png'} 
                    alt="beeper" 
                    width="60" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>
                    
                    <Icon onClick={() => onImage6Concat()}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/light.png'} 
                    alt="beeper" width="65" />
                </div>

                <div className={JSON.stringify(displayDot3)} onTouchEnd={() => {
                    setDisplayDot2(false);
                    setDisplayDot1(false);
                    setDisplayDot3(true);
                }}>
                    <Icon onClick={() => onImage7Concat()}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/Magnetic.png'} 
                    alt="beeper" width="65" />
                    
                    <MiddleIcon onClick={() => onImage8Concat()}/>
                    <img src={process.env.PUBLIC_URL + '/images/components/Motor.png'} 
                    alt="beeper" 
                    width="65" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>
                    
                    <Icon onClick={() => onImage9Concat()}/>
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
        </div>
    );
}

export default Start;
