/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

// import {v4} from 'uuid';
import {useHistory} from 'react-router-dom';
import ReactSwipe from 'react-swipe';

import MiddleComponent from './MiddleComponent/MiddleComponent';

import {useSessionStorage} from '../SessionStorage/SessionStorage';

import {ReactComponent as Back} from './button_back.svg';
import MaximizeIcon from '@material-ui/icons/Maximize';

import {ReactComponent as Retry} from './button_retry.svg';
import {Graph,
Bottom,
Dots,
Icon,
MiddleIcon
} from './Start.styles';

import './Start.styles.scss';

const Start = () => {
    // let l = 0;
    const [displayDot1, setDisplayDot1] = useState(true);
    const [displayDot2, setDisplayDot2] = useState(false);
    const [displayDot3, setDisplayDot3] = useState(false);
    const [num, setNum] = useSessionStorage('num', 0)
    const [img1, setImg1] = useSessionStorage('img1', {});
    const [id, setId] = useSessionStorage('id', 1);
    const [key, setKey] = useSessionStorage('key', 0);

    const history = useHistory();

    const back = () => {
        history.push('/sandbox');
    }

    // populating images
    const onImage1Concat = (src) => {
        if(src!==(process.env.PUBLIC_URL + '/images/components/beeper.png')){
            if(num > 0){
                img1[id] = src;
                setImg1(img1);
                setId(id + 1);
            }
        }else if(src=== (process.env.PUBLIC_URL + '/images/components/beeper.png')){
            if(num === 1){
                return;
            }
            setNum(num+1);
            img1[num] = src;
            setImg1(img1);
        }
    }

    //swipe
    let reactSwipeEl;

    return (
        <>
           <Graph 
           style={{position: 'absolute',
                    minWidth: `${100}%`,
                    height: `${100}%`,
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
            />
           </div>

            {/* Middle Component render */}
            {/* <MiddleComponent img1={img1}/> */}
            
        {Object.values(img1).map((i, index) => {
            return(<>
                <img src={i} alt="alt" style={{width: '70px', position: 'relative', left: '100px'}}/>
                <MaximizeIcon 
                style={{
                        position: 'absolute',
                        transform: 'scale(2)',
                        left: `${100*index + 93}px`,
                        top: '41px',
                        }}
                        key={index+'--icon'}
                        />
                </>
                )
        })}
            

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