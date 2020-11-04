import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';
import ReactSwipe from 'react-swipe';

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
    const history = useHistory();

    const back = () => {
        history.push('/sandbox');
    }
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


           <div>
               {/* Middle */}
           </div>

           <Bottom>
            <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
                >
                <div className={JSON.stringify(displayDot1)}>
                    <Icon />
                    <img src={process.env.PUBLIC_URL + '/images/components/beeper.png'} 
                    alt="beeper" width="60" />

                    <MiddleIcon />
                    <img src={process.env.PUBLIC_URL + '/images/components/condition.png'} 
                    alt="beeper" 
                    width="60" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>

                    <Icon />
                    <img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                    alt="beeper" width="65" />
                </div>

                <div className={JSON.stringify(displayDot2)}>
                    <Icon />
                    <img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                    alt="beeper" width="65" />

                    <MiddleIcon />
                    <img src={process.env.PUBLIC_URL + '/images/components/LED.png'} 
                    alt="beeper" 
                    width="60" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>
                    
                    <Icon />
                    <img src={process.env.PUBLIC_URL + '/images/components/light.png'} 
                    alt="beeper" width="65" />
                </div>

                <div className={JSON.stringify(displayDot3)}>
                    <Icon />
                    <img src={process.env.PUBLIC_URL + '/images/components/Magnetic.png'} 
                    alt="beeper" width="65" />
                    
                    <MiddleIcon />
                    <img src={process.env.PUBLIC_URL + '/images/components/Motor.png'} 
                    alt="beeper" 
                    width="65" 
                    style={{
                    marginLeft: '20px',
                    marginRight: '20px'
                    }}/>
                    
                    <Icon />
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
