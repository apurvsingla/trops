import React, {useEffect} from 'react';
// import Box from '@material-ui/core/Box';
// import axios from "axios";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Main} from './ShowCase.styles';
import {useHistory} from 'react-router-dom';
import {ReactComponent as Back} from './button_back.svg';
import useSessionStorage from '../../SessionStorage/SessionStorage';
// import Start from '../../Start/Start';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // paddingBottom: '150px'
  },
}));



const ShowCase = () => {
    const classes = useStyles();
    const [state, setState] = useSessionStorage('state', null);
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
      const apiUrl = 'http://localhost:8000/data';
      fetch(apiUrl).then((res) => (res.json())).then(data => setState(data))
      // setState(result.data);
      // console.log(result.data)
    }

    const back = () => {
        history.push('/');
    }

    return (
        <>
        <Back width="120" height="120"
                style={{position: 'absolute', cursor: 'pointer', left: '-5px'}}
                onClick={() => back()}
            />
        <Main>
          <h1 style={{textAlign: 'center', letterSpacing: '0.1em', color: 'white'}}>Learning Tutorials</h1>  
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={4}
            style={{width:"100%", margin: 'auto', zIndex: '1000'}}
            > 
            {state ? state.map((e,index) => {
            return (
                <Grid item md={4} sm={1} style={{width: '100%', cursor: 'pointer', zIndex: '1000'}} onClick={() => page(e,index+1)} key={index}>
                <Paper className={classes.paper}>
                    <h1 style={{paddingBottom: '40px'}}>Tutorial {index+1}:</h1> 
                    <span style={{fontSize: '1.3rem', textTransform: 'uppercase'}}>{e.name}</span>
                </Paper>
              </Grid>
                );
            // Object.entries(e).map((i ,v) => console.log(i))
        }) : null}
          </Grid>
        </Main>
    </>);
}

export default ShowCase;
