import React from 'react';
import { Style } from './Loader.styles';
const Loader = ({index,bool,top}) => {
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 892 ? true : false,
    });
 
    React.useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width: 892px)");
        mediaQuery.addListener(setMQuery);
        return () => mediaQuery.removeListener(setMQuery);     
    }, []);
    return (<>
    {bool !== 1 ? (mQuery && !mQuery.matches) ? <Style>
        
        <span 
        style={{
                marginLeft: `${120*index -110}px`,
                marginTop: `${140*top + 97}px`

        }}
        />
        <span 
        style={{
                marginLeft: `${120*index -100}px`,
                marginTop: `${140*top + 97}px`

        }}
        />
         <span 
        style={{
                marginLeft: `${120*index -90 }px`,
                marginTop: `${140*top + 97}px`

        }}
        />
        <span 
        style={{
                marginLeft: `${120*index -80 }px`,
                marginTop: `${140*top + 97}px`

        }}
        />
        <span 
        style={{
                marginLeft: `${120*index -70 }px`,
                marginTop: `${140*top + 97}px`

        }}
        />
        </Style>: <Style>
        <span 
        style={{
                marginLeft: `${140*index -94}px`,
                marginTop: `${140*top + 132}px`
        }}
        />
        <span 
        style={{
                marginLeft: `${140*index -106}px`,
                marginTop: `${140*top + 132}px`
        }}
        />
        <span 
        style={{
                marginLeft: `${140*index-118}px`,
                marginTop: `${140*top + 132}px`
        }}
        />
        <span 
        style={{
                marginLeft: `${140*index -130}px`,
                marginTop: `${140*top + 132}px`

        }}
        />
        </Style>
    :null}
        
        </>
    );
}

export default Loader;
