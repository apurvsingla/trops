/* eslint-disable no-unused-vars */
import React from 'react';

const MiddleComponent = ({img1, img2, img3, img4, img5, img6, img7, img8, img9}) => {

    return (
        <div style={{
            position: 'absolute',
            left: '100px',
            top: '80px'
        }}>
            {img1.length>= 1 ? img1.map(i => (
            <img src={process.env.PUBLIC_URL + '/images/components/beeper.png'} 
                    alt="beeper" width="70" />
                    )) : null}
            {img2.length>=1 ? img2.map(i => (
            <img src={process.env.PUBLIC_URL + '/images/components/condition.png'} 
                    alt="beeper" width="70" />
                    )) : null}
            {img3.length>=1 ? img3.map(i => (
            <img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                    alt="beeper" width="75" />
                    )) : null}
            {img4.length>=1 ? img4.map(i => (
            <img src={process.env.PUBLIC_URL + '/images/components/distance.png'} 
                    alt="beeper" width="72" />
                    )) : null}
            {img5.length>=1 ? img5.map(i => (
            <img src={process.env.PUBLIC_URL + '/images/components/LED.png'} 
                    alt="beeper" width="75" />
                    )) : null}
            {img6.length>=1 ? img6.map(i => (
            <img src={process.env.PUBLIC_URL + '/images/components/light.png'} 
                    alt="beeper" width="70" />
                    )) : null}
            {img7.length>=1 ? img7.map(i => (
            <img src={process.env.PUBLIC_URL + '/images/components/Magnetic.png'} 
                    alt="beeper" width="72" />
                    )) : null}
            {img8.length>=1 ? img8.map(i => (
            <img src={process.env.PUBLIC_URL + '/images/components/Motor.png'} 
                    alt="beeper" width="73" />
                    )) : null}
            {img9.length>=1 ? img9.map(i => (
            <img src={process.env.PUBLIC_URL + '/images/components/Power.png'} 
                    alt="beeper" width="73" />
                    )) : null}
        </div>
    );
}

export default MiddleComponent;
