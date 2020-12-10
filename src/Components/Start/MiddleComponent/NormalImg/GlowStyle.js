import React from 'react';

export const GlowOne = ({index}) => {
    return (
        <>
            <span 
            style={{
                    width: '25px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '128px',
                    marginLeft: `${100*index + 118}px`
            }}
            />
        </>
    );
}

export const GlowTwo = ({index}) => {
    return(<>
            <GlowOne index={index} />
            <span 
            style={{
                    width: '34px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '122px',
                    marginLeft: `${100*index+ 113}px`
            }}
            />
    </>)
}

export const GlowThree = ({index}) => {
    return(<>
            <GlowTwo index={index} />
            <span 
            style={{
                    width: '38px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '115px',
                    marginLeft: `${100*index + 111}px`
            }}
            />
    </>)
}

export const GlowFour = ({index}) => {
    return(
        <>
         <GlowThree index={index} />
                <span 
            style={{
                    width: '40px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '109px',
                    marginLeft: `${100*index +109}px`
            }}
            />
        </>
    )

}

export const GlowFive = ({index}) => {
    return(<>
     <GlowFour index={index} />
            <span 
            style={{
                    width: '50px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '102px',
                    marginLeft: `${100*index + 104}px`
            }}
            />
    </>
    )
}

export const GlowSix = ({index}) => {
    return(<>
    <GlowFive index={index} />
            <span 
            style={{
                    width: '61px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '96px',
                    marginLeft: `${100*index + 99}px`
            }}
            />
    </>)
}

export const GlowSeven = ({index}) => {
    return(<>
        <GlowSix index={index} />
            <span 
            style={{
                    width: '75px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '89px',
                    marginLeft: `${100*index + 92}px`
            }}
            />
    </>)
}


export const GlowEight = ({index}) => {
    return(<>
    <GlowSeven index={index}/>
            <span 
            style={{
                    width: '80px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '82px',
                    marginLeft: `${100*index + 90}px`
            }}
            />
    </>)
}
