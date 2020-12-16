import React from 'react';
import { Style } from './Loader.styles';
const Loader = ({index,bool}) => {
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
                marginLeft: `${100*index}px`,
        }}
        />
        <span 
        style={{
                marginLeft: `${100*index +12}px`,
        }}
        />
        <span 
        style={{
                marginLeft: `${100*index + 24 }px`,
        }}
        />
         <span 
        style={{
                marginLeft: `${100*index + 36 }px`,
        }}
        />
        <span 
        style={{
                marginLeft: `${100*index + 48 }px`,
        }}
        />
        <span 
        style={{
                marginLeft: `${100*index + 60 }px`,
        }}
        />
        <span 
        style={{
                marginLeft: `${100*index + 72 }px`,
        }}
        />
        </Style>: <Style>
        <span 
        style={{
                marginLeft: `${100*index + 32}px`,
        }}
        />
        <span 
        style={{
                marginLeft: `${100*index +47}px`,
        }}
        />
        <span 
        style={{
                marginLeft: `${100*index + 62 }px`,
        }}
        />
        <span 
        style={{
                marginLeft: `${100*index + 77 }px`,

        }}
        />
        </Style>
    :null}
        
        </>
    );
}

export default Loader;
