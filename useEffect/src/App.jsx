import React, {useEffect, useState} from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0);
  // first -> side-effect function
  // second -> cleanup function
  // third -> dependency array
  // useEffect(() =>{
  //   first 

  //   return ()=>{
  //     second 
  //   }
  // }, [third])

  // variation-1 -> runs on every render
  // useEffect(()=>{
  //   alert("I will run on each render")
  // })

  // variation-2 -> runs only once
  // useEffect(()=>{
  //   alert("i will run only once")
  // },[])

  // variation-3 -> runs on every render of count
  // useEffect(()=>{
  //   alert("i will run on every render of count")
  // },[count])

  // variation-4 -> using the cleanup function
  useEffect(()=>{
    alert("count is updated")
    return()=>{
      alert("count is unmounted from UI")
    }
  },[count])
  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
       <button onClick = {handleClick}> {count} </button>
    </div>
  )
}

export default App
