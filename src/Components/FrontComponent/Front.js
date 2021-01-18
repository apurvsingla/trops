import React from 'react';
// import {ReactComponent as ReactLogo} from './button_add.svg';
// import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom';
// import {ReactComponent as ReactLogo2} from './button_back.svg';
// import { makeStyles } from '@material-ui/core/styles';
import {
Img,
} from './Front.styles';
// import {ReactComponent as LearningLogo} from './learning_mode.svg';
// import {ReactComponent as SandboxLogo} from './sandbox_mode.svg';
import ScrollLock  from 'react-scrolllock';

const Front = () => {
    // const [mQuery, setMQuery] = React.useState({
    //   matches: window.innerWidth > 892 ? true : false,
    // });

    // React.useEffect(() => {
    //   let mediaQuery = window.matchMedia("(max-width: 892px)");
    //   mediaQuery.addListener(setMQuery);
    //   return () => mediaQuery.removeListener(setMQuery);
    // }, []);
    const history = useHistory();
    const sandbox = () => {
        if(history.location.pathname === '/'){
            history.push('/sandbox');
        }
    }

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

    const learning = () => {
      if(history.location.pathname === '/'){
        history.push('/learning')
      }
    }
    // const classes = useStyles();
    return (<>
    {dimensions.width <892 ? window.matchMedia("(orientation: landscape)").matches ?
   <>
      <section>
      <div>
      <p style={{position: 'absolute', top: '43%', left: '12%', 
            zIndex: '22', fontSize: '1.2rem', fontWeight: 'bold'}}>Learning Mode</p>
            <p style={{position: 'absolute', top: '43%' ,right: '20%', 
            zIndex: '22', fontSize: '1.2rem',fontWeight: 'bold'}}>Sandbox Mode</p>
      <img src={process.env.PUBLIC_URL + 'images/extraImages/back1.png'} alt="back" />
          <span style={{fontSize: '2rem', fontWeight: '600', position: 'absolute', top: '10px', left: '90px', color: '#707070'}}>Trops Kit</span>
          <img 
          alt="icon1"
          style={{
          position: 'absolute',
          left: '-45vw',
          top: '25%',
          right: '0',
          margin: "0 auto",
          borderRadius: '20px',
        }}
        className='icons'
        onClick={() => learning()}
        src={process.env.PUBLIC_URL + 'images/extraImages/mob.png'}
        />
          <img 
          alt="icon2"
          style={{
          position: 'absolute',
          top: '25%',
          // left: '50%',
          right: '0',
          margin: "0 auto",
          borderRadius: '20px',
          }}
        className='icons'
        onClick={() => sandbox()} 
        src={process.env.PUBLIC_URL + 'images/extraImages/mob2.png'}
        />
      </div>
    </section>
    </>:<span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
        fontWeight: '500',
        fontSize: '1.2rem',
        textAlign: 'center'
      }}
    >Please rotate your device to view the content</span>: <>
    <section>
      <ScrollLock>
        <div>
          <div style={{display: 'inline'}}>
            <img src={process.env.PUBLIC_URL + 'images/extraImages/save.png'} 
            style={{height: '100vh', width: '25vw'}}
            alt="left"/>
            <img src={process.env.PUBLIC_URL + 'images/extraImages/back.png'}  
            className='icons'
            alt="back" 
            style={{position: 'absolute', top:'30px', left: '0'}}
            />
            <h1 style={{position: 'absolute', top: '53px', left: '100px', fontSize: '1.8rem', color: 'white'}}>Trops Kit</h1>
          </div>
          <div style={{display: 'inline'}}>
            <p style={{position: 'absolute', top: '43%', left: '30%', 
            zIndex: '22', fontSize: '2rem', fontWeight: 'bold'}}>Learning Mode</p>
            <p style={{position: 'absolute', top: '43%' ,left: '60%', 
            zIndex: '22', fontSize: '2rem',fontWeight: 'bold'}}>Sandbox Mode</p>
            <Img
            alt={'icon1'}
            src={process.env.PUBLIC_URL + 'images/extraImages/icon.png'}
            className='icons'
            onClick={() => learning()}
            style={{position: 'absolute', top: '35%'}}
            />
            <Img
            alt={'icon2'}
            src={process.env.PUBLIC_URL + 'images/extraImages/icon2.png'}
            className='icons'
            onClick={() => sandbox()}
            style={{position: 'absolute', top: '35%', left: '55%'}}
             />
          </div>
        </div>
      </ScrollLock>
    </section>
    </> }
    </>
    );
}

export default Front;
