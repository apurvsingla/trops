/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {useSessionStorage} from '../../SessionStorage/SessionStorage';
import {v4} from 'uuid';
import MaximizeIcon from '@material-ui/icons/Maximize';
import {style, 
imgStyle, 
bottomStyle, 
maximizeIconStyle,
spanStyle,
} from './style';
import './Middle.scss';

const MiddleComponent = ({img1}) => {
        const [active, setActive] = useSessionStorage('active', {});
        const [activeOther, setActiveOther] = useSessionStorage('active', {});
        const [pos, setPos] = useSessionStorage('dot-pos', 0);
        const [topPos, setTopPos] = useSessionStorage('dot-bottom-pos', 0);
        const [sampleActive, setSampleActive] = useState(false);
        const [activeIndex, setActiveIndex] = useState(null);
        let boolean = false;
        const activeLink = (e,index) => {
                boolean = !boolean;
                setSampleActive(!sampleActive);
                if(e){
                active[e.target.id] = boolean;
                e.target.className = `${boolean}-right-icondot`;
                if(boolean === true){
                        e.target.style.backgroundColor = 'green';
                }else{
                        e.target.style.backgroundColor = 'black';   
                }
                setActive(active);
                }
        }
        
        const activeSecondLink = (e,index) => {
                boolean = !boolean;
                setSampleActive(!sampleActive);
                if(e){
                activeOther[e.target.id] = boolean;
                e.target.className = `${boolean}-bottom-icondot`;
                if(boolean === true){
                        e.target.style.backgroundColor = 'green';
                }else{
                        e.target.style.backgroundColor = 'black';   
                }
                setActiveOther(activeOther);
                setActiveIndex(index)
                }
        }

        const coloumnStyle = {
                position: 'relative',
                display:'flex',
                flexDirection:'column',
                width: '70px',
                height: '70px',
                left: `${pos-265}px`,
            }

        return( <>
        <div style={{width: `${(img1.length/img1.length*16/2)*(img1.length) + 100}%`}}>
                {img1.length>=1 ? img1.map((i,index,arr) => {
                        if((arr.indexOf(i) !== activeIndex)){
                return(<>
                <span style={spanStyle} key={v4()}>
                    <img src={i.src} 
                    data-id={index}
                    alt="src" style={imgStyle}/>
                    {/* {sampleActive? coloumnStyle:style} */}

                    {(img1.length-1) === index ? null : 
                    (<MaximizeIcon style={maximizeIconStyle} />) }

                    {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                        (<>
                        <span style={style}
                        onClick={(e) => activeLink(e,index)}
                        id={v4()}
                        key={v4()}
                        /> 
                        <span style={bottomStyle}
                        className={'bottom-icondot'||activeSecondLink()}
                        onClick={(e) => activeSecondLink(e,index)}
                        id={v4()}
                        key={v4()}
                        ref={el => {
                        if(!el){
                        return;
                        }
                        setPos(el.getBoundingClientRect().left);
                        setTopPos(el.getBoundingClientRect().top);
                        }}
                        /> 
                        </>): null}
                    </span>
                    </>
                )} 
                else{
                return (<>
                        <span style={spanStyle} key={v4()}>
                        <img src={i.src} 
                        data-id={index}
                        alt="src" style={coloumnStyle}/>
                        </span>
                </>)
                }
              }
            ) : null}  
            </div>          
            </>)  
}

export default MiddleComponent;
