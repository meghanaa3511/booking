import {useState} from 'react'
import {useNavigate, Link, Navigate} from 'react-router-dom'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { firebaseAuth, firebaseDatabase } from '../backend/firebase'
import { Button, TextField } from '@mui/material'
import { ref, set } from 'firebase/database'
import '../signup/signup.css';
function Signup() {

  const [userInput ,setuserInput] = useState({

    emailId:"",
    name:"",
    gender:"",
    phone:"",
    password:"",
    cpassword:""
  
  })

  const [loading ,setLoading] = useState(false);
  const nav = useNavigate();
  const handleClick=async()=>{
    try{
      setLoading(true)
      await createUserWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);
      alert("acount created")

      const recordref=ref(firebaseDatabase,`SignUp_Details/${userInput.name}`);
      await set(recordref,userInput)

      nav("/");
    }catch(err){
      alert(err);
    }
    setLoading(false)

  }

  const handleChange =(e) => {
    const {name , value }=e.target;

    setuserInput({
      ...userInput,
      [name]:value
    })


  }
  return (
    <div className='App1'>
      
     
    
      <input className='inputs' placeholder='Name' name ='name' type={'text'} value = {userInput.name} onChange={handleChange}/>
     
      <input className='inputs' placeholder='Gender' name ='gender' type={'text'} value = {userInput.gender} onChange={handleChange}/>
      <div onChange={handleChange}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
      <input className='inputs' placeholder='Phone' name ='phone' type={'number'} value = {userInput.phone} onChange={handleChange}/>
      <input className='inputs' placeholder='Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange}/>
      <input className='inputs' placeholder='Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>
      <input className='inputs' placeholder='Confirm Password' name ='cpassword' type={'password'} value = {userInput.cpassword} onChange={handleChange}/>

 <button className='button-block' onClick={handleClick}>create account</button>
 <div className='no-account'>Already have an account? <Link to = '/'>Sign In</Link></div>
    </div>
   
  );
}

export default Signup;