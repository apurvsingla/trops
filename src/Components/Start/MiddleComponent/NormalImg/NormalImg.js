import React from 'react';

//styled components
import {
        NImg,
NormalImg,
Span,
LargeColLineCondition
// LargeLine,
// Arrow
} from '../Middle.style';
import Scroll from '../ScrollSliderComponent/Scroll';
import { makeStyles } from '@material-ui/core/styles';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
// import DragHandleIcon from '@material-ui/icons/DragHandle';
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
graphSource,
powerSource
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
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles({
        largeIcon: {
          fontSize: 80,
          transform: 'rotate(90deg)',
          "&:before": {
                borderColor: "yellow"
              }
        },
        largeIconXL: {
                fontSize: 70,
                color: 'transparent',
                "&:before": {
                        borderColor: "red"
                      }
              },
      });


const NormalImgs = ({index, i, deleteImage, marks, valueLabelFormat, 
     activeSecondLink, img1,setAppearDot, appearDot,setImg1, activeNormal
}) => {
        const classes = useStyles();
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
                         backgroundColor: `${'red'}`,
                 }}
                 />)
        }
    }

    const glowGraph = () => {
        if(dimensions.width < 892){
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
            if(dimensions.width < 892){
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
        if(dimensions.width < 892){
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

    const [bool, setBool] = React.useState(true);
    const clickedImage = (e,uid) => {
        let newArray = [...img1];
        newArray.forEach((val, index) => {
                const array = newArray[index]
                if(array.uid === uid){
                        newArray[index] = {...newArray[index], clicked: bool}
                }
        })
        setImg1(newArray);
        setBool(!bool);
    }

    const line = () => {
            if(dimensions.width < 892){
                    return(<span
                        className={classes.largeIconXL + ' row-line'}
                        // stroke={"black"} stroke-width={1}
                        style={{
                                marginLeft: `${140*index}px`,
                                opacity: '0.8',
                                position: 'absolute',
                                top: '83px',
                                left: '190px',
                                transform: 'scale(1.4)',
                                color: 'black',
                                zIndex: '10',
                                border: '2px solid black',
                                width: '60px',
                                height: '4px'
                        }}
                        key={index+'--icon-arrow'} />)
            }else{
                    return(<>
                        <span
                        className={classes.largeIconXL + ' row-line'}
                        // stroke={"black"} stroke-width={1}
                        style={{
                                marginLeft: `${140*index}px`,
                                opacity: '0.8',
                                position: 'absolute',
                                top: '100px',
                                left: '205px',
                                color: 'black',
                                border: '3px solid black',
                                width: '60px',
                                height: '5px'
                                }}
                        key={index+'--icon-arrow'} />
                        </>
                    )
            }
    }
        
    return(<>
        {i.src === conditionSource ? <Span>
                <NImg src={i.src} alt="alt"
                 style={{
                        left: `${100*index + 20}px`,
                        zIndex: '12'
                }}
                id={i.uid}
                // onClick={(e) => deleteImage(e,i.uid)}
                />
        </Span>: null}
        {/* NormalImg */}
        {i.src !== conditionSource ? <Span>
                <NormalImg src={i.src} alt="alt"
                 style={{
                        left: `${100*index + 20}px`,
                        zIndex: '12'
                }}
                id={i.uid}
                onClick={(e) => clickedImage(e,i.uid)}
                />
        </Span>: null}
        {i.clicked === true && i.src !== powerSource ? <CancelOutlinedIcon 
        stroke={'orange'}
        style={{
                left: `${dimensions.width < 892 ? 140*index + 168:140*index+200}px`,
                top: '42px',
                // marginRight:`${100}`,
                position: 'absolute',
                zIndex: '15',
                cursor: 'pointer'
        }}
        onClick={(e) => deleteImage(e,i.uid,index,i.id)}
        />: null}
        

        {i.bool && ((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource) || (i.src===graphSource)) ? true? (
                <Loader index={index} />
        ): null: null}

        {index === 1 ? <Loader index={index} /> : null}

        {i.bools && ((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource) || (i.src===graphSource)) ? true? (
                <Loader index={index} bool={i.bools}/>
        ): null: null}


        {(img1.length-1) === index ? null : line() }

        {/* special case */}
        {(i.src === tactSource) 
                ? (
                <span 
                className="middle-dot-normal icons"
                onTouchStart={(e) => func(e)}
                onTouchEnd={(e) => func(e)}
                onClick={(e,arr) => {
                        func(e,arr);
                }}
                style={{
                      marginLeft: `${140*index}px`,
                      zIndex: '12',
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
                className="scroll-large icons"
                style={{
                        marginLeft: `${140*index}px`,
                        zIndex: "12"
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
       
                <>  <LargeColLineCondition  style={{
                                marginLeft: `${140*index}px`,
                                zIndex: '11',
                                color: 'transparent',
                                top: '146px',
                        }}
                        className="icons"
                key={index+'--icon'}
                onClick={(e) => activeSecondLink(e,index)}
                 />
                 {dimensions.width < 892 ? <span style={{
                                left: `${140*index +185}px`,
                                zIndex: '11',
                                position: 'absolute',
                                top: '82px',
                                border: '3px solid black',
                                height: '5px',
                                width: '79px',
                                borderLeft: 'none',
                                borderRight: 'none'
                        }}
                        className="icons"
                key={index+'--icon'}
                onClick={(e) => activeNormal(e,index)}
                 />:
                 <span style={{
                                left: `${140*index +215}px`,
                                zIndex: '11',
                                position: 'absolute',
                                top: '100px',
                                border: '3px solid black',
                                height: '5px',
                                width: '50px',
                                borderLeft: 'none',
                                borderRight: 'none'
                        }}
                        className="icons"
                key={index+'--icon'}
                onClick={(e) => activeNormal(e,index)}
                 />}
                 {dimensions.width < 892 ? <span 
                className='line-bottom-arrow-cond'
                key={index+'-bottom'}
                id={index}
                style={{
                        marginLeft: `${140*index+ 28}px`,
                        zIndex: '1',
                        color: 'grey',
                        top: '119px',
                        transform: 'rotate(315deg)'
                }}
                />:
                <span 
                className='line-bottom-arrow-cond'
                key={index+'-bottom'}
                id={index}
                style={{
                        marginLeft: `${140*index + 88}px`,
                        zIndex: '1',
                        color: 'grey',
                        top: '93px',
                        transform: 'rotate(315deg)'
                }}
                />}


                {dimensions.width < 892 ? <span 
                className='line-bottom-arrow-cond'
                key={index+'-bottom'}
                id={index}
                style={{
                        marginLeft: `${140*index - 78}px`,
                        zIndex: '110',
                        color: 'grey',
                        top: '176px',
                }}
                />: <span 
                className='line-bottom-arrow-cond'
                key={index+'-bottom'}
                id={index}
                style={{
                        marginLeft: `${140*index }px`,
                        zIndex: '100',
                        color: 'grey',
                        top: '170px',
                }}
                />}
                
                </>
        </>
        : null }
        {/* dots end */}
</>)
}

export default NormalImgs;