import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
import { Img, LargeColLine,
} from '../../Start/MiddleComponent/Middle.style';
import {ReactComponent as Back} from './button_back.svg';
import {
Graph,
Bottom,
Dots,
Icon,
MiddleIcon,
} from '../../Start/Start.styles';
import '../../Start/Start.styles.scss';
import ReactSwipe from 'react-swipe';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Scrollbars } from 'react-custom-scrollbars';
import 'reactjs-popup/dist/index.css';
import { beeperSource, conditionSource, distanceSource, graphSource, ledSource, lightSource, magSource, motorSource, powerSource, sequenceSource, soundSource, splitterSource, tactSource, tempSource } from '../../Start/MiddleComponent/Source/source';
import {useHistory} from 'react-router-dom';
import {Imgs, NormalImg} from '../Showcase/ShowCase.styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { makeStyles } from '@material-ui/core/styles';


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

const ModeFiles = () => {
    const classes = useStyles();
    const history = useHistory();
    const back = () => {
        history.push('/learning');
    }
    const location = useLocation();
    const [displayDot1, setDisplayDot1] = useState(true);
    const [displayDot2, setDisplayDot2] = useState(false);
    const [displayDot3, setDisplayDot3] = useState(false);
    const [displayDot4, setDisplayDot4] = useState(false);

    const line = (index) => {
        if(dimensions.width < 892){
                return(<ArrowRightAltIcon
                    className={classes.largeIconXL + ' row-line'}
                    stroke={"black"} stroke-width={1}
                    style={{
                            marginLeft: `${140*index}px`,
                            opacity: '0.8',
                            position: 'absolute',
                            top: '52px',
                            left: '190px',
                            transform: 'scale(1.4)',
                            color: 'transparent',
                            zIndex: '2000'
                            }}
                    key={index+'--icon-arrow'} />)
        }else{
                return(<>
                    <ArrowRightAltIcon
                    className={classes.largeIconXL + ' row-line'}
                    stroke={"black"} stroke-width={1}
                    style={{
                            marginLeft: `${140*index}px`,
                            opacity: '0.8',
                            position: 'absolute',
                            top: '70px',
                            left: '205px',
                            zIndex: '2000',
                            color: 'transparent',
                            }}
                    key={index+'--icon-arrow'} />
                    </>
                )
        }
}


    // const [mQuery, setMQuery] = React.useState({
    //     matches: window.innerWidth > 892 ? true : false,
    //   });

    // React.useEffect(() => {
    //     let mediaQuery = window.matchMedia("(max-width: 892px)");
    //     mediaQuery.addListener(setMQuery);
    //     return () => mediaQuery.removeListener(setMQuery);
    //   }, []);

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
    //swipe
    let reactSwipeEl;
    // const [img, setImg] = useSessionStorage('imgss', {});
    return (
        <>
        {dimensions.width < 892 ? 
         <Scrollbars style={{ width: '100vw', height: '100vh' }}>
           <Graph 
           style={{position: 'absolute',
                    minWidth: `${15*(location.data.length) + 100}%`,
                    height: `${25*(location.bottom.length) + 100}%`,
        }}/>
           <div style={{
               display: 'flex',
               flexDirection: 'column',
           }}>
            <Back width="120" height="120"
                style={{position: 'absolute', cursor: 'pointer'}}
                onClick={() => back()}
            />
           </div>

           <div>
            {
            location.data.map((i,index)=> {
                return(
                    <>
                    <NormalImg src={i.src} alt="as" height="100" width="100" 
                    style={{position: 'absolute', zIndex: '1000' ,left: `${140*index}px`, 
                    marginLeft: '120px', top: '50px'}} key={index}/>
                     {(location.data.length-1) === index ? null : line(index) }
                    </>
                )
            })}
            {
            location.bottom.map((i,index)=> {
                if(i.pos === 'normal'){
                return(
                    <>
                    <Img src={i.src} alt="alt"
                    style={{
                            marginLeft: `${(140*i.bottomPos) + 120}px`,
                            marginTop: `${140*i.trackValue + 20}px`,
                            top: '170px',
                            zIndex: '1000' ,
                    }} 
                    />
                    {(location.bottom.length) === index ? null : 
                    <>  
                    <LargeColLine style={{
                            marginLeft: `${140*i.bottomPos}px`,
                            zIndex: '-2',
                            top: `${i.trackValue? 140*i.trackValue + 120 : 122}px`
                            }}
                    key={index+'--icon'} />

                    <span 
                    className='line-bottom-arrow'
                    key={index+'icon-arrow'}
                    style={{
                            left: `${140*i.bottomPos}px`,
                            marginTop: `${i.trackValue ? 140*i.trackValue + 40: 41}px`, 
                            zIndex: '-1',
                            color: 'transparent',
                    }}
                    />
                    </> }
                    </>
                    )
            }else{
                return(<></>)
            }
            })}
        </div>
            {/* swipeable area */}
           <Bottom style={{zIndex: '1500'}}>
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
                    <Icon/>
                    <Imgs src={powerSource} 
                    alt="power" style={{marginRight: '20px'}}/>

                    <Icon />
                    <Imgs src={sequenceSource} 
                    alt="sequence" style={{marginRight: '20px'}}/>

                    <Icon/>
                    <Imgs src={beeperSource} 
                    alt="beeper" />

                    <MiddleIcon />
                    <Imgs src={conditionSource} 
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

                    <Icon />
                    <Imgs src={graphSource} 
                    alt="beeper" style={{marginRight: '20px'}}/>

                    <Icon />
                    <Imgs src={distanceSource} 
                    alt="beeper" style={{marginRight: "20px"}}/>


                    <MiddleIcon />
                    <Imgs src={ledSource} 
                    alt="beeper" 
                    style={{
                    marginRight: '20px'
                    }}/>
                    
                    <Icon />
                    <Imgs src={lightSource} 
                    alt="beeper" />
                </div>

                <div className={JSON.stringify(displayDot3)} onTouchEnd={() => {
                    setDisplayDot2(false);
                    setDisplayDot1(false);
                    setDisplayDot3(false);
                    setDisplayDot4(true);

                }}>
                    <Icon />
                    <Imgs src={magSource} 
                    alt="beeper" style={{marginRight: '20px'}}/>

                    <Icon />
                    <Imgs src={tempSource} 
                    alt="temperature" style={{marginRight: '20px'}}/>
                    
                    <MiddleIcon/>
                    <Imgs src={motorSource} 
                    alt="beeper" 
                    style={{
                    marginRight: '20px'
                    }}/>
                    
                    <Icon />
                    <Imgs src={soundSource} 
                    alt="beeper" />
                </div>

                <div className={JSON.stringify(displayDot4)} onTouchEnd={() => {
                    setDisplayDot2(false);
                    setDisplayDot1(true);
                    setDisplayDot3(false);
                    setDisplayDot4(false);
                }}>                   
                    <Icon />
                    <Imgs src={tactSource} 
                    alt="beeper" />
                    <Icon />
                    <Imgs src={splitterSource} 
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
                    minWidth: `${8*(location.data.length) + 100}%`,
                    height: `${20*(location.bottom.length)+ 100}%`,
        }}/>
           <div style={{
               display: 'flex',
               flexDirection: 'column',
           }}>
            <Back width="120" height="120"
                style={{position: 'absolute', cursor: 'pointer'}}
                onClick={() => back()}
            />
           </div>

            {/* Middle Component render */}
            <div>
            {
            location.data.map((i,index)=> {
                return(<>
                    <NormalImg src={i.src} alt="as" height="100" width="100" 
                    style={{position: 'absolute', zIndex: '1000' ,left: `${140*index}px`, marginLeft: '120px', top: '50px'}} key={index}/>
                {(location.data.length-1) === index ? null : line(index) }
                </>)
            })}
            {
            location.bottom.map((i,index)=> {
                if(i.pos === 'normal'){
                return(
                    <>
                    <Img src={i.src} alt="alt"
                    style={{
                            marginLeft: `${(140*i.bottomPos) + 120}px`,
                            marginTop: `${140*i.trackValue + 20}px`,
                            top: '170px',
                    }} 
                    key={index+'bottom'}
                    />
                     {(location.bottom.length) === index ? null : 
                    <>  
                    <LargeColLine style={{
                            marginLeft: `${140*i.bottomPos}px`,
                            zIndex: '-2',
                            top: `${i.trackValue? 140*i.trackValue + 78 : 82}px`
                            }}
                    key={index+'--icon'} />

                    <span 
                    className='line-bottom-arrow'
                    key={index+'icon-arrow'}
                    style={{
                            left: `${140*i.bottomPos}px`,
                            marginTop: `${140*i.trackValue}px`, 
                            zIndex: '-1',
                            color: 'transparent',                     
                    }}
                    />
                    </> }
                    </>
                    )
            }else{
                return(<></>)
            }
            })}
        </div>
            {/* end */}


            {/* swipeable area */}
           <Bottom style={{zIndex: '1500'}}>
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
                        <Icon />
                        <Imgs src={powerSource} 
                        alt="power" style={{marginRight: '20px'}}/>
    
                        <Icon />
                        <Imgs src={sequenceSource} 
                        alt="beeper" style={{marginRight: '20px'}}/>
    
                        <Icon />
                        <Imgs src={beeperSource} 
                        alt="beeper" />
    
                        <MiddleIcon />
                        <Imgs src={conditionSource} 
                        alt="beeper" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
    
                        <Icon />
                        <Imgs src={distanceSource} 
                        alt="beeper" />
                    </div>
    
                    <div className={JSON.stringify(displayDot2)} onTouchEnd={() => {
                        setDisplayDot2(true);
                        setDisplayDot1(false);
                        setDisplayDot3(false);
                    }}>
    
                        <Icon />
                        <Imgs src={graphSource} 
                        alt="beeper" style={{marginRight: '20px'}}/>
    
                        <Icon />
                        <Imgs src={distanceSource} 
                        alt="beeper" style={{marginRight: "20px"}}/>
    
                        <Icon  />
                        <Imgs src={tactSource} 
                        alt="magnetic" />
    
                        <MiddleIcon />
                        <Imgs src={ledSource} 
                        alt="beeper" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
                        
                        <Icon />
                        <Imgs src={lightSource} 
                        alt="beeper" />
                    </div>
    
                    <div className={JSON.stringify(displayDot3)} onTouchEnd={() => {
                        setDisplayDot2(false);
                        setDisplayDot1(false);
                        setDisplayDot3(true);
                    }}>
                        <Icon />
                        <Imgs src={magSource} 
                        alt="mag" style={{marginRight: '20px'}}/>
    
                        <Icon />
                        <Imgs src={tempSource} 
                        alt="temp" />
                        
                        <MiddleIcon />
                        <Imgs src={motorSource} 
                        alt="motor" 
                        style={{
                        marginLeft: '20px',
                        marginRight: '20px'
                        }}/>
                        
                        <Icon />
                        <Imgs src={soundSource} 
                        alt="sound" />
                        <Icon />
                        <Imgs src={splitterSource} 
                        alt="sound" />
                    </div>
                    </ReactSwipe>
            </>
            <ArrowForwardIosIcon 
            style={{
                position: 'absolute',
                right: '0',
                top: '40%',
                cursor: 'pointer'
            }}
            onClick={(e) => {
                reactSwipeEl.next()
            }}
            />
           </Bottom>
           </>
           )}
        </>
    );
}

export default ModeFiles;
