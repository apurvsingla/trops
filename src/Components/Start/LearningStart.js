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

// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import {ReactComponent as Back} from './button_back.svg';
import {ReactComponent as Retry} from './button_retry.svg';
import {Graph,
Bottom,
MiddleIconDesk,
Icon,
IconMobi,
Img,
BottomDeskLearn,
IconMob
} from './Start.styles';
import './Start.styles.scss';

const LearningStart = ({frontData, bottomData}) => {
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

    // + sign
    const [displayDot1, setDisplayDot1] = useState(true);
    const [displayDot2, setDisplayDot2] = useState(false);
    const [displayDot3, setDisplayDot3] = useState(false);
    // const [displayDot4, setDisplayDot4] = useState(false);

    //uid
    const [uid1,setUid1] = useSessionStorage('uid1', 0);

    //images
    const [img11, setImg11] = useSessionStorage('img11', []);
    const [bottomImg1, setBottomImg1] = useSessionStorage('bottom-img1', []);
    const [rightImg1, setRightImg1] = useSessionStorage('right-img1', []);
    const [rightRImg1, setRightRImg1]= useSessionStorage('right-bottom-Img1', []);
    
    const [id, setId] = useSessionStorage('id1', 1);
    const [id2, setId2] = useSessionStorage('id21', 1);
    const [id3, setId3] = useSessionStorage('id31', 1);
    const [id4, setId4] = useSessionStorage('id41', 1);
    const [num, setNum] = useSessionStorage('num1', 0);

    //dots active or not
    const [active, setActive] = useSessionStorage('active-right-dot1', {});
    const [activeother, setActiveother] = useSessionStorage('active-bottom-dot1', {});
    const [activeRightBottom,setActiveRightBottom] = useSessionStorage('active-right-bottom1',{}); //new for right

    //index dictionary
    const [activeIndex, setActiveIndex] = useSessionStorage('active-bottom-index1',{});
    const [activeRightIndex, setActiveRightIndex] = useSessionStorage('active-right-index1',{});
    const [activeRightBottomIndex, setActiveRightBottomIndex] = useSessionStorage('right-bottom-index1', {}); //new for right

    //active index
    const [current, setCurrent] = useSessionStorage('current-bottom1',null);
    const [currentRight, setCurrentRight] = useSessionStorage('current-right1',null);
    const [currentRightDot, setCurrentRightDot] = useSessionStorage('right-right-dot1', null); 
    const [indexVal, setIndexVal] = useSessionStorage('index-val1',null);
    const [track, setTrack] = useSessionStorage('track1',{});
    const [trackValue, setTrackValue] = useSessionStorage('tracl-value1', 0);
    const [imgTrack, setImgTrack] = useSessionStorage('imgTrack1', 0);


    const [trackValueRight, setTrackValueRight] = useSessionStorage('trackValueRight1', 0);
    const [trackRight, setTrackRight] = useSessionStorage('track-right1',{});

    const [right, setRight] = useSessionStorage('right1', {});
    const [normal, setNormal] = useSessionStorage('normal1', {});
    const [nid, setNid] = useSessionStorage('nid1', 0);

    // const [trackBottom, setTrackBottom] = useSessionStorage('track-bottom', {});
    // const [trackBottomTop, setTrackBottomTop] = useSessionStorage('track-bottom-top', {});

    const [normalId, setNormalId] = useSessionStorage('noraml-id1', 0);
    const history = useHistory();

    const back = () => {
        history.goBack();
    }


    // React.useEffect(() => {
    //     frontData.map((i,index) => {
    //         return(
    //                 <li style={{position: 'absolute', top: `${'49'}vh`, 
    //                 left: '4vw', color: 'grey', marginTop: `${4*index}vh`}}>
    //                     Select {i}
    //                 </li>
    //         )
    //     })
    // }, [])

   

    const reset = () => {
        setImg11([]);
        setId(1);
        setNum(0);
        setBottomImg1([]);
        setRightImg1([]);
        setActive({});
        setActiveother({});
        setRightRImg1([]);
        setActiveRightBottom({});
        setCurrent(null);
        setCurrentRight(null);
        setCurrentRightDot(null);
        setBottomImg1([]);
        setRightRImg1([]);
        setRightImg1([]);
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
        setUid1(0);
    }
    let j = 0;
    let pp = 0;
    // populating images
    const onImage1Concat = (src, alt) => {
        if(activeother[activeIndex[current]]=== true){
            setId3(1);
            if(src === powerSource){
                return;
            }
            else if(src === tactSource || src === lightSource || src === magSource || src === distanceSource){
                setBottomImg1(i => i.concat({id: id2+current, src: src, pos: 'normal', 
                uid: uid1, clicked: false,bottomPos: indexVal, trackValue: track[current], alt: alt,
                normal: normal[current]||normalId, nid: current}));
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
                setUid1(uid1+1);
                setId2(id2+1);
                return;
            }else if(src === ledSource || src === graphSource || src === beeperSource || src === soundSource || src === motorSource){
                setBottomImg1(i => i.concat({id: id2+current, nid: current, 
                    src: src, bool: false, bools: 0, pos: 'normal', uid: uid1, clicked: false,alt: alt,
                    bottomPos: indexVal, trackValue: track[current], normal: normal[current]||normalId}));
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
                setUid1(uid1+1);
                return;
            }else{
                setBottomImg1(i => i.concat({id: id2,nid: current, switchId: id2+current,
                    src: src, pos: 'normal', bottomPos: indexVal, uid: uid1, clicked: false,alt: alt,
                    trackValue:track[current],  normal: normal[current]||normalId}));
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
                setUid1(uid1+1);
                return;
            }
        }else if(active[activeRightIndex[currentRight]] === true){
            let obj = 0;
            if(src === powerSource){
                return;
            }else if(src === ledSource || src === graphSource || src === beeperSource || src === soundSource || src === motorSource){
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
                setBottomImg1(i => i.concat({id: obj, bools: 0, 
                    nid: currentRight+nid, src: src, pos: 'right', 
                    bool: false, bottomRightPos: currentRight, clicked: false,alt: alt,
                    uid: uid1, trackValue: trackRight[currentRight]}));
                return;
            }
            if(right[current+'-'+currentRight]){
                obj = right[current+'-'+currentRight]+1
            }else{
                obj = current+1;
            }
            setBottomImg1(i => i.concat({id:  obj, src: src, clicked: false,alt: alt,
                nid: currentRight+nid,pos: 'right', bottomRightPos: currentRight, uid: uid1, 
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
            setUid1(uid1+1);
            setNid(nid + 1);
            // setCurrent(current+1)
            return;
        }else if(activeRightBottom[activeRightBottomIndex[currentRightDot] + '-bottom'] === true){
            setRightRImg1(i=> i.concat({id: id4, src: src, pos: 'normal', currentRightRight: currentRightDot, uid: uid1, clicked: false}));
            setId4(id4+1);
            setUid1(uid1+1);
            return;
        }else{
            if(src!==powerSource){
                if(num > 0){
                    setId2(1);
                    setNormalId(0);
                    // setId3(1);
                    if(src === tactSource || src === lightSource || src === magSource || src === distanceSource){
                        setImg11(i => i.concat({id: id, src: src, pos: 'normal',alt: alt, uid: uid1, clicked: false}));
                        setId(id+1);
                        setId3(id);
                        setUid1(uid1+1);
                    }else if(src === ledSource || src === graphSource || src === beeperSource || src === soundSource || src === motorSource){
                        setImg11(i => i.concat({id: id, src: src, bool: false, bools: 0, alt: alt,pos: 'normal', uid: uid1, clicked: false}));
                        setImgTrack(imgTrack +1);
                        setUid1(uid1+1);
                    }else if(src === conditionSource){
                        setImg11(img1 => img1.concat({id: id, src: src, pos: 'normal', uid: uid1, alt: alt,clicked: true}));
                        setId(id + 1);
                        setId3(id);
                        setUid1(uid1+1);
                    }else{
                        setImg11(img1 => img1.concat({id: id, src: src, pos: 'normal', uid: uid1, alt: alt,clicked: false}));
                        setId(id + 1);
                        setId3(id);
                        setUid1(uid1+1); 
                    }
                }
            }else if(src=== powerSource){
                if(num === 1){
                    return;
                }
                setNum(num+1);
                setUid1(uid1+1);
                setImg11(img1 => img1.concat({id: num, src: src, pos: 'normal', uid: uid1, alt: alt,clicked: false}));
                return;
            }
        }
    }
    //swipe
    let reactSwipeEl;

    return (
        <>
        {    dimensions.width < 892 ? <>
         <Scrollbars style={{ width: '85vw', height: '90vh'}}>
           <Graph 
           style={{position: 'absolute',
                    minWidth: `${18*(img11.length)+ 18*(bottomImg1.length)  + 100}%`,
                    height: `${30*(bottomImg1.length) + 100}%`,
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
            <MiddleComponent img1={img11} 
            setImg1={setImg11}
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
            bottomImg={bottomImg1} setBottomImg={setBottomImg1}
            rightImg={rightImg1} setRightImg={setRightImg1}
            activeRightBottom={activeRightBottom} 
            setActiveRightBottom={setActiveRightBottom}
            activeRightBottomIndex={activeRightBottomIndex}
            setActiveRightBottomIndex={setActiveRightBottomIndex}
            currentRightDot={currentRightDot}
            setCurrentRightDot={setCurrentRightDot}
            rightRImg={rightRImg1} indexVal={indexVal}
            setIndexVal={setIndexVal} 
            id2={id2}
            setTrack={setTrack}
            track={track}
            trackRight={trackRight}
            setTrackRight={setTrackRight}
            id3={id3}
            trackValueRight={trackValueRight}
            setId2={setId2} 
            setUid={setUid1} uid={uid1}
            right={right} setRight={setRight}
            id={id} setNormalId={setNormalId}
            normal={normal}
            setNormal={setNormal}
            />
            {/* end */}

            </Scrollbars>
            <div style={{position: 'fixed', bottom: '0', width: '85vw', 
            left: '0',  height: '70px',backgroundColor: 'white', zIndex: '100000000',}}>
                <h2 style={{color: 'grey', left: '50px', fontWeight: '500'}}>Description</h2>
            </div>
           <Bottom>
               <Scrollbars style={{ width: '100px', height: '100vh' ,position: 'absolute', right: '0'}}>
                <div>
                <IconMobi onClick={(e) =>  onImage1Concat(powerSource,"Power")}/>
                    <Img src={powerSource} 
                    alt="power" />

                    <IconMob onClick={() => onImage1Concat(sequenceSource, "Counter")}/>
                    <Img src={sequenceSource} 
                    alt="sequence" />

                    <IconMob onClick={(e) =>  onImage1Concat(beeperSource,"Bepeer")}/>
                    <Img src={beeperSource} 
                    alt="beeper" />

                    <IconMob onClick={() => onImage1Concat(conditionSource, "Splitter")}/>
                    <Img src={conditionSource} 
                    alt="condition" 
                    />
                </div>
                
                <div>

                    <IconMobi onClick={() => onImage1Concat(graphSource, "Graph")}/>
                    <Img src={graphSource} 
                    alt="beeper"/>

                    <IconMob onClick={() => onImage1Concat(distanceSource, "Proximity")}  />
                    <Img src={distanceSource} 
                    alt="beeper" />


                    <IconMob onClick={() => onImage1Concat(ledSource, "LED")}/>
                    <Img src={ledSource} 
                    alt="beeper" 
                    />
                    
                    <IconMob onClick={() => onImage1Concat(lightSource, "Light")}/>
                    <Img src={lightSource} 
                    alt="beeper" />
                </div>

                <div>
                    <IconMobi onClick={() => onImage1Concat(magSource, "Magnetic")}/>
                    <Img src={magSource} 
                    alt="beeper" />

                    <IconMob onClick={() => onImage1Concat(tempSource, "Temperature")}/>
                    <Img src={tempSource} 
                    alt="temperature"/>
                    
                    <IconMob onClick={() => onImage1Concat(motorSource, "Motor")}/>
                    <Img src={motorSource} 
                    alt="beeper" 
                    />
                    
                    <IconMob onClick={() => onImage1Concat(soundSource, "Sound")}/>
                    <Img src={soundSource} 
                    alt="beeper" />
                </div>

                <div>                   
                    <IconMobi onClick={() => onImage1Concat(tactSource, "Tact")}/>
                    <Img src={tactSource} 
                    alt="beeper" />
                    <IconMob onClick={() => onImage1Concat(splitterSource, "Condition")}/>
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
                    style={{height: '100vh', width: '25vw',}}
                    alt="left"/>
                </ScrollLock>
                <img src={process.env.PUBLIC_URL + 'images/extraImages/rec.png'} 
                style={{ position: 'absolute', top: '40vh', left: '-1vw', height: '60vh', width: '26vw'}}
                alt="rec"/>
                <h2 style={{position: 'absolute', top: '42vh', left: '3vw', color: 'grey'}}>Description</h2>
                {/* <ol>
                <li style={{position: 'absolute', top: `${'49'}vh`, 
                            left: '4vw', color: 'grey',}}>
                                Select Power
                            </li>
                </ol> */}
                <ul>
                {frontData.map((i,index) => {
                    if(!img11[index] || img11[index].alt !== i){
                        if(img11[j] !== frontData[j-1000]){
                            return(<li style={{position: 'absolute', top: `${'49'}vh`, 
                            left: '4vw', color: 'red',  fontWeight: '400', fontSize: '1.2rem'}}>
                            Wrong Selected
                        </li>)
                        }
                        if(j === index){
                            return(<> 
                            <li style={{position: 'absolute', top: `${'49'}vh`, 
                            left: '4vw', color: 'grey', 
                            fontSize: '1.2rem'
                            // marginTop: `${4*index}vh`
                            }}>
                                Select {i}
                            </li>
                            </>);
                        }
                    }               
                    j= j+1;
                    return(
                            <></>
                    )
                })}
                </ul>
                <ul>
                    <h2 style={{position: 'absolute', top: `${'55'}vh`, 
                            left: '4vw', color: 'grey', 
                            fontSize: '1.2rem'
                            // marginTop: `${4*index}vh`
                            }}>Bottom Component</h2>
                {bottomData.map((i,index) => {
                    if(!bottomImg1[index] || bottomImg1[index].alt !== i){
                        if(true){
                            return(
                                <>
                                {i === Number(i) ? <li style={{position: 'absolute', top: `${'60'}vh`, 
                                left: '4vw', color: 'grey', 
                                fontSize: '1.2rem',
                                }}>
                                    Select arrow mark at pos {i+1} 
                                </li>:
                                <li style={{position: 'absolute', top: `${'64'}vh`, 
                                left: '4vw', color: 'grey', 
                                fontSize: '1.2rem',
                                }}>
                                    Select {i}
                                </li>}
                                </>
                        )
                        }
                    } 
                    pp= pp+1;
                    return(<></>)

                })}
                </ul>
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
              
            <Scrollbars style={{ width: '90vw', height: '80vh', top: '-100vh', left: '25vw', zIndex: '150'}} >
            <Graph 
            style={{
                position: 'absolute',
                minWidth: `${8*(img11.length)+  8*(bottomImg1.length)  + 100}%`,
                height: `${25*(bottomImg1.length) + 100}%`,
                top: '0',
                zIndex: '0'
                
            }}/>
            {/* Middle Component render */}
            <MiddleComponent img1={img11} 
            setImg1={setImg11}
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
            bottomImg={bottomImg1} setBottomImg={setBottomImg1}
            rightImg={rightImg1} setRightImg={setRightImg1}
            activeRightBottom={activeRightBottom} 
            setActiveRightBottom={setActiveRightBottom}
            activeRightBottomIndex={activeRightBottomIndex}
            setActiveRightBottomIndex={setActiveRightBottomIndex}
            currentRightDot={currentRightDot}
            setCurrentRightDot={setCurrentRightDot}
            rightRImg={rightRImg1} setIndexVal={setIndexVal}
            indexVal={indexVal}
            id2={id2}
            setTrack={setTrack}
            track={track} trackValue={trackValue}
            setId2={setId2}  
            setUid={setUid1} uid={uid1}
            right={right} setRight={setRight} id={id}
            setNormal={setNormal} setNormalId={setNormalId}
            normal={normal}
            />
             </Scrollbars>
            {/* end */}


            {/* swipeable area */}
           <BottomDeskLearn>
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
           </BottomDeskLearn>
           {/* </Scrollbars> */}
           </>
           )}
        </>
    );
}

export default LearningStart;