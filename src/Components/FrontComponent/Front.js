import React from 'react';
import {ReactComponent as ReactLogo} from './button_add.svg';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom';
// import {ReactComponent as ReactLogo2} from './button_back.svg';
import { makeStyles } from '@material-ui/core/styles';
import {LastIcon,
HeaderIcon, 
HeaderContent,
HeaderComponent,
BackButton,
} from './Front.styles';
import {ReactComponent as LearningLogo} from './learning_mode.svg';
import {ReactComponent as SandboxLogo} from './sandbox_mode.svg';


const useStyles = makeStyles({
  icons: {
    '& svg': {
      fontSize: 40
    }
  }
});

const Front = () => {
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
    const classes = useStyles();
    return (<>
    {/* top component */}
        <HeaderComponent position="static">
          <HeaderIcon className={classes.icons}>
            <MenuIcon />
          </HeaderIcon>
          <HeaderContent>
            <h1>Trops Kit</h1>
            <p>Small explanation about the Kit</p>
          </HeaderContent>
          <BackButton/>
        </HeaderComponent>

    {/* middle component */}

        <LearningLogo style={{
          position: 'absolute',
          left: '0',
          right: '0',
          margin: "0 auto",
          borderRadius: '20px',
          // backgroundSize: '200px 300px',
          // overflow: 'none',
          top: '250px',
          backgroundColor: 'yellow',
          cursor: 'pointer'
        }}
        onClick={() => learning()}
        />
    
        <SandboxLogo style={{
          position: 'absolute',
          // border: '1px solid black',
          top: '420px',
          left: '0',
          right: '0',
          margin: "0 auto",
          borderRadius: '20px',
          backgroundColor: 'red',
          cursor: 'pointer'
        }}
        onClick={() => sandbox()} />
      {/* <img src={process.env.PUBLIC_URL + '/images/sand.png'} alt="s" width="350"/> */}
    {/* bottom button */}
        <LastIcon>
            <ReactLogo />
        </LastIcon>
        </>
    );
}

export default Front;
