import React from 'react';
import {
BottomSpan,
Img,
LargeColLine,
CImg
} from '../Middle.style';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

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
import '../Middle.styles.scss';
import ScrollBottom from './Scroll/ScrollBottom';
import {
GlowOne,
GlowTwo,
GlowThree,
GlowFour,
GlowFive,
GlowSeven,
GlowSix,
GlowEight
} from './GlowStyles';
import {
GlowOneM,
GlowTwoM,
GlowThreeM,
GlowFourM,
GlowFiveM,
GlowSevenM,
GlowSixM,
GlowEightM
} from './GlowStylesMob';
import { makeStyles } from '@material-ui/core/styles';
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Leds from './Scroll/GlowLeds/Leds';

const useStyles = makeStyles({
        largeIconXL: {
                fontSize: 70,
              },
      });

const BottomImgs = ({i, index, activeLink, bottomImg, activeDot,
                appearDot, setAppearDot, setBottomImg, marks, valueLabelFormat,
                deleteImage,activeLinkBottom,
}) => {
        const classes = useStyles();
        const [bool, setBool] = React.useState(true);
        const clickedImage = (e,uid) => {
            let newArray = [...bottomImg];
            newArray.forEach((val, index) => {
                    const array = newArray[index]
                    if(array.uid === uid){
                            newArray[index] = {...newArray[index], clicked: bool}
                    }
            })
            setBottomImg(newArray);
            setBool(!bool);
        }
        const func = (e) => {
                const num = Number(i.id);
                if(appearDot[num] === true){
                        appearDot[num] = false;
                }else{
                        appearDot[num] = true;
                }
                setAppearDot(appearDot);
                let newArray = [...bottomImg];
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
                setBottomImg(newArray);
            }

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

        const glowDot = () => {
        if(i.bool){
                return(<span 
                        className='glow-small-bottom'
                        key={index}
                        style={{
                        marginTop: `${140*i.trackValue + 10}px`,
                        left: `${140*i.bottomPos - 2}px`,
                        backgroundColor: `${'red'}`,
                        position: 'absolute',
                        }}
                        />)
        }
        }

        const glowGraph = () => {
        if(dimensions.width < 892){
                if(i.bool){
                return(<>
                <span 
                style={{
                        width: '20px',
                        backgroundColor:'red',
                        height: '2px',
                        zIndex: '15',
                        position: 'absolute',
                        left: `${140*i.bottomPos + 145}px`,
                        marginTop: `${140*i.trackValue + 200}px`
                }}
                />
                <span 
                style={{
                        width: '25px',
                        backgroundColor:'red',
                        height: '2px',
                        zIndex: '15',
                        position: 'absolute',
                        left: `${140*i.bottomPos + 142}px`,
                        marginTop: `${140*i.trackValue + 195}px`
                }}
                />
                <span 
                style={{
                        width: '29px',
                        backgroundColor:'red',
                        height: '2px',
                        zIndex: '15',
                        position: 'absolute',
                        left: `${140*i.bottomPos + 140}px`,
                        marginTop: `${140*i.trackValue + 191}px`
                }}
                />
                <span 
                style={{
                        width: '33px',
                        backgroundColor:'red',
                        height: '3px',
                        zIndex: '15',
                        position: 'absolute',
                        left: `${140*i.bottomPos + 138}px`,
                        marginTop: `${140*i.trackValue + 186}px`
                }}
                />
                <span 
                style={{
                        width: '37px',
                        backgroundColor:'red',
                        height: '3px',
                        zIndex: '15',
                        position: 'absolute',
                        left: `${140*i.bottomPos + 136}px`,
                        marginTop: `${140*i.trackValue + 181}px`
                }}
                />
                <span 
                style={{
                        width: '43px',
                        backgroundColor:'red',
                        height: '3px',
                        zIndex: '15',
                        position: 'absolute',
                        left: `${140*i.bottomPos + 133}px`,
                        marginTop: `${140*i.trackValue + 176}px`
                }}
                />
                <span 
                style={{
                        width: '53px',
                        backgroundColor:'red',
                        height: '3px',
                        zIndex: '15',
                        position: 'absolute',
                        left: `${140*i.bottomPos + 128}px`,
                        marginTop: `${140*i.trackValue + 171}px`
                }}
                />
                <span 
                style={{
                        width: '60px',
                        backgroundColor:'red',
                        height: '3px',
                        zIndex: '15',
                        position: 'absolute',
                        left: `${140*i.bottomPos + 124}px`,
                        marginTop: `${140*i.trackValue + 167}px`
                }}
                />
                </>)
                }
        }else{
                if(i.bool){
                return(<>
                <GlowEight 
                index={i.trackValue} bottom={i.bottomPos}
                />
                </>)
                }
        }
        }

        const rangeGlow = () => {
                if(dimensions.width < 892){
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
                                        left: `${140*i.bottomPos + 152 - 2*i.bools}px`,
                                        marginTop: `${140*i.trackValue + 5}px`,
                                        top: `${175 -2*i.bools}px`,
                                        // left: `${140*i.bottomPos- 22}px`,
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
                                        left: `${140*i.bottomPos - 3.3*i.bools + 166}px`,
                                        marginTop: `${140*i.trackValue + 232 - 3*i.bools}px`,
                                        // left: `${140*i.bottomPos + 132}px`,
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
                                        return(
                                        <GlowOneM index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 2){
                                        return(
                                        <GlowTwoM index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 3){
                                        return(
                                        <GlowThreeM index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 4){
                                        return(
                                        <GlowFourM index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 5){
                                        return(
                                        <GlowFiveM index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 6){
                                        return(
                                        <GlowSixM index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 7){
                                        return(
                                        <GlowSevenM index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 8 || i.bools ===9 || i.bools === 10){
                                        return(
                                        <GlowEightM index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                        }
                }else{
                        if(i.bools){
                                if(i.bools === 1){
                                        return(
                                        <GlowOne index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 2){
                                        return(
                                        <GlowTwo index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 3){
                                        return(
                                        <GlowThree index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 4){
                                        return(
                                        <GlowFour index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 5){
                                        return(
                                        <GlowFive index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 6){
                                        return(
                                        <GlowSix index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 7){
                                        return(
                                        <GlowSeven index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                                if(i.bools === 8 || i.bools ===9 || i.bools === 10){
                                        return(
                                        <GlowEight index={i.trackValue} bottom={i.bottomPos}/>
                                        )
                                }
                        }
                }      
        }
    return(<>
    {i.src === conditionSource ? <BottomSpan>
                <CImg src={i.src} alt="alt"
                style={{
                        marginLeft: `${(140*i.bottomPos) + 20}px`,
                        marginTop: `${140*i.trackValue + 20}px`,
                        zIndex: '10'
                }}
                onClick={(e) => clickedImage(e,i.uid)}
                />
        </BottomSpan>: null}
        {i.src !== conditionSource ?<BottomSpan>
                <Img src={i.src} alt="alt"
                style={{
                        marginLeft: `${(140*i.bottomPos) + 20}px`,
                        marginTop: `${140*i.trackValue}px`,
                        zIndex: '10'
                }} 
                onClick={(e) => clickedImage(e,i.uid,i.cur,i.trackValue)}
                />
        </BottomSpan>: null }
        {i.clicked === true ?
        dimensions.width>892 ?
        <CancelOutlinedIcon 
        stroke={'orange'}
        key={index+'key'}
        style={{
                left: `${(140*i.bottomPos) + 200}px`,
                top: `${140*i.trackValue}px`,
                position: 'absolute',
                cursor: 'pointer',
                marginTop: `${'180'}px`,
                zIndex: '10'
        }} 
        onClick={(e) => deleteImage(e,i.uid,i.cur,i.trackValue)}
        />:<CancelOutlinedIcon 
        stroke={'orange'}
        key={index+'key'}
        style={{
                left: `${(140*i.bottomPos) + 173}px`,
                top: `${140*i.trackValue}px`,
                position: 'absolute',
                cursor: 'pointer',
                marginTop: '135px',
                zIndex: '10'
        }} 
        onClick={(e) => deleteImage(e,i.uid,i.cur,i.trackValue,i.id)}
        /> :null}
        

        {(bottomImg.length) === index ? null : 
              <>  <LargeColLine style={{
                        marginLeft: `${140*i.bottomPos}px`,
                        zIndex: '8',
                        top: `${i.trackValue? 140*i.trackValue + 78 : 82}px`
                        }}
                key={index+'--icon'} />

                {/* <span 
                className='line-bottom-arrow'
                key={index+'icon-arrow'}
                style={{
                        left: `${140*i.bottomPos}px`,
                        marginTop: `${140*i.trackValue}px`, 
                        zIndex: '8',
                        color: 'transparent',                     
                }}
                /> */}
                </> }
                {i.bools && ((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource) || (i.src===graphSource)) ? true? (
                <Leds index={i.bottomPos} top={i.trackValue} bool={i.bools}/>
                ): null: null}
                {i.bool && ((i.src === ledSource) || (i.src===beeperSource) || (i.src===motorSource) || (i.src===graphSource)) ? 
                <Leds index={i.bottomPos} top={i.trackValue} /> : null}

                {(i.src === tactSource) 
                ? (
                <>
                <span 
                className="bottom-middle-dot"
                onTouchStart={(e) => func(e)}
                onTouchEnd={(e) => func(e)}
                onClick={(e,arr) => {
                        func(e,arr);
                }}
                style={{
                //       top: `${140*index + 110}px`,
                      cursor: 'pointer',
                      marginTop: `${140*i.trackValue}px`,
                      left: `${140*i.bottomPos}px`,
                      zIndex: '12'
                }}
                key={index+'-middle'}
                id={index}
                /> 
                </>
        ): null}

        {(i.src===lightSource)|| (i.src === tempSource) || 
        (i.src === soundSource) ||(i.src === magSource) ||
        (i.src === distanceSource)
                ? 
                <>
                {dimensions.width < 892 ? <ScrollBottom marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                index={index}
                i={i}
                id={i.id}
                key={index + '-scroll'}
                bottomImg={bottomImg} setBottomImg={setBottomImg}
                className="bottom-scroll"
                style={{
                        top: `${185}px`,
                        cursor: 'pointer',
                        marginTop: `${140*i.trackValue}px`,
                      left: `${140*i.bottomPos + 137}px`,
                      zIndex: '20'
                }}
                />: <ScrollBottom marks={marks} 
                valueLabelFormat={valueLabelFormat} 
                index={index}
                i={i}
                id={i.id}
                key={index + '-scroll'}
                bottomImg={bottomImg} setBottomImg={setBottomImg}
                className="bottom-scroll"
                style={{
                        top: `${255}px`,
                        cursor: 'pointer',
                        marginTop: `${140*i.trackValue}px`,
                      left: `${140*i.bottomPos + 152}px`,
                      zIndex: '20'
                }}
                />}
                
                </>
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
        
        {i.src === conditionSource ? 
        <>
         {dimensions.width < 892  ?
         <>
        <span 
        className={classes.largeIconXL + " right-dot-bottom"}
        style={{
                marginTop: `${i.trackValue ? 140*i.trackValue + 30: 30}px`,
                left: `${140*i.bottomPos + 192}px`,
                color: 'transparent',
                zIndex: '8',
                width: '30px',
                height: '5px',
                border: '3px solid black',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                borderLeft: 'none'
                }}
                onClick={(e) => activeLink(e,index,i.normal)}
                id={i.normal}
                key={index+'-right'}
                // stroke={"black"} stroke-width={1}
                />
                <span 
                className='line-right-arrow'
                key={index+'icon-arrow'}
                style={{
                        left: `${140*i.bottomPos + 64}px`,
                        marginTop: `${i.trackValue ? 140*i.trackValue + 44: 44}px`,
                        zIndex: '8',
                        color: 'transparent',                     
                }}
                /> 
                <span 
                className='line-bottom-arrow-cond'
                key={index+'icon-arrow-b'}
                style={{
                        left: `${140*i.bottomPos + 147}px`,
                        marginTop: `${i.trackValue ? 140*i.trackValue + 100: 100}px`,
                        zIndex: '8',
                        color: 'transparent',                     
                }}
                /> 
                <span
                className={classes.largeIconXL + " right-dot-bottom"}
                style={{
                marginTop: `${i.trackValue ? 140*i.trackValue + 68 : 68}px`,
                left: `${140*i.bottomPos + 150}px`,
                color: 'transparent',
                zIndex: '10',
                width: '5px',
                height: '75px',
                border: '3px solid black',
                borderBottom: 'none',
                borderTop: 'none'
                }}
                onClick={(e) => activeLinkBottom(e,i.normal,i.cur)}
                id={i.normal}
                key={index+'-right'}
                // stroke={"black"} stroke-width={1}
                />
                </>: 
                <>
                <span
                className={classes.largeIconXL + " right-dot-bottom"}
                style={{
                marginTop: `${i.trackValue ? 140*i.trackValue + 31 : 31}px`,
                left: `${140*i.bottomPos + 214}px`,
                color: 'transparent',
                zIndex: '10',
                width: '41px',
                height: '5px',
                border: '3px solid black',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                borderLeft: 'none'
                }}
                onClick={(e) => activeLink(e,i.switchId,i.normal)}
                id={i.normal}
                key={index+'-right'}
                // stroke={"black"} stroke-width={1}
                />
                <span 
                className='line-right-arrow'
                key={index+'icon-arrow'}
                style={{
                        left: `${140*i.bottomPos + 80}px`,
                        marginTop: `${i.trackValue ? 140*i.trackValue + 53: 53}px`,
                        zIndex: '8',
                        color: 'transparent',                     
                }}
                /> 
                <span 
                className='line-bottom-arrow-cond'
                key={index+'icon-arrow-b'}
                style={{
                        left: `${140*i.bottomPos + 162}px`,
                        marginTop: `${i.trackValue ? 140*i.trackValue + 140: 140}px`,
                        zIndex: '8',
                        color: 'transparent',                     
                }}
                /> 
                <span
        className={classes.largeIconXL + " right-dot-bottom"}
        style={{
                marginTop: `${i.trackValue ? 140*i.trackValue + 82 : 82}px`,
                left: `${140*i.bottomPos + 165}px`,
                color: 'transparent',
                zIndex: '10',
                width: '5px',
                height: '45px',
                border: '3px solid black',
                borderBottom: 'none',
                borderTop: 'none'
                }}
                onClick={(e) => activeLinkBottom(e,i.normal,i.cur)}
                id={i.normal}
                key={index+'-right'}
                // stroke={"black"} stroke-width={1}
                />
                </>
                }
        </>
        : null }
        </>)
}

export default BottomImgs;
