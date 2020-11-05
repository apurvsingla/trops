/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {v4} from 'uuid';
import MaximizeIcon from '@material-ui/icons/Maximize';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const MiddleComponent = ({img1}) => {
        const [active, setActive] = useState(false);
        return( <>
        <div style={{width: `${(img1.length/img1.length*16/2)*(img1.length) + 100}%`}}>
                {img1.length>=1 ? img1.map((i,index) => {
                        console.log(index)
                return(
                <span style={{position: 'relative',
                left: '100px',
                top: '80px',
                }}
                key={v4()}>

                    <img src={i.src} 
                    alt="src" 
                    style={{
                        width: '70px',
                        height: '70px',
                    }}
                    />
                {(img1.length-1) === index ? null : <MaximizeIcon 
                style={{
                        position: 'relative',
                        transform: 'scale(1.8)',
                        bottom: '5px'
                }}
                />}

                    {i.src === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                        (<>
                        <FiberManualRecordIcon style={{
                                position: 'absolute',
                                bottom: '24px',
                                left: '48px'
                        }}
                        /> 
                        <FiberManualRecordIcon style={{
                                position: 'absolute',
                                left: '23px',
                                top: '-5px'
                        }}/> 
                        
                        </>): null
                     }
                    
                </span>
                )}
            ) : null}  
            </div>          
            </>)  
}

export default MiddleComponent;
