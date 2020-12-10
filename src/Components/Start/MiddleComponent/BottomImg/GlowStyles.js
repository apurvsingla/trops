import React from 'react';
// import { GlowOneM } from '../NormalImg/GlowStyleMobile';

export const GlowOne = ({index,bottom}) => {
    return (
        <>
            <span 
            style={{
                    width: '25px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 156}px`,
                    marginTop: `${140*index + 258}px`
            }}
            />
        </>
    );
}

export const GlowTwo = ({index, bottom}) => {
    return(<>
            <GlowOne index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '29px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 154}px`,
                    marginTop: `${140*index + 252}px`
            }}
            />
    </>)
}

export const GlowThree = ({index, bottom}) => {
    return(<>
            <GlowTwo index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '33px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 152}px`,
                    marginTop: `${140*index + 246}px`
            }}
            />
    </>)
}

export const GlowFour = ({index, bottom}) => {
    return(
        <>
         <GlowThree index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '40px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 149}px`,
                    marginTop: `${140*index + 239}px`
            }}
            />
        </>
    )

}

export const GlowFive = ({index, bottom}) => {
    return(<>
     <GlowFour index={index} bottom={bottom}/>
             <span 
            style={{
                    width: '50px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 144}px`,
                    marginTop: `${140*index + 233}px`
            }}
            />
    </>
    )
}

export const GlowSix = ({index, bottom}) => {
    return(<>
   <GlowFive index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '63px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 138}px`,
                    marginTop: `${140*index + 226}px`
            }}
            />
    </>)
}

export const GlowSeven = ({index,bottom}) => {
    return(<>
        <GlowSix index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '74px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 132}px`,
                    marginTop: `${140*index + 219}px`
            }}
            />
    </>)
}


export const GlowEight = ({index, bottom}) => {
    return(<>
    <GlowSeven index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '83px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 127}px`,
                    marginTop: `${140*index + 212}px`
            }}
            />
    </>)
}
