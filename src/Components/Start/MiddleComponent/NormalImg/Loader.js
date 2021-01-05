import React from 'react';
import { Style } from './Loader.styles';
const Loader = ({index,bool}) => {
        const [dimensions, setDimensions] = React.useState({ 
                height: window.innerHeight,
                width: window.innerWidth
              })
        React.useEffect(() => {
        function handleResize() {
                setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
                })
                return _ => {
                window.removeEventListener('resize', handleResize)
                
                }
        }
        window.addEventListener('resize', handleResize);
        }) 
    return (<>
    {bool !== 1 ? (dimensions.width < 892) ? <Style>
        
        <span 
        style={{
                marginLeft: `${100*index +12}px`,
        }}
        />
        {/* <span 
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
        /> */}
        </Style>: <Style>
        <span 
        style={{
                marginLeft: `${100*index + 32}px`,
        }}
        />
        {/* <span 
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
        /> */}
        </Style>
    :null}
        
        </>
    );
}

export default Loader;
