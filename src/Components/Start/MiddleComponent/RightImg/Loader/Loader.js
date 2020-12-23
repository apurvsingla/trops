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
                left: `${120*index +130}px`,
                top: `${140*top + 179}px`

        }}
        />
        <span 
        style={{
                left: `${120*index+120}px`,
                top: `${140*top + 179}px`

        }}
        />
         <span 
        style={{
                left: `${120*index+110}px`,
                top: `${140*top + 179}px`

        }}
        />
        <span 
        style={{
                left: `${120*index +100}px`,
                top: `${140*top + 179}px`

        }}
        />
        <span 
        style={{
                left: `${120*index+90}px`,
                top: `${140*top + 179}px`

        }}
        />
        </Style>: <Style>
        <span 
        style={{
                left: `${140*index +70}px`,
                top: `${140*top + 232}px`
        }}
        />
        <span 
        style={{
                left: `${140*index + 82}px`,
                top: `${140*top + 232}px`
        }}
        />
        <span 
        style={{
                left: `${140*index+94}px`,
                top: `${140*top + 232}px`
        }}
        />
        <span 
        style={{
                left: `${140*index +106}px`,
                top: `${140*top + 232}px`

        }}
        />
        </Style>
    :null}
        
        </>
    );
}

export default Loader;
