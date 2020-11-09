/* eslint-disable no-unused-vars */
import React from 'react';
import {useSessionStorage} from '../../SessionStorage/SessionStorage';
// import {v4} from 'uuid';
import MaximizeIcon from '@material-ui/icons/Maximize';
// import {style, imgStyle, bottomStyle, maximizeIconStyle} from './style';
import './Middle.scss';

const MiddleComponent = ({img1}) => {
        //dots active or not
        const [active, setActive] = useSessionStorage('active-right-dot', {});
        const [activeother, setActiveother] = useSessionStorage('active-bottom-dot', {});
        
        //right dot left pos(relative)
        const [rightDotPosLeft, setRightDotPosLeft] = useSessionStorage('right-dot-pos-left', {});
        const [bottomDotPosLeft, setbottomDotPosLeft] = useSessionStorage('bottom-dot-pos-left', {});
        //bottom dot top pos(relative)
        const [rightDotPosTop, setRightDotPosTop] = useSessionStorage('right-dot-pos-left', {});
        const [bottomDotPosTop, setBottomDotPosTop] = useSessionStorage('bottom-dot-pos-left', {});
        //index
        const [activeIndex, setActiveIndex] = useSessionStorage('active-bottom-index',null);
        const [activeOtherIndex, setActiveOtherIndex] = useSessionStorage('active-right-index',null);


        let boolean = false;
        let boolean2 = false;
        const activeLink = (e,index) => {
                if(e){
                        boolean = !boolean;
                        active[e.target.id] = boolean;
                        e.target.className = `${boolean}-right-icondot`;
                        if(boolean === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'black';   
                        }
                        setActive(active);
                        setActiveOtherIndex(index);
                }
                
        }
        
        const activeSecondLink = (e,index) => {
                if(e){
                        boolean2 = !boolean2;
                        activeother[e.target.id] = boolean2;
                        e.target.className = `${boolean2}-bottom-icondot`;
                        if(boolean2 === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'black';   
                        }
                        setActiveother(activeother);
                        setActiveIndex(index);
                }
        }

        return( <>
        <div style={{width: '100%', 
        position: 'absolute', top: '50px', left: '120px'}}>
                {img1.length>=1 ? img1.map((i,index) => {
                return(
                <>
                <span key={index + '-span'}>   
                {/* {activeIndex ? (<img src={i.src} 
                                        data-id={index}
                                        alt="src" 
                                        style={{position: 'relative', 
                                            width: '70px', 
                                            height: '70px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                        //     left: `${74*index +235}px`
                                        }}
                                        key={index+'-img'}
                    />) : null } */}
                    <img src={i.src} 
                    data-id={index}
                    alt="src" 
                    style={activeother[activeIndex+'-bottom'] === true ? {
                        position: 'absolute',
                        top: `${100*index + 20}px`,
                        left: `${100*activeIndex + 20}px`,
                        width: '70px'
                        
                } : {   position: 'absolute', 
                        left: `${100*index + 20}px`, 
                        width: '70px', 
                        height: '70px'
                    } }
                    key={index+'-img'}
                    />

                {(img1.length-1) === index ? null : (<MaximizeIcon 
                style={{
                        position: 'absolute',
                        transform: 'scale(2)',
                        left: `${100*index + 93}px`,
                        top: '41px',
                        }}
                        key={index+'--icon'}
                        />) }

                    {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                        (<>
                        <span style={{
                                position: 'absolute',
                                left: `${100*index + 75}px`,
                                height: '15px',
                                width: '15px',
                                top: '30px',
                                borderRadius: '25px',
                                backgroundColor : 'black'
                        }}
                        onClick={(e) => activeLink(e,index)}
                        id={index+'-right'}
                        key={index+'-right'}
                        ref={(el) => {
                                if(!el) return;
                                rightDotPosLeft[index+'-right'] = el.getBoundingClientRect().left;
                                rightDotPosTop[index+'-bottom'] = el.getBoundingClientRect().top;
                                setRightDotPosLeft(rightDotPosLeft);
                                setRightDotPosTop(rightDotPosTop);
                        }}
                        /> 
                        <span style={{
                                position: 'absolute',
                                left: `${100*index + 48}px`,
                                top: '54px',
                                backgroundColor: 'black',
                                height: '15px',
                                width: '15px',
                                borderRadius: '25px'
                        }}
                        key={index+'-bottom'}
                        id={index+'-bottom'}
                        onClick={(e) => activeSecondLink(e,index)}
                        ref={(el) => {
                                if(!el) return;
                                bottomDotPosLeft[index+'-bottom'] = el.getBoundingClientRect().left;
                                bottomDotPosTop[index+'-bottom'] = el.getBoundingClientRect().top;
                                setbottomDotPosLeft(bottomDotPosLeft);
                                setBottomDotPosTop(bottomDotPosTop);
                        }}
                        /> 
                        </>): null}
                    </span>
                </>
                )}
            ) : null}  
            </div>          
            </>)  
}

export default MiddleComponent;