
import React from 'react'

function Description(props){
    return(
        <div>

        <h1>Hi my name is {props.name}</h1>
        <p>This is some description about me: {props.description}</p>
        </div>
    );
}

export default Description;