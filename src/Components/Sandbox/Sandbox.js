import React from 'react';
import {useHistory} from 'react-router-dom';

import {Heading,
SandboxBackIcon,
Start,
Img
} from './Sandbox.styles';
// import {ReactComponent as ReactLogo} from './Path.svg';

function Sandbox() {
    const history = useHistory();
    const back = () => {
        history.push('/');
    }
    const next = () => {
        history.push('/sandbox/start')
    }
    return (
        <>
        <div style={{textAlign: 'center'}}>
            <Img src={process.env.PUBLIC_URL + 'images/extraImages/path.png'} 
            alt="sandbox"/>
        </div>
        <div style={{position: 'absolute', top: '0', left: '0', right: '0', margin: '0 auto'}}>
            <SandboxBackIcon onClick={() =>  back()}/>
            <Heading>
                <h1>Sandbox Mode</h1>
                <p>Summarised Overview</p>
            </Heading>
            <br/>
            <br/>
            <Start className="icons">
                <button className='icons' onClick={() => next()}>START</button>
            </Start>
        </div>
        </>
    )
}

export default Sandbox;
