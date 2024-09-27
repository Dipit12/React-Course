import React, {useState} from 'react';
import Card from './components/Card';
function App(){
  const [name,setName] = useState("")
  return(
    <>
      <Card name = {name} setName = {setName}/>
    </>
  );
}

export default App;