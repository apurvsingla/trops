import React from 'react';
// import {ReactComponent as ReactLogo} from './button_add.svg';
// import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom';
// import {ReactComponent as ReactLogo2} from './button_back.svg';
// import { makeStyles } from '@material-ui/core/styles';
// import {LastIcon,
// HeaderIcon, 
// HeaderContent,
// HeaderComponent,
// BackButton,
// } from './Front.styles';
import {ReactComponent as LearningLogo} from './learning_mode.svg';
import {ReactComponent as SandboxLogo} from './sandbox_mode.svg';


// const useStyles = makeStyles({
//   icons: {
//     '& svg': {
//       fontSize: 40
//     }
//   }
// });

const Front = () => {
    const [mQuery, setMQuery] = React.useState({
      matches: window.innerWidth > 892 ? true : false,
    });

    React.useEffect(() => {
      let mediaQuery = window.matchMedia("(max-width: 892px)");
      mediaQuery.addListener(setMQuery);
      return () => mediaQuery.removeListener(setMQuery);
    }, []);
    const history = useHistory();
    const sandbox = () => {
        if(history.location.pathname === '/'){
            history.push('/sandbox');
        }
    }

    const learning = () => {
      if(history.location.pathname === '/'){
        history.push('/learning')
      }
    }
    // const classes = useStyles();
    return (<>
    {mQuery && !mQuery.matches ? <>
      <section>
      <div>
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
        src={process.env.PUBLIC_URL + 'images/extraImages/mob1.png'}
        />
          <img 
          alt="icon1"
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
    </>: <>
    <section>
      <div style={{backgroundColor: '#fe818d', height: '100vh', width: '250px'}}>
          <img src={process.env.PUBLIC_URL + 'images/extraImages/back.png'}  
          className='icons'
          alt="back" 
          style={{position: 'absolute', top:'30px', left: '0'}}/>
          <h1 style={{position: 'absolute', top: '53px', left: '100px', fontSize: '1.8rem', color: 'white'}}>Trops Kit</h1>
          <LearningLogo style={{
          position: 'absolute',
          left: '-20%',
          top: '35%',
          right: '0',
          margin: "0 auto",
          borderRadius: '20px',
        }}
        className='icons'
        onClick={() => learning()}
        />
          <SandboxLogo style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          right: '0',
          margin: "0 auto",
          borderRadius: '20px',
          }}
        className='icons'
        onClick={() => sandbox()} />
      </div>
    </section>
    </> }
    
        </>
    );
}

export default Front;
