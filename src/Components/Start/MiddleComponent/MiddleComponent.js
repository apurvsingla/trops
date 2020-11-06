/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {useSessionStorage} from '../../SessionStorage/SessionStorage';
import {v4} from 'uuid';
import MaximizeIcon from '@material-ui/icons/Maximize';
import {style, imgStyle, bottomStyle, maximizeIconStyle} from './style';
import './Middle.scss';

const MiddleComponent = ({img1}) => {
        const [active, setActive] = useSessionStorage('active', {});
        const [activeother, setActiveother] = useSessionStorage('activeother', false);
        const [bool] = useState(false);
        let boolean = false;
        const activeLink = (e) => {
                boolean = !boolean;
                if(e){
                        active[e.target.id] = boolean;
                        e.target.className = `${boolean}icondot`;
                        if(boolean === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'black';   
                        }
                        setActive(active);
                }
                return `${bool}icondot`;
        }
        
        const activeSecondLink = (e) => {
                boolean = !boolean;
                if(e){
                        active[e.target.id] = boolean;
                        e.target.className = `${boolean}icondot`;
                        if(boolean === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'black';   
                        }
                        setActive(active);
                }
                return `${bool}icondot`;
        }

        return( <>
        <div style={{width: `${(img1.length/img1.length*16/2)*(img1.length) + 100}%`, 
        position: 'absolute', top: '50px', left: '120px'}}>
                {img1.length>=1 ? img1.map((i,index) => {
                return(
                <>
                <span style={{position: 'relative'}}
                key={v4()}>

                    <img src={i.src} 
                    alt="src" 
                    style={imgStyle}
                    />

                {(img1.length-1) === index ? null : (<MaximizeIcon 
                style={maximizeIconStyle} />) }

                    {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                        (<>
                        <span style={style}
                        className={activeLink()}
                        onClick={(e) => activeLink(e)}
                        id={v4()}
                        /> 
                        <span style={bottomStyle}
                        className={'falseicondot'}
                        onClick={(e) => activeSecondLink(e)}
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
