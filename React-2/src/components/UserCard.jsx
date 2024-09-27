import React from 'react'
import "./UserCard.css"
function UserCard(props) {
  return (
    <div className = "user-container">
        <p id = "user-name">{props.name}</p>
        <img src = "../assets/batman.p=jpg" id = "user-image"></img>
        <p id = "user-title"> {props.title}</p>      
    </div>
  )
}

export default UserCard
