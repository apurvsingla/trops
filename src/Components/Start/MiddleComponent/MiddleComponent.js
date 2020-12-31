import React from 'react';
import useSessionStorage from '../../SessionStorage/SessionStorage';
import NormalImgs from './NormalImg/NormalImg';
import BottomImgs from './BottomImg/BottomImgs';
import RightImgs from './RightImg/RightImgs';
import RightRImgs from './RightRImg/RightRImgs';
import { beeperSource, conditionSource } from './Source/source';

const marks = [
        {
          value: 0,
        },
        {
          value: 10,
        },
        {
        value: 20,
        },
        {
        value: 30,
        },
        {
        value: 40,
        },
        {
        value: 50,
        },
        {
          value: 60,
        },
        {
          value: 70,
        },
        {
          value: 80,
        },
        {
          value: 90,
        },
      ];

function valueLabelFormat(value) {
return marks.findIndex((mark) => mark.value === value) + 1;
}

const MiddleComponent = ({img1,setImg1, active, setActive, 
        activeother, setActiveother,
        activeIndex, setActiveIndex, 
        activeRightIndex, setActiveRightIndex, 
        current, setCurrent, currentRight, 
        setCurrentRight, bottomImg, rightImg,
        activeRightBottomIndex,setActiveRightBottomIndex,
        activeRightBottom,setActiveRightBottom,
        currentRightDot,setCurrentRightDot,
        rightRImg, setIndexVal, setBottomImg, id2, setTrack, track, trackValue,
        setTopPos,setId2,indexVal,setUid,uid
}) => {
        
        //media query
        // const [mQuery, setMQuery] = React.useState({
        //         matches: window.innerWidth > 892 ? true : false,
        // });

        // React.useEffect(() => {
        //         let mediaQuery = window.matchMedia("(max-width: 892px)");
        //         mediaQuery.addListener(setMQuery);
        //         return () => mediaQuery.removeListener(setMQuery);
        // }, []);

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

        const [pos, setPos] = useSessionStorage('bottom-dot-pos', {});
        const [activeDot, setActiveDot] = useSessionStorage('active-top-bottom-dot',null);
        const [bottomTop,setBottomTop] = useSessionStorage('right-img-pos', {});

        //rightR
        const [posRight,setPosRight] = useSessionStorage('right-dot-bottom',{});
        const [activeDotRight,setActiveDotRight] = React.useState(null);
        
        //red dots
        const [appearDot, setAppearDot] = useSessionStorage('appear-dot',{});
        const [appearDotRight, setAppearDotRight] = useSessionStorage('appear-dot-right',{})

        let boolean = false;
        let boolean2 = false;
        const activeLink = (e,index,normal) => {
                if(e){
                        boolean = !boolean;
                        active[normal] = boolean;
                        if(boolean === true){
                                e.target.style.color = 'green';
                        }else{
                                e.target.style.color = 'transparent';   
                        }
                        activeRightIndex[normal] = normal;
                        setActive(active);
                        setActiveRightIndex(activeRightIndex);
                        setCurrentRight(normal);
                        setIndexVal(index);
                }      
        }
        
        const activeSecondLink = (e,index) => {
                if(e){
                        boolean2 = !boolean2;
                        // const ids = Number(e.target.id);
                        activeother[index] = boolean2;
                        if(boolean2 === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'transparent';   
                        }
                        activeIndex[index] = index;
                        setActiveother(activeother);
                        setActiveIndex(activeIndex);
                        setCurrent(index);
                        setIndexVal(index);
                }
        }

        const activeSecondRightLink = (e,index) => {
                if(e){
                        boolean2 = !boolean2;
                        activeRightBottom[e.target.id] = boolean2;
                        if(boolean2 === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'transparent';   
                        }
                        activeRightBottomIndex[index] = index;
                        setActiveRightBottom(activeRightBottom);
                        setActiveRightBottomIndex(activeRightBottomIndex);
                        setCurrentRightDot(index);
                }
        }

        const deleteImage = (e,uid,indexx,id) => {
                // setImg1(i => i.filter(a => {
                //         return a.uid !== uid;
                // }));
                // setId2(id2-1);
                let newArray = [...img1];
                newArray.forEach((val,index) => {
                        const arr = newArray[index];
                        if(arr.uid === uid){
                                newArray.splice(index,1);
                        }
                        if(val.src !== conditionSource){
                                let newBottom = [...bottomImg];
                                newBottom.forEach((v,intt) => {
                                        // if(v.bottomPos === indexx){
                                        //         newBottom.splice(0,15);
                                        // }
                                        // if(uid<=v.uid){
                                        if(v.nid >= indexx){
                                                newBottom[intt] = {...newBottom[intt], bottomPos: v.bottomPos-1}     
                                        }
                                        
                                })
                                setBottomImg(newBottom);
                                setCurrent(null);
                        }
                })
                setImg1(newArray);
        }

        
        const deleteBottomImg = (e,uid) => {
                let newArray = [...bottomImg];
                newArray.forEach((val,index) => {
                        const arr = newArray[index];
                        if(arr.uid === uid){
                                // newArray.splice(index,1);
                                newArray[index] = {...arr, src: beeperSource}
                              
                        }
                })
                setBottomImg(newArray);
        }

        return(<> 
                {img1.length>=1 ? (img1.map((i,index,arr) => {
                        return(
                                <>
                                {i.pos === 'normal' ? 
                        <NormalImgs index={index} 
                        i={i} deleteImage={deleteImage} 
                        marks={marks} valueLabelFormat={valueLabelFormat}
                        activeSecondLink={activeSecondLink} 
                        img1={img1} appearDot={appearDot} 
                        setAppearDot={setAppearDot}
                        setImg1={setImg1}
                         /> : null}
                        </>
                         )
                })) : null}

                {bottomImg.length>=1 ? (bottomImg.map((i,index) => {
                        return(
                        <>
                        {i.pos === 'normal' ? 
                        <BottomImgs i={i} current={current} activeIndex={activeIndex}
                        index={index} activeLink={activeLink} pos={pos} setPos={setPos}
                        setActiveDot={setActiveDot} bottomImg={bottomImg} 
                        activeDot={activeDot} setBottomImg={setBottomImg}
                        setAppearDot={setAppearDot} appearDot={appearDot}
                        marks={marks} valueLabelFormat={valueLabelFormat}
                        track={track} trackValue={trackValue}
                        setTopPos={setTopPos} deleteImage={deleteBottomImg}
                        />
                        :null}
                        {i.pos === 'right' ? <RightImgs 
                        mQuery={dimensions} 
                        currentRight={currentRight} 
                        activeRightIndex={activeRightIndex}
                        apperDot={appearDotRight} 
                        setAppearDot={setAppearDotRight}
                        activeSecondRightLink={activeSecondRightLink}
                        bottomTop={bottomTop} 
                        index={index} setBottomTop={setBottomTop} 
                        pos={pos} i={i} activeIndex={activeIndex} 
                        setBottomImg={setBottomImg}
                        deleteImage={deleteBottomImg} appearDot={appearDot} 
                        bottomImg={bottomImg}
                        marks={marks} valueLabelFormat={valueLabelFormat}
                        /> : null}
                        </>
                        
                        )
                })) : null}
                
                {/* {rightImg.length>=1 ? (rightImg.map((i,index) => {
                        return(
                        <RightImgs mQuery={mQuery} currentRight={currentRight} activeRightIndex={activeRightIndex}
                        activeDot={activeDot} activeSecondRightLink={activeSecondRightLink} bottomTop={bottomTop} 
                        index={index} setBottomTop={setBottomTop} pos={pos} rightImg={rightImg} i={i} activeIndex={activeIndex} 
                        />
                        )
                })) : null} */}
                {rightRImg.length >=1 ? (rightRImg.map((i,index) => {
                        return(
                        <RightRImgs 
                        i={i} index={index} pos={pos} activeDot={activeDot} activeDotRight={activeDotRight} 
                        activeRightBottomIndex={activeRightBottomIndex} currentRightDot={currentRightDot} 
                        rightRImg={rightRImg} posRight={posRight} activeSecondRightLink={activeSecondRightLink} 
                        setActiveDotRight={setActiveDotRight} setPosRight={setPosRight}
                />)
                })): null}
        </>)
                
}

export default MiddleComponent;