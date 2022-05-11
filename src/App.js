import React, { useState } from 'react';
import './styles.css'
import {auth} from "./firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
// import { async } from '@firebase/util';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, setUser] = useState({});
  
  // onAuthStateChanged (auth, (currentUser) => {
  //   setUser(currentUser);
  // })

  const login = async (e) => {
    e.preventDefault();
    try{
         const user = signInWithEmailAndPassword(auth, email, password)
         console.log(user);
    }catch(error){
         alert(error.message)
    }
  }

  const register = async (e) => {
    e.preventDefault();
    try{
         const user = createUserWithEmailAndPassword(auth, email, password)
         console.log(user);
    }catch(error){
         alert(error.message)
    }
  }

  const logout = async (e) => {
    e.preventDefault();
    await signOut(auth);
  }

  return (
    <div className="login_container">
      {/* <h4>User Logged In:</h4>
      {user?.email} */}
      <h1>Login</h1>
      <form>
          <h4>Email</h4>
          <input className='input' type="text" placeholder='Enter Email Id' value={email} onChange={(e) => {setEmail(e.target.value)}} /> <br /><br />
          <h4>Password</h4>
          <input className='input' type="password" placeholder='Enter Password' value={password} onChange={(e) => {setPassword(e.target.value)}} /> <br />
          <br />
          <button onClick={login} className="login_signin">Sign In</button>
          <p>
          If you have not created your account click the button below to create a new account.
          </p>
          <button onClick={register} className='login_register'>Create an Account</button>
          <button onClick={logout} className="login_logout">Log Out</button>
      </form>

      <p>Copyright © Digital Next Technologies. All Rights Reserved.</p>
</div>


  )
}

export default App
