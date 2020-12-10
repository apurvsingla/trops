import React from 'react';

export const GlowOneM = ({index}) => {
    return (
        <>
           <span 
            style={{
                    width: '18px',
                    backgroundColor:'red',
                    height: '2px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '105px',
                    marginLeft: `${100*index + 103}px`
            }}
            />
        </>
    );
}

export const GlowTwoM = ({index}) => {
    return(<>
             <GlowOneM index={index} />
           <span 
            style={{
                    width: '25px',
                    backgroundColor:'red',
                    height: '2px',
                    zIndex: '15',
                    position: 'absolute',
                    top: '100px',
                    marginLeft: `${100*index + 101}px`
            }}
            />
    </>)
}

export const GlowThreeM = ({index}) => {
    return(<>
             <GlowTwoM index={index} />
            <span 
            style={{
                width: '29px',
                backgroundColor:'red',
                height: '2px',
                zIndex: '15',
                position: 'absolute',
                top: '96px',
                marginLeft: `${100*index + 100}px`
            }}
            />
    </>)
}

export const GlowFourM = ({index}) => {
    return(
        <>
        <GlowThreeM index={index} />
            <span 
            style={{
                width: '32px',
                backgroundColor:'red',
                height: '2px',
                zIndex: '15',
                position: 'absolute',
                top: '92px',
                marginLeft: `${100*index + 98}px`
            }}
            />
        </>
    )

}

export const GlowFiveM = ({index}) => {
    return(<>
     <GlowFourM index={index} />
            <span 
            style={{
                width: '36px',
                backgroundColor:'red',
                height: '3px',
                zIndex: '15',
                position: 'absolute',
                top: '87px',
                marginLeft: `${100*index + 96}px`
            }}
            />
    </>
    )
}

export const GlowSixM = ({index}) => {
    return(<>
   <GlowFiveM index={index} />
            <span 
            style={{
                width: '44px',
                backgroundColor:'red',
                height: '3px',
                zIndex: '15',
                position: 'absolute',
                top: '82px',
                marginLeft: `${100*index + 92}px`
            }}
            />
    </>)
}

export const GlowSevenM = ({index}) => {
    return(<>
    <GlowSixM index={index} />
            <span 
            style={{
                width: '52px',
                backgroundColor:'red',
                height: '3px',
                zIndex: '15',
                position: 'absolute',
                top: '77px',
                marginLeft: `${100*index + 89}px`
            }}
            />
    </>)
}


export const GlowEightM = ({index}) => {
    return(<>
    <GlowSevenM index={index} />
            <span 
            style={{
                width: '56px',
                backgroundColor:'red',
                height: '3px',
                zIndex: '15',
                position: 'absolute',
                top: '72px',
                marginLeft: `${100*index + 87}px`
            }}
            />
    </>)
}
