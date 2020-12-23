import React from 'react';
import {
        // LargeRowLine,
// RightSpan,
NormalRImg,
// LargeRowLine
} from '../Middle.style';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { tactSource,ledSource,beeperSource, motorSource } from '../Source/source';
// import {conditionSource} from '../Source/source';
import { makeStyles } from '@material-ui/core/styles';
import {
// GlowOne,
// GlowTwo,
// GlowThree,
// GlowFour,
// GlowFive,
// GlowSix,
// GlowSeven,
// GlowEight
} from './Glow/GlowRight';
import './Glow/GlowStyle.scss';

const useStyles = makeStyles({
        largeIconXL: {
                fontSize: 70,
              },
      });


const RightImgs = ({mQuery, currentRight, activeRightIndex, 
    activeDot, activeSecondRightLink, index, appearDot, setAppearDot, bottomImg, setBottomImg,
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
                {(((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource)) 
                        )? 
                                glowDot()
                
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
        </>)
}

export default RightImgs;
