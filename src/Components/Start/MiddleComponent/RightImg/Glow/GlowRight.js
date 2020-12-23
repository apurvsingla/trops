import React from 'react';

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
                    left: `${140*bottom + 151}px`,
                    marginTop: `${140*index + 263}px`
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
                    left: `${140*bottom + 150}px`,
                    marginTop: `${140*index + 257}px`
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
                    left: `${140*bottom + 147}px`,
                    marginTop: `${140*index + 250}px`
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
                    left: `${140*bottom + 144}px`,
                    marginTop: `${140*index + 244}px`
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
                    left: `${140*bottom + 139}px`,
                    marginTop: `${140*index + 238}px`
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
                    left: `${140*bottom + 133}px`,
                    marginTop: `${140*index + 231}px`
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
                    left: `${140*bottom + 127}px`,
                    marginTop: `${140*index + 224}px`
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
                    left: `${140*bottom + 123}px`,
                    marginTop: `${140*index + 217}px`
            }}
            />
    </>)
}
