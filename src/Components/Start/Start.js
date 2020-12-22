import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import MiddleComponent from './MiddleComponent/MiddleComponent';
import { Scrollbars } from 'react-custom-scrollbars';
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
graphSource,
sequenceSource,
splitterSource
} from './MiddleComponent/Source/source';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {ReactComponent as Back} from './button_back.svg';
import {ReactComponent as Retry} from './button_retry.svg';
import {Graph,
Bottom,
Dots,
Icon,
MiddleIcon,
Img
} from './Start.styles';
import axios from "axios";

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

      const [open, setOpen] = useState(false);
      const [clicked, setClicked] = useState(false);
      const [value, setValue] = useState(null);
      const closeModal = () => setOpen(false);

    // + sign
    const [displayDot1, setDisplayDot1] = useState(true);
    const [displayDot2, setDisplayDot2] = useState(false);
    const [displayDot3, setDisplayDot3] = useState(false);
    const [displayDot4, setDisplayDot4] = useState(false);

    //uid
    const [uid,setUid] = useSessionStorage('uid', 0);

    //images
    const [img1, setImg1] = useSessionStorage('img1', []);
    const [bottomImg, setBottomImg] = useSessionStorage('bottom-img', []);
    const [rightImg, setRightImg] = useSessionStorage('right-img', []);
    const [rightRImg, setRightRImg]= useSessionStorage('right-bottom-Img', []);
    
    const [id, setId] = useSessionStorage('id', 1);
    const [id2, setId2] = useSessionStorage('id2', 1);
    const [id3, setId3] = useSessionStorage('id3', 1);
    const [id4, setId4] = useSessionStorage('id4', 1);
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
    const [currentRightDot, setCurrentRightDot] = useSessionStorage('right-right-dot', null); 
    const [indexVal, setIndexVal] = useSessionStorage('index-val',null);
    const [track, setTrack] = useSessionStorage('track',{});
    const [trackValue, setTrackValue] = useSessionStorage('tracl-value', 0);
    const [imgTrack, setImgTrack] = useSessionStorage('imgTrack', 0);


    const [trackValueRight, setTrackValueRight] = useSessionStorage('trackValueRight', 0);
    const [trackRight, setTrackRight] = useSessionStorage('track-right',{});

    const [right, setRight] = useSessionStorage('right', {});
    const [normal, setNormal] = useSessionStorage('normal', {});

    // const [trackBottom, setTrackBottom] = useSessionStorage('track-bottom', {});
    // const [trackBottomTop, setTrackBottomTop] = useSessionStorage('track-bottom-top', {});

    const [normalId, setNormalId] = useSessionStorage('noraml-id', 0);
    const data = {
     img1: img1,
     img2: bottomImg,
     name: value
    }
    const but = () => axios.post('https://trops.herokuapp.com/', data).then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });;
    const history = useHistory();

    const back = () => {
        history.push('/sandbox');
    }

    const reset = () => {
        setImg1([]);
        setId(1);
        setNum(0);
        setBottomImg([]);
        setRightImg([]);
        setActive({});
        setActiveother({});
        setRightRImg([]);
        setActiveRightBottom({});
        setCurrent(null);
        setCurrentRight(null);
        setCurrentRightDot(null);
        setBottomImg([]);
        setRightRImg([]);
        setRightImg([]);
        setTrack({});
        setTrackValue(0);
        setIndexVal(null);
        setId2(1);
        setImgTrack(0);
        setTrackRight({});
        setTrackValueRight(0);
        setNormalId(0);
        setNormal({});
        setRight({});
        setUid(0);
    }

    // populating images
    const onImage1Concat = (src) => {
        if(activeother[activeIndex[current]]=== true){
            setId3(1);
            if(src === powerSource){
                return;
            }
            else if(src === tactSource || src === lightSource || src === magSource || src === distanceSource){
                setBottomImg(i => i.concat({id: id2+current, src: src, pos: 'normal', uid: uid, bottomPos: indexVal, trackValue: track[current], normal: normal[current]||normalId, nid: current}));
                if(track[current]){
                    track[current] = track[current]+ 1
                    setTrack(track);
                    setTrackValue(track[current]);
                }else{
                    track[current] = id2;
                    setTrack(track);
                    setTrackValue(track[current]);

                }
                setNormalId(normalId + 1);
                if(normal[current]){
                    normal[current] = normal[current]+1;
                    setNormal(normal);
                }else{
                    normal[current] = normalId+1;
                    setNormal(normal);
                }
                setUid(uid+1);
                setId2(id2+1);
                return;
            }else if(src === ledSource || src === graphSource || src === beeperSource || src === soundSource || src === motorSource){
                setBottomImg(i => i.concat({id: id2+current, nid: current, src: src, bool: false, bools: 0, pos: 'normal', uid: uid, bottomPos: indexVal, trackValue: track[current], normal: normal[current]||normalId}));
                if(track[current]){
                    track[current] = track[current]+ 1
                    setTrack(track);
                    setTrackValue(track[current]);
                }else{
                    track[current] = id2;
                    setTrack(track);
                    setTrackValue(track[current]);

                }
                setNormalId(normalId + 1);
                if(normal[current]){
                    normal[current] = normal[current]+1;
                    setNormal(normal);
                }else{
                    normal[current] = normalId+1;
                    setNormal(normal);
                }
                setUid(uid+1);
                return;
            }else{
                setBottomImg(i => i.concat({id: id2,nid: current, switchId: id2+current,src: src, pos: 'normal', bottomPos: indexVal, uid: uid ,trackValue:track[current],  normal: normal[current]||normalId}));
                if(track[current]){
                    track[current] = track[current] + 1;
                    setTrack(track);
                    setTrackValue(track[current]);

                }else{
                    track[current] = id2;
                    setTrack(track);
                    setTrackValue(track[current]);
                }
                setNormalId(normalId + 1);
                if(normal[current]){
                    normal[current] = normal[current]+1;
                    setNormal(normal);
                }else{
                    normal[current] = normalId+1;
                    setNormal(normal);
                }
                setId2(id2+1);
                setUid(uid+1);
                return;
            }
        }else if(active[activeRightIndex[currentRight]] === true){
            let obj = 0;
            if(right[current+'-'+currentRight]){
                obj = right[current+'-'+currentRight]+1
            }else{
                obj = current+1;
            }
            setBottomImg(i => i.concat({id:  obj, src: src, pos: 'right', bottomRightPos: currentRight, uid: uid, trackValue: trackRight[currentRight]}));
            if(right[current+'-'+currentRight]){
                right[current+'-'+currentRight] = right[current+'-'+currentRight] + 1;
                setRight(right);
            }else{
                right[current+'-'+currentRight] = current + 1;
                setRight(right);
            }
            if(trackRight[currentRight]){
                trackRight[currentRight] = trackRight[currentRight] + 1
                setTrackRight(trackRight);
                setTrackValueRight(trackRight[currentRight]);

            }else{
                trackRight[currentRight] = id2 + currentRight;
                setTrackRight(trackRight);
                setTrackValueRight(trackRight[currentRight]);

            }
            setId3(id3+1);
            setUid(uid+1);
            // setCurrent(current+1)
            return;
        }else if(activeRightBottom[activeRightBottomIndex[currentRightDot] + '-bottom'] === true){
            setRightRImg(i=> i.concat({id: id4, src: src, pos: 'normal', currentRightRight: currentRightDot, uid: uid}));
            setId4(id4+1);
            setUid(uid+1);
            return;
        }else{
            if(src!==powerSource){
                if(num > 0){
                    setId2(1);
                    setNormalId(0);
                    // setId3(1);
                    if(src === tactSource || src === lightSource || src === magSource || src === distanceSource){
                        setImg1(i => i.concat({id: id, src: src, pos: 'normal', uid: uid}));
                        setId(id+1);
                        setId3(id);
                        setUid(uid+1);
                    }else if(src === ledSource || src === graphSource || src === beeperSource || src === soundSource || src === motorSource){
                        setImg1(i => i.concat({id: id, src: src, bool: false, bools: 0, pos: 'normal', uid: uid}));
                        setImgTrack(imgTrack +1);
                        setUid(uid+1);
                    }else{
                        setImg1(img1 => img1.concat({id: id, src: src, pos: 'normal', uid: uid}));
                        setId(id + 1);
                        setId3(id);
                        setUid(uid+1);
                    }
                }
            }else if(src=== powerSource){
                if(num === 1){
                    return;
                }
                setNum(num+1);
                setUid(uid+1);
                setImg1(img1 => img1.concat({id: num, src: src, pos: 'normal', uid: uid}));
                return;
            }
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        but();
    }
    //swipe
    let reactSwipeEl;

    return (
        <>
        <Popup trigger={<button
        className='popup-button'
        >SAVE</button>} position="left center" style={{zIndex: '150'}}
        onClose={closeModal}
        open={open}>
             {close => (
                 <form style={{marginTop: '25px', fontWeight: 'bold',}} 
                 onSubmit={(e) => {
                     handleSubmit(e); 
                     close();
                     setClicked(true);
                     setValue("");
                     }}>
                    <label style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        Project-Name 
                        <input type="text" required value={value} onChange={handleChange}/>
                    </label>
                    <span style={{display: 'flex', justifyContent: 'space-around'}}>
                    <input type="submit" value="Submit" className="popup-input"/>
                        <input onClick={() => {
                        close();
                        }} className="popup-input" value="Cancel" type="button"/>
                    </span>
                </form>
             )}
            {/* <button onClick={() => false}>Cancel</button> */}
        </Popup>

        {clicked ? <span className="popup-form"><span>Saved Sucessfully</span> <button onClick={() => setClicked(false)} style={{marginTop: '5px', border: 'none', outline: 'none', backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '25px', cursor: 'pointer'}}>Continue</button></span>: null}
        {mQuery && !mQuery.matches ? 
         <Scrollbars style={{ width: '100vw', height: '100vh' }}>
           <Graph 
           style={{position: 'absolute',
                    minWidth: `${15*(img1.length)+ 15*(rightRImg.length)  + 100}%`,
                    height: `${25*(bottomImg.length) + 100}%`,
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
            rightRImg={rightRImg} indexVal={indexVal}
            setIndexVal={setIndexVal} 
            id2={id2}
            setTrack={setTrack}
            tack={track}
            trackRight={trackRight}
            setTrackRight={setTrackRight}
            id3={id3}
            trackValueRight={trackValueRight}
            setId2={setId2} track={track} 
            setUid={setUid} uid={uid}
            />
            {/* end */}


            {/* swipeable area */}
           <Bottom>
               <>
                 <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: true }}
                ref={el => (reactSwipeEl = el)}
                >
                <div className={JSON.stringify(displayDot1)} onTouchEnd={() => {
                    setDisplayDot2(true);
                    setDisplayDot1(false);
                    setDisplayDot3(false);
                    setDisplayDot4(false);
                    
                    }}>
                    <Icon onClick={(e) =>  onImage1Concat(powerSource)}/>
                    <Img src={powerSource} 
                    alt="power" style={{marginRight: '20px'}}/>

                    <Icon onClick={() => onImage1Concat(sequenceSource)}/>
                    <Img src={sequenceSource} 
                    alt="sequence" style={{marginRight: '20px'}}/>

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
                    setDisplayDot2(false);
                    setDisplayDot1(false);
                    setDisplayDot3(true);
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
                    setDisplayDot3(false);
                    setDisplayDot4(true);

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
                    setDisplayDot1(true);
                    setDisplayDot3(false);
                    setDisplayDot4(false);
                }}>                   
                    <Icon onClick={() => onImage1Concat(tactSource)}/>
                    <Img src={tactSource} 
                    alt="beeper" />
                    <Icon onClick={() => onImage1Concat(splitterSource)}/>
                    <Img src={splitterSource} 
                    alt="beeper" />
                    
                </div>
                </ReactSwipe>
            </>

            {/* Swipeable Dots Beggining */}
            <Dots onTouchEnd={() => {
            reactSwipeEl.slide(4);
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

            <Dots onTouchEnd={() => {
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
            <Dots onTouchEnd={() => {
                reactSwipeEl.slide(3);
                setDisplayDot2(false);
                setDisplayDot3(true);
                setDisplayDot1(false);
                setDisplayDot4(false);

            }} 
            style={{
                marginLeft: '30px'
            }}
            className={JSON.stringify(displayDot3) + 'dot'}
            />

            <Dots onTouchEnd={() => {
                reactSwipeEl.slide(1);
                setDisplayDot3(false);
                setDisplayDot4(true);
                setDisplayDot1(false);
                setDisplayDot2(false);
            }} 
            style={{
                marginLeft: '45px'
            }}
            className={JSON.stringify(displayDot4) + 'dot'}
            />
            {/* Swipeable Dots End */}
           </Bottom>
           </Scrollbars> : (
               <>
               <Graph 
           style={{position: 'absolute',
                    minWidth: `${8*(img1.length)+  8*(rightRImg.length)  + 100}%`,
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
            rightRImg={rightRImg} setIndexVal={setIndexVal}
            indexVal={indexVal}
            id2={id2}
            setTrack={setTrack}
            tack={track} trackValue={trackValue}
            setId2={setId2}  
            setUid={setUid} uid={uid}
            />
            {/* end */}


            {/* swipeable area */}
           <Bottom>
               <>
               <ArrowBackIosIcon 
               style={{
                   position: 'absolute',
                   left: '1%',
                   top: '40%',
                cursor: 'pointer',
                pointerEvents: 'all',
                zIndex: '100'
               }}
               onClick={() =>{
                    reactSwipeEl.prev()
                    setDisplayDot2(true);
                    setDisplayDot1(true);
                    setDisplayDot3(false);
                }}
               />
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
                        <Icon onClick={(e) =>  onImage1Concat(powerSource)}/>
                        <Img src={powerSource} 
                        alt="power" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={() => onImage1Concat(sequenceSource)}/>
                        <Img src={sequenceSource} 
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
    
                        <Icon onClick={() => onImage1Concat(distanceSource)} />
                        <Img src={distanceSource} 
                        alt="beeper" />
                    </div>
    
                    <div className={JSON.stringify(displayDot2)} onTouchEnd={() => {
                        setDisplayDot2(true);
                        setDisplayDot1(false);
                        setDisplayDot3(false);
                    }}>
    
                        <Icon onClick={() => onImage1Concat(graphSource)}/>
                        <Img src={graphSource} 
                        alt="beeper" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={() => onImage1Concat(distanceSource)}  />
                        <Img src={distanceSource} 
                        alt="beeper" style={{marginRight: "20px"}}/>
    
                        <Icon onClick={() => onImage1Concat(tactSource)}  />
                        <Img src={tactSource} 
                        alt="magnetic" />
    
                        <MiddleIcon onClick={() => onImage1Concat(ledSource)}/>
                        <Img src={ledSource} 
                        alt="beeper" 
                        style={{
                        marginLeft: '20px',
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
                    }}>
                        <Icon onClick={() => onImage1Concat(magSource)}/>
                        <Img src={magSource} 
                        alt="mag" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={() => onImage1Concat(tempSource)}/>
                        <Img src={tempSource} 
                        alt="temp" />
                        
                        <MiddleIcon onClick={() => onImage1Concat(motorSource)}/>
                        <Img src={motorSource} 
                        alt="motor" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
                        
                        <Icon onClick={() => onImage1Concat(soundSource)}/>
                        <Img src={soundSource} 
                        alt="sound" />
                        <Icon onClick={() => onImage1Concat(splitterSource)}/>
                        <Img src={splitterSource} 
                        alt="sound" />
                    </div>
                    </ReactSwipe>
            </>

            {/* Swipeable Dots Beggining */}
            {/* <>
            <Dots onClick={() => {
            reactSwipeEl.slide(3);
            setDisplayDot1(true);
            setDisplayDot2(false);
            setDisplayDot3(false);

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

            }} 
            style={{
                marginRight: '15px',
                marginLeft: '15px'
            }}
            className={JSON.stringify(displayDot2) + 'dot'}
            />
            <Dots onClick={() => {
                reactSwipeEl.slide(1);
                setDisplayDot1(false);
                setDisplayDot2(false);
                setDisplayDot3(true);
            }} 
            style={{
                marginLeft: '30px'
            }}
            className={JSON.stringify(displayDot3) + 'dot'}
            />
            </> */}
            {/* Swipeable Dots End */}
            <ArrowForwardIosIcon 
            style={{
                position: 'absolute',
                right: '0',
                top: '40%',
                cursor: 'pointer'
            }}
            onClick={(e) => {
                reactSwipeEl.next()
                setDisplayDot2(true);
                setDisplayDot1(false);
                setDisplayDot3(true);
            }}
            />
           </Bottom>
           </>
           )}
        </>
    );
}

export default Start;
