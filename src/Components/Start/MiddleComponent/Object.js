/* eslint-disable no-unused-vars */
import React from 'react';
import {useSessionStorage} from '../../SessionStorage/SessionStorage';
import MaximizeIcon from '@material-ui/icons/Maximize';


const MiddleComponent = ({img1}) => {
        const [active, setActive] = useSessionStorage('active-right-dot', {});
        const [activeother, setActiveother] = useSessionStorage('active-bottom-dot', {});
        const [activeDot, setActiveDot] = useSessionStorage('dot', null)
        let boolean = false;
        let boolean2 = false;
        const activeLink = (e,index) => {
                if(e){
                        boolean = !boolean;
                        active[e.target.id] = boolean;
                        e.target.className = `${boolean}-right-icondot`;
                        if(boolean === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'black';   
                        }
                        setActive(active);
                }
                
        }
        
        const activeSecondLink = (e,index) => {
                if(e){
                        boolean2 = !boolean2;
                        activeother[e.target.id] = boolean2;
                        e.target.className = `${boolean2}-bottom-icondot`;
                        if(boolean2 === true){
                                e.target.style.backgroundColor = 'green';
                        }else{
                                e.target.style.backgroundColor = 'black';   
                        }
                        setActiveother(activeother);
                        setActiveDot(index);
                }
        }

        return( 
                <span>
                        {Object.values(img1).map((i,index) => {
                                return(<>
                        {activeother[activeDot + '-bottom'] === true ? (<img src={i} alt={index} 
                                        style={{width: '70px', 
                                        position: 'relative', 
                                        left: '100px',
                                        display: 'flex',
                                        flexDirection: 'column'
                                        }} />) : null }
                                        <img src={i} alt={index} 
                                        style={{width: '70px', 
                                        position: 'relative', 
                                        left: '100px'
                                        }} />

                        {(img1.length-1) === index ? null : (<MaximizeIcon 
                        style={{
                        position: 'relative',
                        transform: 'scale(1.7)',
                        left: `${100}px`,
                        }}
                        key={index+'--icon'}
                        />) }

                                        {i === (process.env.PUBLIC_URL + '/images/components/condition.png') ? 
                        (<>
                        <span style={{
                                position: 'absolute',
                                left: `${90*index + 160}px`,
                                height: '15px',
                                width: '15px',
                                top: '30px',
                                borderRadius: '25px',
                                backgroundColor : 'black'
                        }}
                        onClick={(e) => activeLink(e,index)}
                        id={index+'-right'}
                        key={index+'-right'}
                        
                        /> 
                        <span style={{
                                position: 'absolute',
                                left: `${100*index + 20}px`,
                                top: '54px',
                                backgroundColor: 'black',
                                height: '15px',
                                width: '15px',
                                borderRadius: '25px'
                                }}
                                key={index+'-bottom'}
                                id={index+'-bottom'}
                                onClick={(e) => activeSecondLink(e,index)}
                                /> 
                                </>): null}
                        </>
                                )
                        })}
                </span>
        )
        
}

export default MiddleComponent;