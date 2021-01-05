import React, {useEffect} from 'react';
// import Box from '@material-ui/core/Box';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Main} from './ShowCase.styles';
import {useHistory} from 'react-router-dom';
// import {ReactComponent as Back} from './button_back.svg';
import useSessionStorage from '../../SessionStorage/SessionStorage';
import { Scrollbars } from 'react-custom-scrollbars';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';
import DeleteIcon from '@material-ui/icons/Delete';
// import Start from '../../Start/Start';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fafafa',
    backgroundColor: '#FE818D'
    // paddingBottom: '150px'
  },
}));



const ShowCase = () => {
    const classes = useStyles();
    const [state, setState] = useSessionStorage('state', null);
    // const [loader, setLoader] = React.useState(false);
    const history = useHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        func();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);

    const page = (e,index) => {
        history.push({
          pathname: `${'/learning/tut_' + index}`,
          data: e.img1,
          bottom: e.img2
        });
    }

    const func = async () => {
      const apiUrl = 'https://trops.herokuapp.com/data';
      fetch(apiUrl).then((res) => (res.json())).then(data => setState(data))
    }

    const back = () => {
        history.push('/');
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

    const deletes = async (e) => {
      await axios({
        method: 'DELETE',
        url: `https://trops.herokuapp.com/delete/${e._id}`,
        data: e._id,
      })
      window.location.reload()
    }

    return (
        <>
        {dimensions.width > 892 ?
        <>
        <img src={process.env.PUBLIC_URL + 'images/extraImages/save.png'} 
          style={{height: '100vh', width: '260px', position: 'absolute', left: '0', zIndex: '1000'}}
          alt="left"/>
          <h1 style={{position: 'absolute', top: '53px', zIndex: '1001',
          left: '100px', fontSize: '1.8rem', color: 'white'}}>Tutorials</h1>
          <img src={process.env.PUBLIC_URL + 'images/extraImages/back.png'}  
          className='icons'
          alt="back" 
          style={{position: 'absolute', top:'30px', left: '0', zIndex: '1001'}}
          onClick={() => back()}
          />
          </>: 
          <>
          <h1 style={{position: 'absolute', top: '33px', zIndex: '1001',
          left: '70px', fontSize: '1.5rem', color: 'grey', fontWeight: '500'}}>Tutorials</h1>
          <img src={process.env.PUBLIC_URL + 'images/extraImages/back1.png'} alt="back"
          style={{position: 'absolute', top: '20px'}}
          onClick={() => back()}
          />
          </>}
          {dimensions.width > 892 ?
          !state ? <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          style={{ zIndex: '5000000000',
          position: 'absolute', top: '25%', left: '50%'}}
       /> :
        <Main>
         <Scrollbars style={{ width: '100vw', height: '100vh'}}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={4}
            style={{width:"80vw", marginLeft: '260px', zIndex: '100'}}
            > 
            {state ? state.map((e,index) => {
            return (
                <Grid item md={4} sm={6} 
                className="icons"
                style={{width: '100%', zIndex: '100', marginTop: '50px'}} 
                 key={index}>
                <Paper className={classes.paper} onClick={() => page(e,index+1)}>
                    <h1 style={{paddingBottom: '30px'}}>Tutorial {index+1}:</h1> 
                    <span style={{fontSize: '1.3rem', textTransform: 'uppercase'}}>{e.name}</span>
                </Paper>
                <DeleteIcon 
                   style={{ 
                     zIndex: '1000000000',
                     position: 'relative',
                     top: '20px',
                     color: 'black'
                   }}
                   onClick={() => deletes(e)}
                   />
              </Grid>
                );
        }) : null}
          </Grid>
          </Scrollbars>
        </Main>
        : null}

        {dimensions.width <= 892 ? 
        !state ? <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        style={{ zIndex: '5000000000',
        position: 'absolute', top: '25%', left: '50%'}}
     /> :
        <Main>
        <Scrollbars style={{ width: '100vw', height: '100vh', marginTop: '76px'}}>
         <Grid
           container
           direction="row"
           justify="flex-start"
           alignItems="center"
           spacing={3}
           style={{width:"100vw", zIndex: '100', margin: 'auto',}}
           > 
           {state ? state.map((e,index) => {
           return (
               <Grid item md={4} sm={6} 
               className="icons"
               style={{width: '100%', zIndex: '100'}} 
               onClick={() => page(e,index+1)} key={index}>
               <Paper className={classes.paper}>
                   <h1 style={{paddingBottom: '10px',}}>Tutorial {index+1}:</h1> 
                   <span style={{fontSize: '1.3rem', textTransform: 'uppercase'}}>{e.name}</span>
                   <DeleteIcon 
                   style={{
                     position: 'absolute'
                   }}
                   onClick={() => deletes(e)}
                   />
               </Paper>
             </Grid>
               );
       }) : null}
         </Grid>
         </Scrollbars>
       </Main>
        : null}
    </>);
}

export default ShowCase;
