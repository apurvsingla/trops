/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {v4} from 'uuid';
import MaximizeIcon from '@material-ui/icons/Maximize';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Middle.scss';

const MiddleComponent = ({img1}) => {
        const [active, setActive] = useState(true);
        const [activeother, setActiveother] = useState(false);

        const activeLink = () => {
                setActive(!active);
                setActiveother(false);
        }

        const activeSecondLink = () => {
                setActiveother(!activeother);
                setActive(false);
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
                    style={{
                        width: '70px',
                        height: '70px',
                    }}
                    key={v4()}
                    />

                {(img1.length-1) === index ? null : (<MaximizeIcon 
                style={{
                        position: 'relative',
                        transform: 'scale(1.8)',
                        bottom: '5px'
                }}
                key={v4()}
                />) }

                    {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                        (<>
                        <FiberManualRecordIcon style={{
                                position: 'absolute',
                                bottom: '24px',
                                left: '48px',
                        }}
                        className={active + 'icondot'}
                        onClick={() => activeLink()}
                        key={v4()}
                        /> 
                        <FiberManualRecordIcon style={{
                                position: 'absolute',
                                left: '23px',
                                bottom: '3px'
                        }}
                        className={activeother + 'icondot'}
                        onClick={() => activeSecondLink()}
                        key={v4()}
                        /> 
                        
                        </>): null
                     }
                    </span>
                </>
                )}
            ) : null} 
             
            </div>  
                    
            </>)  
}

export default MiddleComponent;
