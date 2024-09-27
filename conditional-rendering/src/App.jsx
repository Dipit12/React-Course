import React,{useState} from 'react'
import LogOutButton from './components/LogOutButton';
import LoginButton from './components/LoginButton';

function App() {
   const [isLoggedIn, setLoggedIn] = useState(true);
   return(
    <>
    {isLoggedIn ? <LogOutButton /> : <LoginButton />}
    </>
   );

}

export default App
