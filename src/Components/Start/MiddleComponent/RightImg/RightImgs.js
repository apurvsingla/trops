import React from 'react';
import {
        // LargeRowLine,
// RightSpan,
NormalRImg,
// LargeRowLine
} from '../Middle.style';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { tactSource,ledSource,beeperSource, motorSource, lightSource, tempSource, magSource, soundSource, distanceSource, graphSource } from '../Source/source';
// import {conditionSource} from '../Source/source';
import { makeStyles } from '@material-ui/core/styles';
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


const RightImgs = ({mQuery, currentRight, activeRightIndex, 
    activeDot, activeSecondRightLink, index, appearDot, setAppearDot, bottomImg, setBottomImg,
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
                if(mQuery && !mQuery.matches){
                        if(i.bool){
                                return(
                                <><span 
                                        className='glow-small-bottom-right'
                                        key={index}
                                        style={{
                                        marginTop: `${140*i.bottomRightPos +5}px`,
                                        left: `${120*i.id - 8}px`,
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
        const glowGraph = () => {
                if(mQuery && !mQuery.matches){
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
                    if(mQuery && !mQuery.matches){
                            if(i.bools){
                                return(
                                        <span
                                        style={{
                                                height: `${i.bools*4 + 5 }px`,
                                                width: `${i.bools*4 + 5}px`,
                                                backgroundColor: `${true ?'red':null}`,
                                                borderRadius: '50px',
                                                zIndex: '15',
                                                position: 'absolute',
                                                left: `${120*i.id  + 172 - 2*i.bools}px`,
                                                marginTop: `${140*i.bottomRightPos + 5}px`,
                                                top: `${175 -2*i.bools}px`,
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
                                                left: `${140*i.id - 3.3*i.bools + 160}px`,
                                                marginTop: `${140*i.bottomRightPos + 227 - 3*i.bools}px`,
                                                opacity: '0.7',
                                        }}
                                        />
                                )
                        }
                }
        }  
        const rangeGraph = () => {
                if(mQuery && !mQuery.matches){
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
        {mQuery && !mQuery.matches ? (
                <NormalRImg src={i.src} 
                        alt="alt" 
                        style={{
                                left: `${120*i.id+ 138}px`,
                                marginTop: `${140*i.bottomRightPos + 147}px`,
                        }}
                />
                ) : 
                <NormalRImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${140*i.id+ 114}px`,
                        marginTop:`${140*i.bottomRightPos+ 185}px`,
                        // top: `${-250}px`
                }}
                />
                }   

                {/* lines and arrow     */}
                <>         
                {mQuery && !mQuery.matches ? (
                <ArrowRightAltIcon 
                className={classes.largeIconXL}
                style={{
                        position: 'absolute',
                        left: `${120*i.id +81}px`,
                        top: `${140*i.bottomRightPos + 149}px`,
                        zIndex: '-8',
                        }}
                key={index+'--icon'} />): (
                        <ArrowRightAltIcon 
                        className={classes.largeIconXL}
                        style={{
                                position: 'absolute',
                                left: `${140*i.id +60}px`,
                                top: `${140*i.bottomRightPos + 202}px`,
                                zIndex: '-8',
                                color:'transparent'
                                }}
                                stroke={"black"} stroke-width={1}
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
                {(i.src === tactSource) 
                ? (
                <>
                {mQuery && !mQuery.matches ? (<span 
                className="right-middle-dot"
                onTouchStart={(e) => func(e)}
                onTouchEnd={(e) => func(e)}
                onClick={(e,arr) => {
                        func(e,arr);
                }}
                style={{
                      cursor: 'pointer',
                      marginTop: `${140*i.bottomRightPos }px`,
                      marginLeft: `${120*i.id+87}px`,
                      
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
                      cursor: 'pointer',
                      marginTop: `${140*i.bottomRightPos }px`,
                      left: `${140*i.id- 6}px`,
                      
                }}
                key={index+'-middle-right'}
                id={i.uid}
                /> }                
                </>
        ): null}

        {/* lightSourceScollBar */}
        {(i.src===lightSource)|| (i.src === tempSource) || 
                (i.src === soundSource) ||(i.src === magSource) ||
                (i.src === distanceSource)
                ? 
                <>
                {mQuery && !mQuery.matches ? <Scroll marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                nid={i.nid}
                index={index}
                id={i.nid}
                key={index + '-scroll'}
                bottomImg={bottomImg} setBottomImg={setBottomImg}
                className="scroll-large-right"
                style={{
                        left: `${120*i.id+ 158}px`,
                        marginTop:`${140*i.bottomRightPos+ 185}px`,
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
