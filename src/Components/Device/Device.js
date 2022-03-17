    import React from 'react';
import DeviceDatil from '../DeviceDatil/DeviceDatil';
    
    const Device = (props) => {
        return (
            <div>
               <h2>I have: {props.name}</h2>
                <DeviceDatil price={props.price}></DeviceDatil>
            </div>
        );
    };
    
    export default Device;