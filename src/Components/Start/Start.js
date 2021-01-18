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
import ScrollLock  from 'react-scrolllock';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {ReactComponent as Back} from './button_back.svg';
import {ReactComponent as Retry} from './button_retry.svg';
import {Graph,
Bottom,
MiddleIconDesk,
Icon,
IconMobi,
Img,
BottomDesk,
IconMob
} from './Start.styles';
import axios from "axios";

import './Start.styles.scss';

const Start = () => {
    //media query
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
    React.useEffect(() => {
    function handleResize() {
            setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
            })
            return _ => {
            window.removeEventListener('resize', handleResize)
            
            }
    }
    window.addEventListener('resize', handleResize);
    })  
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [value, setValue] = useState(null);
    const closeModal = () => setOpen(false);

    // + sign
    const [displayDot1, setDisplayDot1] = useState(true);
    const [displayDot2, setDisplayDot2] = useState(false);
    const [displayDot3, setDisplayDot3] = useState(false);
    // const [displayDot4, setDisplayDot4] = useState(false);

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
    const [nid, setNid] = useSessionStorage('nid', 0);

    const [pos, setPos] = useSessionStorage('bottom-dot-pos', {});
    const [activeDot, setActiveDot] = useSessionStorage('active-top-bottom-dot',null);
    const [bottomTop,setBottomTop] = useSessionStorage('right-img-pos', {});

    //rightR
    const [posRight,setPosRight] = useSessionStorage('right-dot-bottom',{});
    const [activeDotRight,setActiveDotRight] = React.useState(null);
    
    //red dots
    const [appearDot, setAppearDot] = useSessionStorage('appear-dot',{});
    const [appearDotRight, setAppearDotRight] = useSessionStorage('appear-dot-right',{})

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
        setAppearDotRight({});
        setAppearDot({});
        setActiveDotRight(null);
        setPosRight({});
        setPos({});
        setImg1([]);
        setBottomTop({});
        setId(1);
        setNum(0);
        setBottomImg([]);
        setActiveDot(null);
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
    const onImage1Concat = (src, alt) => {
        if(activeother[activeIndex[current]]=== true){
            setId3(1);
            if(src === powerSource){
                return;
            }
            else if(src === tactSource || src === lightSource || src === magSource || src === distanceSource){
                setBottomImg(i => i.concat({id: id2+current, src: src, pos: 'normal', 
                uid: uid, clicked: false,bottomPos: indexVal, trackValue: track[current]||0, cur:current,
                normal: normal[current]||normalId, nid: current, alt: alt}));
                if(track[current]){
                    track[current] = track[current]+ 1
                    setTrack(track);
                    // setTrackValue(track[current]);
                }else{
                    track[current] = id2;
                    setTrack(track);
                    // setTrackValue(track[current]);

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
                setBottomImg(i => i.concat({id: id2+current, nid: current, 
                    src: src, bool: false, bools: 0, pos: 'normal', uid: uid, clicked: false, cur:current,
                    bottomPos: indexVal, trackValue: track[current]||0, alt: alt, normal: normal[current]||normalId}));
                if(track[current]){
                    track[current] = track[current]+ 1
                    setTrack(track);
                    // setTrackValue(track[current]);
                }else{
                    track[current] = id2;
                    setTrack(track);
                    // setTrackValue(track[current]);

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
                setBottomImg(i => i.concat({id: id2,nid: current, switchId: id2+current,cur:current,
                    src: src, pos: 'normal', bottomPos: indexVal, uid: uid, clicked: false,
                    trackValue:track[current] || 0, alt: alt,  normal: normal[current]||normalId}));
                if(track[current]){
                    track[current] = track[current] + 1;
                    setTrack(track);
                    // setTrackValue(track[current]);
                }else{
                    track[current] = id2;
                    setTrack(track);
                    // setTrackValue(track[current]);
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
            if(src === powerSource){
                return;
            }else if(src === ledSource || src === graphSource || src === beeperSource || 
                src === soundSource || src === motorSource){
                if(right[current+'-'+currentRight]){
                    obj = right[current+'-'+currentRight]+1
                }else{
                    obj = current+1;
                }
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
                //nid h lights k liye
                setBottomImg(i => i.concat({id: obj, bools: 0, 
                    nid: currentRight+nid+1000, src: src, pos: 'right', cur:current,
                    bool: false, bottomRightPos: currentRight, clicked: false, alt: alt,
                    uid: uid, trackValue: trackRight[currentRight]}));
                return;
            }
            if(right[current+'-'+currentRight]){
                obj = right[current+'-'+currentRight]+1
            }else{
                obj = current+1;
            }
            setBottomImg(i => i.concat({id:  obj, src: src, clicked: false, cur:current,
                nid: currentRight+nid+1000,pos: 'right', bottomRightPos: currentRight, uid: uid, alt: alt, 
                trackValue: trackRight[currentRight]}));
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
            setNid(nid + 1);
            // setCurrent(current+1)
            return;
        }else if(activeRightBottom[activeRightBottomIndex[currentRightDot] + '-bottom'] === true){
            setRightRImg(i=> i.concat({id: id4, src: src, pos: 'normal', alt: alt, 
            currentRightRight: currentRightDot, uid: uid, clicked: false}));
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
                        setImg1(i => i.concat({id: id, src: src, pos: 'normal', uid: uid, clicked: false, alt: alt}));
                        setId(id+1);
                        setId3(id);
                        setUid(uid+1);
                    }else if(src === ledSource || src === graphSource || src === beeperSource || src === soundSource || src === motorSource){
                        setImg1(i => i.concat({id: id, src: src, bool: false, bools: 0, pos: 'normal', alt: alt, uid: uid, clicked: false}));
                        setImgTrack(imgTrack +1);
                        setUid(uid+1);
                    }else if(src === conditionSource){
                        setImg1(img1 => img1.concat({id: id, src: src, pos: 'normal', 
                        alt: alt, uid: uid, clicked: false}));
                        setId(id + 1);
                        setId3(id);
                        setUid(uid+1);
                    }else{
                        setImg1(img1 => img1.concat({id: id, src: src, pos: 'normal', alt: alt, uid: uid, clicked: false}));
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
                setImg1(img1 => img1.concat({id: num, src: src, pos: 'normal', alt: alt, uid: uid, clicked: false}));
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
        {clicked ? <span className="popup-form">
                    <span>Saved Sucessfully</span> 
                    <button onClick={() => setClicked(false)} 
                    style={{marginTop: '5px', border: 'none', 
                    outline: 'none', backgroundColor: 'green', 
                    color: 'white', padding: '5px', 
                    borderRadius: '25px', cursor: 'pointer'}}>Continue</button>
                </span>: null}
        {    dimensions.width < 892 ? <>
         <Scrollbars style={{ width: '85vw', height: '100vh'}}>
           <Graph 
           style={{position: 'absolute',
                    minWidth: `${18*(img1.length)+ 18*(bottomImg.length)  + 100}%`,
                    height: `${30*(bottomImg.length) + 100}%`,
        }}/>
           <div style={{
               display: 'flex',
               flexDirection: 'column',
           }}>
            <Back width="120" height="120"
                style={{position: 'absolute', zIndex: '10'}}
                onClick={() => back()}
            />
            <Retry width="120" height="120" 
            style={{position: 'absolute',
                    top: '75px',
                    cursor: 'pointer',
                    zIndex: '10'
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
            track={track}
            trackRight={trackRight}
            setTrackRight={setTrackRight}
            id3={id3}
            trackValueRight={trackValueRight}
            setId2={setId2} 
            setUid={setUid} uid={uid}
            right={right} setRight={setRight}
            id={id} setNormalId={setNormalId}
            normal={normal}
            setNormal={setNormal}
            pos={pos} activeDot={activeDot}
            bottomTop={bottomTop} posRight={posRight}
            activeDotRight={activeDotRight}
            appearDot={appearDot} appearDotRight={appearDotRight}
            setAppearDotRight={setAppearDotRight}
            setAppearDot={setAppearDot}
            setActiveDotRight={setActiveDotRight}
            setPosRight={setPosRight}
            setBottomTop={setBottomTop}
            setPos={setPos}
            setActiveDot={setActiveDot}
            />
            {/* end */}

            </Scrollbars>
            {/* <div style={{position: 'fixed', bottom: '0', width: '85vw', 
            left: '0',  height: '70px',backgroundColor: 'white', zIndex: '100000000',}}>
                <h2 style={{color: 'grey', left: '50px', fontWeight: '500'}}>Description</h2>
            </div> */}
           <Bottom>
               <Scrollbars style={{ width: '100px', height: '100vh' ,position: 'absolute', right: '0'}}>
                <div>
                <IconMobi onClick={(e) =>  onImage1Concat(powerSource, 'Power')}/>
                    <Img src={powerSource} 
                    alt="power" />

                    <IconMob onClick={() => onImage1Concat(sequenceSource, 'Counter')}/>
                    <Img src={sequenceSource} 
                    alt="sequence" />

                    <IconMob onClick={(e) =>  onImage1Concat(beeperSource, 'Beeper')}/>
                    <Img src={beeperSource} 
                    alt="beeper" />

                    <IconMob onClick={() => onImage1Concat(conditionSource, 'Splitter')}/>
                    <Img src={conditionSource} 
                    alt="condition" 
                    />
                </div>
                
                <div>

                    <IconMobi onClick={() => onImage1Concat(graphSource, 'Graph')}/>
                    <Img src={graphSource} 
                    alt="beeper"/>

                    <IconMob onClick={() => onImage1Concat(distanceSource, 'Proximity')}  />
                    <Img src={distanceSource} 
                    alt="beeper" />


                    <IconMob onClick={() => onImage1Concat(ledSource, 'LED')}/>
                    <Img src={ledSource} 
                    alt="beeper" 
                    />
                    
                    <IconMob onClick={() => onImage1Concat(lightSource, 'Light')}/>
                    <Img src={lightSource} 
                    alt="beeper" />
                </div>

                <div>
                    <IconMobi onClick={() => onImage1Concat(magSource, 'Magnetic')}/>
                    <Img src={magSource} 
                    alt="beeper" />

                    <IconMob onClick={() => onImage1Concat(tempSource, "Temperature")}/>
                    <Img src={tempSource} 
                    alt="temperature"/>
                    
                    <IconMob onClick={() => onImage1Concat(motorSource, 'Motor')}/>
                    <Img src={motorSource} 
                    alt="beeper" 
                    />
                    
                    <IconMob onClick={() => onImage1Concat(soundSource, 'Sound')}/>
                    <Img src={soundSource} 
                    alt="beeper" />
                </div>

                <div>                   
                    <IconMobi onClick={() => onImage1Concat(tactSource, 'Tact')}/>
                    <Img src={tactSource} 
                    alt="beeper" />
                    <IconMob onClick={() => onImage1Concat(splitterSource, 'condition')}/>
                    <Img src={splitterSource} 
                    alt="beeper" />
                    
                </div>
            </Scrollbars>
           </Bottom>
            </>: (
               <>
               <div style={{position: 'absoute'}}>
                   <ScrollLock>
                    <img src={process.env.PUBLIC_URL + 'images/extraImages/save.png'} 
                    style={{height: '100vh', width: '10vw',}}
                    alt="left"/>
                </ScrollLock>
                {/* <img src={process.env.PUBLIC_URL + 'images/extraImages/rec.png'} 
                style={{ position: 'absolute', top: '40vh', left: '-1vw', height: '60vh', width: '26vw'}}
                alt="rec"/>
                <h2 style={{position: 'absolute', top: '42vh', left: '3vw', color: 'grey'}}>Description</h2> */}
               </div>
               <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <Back width="120" height="120"
                    style={{position: 'absolute', pointerEvents: 'all', top: '-1vh'}}
                    onClick={() => back()}
                    className='icons'
                    
                />
                <Retry width="120" height="120" 
                style={{position: 'absolute',
                        top: '75px',
                        pointerEvents: 'all',
                    }}
                    onClick={() => reset()}
                    className='icons'
                />
           </div>
           <Popup trigger={<img src={process.env.PUBLIC_URL + '/images/extraImages/saveicon.png'} alt="i" style={{
            position: 'fixed', top: '0', right: '0', zIndex: '10000', cursor: 'pointer', pointerEvents: 'all'
        }} 
        onClick={() => setClicked(true)}
        />} position="left center" style={{zIndex: '150'}}
        onClose={closeModal}
        open={open}>
             {close => (
                 <form style={{marginTop: '10px', fontWeight: 'bold',}} 
                 onSubmit={(e) => {
                     handleSubmit(e); 
                     close();
                     setClicked(true);
                     setValue("");
                     }}>
                    <label style={{display: 'flex', flexDirection: 'column', 
                    justifyContent: 'center', alignItems: 'center'}}>
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
               <Scrollbars style={{ width: '90vw', height: '80vh', top: '-100vh', left: '10vw', zIndex: '150'}} >
               <Graph 
                style={{
                    position: 'absolute',
                    minWidth: `${8*(img1.length)+  8*(bottomImg.length)  + 100}%`,
                    height: `${25*(bottomImg.length) + 100}%`,
                    top: '0',
                    zIndex: '0'
                   
                }}/>
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
            track={track} trackValue={trackValue}
            setId2={setId2}  
            setUid={setUid} uid={uid}
            right={right} setRight={setRight} id={id}
            setNormal={setNormal} setNormalId={setNormalId}
            normal={normal} pos={pos} activeDot={activeDot}
            bottomTop={bottomTop} posRight={posRight}
            activeDotRight={activeDotRight}
            appearDot={appearDot} appearDotRight={appearDotRight}
            setAppearDotRight={setAppearDotRight}
            setAppearDot={setAppearDot}
            setActiveDotRight={setActiveDotRight}
            setPosRight={setPosRight}
            setBottomTop={setBottomTop}
            setPos={setPos}
            setActiveDot={setActiveDot}
            />
             </Scrollbars>
            {/* end */}


            {/* swipeable area */}
           <BottomDesk>
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
                        <Icon onClick={(e) =>  onImage1Concat(powerSource, "Power")} className='icons'/>
                        <Img src={powerSource} 
                        alt="power" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={() => onImage1Concat(sequenceSource, 'Counter')} className='icons'/>
                        <Img src={sequenceSource} 
                        alt="beeper" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={(e) =>  onImage1Concat(beeperSource, 'Beeper')} className='icons'/>
                        <Img src={beeperSource} 
                        alt="beeper" />
    
                        <MiddleIconDesk onClick={() => onImage1Concat(conditionSource, 'Splitter')} className='icons'/>
                        <Img src={conditionSource} 
                        alt="beeper" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
    
                        <Icon onClick={() => onImage1Concat(distanceSource, 'Proximity')} className='icons'/>
                        <Img src={distanceSource} 
                        alt="beeper" />
                    </div>
    
                    <div className={JSON.stringify(displayDot2)} onTouchEnd={() => {
                        setDisplayDot2(true);
                        setDisplayDot1(false);
                        setDisplayDot3(false);
                    }}>
    
                        <Icon onClick={() => onImage1Concat(graphSource, "Graph")} className='icons'/>
                        <Img src={graphSource} 
                        alt="beeper" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={() => onImage1Concat(distanceSource, "Proximity")} className='icons' />
                        <Img src={distanceSource} 
                        alt="beeper" style={{marginRight: "20px"}}/>
    
                        <Icon onClick={() => onImage1Concat(tactSource, "Tact")} className='icons' />
                        <Img src={tactSource} 
                        alt="magnetic" />
    
                        <MiddleIconDesk onClick={() => onImage1Concat(ledSource, "LED")} className='icons'/>
                        <Img src={ledSource} 
                        alt="beeper" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
                        
                        <Icon onClick={() => onImage1Concat(lightSource, "Light")} className='icons'/>
                        <Img src={lightSource} 
                        alt="beeper" />
                    </div>
    
                    <div className={JSON.stringify(displayDot3)} onTouchEnd={() => {
                        setDisplayDot2(false);
                        setDisplayDot1(false);
                        setDisplayDot3(true);
                    }}>
                        <Icon onClick={() => onImage1Concat(magSource, "Magnetic")} className='icons'/>
                        <Img src={magSource} 
                        alt="mag" style={{marginRight: '20px'}}/>
    
                        <Icon onClick={() => onImage1Concat(tempSource, "Temperature")} className='icons'/>
                        <Img src={tempSource} 
                        alt="temp" />
                        
                        <MiddleIconDesk onClick={() => onImage1Concat(motorSource, "Motor")} className='icons'/>
                        <Img src={motorSource} 
                        alt="motor" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
                        
                        <Icon onClick={() => onImage1Concat(soundSource, "Sound")} className='icons'/>
                        <Img src={soundSource} 
                        alt="sound" />
                        <Icon onClick={() => onImage1Concat(splitterSource, "Condition")} className='icons'/>
                        <Img src={splitterSource} 
                        alt="sound" />
                    </div>
                    </ReactSwipe>
            </>
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
           </BottomDesk>
           {/* </Scrollbars> */}
           </>
           )}
        </>
    );
}

export default Start;