/* eslint-disable no-unused-vars */
import React from 'react';
import {v4} from 'uuid';

const MiddleComponent = ({img1}) => {
        return( <>
                {img1.length>=1 ? img1.map(i => 
                (
                <span style={{position: 'relative',
                left: '100px',
                top: '80px'
                }}>
                    <img src={i.src} alt="src" style={{
                            width: '70px',
                            height: '70px',
                    }} />
                </span>
                )
            ) : null}
            </>)  
}

export default MiddleComponent;
