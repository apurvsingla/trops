import React from 'react';

//styled components
import {
NormalImg,
Span,
// LargeLine,
// Arrow
} from '../Middle.style';
import Scroll from '../ScrollSliderComponent/Scroll';
import { makeStyles } from '@material-ui/core/styles';

//image source
import {
lightSource,
tempSource,
soundSource,
magSource,
distanceSource,
ledSource,
tactSource,
beeperSource,
motorSource,
conditionSource,
graphSource
} from '../Source/source';

import './Glow.scss';
import '../Middle.styles.scss';
import {
GlowOne,
GlowTwo,
GlowThree,
GlowFour,
GlowFive,
GlowSix,
GlowSeven,
GlowEight
} from './GlowStyle';
import { GlowEightM, GlowFiveM, GlowFourM, GlowOneM, GlowSevenM, GlowSixM, GlowThreeM,GlowTwoM } from './GlowStyleMobile';
import Loader from './Loader';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const useStyles = makeStyles({
        largeIcon: {
          fontSize: 80,
          transform: 'rotate(90deg)'
        },
        largeIconXL: {
                fontSize: 70,
              },
      });


const NormalImgs = ({index, i, deleteImage, marks, valueLabelFormat, 
     activeSecondLink, img1,setAppearDot, appearDot,setImg1
}) => {
        const classes = useStyles();
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 892 ? true : false,
    });
 
    React.useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width: 892px)");
        mediaQuery.addListener(setMQuery);
        return () => mediaQuery.removeListener(setMQuery);     
    }, []);      

    const func = (e) => {
        // boolean =!boolean;
        const num = Number(i.id);
        if(appearDot[num] === true){
                appearDot[num] = false;
        }else{
                appearDot[num] = true;
        }
        setAppearDot(appearDot);
        let newArray = [...img1];
        newArray.forEach((val, index) => {
                const array = newArray[index]
                if(array.id === num+1){
                        if(appearDot[num] === true){
                                newArray[index] = {...newArray[index], bool: false}
                        }else{
                                newArray[index] = {...newArray[index], bool: true}
                        }
                }
        })
        setImg1(newArray);
    }

    const glowDot = () => {
        if(i.bool){
                return(<span 
                 className='glow-small'
                 key={index}
                 style={{
                         left: `${140*index}px`,
                         backgroundColor: `${'red'}`
                 }}
                 />)
        }
    }

    const glowGraph = () => {
        if(mQuery && !mQuery.matches){
                if(i.bool){
                return(<GlowEightM index={index}/>)
                        
                }
        }else{
                if(i.bool){
                return(<GlowEight index={index}/>)
                }
        }
    }

    const rangeGlow = () => {
            if(mQuery && !mQuery.matches){
                    if(i.bools){
                        return(
                                <span
                                style={{
                                        height: `${i.bools*6 + 5 }px`,
                                        width: `${i.bools*6 + 5}px`,
                                        backgroundColor: `${true ?'red':null}`,
                                        borderRadius: '50px',
                                        zIndex: '15',
                                        position: 'absolute',
                                        top: `${92 - 4*i.bools}px`,
                                        marginLeft: `${i.bools*(-4)}px`,
                                        left: `${140*index + 162}px`,
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
                                        height: `${i.bools*8 + 5 }px`,
                                        width: `${i.bools*8 + 5}px`,
                                        backgroundColor: `${true ?'red':null}`,
                                        borderRadius: '50px',
                                        zIndex: '15',
                                        position: 'absolute',
                                        top: `${95 - 4*i.bools}px`,
                                        marginLeft: `${i.bools*(-4)}px`,
                                        left: `${140*index + 168}px`,
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
                                return(<GlowOneM index={index}/>)
                        }
                        if(i.bools === 2){
                                return(
                                <GlowTwoM index={index}/>
                                )
                        }
                        if(i.bools === 3){
                                return(
                                <GlowThreeM index={index}/>
                                )
                        }
                        if(i.bools === 4){
                                return(
                                <GlowFourM index={index}/>
                                )
                        }
                        if(i.bools === 5){
                                return(
                                <GlowFiveM index={index}/>
                                )
                        }
                        if(i.bools === 6){
                                return(
                                <GlowSixM index={index}/>
                                )
                        }
                        if(i.bools === 7){
                                return(
                                <GlowSevenM index={index}/>
                                )
                        }
                        if(i.bools === 8){
                                return(
                                <GlowEightM index={index}/>
                                )
                        }
                        if(i.bools === 9){
                                return(
                                <GlowEightM index={index}/>
                                )
                        }
                        if(i.bools === 10){
                                return(
                                <GlowEightM index={index}/>
                                )
                        }
                }
        }else{
                if(i.bools){
                        if(i.bools === 1){
                                return(<GlowOne index={index}/>)
                        }
                        if(i.bools === 2){
                                return(
                                <GlowTwo index={index}/>
                                )
                        }
                        if(i.bools === 3){
                                return(
                                <GlowThree index={index}/>
                                )
                        }
                        if(i.bools === 4){
                                return(
                                <GlowFour index={index}/>
                                )
                        }
                        if(i.bools === 5){
                                return(
                                <GlowFive index={index}/>
                                )
                        }
                        if(i.bools === 6){
                                return(
                                <GlowSix index={index}/>
                                )
                        }
                        if(i.bools === 7){
                                return(
                                <GlowSeven index={index}/>
                                )
                        }
                        if(i.bools === 8){
                                return(
                                <GlowEight index={index}/>
                                )
                        }
                        if(i.bools === 9){
                                return(
                                <GlowEight index={index}/>
                                )
                        }
                        if(i.bools === 10){
                                return(
                                <GlowEight index={index}/>
                                )
                        }
                }
        }
    } 

    const line = () => {
            if(mQuery && !mQuery.matches){
                    return(<ArrowRightAltIcon
                        className={classes.largeIconXL + ' row-line'}
                        style={{
                                marginLeft: `${140*index}px`,
                                opacity: '0.8',
                                position: 'absolute',
                                top: '52px',
                                left: '190px',
                                transform: 'scale(1.4)'
                                }}
                        key={index+'--icon-arrow'} />)
            }else{
                    return(
                        <ArrowRightAltIcon
                        className={classes.largeIconXL + ' row-line'}
                        style={{
                                marginLeft: `${140*index}px`,
                                opacity: '0.8',
                                position: 'absolute',
                                top: '70px',
                                left: '205px'
                                }}
                        key={index+'--icon-arrow'} />
                    )
            }
    }
        
    return(<>
        <Span>
                <NormalImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${100*index + 20}px`,
                }}
                id={i.id}
                // onClick={(e) => deleteImage(e)}
                />
        </Span>

        {i.bool && ((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource) || (i.src===graphSource)) ? true? (
                <Loader index={index} />
        ): null: null}

        {i.bools && ((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource) || (i.src===graphSource)) ? true? (
                <Loader index={index} bool={i.bools}/>
        ): null: null}


        {(img1.length-1) === index ? null : line() }

        {/* special case */}
        {(i.src === tactSource) 
                ? (
                <span 
                className="middle-dot-normal"
                onTouchStart={(e) => func(e)}
                onTouchEnd={(e) => func(e)}
                onClick={(e,arr) => {
                        func(e,arr);
                }}
                style={{
                      marginLeft: `${140*index}px`,
                      cursor: 'pointer',
                      zIndex: '2'
                }}
                key={index+'-middle'}
                id={index}
                />
        ): null}

        {(i.src===lightSource)|| (i.src === tempSource) || 
        (i.src === soundSource) ||(i.src === magSource) ||
        (i.src === distanceSource)
                ? 
                <Scroll marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                index={index}
                id={i.id}
                key={index + '-scroll'}
                img1={img1} setImg1={setImg1}
                className="scroll-large"
                style={{
                        marginLeft: `${140*index}px`,
                        zIndex: "2"
                }}
                />
         : null}
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

        

        {/* dots start */}
        {i.src === conditionSource ? 
        <>
        <ArrowRightAltIcon 
        className={classes.largeIcon + ' bottom-dot-normal'}
        style={{
                marginLeft: `${140*index}px`,
                zIndex: '1'
        }}
        key={index+'-bottom'}
        id={index}
        onClick={(e) => activeSecondLink(e,index)}
                />
        </>
        : null }
        {/* dots end */}
</>)
}

export default NormalImgs;