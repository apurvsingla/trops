import React from 'react';
import {BottomStyles} from './Led.styles';

const Leds = ({index,top,bool}) => {
    const [mQuery, setMQuery] = React.useState({
        matches: window.innerWidth > 892 ? true : false,
    });
 
    React.useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width: 892px)");
        mediaQuery.addListener(setMQuery);
        return () => mediaQuery.removeListener(setMQuery);     
    }, []);
    const func = () => {
        if(mQuery && !mQuery.matches){
            return(<>
                <span 
                style={{
                    left: `${140*index + 166}px`,
                    marginTop: `${140*top + 130}px`
                }}
                />
            </>)
        }
    }
    return (
        <BottomStyles>
            {bool!== 1 ?
            <>
            <span 
            className="loader-glow-bottom"
            style={{
                left: `${140*index + 166}px`,
                marginTop: `${140*top + 145}px`
            }}
            />
            <span 
            className="loader-glow-bottom"

            style={{
                left: `${140*index + 166}px`,
                marginTop: `${140*top + 160}px`
            }}
            />
            <span 
            className="loader-glow-bottom"

            style={{
                left: `${140*index + 166}px`,
                marginTop: `${140*top + 175}px`
            }}
            />
              {func()}
              </>
        : null}
        </BottomStyles>    
      
    );
}

export default Leds;
