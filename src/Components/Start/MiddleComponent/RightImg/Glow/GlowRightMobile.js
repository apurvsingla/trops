import React from 'react';

export const GlowOneM = ({index,bottom}) => {
    return (
        <>
            <span 
            style={{
                    width: '17px',
                    backgroundColor:'red',
                    height: '2px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${120*bottom + 163}px`,
                    marginTop: `${140*index + 202}px`
            }}
            />
        </>
    );
}

export const GlowTwoM = ({index, bottom}) => {
    return(<>
            <GlowOneM index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '23px',
                    backgroundColor:'red',
                    height: '2px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${120*bottom + 160}px`,
                    marginTop: `${140*index + 197}px`
            }}
            />
    </>)
}

export const GlowThreeM = ({index, bottom}) => {
    return(<>
             <GlowTwoM index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '27px',
                    backgroundColor:'red',
                    height: '2px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${120*bottom + 158}px`,
                    marginTop: `${140*index + 193}px`
            }}
            />
    </>)
}

export const GlowFourM = ({index, bottom}) => {
    return(
        <>
         <GlowThreeM index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '30px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${120*bottom + 156}px`,
                    marginTop: `${140*index + 188}px`
            }}
            />
        </>
    )

}

export const GlowFiveM = ({index, bottom}) => {
    return(<>
        <GlowFourM index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '37px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${120*bottom + 153}px`,
                    marginTop: `${140*index + 183}px`
            }}
            />
    </>
    )
}

export const GlowSixM = ({index, bottom}) => {
    return(<>
        <GlowFiveM index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '43px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${120*bottom + 151}px`,
                    marginTop: `${140*index + 178}px`
            }}
            />
    </>)
}

export const GlowSevenM = ({index,bottom}) => {
    return(<>
     <GlowSixM index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '53px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${120*bottom + 145}px`,
                    marginTop: `${140*index + 173}px`
            }}
            />
    </>)
}


export const GlowEightM = ({index, bottom}) => {
    return(<>
        <GlowSevenM index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '60px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${120*bottom + 142}px`,
                    marginTop: `${140*index + 169}px`
            }}
            />
    </>)
}
