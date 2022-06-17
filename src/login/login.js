import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';

import {Navigate, useNavigate , Link} from 'react-router-dom'
import { Button, TextField } from '@mui/material';
import { async } from '@firebase/util';
import { firebaseAuth } from '../backend/firebase';
import '../login/login.css';

function Login() {
  
  const [userInput ,setuserInput] = useState({
   
    emailId:"",
    password:""})
  const [loading ,setLoading] = useState(false)
  const nav= useNavigate()


  const handleClick=async()=>{
    try{
      setLoading(true)
      await signInWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);

      

      nav("/home");
      
    }catch(err){
      alert("Invalid Credentials");
    }
    setLoading(false)
  }

  const handleChange =(event) => {
    const {name , value }=event.target;

    setuserInput({
      ...userInput,
      [name]:value
    })
  }
  return (
    <div className='App'>
      <input className='inputs' placeholder='Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange}/>
      <input className='inputs' placeholder='Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>

 <button className='button-block' onClick={handleClick}>Login</button>
 <div className='no-account'>Don't have an account? <Link to ='/signup' >Sign Up</Link></div>
    </div>
   
  );
}
export default Login;