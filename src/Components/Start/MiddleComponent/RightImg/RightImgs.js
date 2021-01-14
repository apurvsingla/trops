import React from 'react';
import {
        // LargeRowLine,
// RightSpan,
NormalRImg,
// LargeRowLine
} from '../Middle.style';
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { tactSource,ledSource,beeperSource, motorSource, lightSource, tempSource, magSource, soundSource, distanceSource, graphSource } from '../Source/source';
// import {conditionSource} from '../Source/source';
import { makeStyles } from '@material-ui/core/styles';
import Loader from './Loader/Loader';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import {
GlowOne,
GlowTwo,
GlowThree,
GlowFour,
GlowFive,
GlowSix,
GlowSeven,
GlowEight
} from './Glow/GlowRight';
import {
GlowOneM,
GlowTwoM,
GlowThreeM,
GlowFourM,
GlowFiveM,
GlowSevenM,
GlowSixM,
GlowEightM
} from './Glow/GlowRightMobile';
import './Glow/GlowStyle.scss';
import Scroll from './Scroll/Scroll';

const useStyles = makeStyles({
        largeIconXL: {
                fontSize: 70,
              },
      });


const RightImgs = ({mQuery, 
//         currentRight, activeRightIndex, 
//     activeDot, activeSecondRightLink, 
    deleteRightImage,
    index, appearDot, setAppearDot, bottomImg, setBottomImg,
    marks, valueLabelFormat,
     pos, i}) => {
        const classes = useStyles();
        const func = (e) => {
                const num = Number(i.nid);
                if(appearDot[num] === true){
                        appearDot[num] = false;
                }else{
                        appearDot[num] = true;
                }
                setAppearDot(appearDot);
                let newArray = [...bottomImg];
                newArray.forEach((val, index) => {
                        const array = newArray[index]
                        if(array.nid === num+1){
                                if(appearDot[num] === true){
                                        newArray[index] = {...newArray[index], bool: false}
                                }else{
                                        newArray[index] = {...newArray[index], bool: true}  
                                }
                        }
                })
                setBottomImg(newArray);
        }
        const glowDot = () => {
                if(mQuery.width < 892){
                        if(i.bool){
                                return(
                                <><span 
                                        className='glow-small-bottom-right'
                                        key={index}
                                        style={{
                                        marginTop: `${140*i.bottomRightPos +5}px`,
                                        left: `${120*i.id + 16}px`,
                                        backgroundColor: `${'red'}`,
                                        position: 'absolute',
                                        }}
                                        />
                                        </>
                                )
                        }
                }else{
                        if(i.bool){
                                return(<span 
                                        className='glow-small-bottom-right'
                                        key={index}
                                        style={{
                                        marginTop: `${140*i.bottomRightPos +5}px`,
                                        left: `${140*i.id - 8}px`,
                                        backgroundColor: `${'red'}`,
                                        position: 'absolute',
                                        }}
                                        />)
                        }
                }
        }
        const [bool, setBool] = React.useState(true);
        const clickedImage = (e,uid) => {
            let newArray = [...bottomImg];
            newArray.forEach((val, index) => {
                    const array = newArray[index]
                    if(array.nid === uid){
                            newArray[index] = {...newArray[index], clicked: bool}
                    }
            })
            setBottomImg(newArray);
            setBool(!bool);
        }
        const glowGraph = () => {
                if(mQuery.width < 892){
                        if(i.bool){
                        return(<>
                        <GlowEightM 
                        index={i.bottomRightPos} bottom={i.id}
                        />
                        </>)
                        }
                }else{
                    if(i.bool){
                        return(<>
                        <GlowEight 
                        index={i.bottomRightPos} bottom={i.id}
                        />
                        </>)
                    }
                }
        } 
        const rangeGlow = () => {
                    if(mQuery.width<892){
                            if(i.bools){
                                return(
                                        <span
                                        style={{
                                                height: `${i.bools*6 }px`,
                                                width: `${i.bools*6 }px`,
                                                backgroundColor: `${true ?'red':null}`,
                                                borderRadius: '50px',
                                                zIndex: '15',
                                                position: 'absolute',
                                                left: `${120*i.id  +197 - 3*i.bools}px`,
                                                marginTop: `${140*i.bottomRightPos + 5}px`,
                                                top: `${175 -3*i.bools}px`,
                                                opacity: '0.7', 
                                        }}
                                        />
                                )
                        }
                    }else{
                        if(i.bools){
                                return(
                                        <span
                                        style={{
                                                height: `${i.bools*7 + 5 }px`,
                                                width: `${i.bools*7 + 5}px`,
                                                backgroundColor: `${true ?'red':null}`,
                                                borderRadius: '50px',
                                                zIndex: '15',
                                                position: 'absolute',
                                                left: `${140*i.id  + 160 - 3.3*i.bools}px`,
                                                marginTop: `${140*i.bottomRightPos + 5}px`,
                                                top: `${220 -3*i.bools}px`,
                                                opacity: '0.7', 
                                        }}
                                        />
                                )
                        }
                }
        }  
        const rangeGraph = () => {
                if(mQuery.width < 892){
                        if(i.bools){
                                if(i.bools === 1){
                                        return(
                                        <GlowOneM index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 2){
                                        return(
                                        <GlowTwoM index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 3){
                                        return(
                                        <GlowThreeM index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 4){
                                        return(
                                        <GlowFourM index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 5){
                                        return(
                                        <GlowFiveM index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 6){
                                        return(
                                        <GlowSixM index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 7){
                                        return(
                                        <GlowSevenM index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 8 || i.bools ===9 || i.bools === 10){
                                        return(
                                        <GlowEightM index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                        }
                }else{
                        if(i.bools){
                                if(i.bools === 1){
                                        return(
                                        <GlowOne index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 2){
                                        return(
                                        <GlowTwo index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 3){
                                        return(
                                        <GlowThree index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 4){
                                        return(
                                        <GlowFour index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 5){
                                        return(
                                        <GlowFive index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 6){
                                        return(
                                        <GlowSix index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 7){
                                        return(
                                        <GlowSeven index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                                if(i.bools === 8 || i.bools ===9 || i.bools === 10){
                                        return(
                                        <GlowEight index={i.bottomRightPos} bottom={i.id}/>
                                        )
                                }
                        }
                }      
        }
    return(<>
        {mQuery.width < 892 ? (
                <NormalRImg src={i.src} 
                        alt="alt" 
                        style={{
                                left: `${140*i.id+ 82}px`,
                                marginTop: `${140*i.bottomRightPos + 147}px`,
                                zIndex: '12',
                                // marginLeft: '20px'
                        }}
                onClick={(e) => clickedImage(e,i.nid)}
                key={index+'bottom'}
                />
                ) : 
                <NormalRImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${140*i.id+ 114}px`,
                        marginTop:`${140*i.bottomRightPos+ 185}px`,
                        // top: `${-250}px`
                }}
                onClick={(e) => clickedImage(e,i.nid)}
                key={index+'bottom'}
                />
                }   

                {/* lines and arrow     */}
                <>         
                {mQuery.width < 892 ? (
                <span 
                className={classes.largeIconXL}
                style={{
                        position: 'absolute',
                        left: `${140*i.id +10}px`,
                        top: `${140*i.bottomRightPos + 179}px`,
                        zIndex: '-8',
                        border: '3px solid black',
                        width: '74px',
                        height: '5px',
                        borderLeft: 'none',
                        borderRight: 'none'
                        }}
                        // stroke={"black"} stroke-width={1}
                        key={index+'--icon'} />): (
                        <span 
                        className={classes.largeIconXL}
                        style={{
                                position: 'absolute',
                                left: `${140*i.id +60}px`,
                                top: `${140*i.bottomRightPos + 233}px`,
                                zIndex: '-8',
                                // color:'transparent',
                                border: '3px solid black',
                                width: '60px',
                                height: '5px'
                                }}
                        key={index+'--icon'} />)}
               </>

                {/* ledGlow */}
                {(((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource)) 
                )? 
                        glowDot()
                : null}

                {(i.src === graphSource)? 
                glowGraph()
                : null}

                {((i.src === graphSource)) ? 
                rangeGraph()
                : null}

                {(((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource)))? 
                        rangeGlow()
                : null}

                {i.bool && ((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource) || (i.src===graphSource)) ? true? (
                        <Loader index={i.id} top={i.bottomRightPos}/>
                ): null: null}

                {i.bools && ((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource) || (i.src===graphSource)) ? true? (
                        <Loader index={i.id} bool={i.bools} top={i.bottomRightPos}/>
                ): null: null}

                {(i.src === tactSource) 
                ? (
                <>
                {mQuery.width < 892 ? (<span 
                className="right-middle-dot"
                onTouchStart={(e) => func(e)}
                onTouchEnd={(e) => func(e)}
                onClick={(e,arr) => {
                        func(e,arr);
                }}
                style={{
                      marginTop: `${140*i.bottomRightPos }px`,
                      left: `${120*i.id+26}px`,
                      zIndex: '12'
                }}
                key={index+'-middle-right'}
                id={i.uid}
                />) : <span 
                className="right-middle-dot"
                onTouchStart={(e) => func(e)}
                onTouchEnd={(e) => func(e)}
                onClick={(e,arr) => {
                        func(e,arr);
                }}
                style={{
                      marginTop: `${140*i.bottomRightPos }px`,
                      left: `${140*i.id- 6}px`,
                      
                }}
                key={index+'-middle-right'}
                id={i.uid}
                /> }                
                </>
        ): null}

        {i.clicked === true ? mQuery.width < 892 ? 
        <CancelOutlinedIcon
        style={{
                left: `${(140*i.id) + 130}px`,
                top: `${140*i.bottomRightPos - 40}px`,
                position: 'absolute',
                cursor: 'pointer',
                marginTop: `${'180'}px`,
                zIndex: '15'
        }}
        onClick={(e) => deleteRightImage(e,i.nid)}
        stroke="orange"
        /> : 
        <CancelOutlinedIcon 
        style={{
                left: `${(140*i.id) + 198}px`,
                top: `${140*i.bottomRightPos - 5}px`,
                position: 'absolute',
                cursor: 'pointer',
                marginTop: `${'180'}px`,
                zIndex: '10'
        }}
        stroke="orange"
        onClick={(e) => deleteRightImage(e,i.nid)}
        />: null}

        {/* lightSourceScollBar */}
        {(i.src===lightSource)|| (i.src === tempSource) || 
                (i.src === soundSource) ||(i.src === magSource) ||
                (i.src === distanceSource)
                ? 
                <>
                {mQuery.width < 892 ? <Scroll marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                nid={i.nid}
                index={index}
                id={i.nid}
                key={index + '-scroll'}
                bottomImg={bottomImg} setBottomImg={setBottomImg}
                className="scroll-large-right"
                style={{
                        left: `${120*i.id+ 180}px`,
                        marginTop:`${140*i.bottomRightPos+ 185}px`,
                        zIndex: '12'
                }}
                />: <Scroll marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                nid={i.nid}
                index={index}
                id={i.nid}
                key={index + '-scroll'}
                bottomImg={bottomImg} setBottomImg={setBottomImg}
                className="scroll-large-right"
                style={{
                        left: `${140*i.id+ 138}px`,
                        marginTop:`${140*i.bottomRightPos+ 255}px`,
                }}
                />}
                
                </>
         : null}
        </>)
}

export default RightImgs;
