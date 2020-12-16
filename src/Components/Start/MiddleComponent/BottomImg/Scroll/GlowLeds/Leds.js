import React from 'react';
import {BottomStyles} from './Led.styles';

const Leds = ({index,top}) => {
    return (
        <BottomStyles>
            <span 
            className="loader-glow-bottom"
            style={{
                position: 'absolute',
                left: `${140*index + 163}px`,
                backgroundColor: 'green',
                height: '15px',
                width: '15px',
                borderRadius: '50px',
                marginTop: `${140*top + 145}px`
            }}
            />
            <span 
            className="loader-glow-bottom"

            style={{
                position: 'absolute',
                left: `${140*index + 163}px`,
                backgroundColor: 'green',
                height: '15px',
                width: '15px',
                borderRadius: '50px',
                marginTop: `${140*top + 160}px`
            }}
            />
            <span 
            className="loader-glow-bottom"

            style={{
                position: 'absolute',
                left: `${140*index + 163}px`,
                backgroundColor: 'green',
                height: '15px',
                width: '15px',
                borderRadius: '50px',
                marginTop: `${140*top + 175}px`
            }}
            />
        </BottomStyles>
    );
}

export default Leds;
