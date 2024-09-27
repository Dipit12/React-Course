import React from 'react'

function Button(props){
    return(
        <div>
            <button onClick = {props.incrementCount}>Click me</button>
        </div>
    );
}

export default Button;