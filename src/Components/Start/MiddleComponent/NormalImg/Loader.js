import React from 'react';
import './Glow.scss';
const Loader = ({index}) => {
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 892 ? true : false,
    });
 
    React.useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width: 892px)");
        mediaQuery.addListener(setMQuery);
        return () => mediaQuery.removeListener(setMQuery);     
    }, []);
    return (<>
        {(mQuery && !mQuery.matches) ? <span className="loader">
        <span 
        className="loader-glow"
        style={{
                marginLeft: `${100*index}px`,
        }}
        />
        <span 
        className="loader-glow"

        style={{
                marginLeft: `${100*index +12}px`,
        }}
        />
        <span 
        className="loader-glow"

        style={{
                marginLeft: `${100*index + 24 }px`,
        }}
        />
         <span 
        className="loader-glow"

        style={{
                marginLeft: `${100*index + 36 }px`,
        }}
        />
            <span 
        className="loader-glow"

        style={{
                marginLeft: `${100*index + 48 }px`,
        }}
        />
        <span 
        className="loader-glow"

        style={{
                marginLeft: `${100*index + 60 }px`,
        }}
        />
        <span 
        className="loader-glow"

        style={{
                marginLeft: `${100*index + 72 }px`,
        }}
        />
        </span>: <span className="loader">
        <span 
        className="loader-glow"
        style={{
                marginLeft: `${100*index + 32}px`,
        }}
        />
        <span 
        className="loader-glow"

        style={{
                marginLeft: `${100*index +47}px`,
        }}
        />
        <span 
        className="loader-glow"

        style={{
                marginLeft: `${100*index + 62 }px`,
        }}
        />
         <span 
        className="loader-glow"

        style={{
                marginLeft: `${100*index + 77 }px`,

        }}
        />
        </span>
    }
        </>
    );
}

export default Loader;
