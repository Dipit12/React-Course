import React from 'react'

function App() {
  function handleClick(){
      alert("i am clicked")
  }
  function handleMouseHover(){
    alert("i am hovered")
  }
  function handleInputChange(e){
    console.log("i am typing")
    console.log("Value till now:", e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    alert("Should i submit")
  }
  return (
    <div>
      <p onMouseOver = {handleMouseHover}>This is a para</p>
      <button onClick = {handleClick}>Click Me</button>

      <form onSubmit = {handleSubmit}>
        <input type = "text" onChange = {handleInputChange} />
        <button type = "submit">Submit</button>
      </form>
    </div>
  )
}

export default App
