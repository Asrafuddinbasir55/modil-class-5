   
    import React from 'react';
    
    const Dail = (props) => {
        return (
            <div style={{border: '2px solid blue', margin: '5px'}}>
                <h3>this is dail</h3>
                <p>steps so fer: {props.steps}</p>
                
            </div>
        );
    };
    
    export default Dail;