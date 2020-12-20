import React from 'react';
import {
        // LargeRowLine,
// RightSpan,
NormalRImg,
// LargeRowLine
} from '../Middle.style';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import { tactSource } from '../Source/source';
// import {conditionSource} from '../Source/source';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
        largeIconXL: {
                fontSize: 70,
              },
      });


const RightImgs = ({mQuery, currentRight, activeRightIndex, 
    activeDot, activeSecondRightLink, index, 
     pos, i}) => {
        const classes = useStyles();
    return(<>
        {mQuery && !mQuery.matches ? (
         
                <NormalRImg src={i.src} 
                        alt="alt" 
                        style={{
                                left: `${120*i.id+ 138}px`,
                                marginTop: `${140*i.bottomRightPos + 147}px`,
                        }}
                        />
        ) : 
        
                <NormalRImg src={i.src} 
                alt="alt" 
                style={{
                        left: `${140*i.id+ 114}px`,
                        marginTop:`${140*i.bottomRightPos+ 185}px`,
                        // top: `${-250}px`
                }}
                />
                }                
                {mQuery && !mQuery.matches ? (
                <ArrowRightAltIcon 
                className={classes.largeIconXL}
                style={{
                        position: 'absolute',
                        left: `${120*i.id +81}px`,
                        top: `${140*i.bottomRightPos + 149}px`,
                        zIndex: '-8',
                        }}
                key={index+'--icon'} />): (
                        <ArrowRightAltIcon 
                        className={classes.largeIconXL}
                        style={{
                                position: 'absolute',
                                left: `${140*i.id +60}px`,
                                top: `${140*i.bottomRightPos + 202}px`,
                                zIndex: '-8',
                                color:'transparent'
                                }}
                                stroke={"black"} stroke-width={1}
                        key={index+'--icon'} />)}
        </>)
}

export default RightImgs;
