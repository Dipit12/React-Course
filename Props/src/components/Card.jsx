import React from 'react'

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
        {props.children}
    </div>
  )
}

export default Card
