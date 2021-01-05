import React from 'react';
import {useHistory} from 'react-router-dom';

import {
// Heading,
// SandboxBackIcon,
Start,
Img,
StartMob
} from './Sandbox.styles';

function Sandbox() {
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

    const history = useHistory();
    const back = () => {
        history.push('/');
    }
    const next = () => {
        history.push('/sandbox/start')
    }
    return (
        <>
        {
        dimensions.width <892 ?
        <>
        <div style={{textAlign: 'center'}}>
            <Img src={process.env.PUBLIC_URL + 'images/extraImages/path2.png'} 
            alt="sandbox"/>
        </div>
        <div style={{position: 'absolute', top: '0', left: '0', right: '0',}}>
            <img src={process.env.PUBLIC_URL + 'images/extraImages/back1.png'} alt="back5"
            onClick={() =>  back()}/>
            <br/>
            <br/>
            <StartMob className="icons">
                <button className='icons' onClick={() => next()}>ENTER</button>
            </StartMob>
        </div>
        </>
        : <>
            <div style={{textAlign: 'center'}}>
            <Img src={process.env.PUBLIC_URL + 'images/extraImages/path.png'} 
            alt="sandbox"/>
        </div>
        <div>
        <img src={process.env.PUBLIC_URL + 'images/extraImages/back.png'} 
            alt="back4"
            className="icons"
            style={{position: 'absolute', top: '40px'}}
            onClick={() =>  back()}/>
            <h1 style={{position: 'absolute', top: '60px', left: '41%', color: 'white'}}>Sandbox Mode</h1>
            {/* <Heading>
                <p>Summarised Overview</p>
            </Heading> */}
            <br/>
            <br/>
            <Start>
                <button className="icons" onClick={() => next()}>START</button>
            </Start>
        </div>
        </>}
        </>
    )
}

export default Sandbox;
