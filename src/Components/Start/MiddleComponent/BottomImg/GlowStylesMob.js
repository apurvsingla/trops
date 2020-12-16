import React from 'react';

export const GlowOneM = ({index,bottom}) => {
    return (
        <>
            <span 
            style={{
                    width: '20px',
                    backgroundColor:'red',
                    height: '2px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 145}px`,
                    marginTop: `${140*index + 203}px`
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
                    width: '25px',
                    backgroundColor:'red',
                    height: '2px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 142}px`,
                    marginTop: `${140*index + 198}px`
            }}
            />
    </>)
}

export const GlowThreeM = ({index, bottom}) => {
    return(<>
             <GlowTwoM index={index} bottom={bottom}/>
            <span 
            style={{
                    width: '29px',
                    backgroundColor:'red',
                    height: '2px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 140}px`,
                    marginTop: `${140*index + 194}px`
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
                    width: '33px',
                    backgroundColor:'red',
                    height: '3px',
                    zIndex: '15',
                    position: 'absolute',
                    left: `${140*bottom + 138}px`,
                    marginTop: `${140*index + 189}px`
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
                    left: `${140*bottom + 136}px`,
                    marginTop: `${140*index + 184}px`
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
                    left: `${140*bottom + 133}px`,
                    marginTop: `${140*index + 179}px`
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
                    left: `${140*bottom + 128}px`,
                    marginTop: `${140*index + 174}px`
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
                    left: `${140*bottom + 124}px`,
                    marginTop: `${140*index + 170}px`
            }}
            />
    </>)
}
