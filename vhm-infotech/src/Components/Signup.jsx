import React from 'react'
import { useState,useEffect } from 'react'
import { validEmail,validPassword } from './Regrex'
import "./Signup.css"
const initialstate={
    name:"",
    email:"",
    password:"",
    phone:"",
    confirm_password:"",
}




export const Signup = () => {
     const [state,setState]=useState(initialstate);
     const [data,setData]=useState([]);
     const {name,email,password,phone,confirm_password}=state;
     const [emailError,setEmailError]=useState(false);
        const [pwdError,setPwdError]=useState(false);

        const [match,setMatch]=useState(false);

    const handleSubmit=(e)=>{
       
        if(password!==confirm_password){
            setEmailError(false);
            setPwdError(false);
            setMatch(true);
            setState(()=>initialstate);
            return;
        }
         else if(!name || !email || !password || !phone || !confirm_password){
            alert("Please fill all the fields");
        }
        else if( !validPassword.test(password) || !validEmail.test(email)) 
        {
          
            setMatch(false);
            setEmailError(true);
            setPwdError(true);
           
            setState(()=>initialstate);
            return;
        }
        else if(phone.length>10)
        {
            alert("Phone number should be 10 digits");
        }
        else
        {
            setEmailError(false);
            setPwdError(false);
            setMatch(false);
            alert("Successfully registered");
            setState(()=>initialstate);
        }

        




    }






  return (
    <div className='innerbox'>
    <div>
    <h1>Get Started</h1>
    <p>Already have an account ? Login</p>
    {
                match ?
                <div className='fail'>
                    <p>Password and confirm password do not match</p>
                </div>:null
            }
            
            <div className='fail'>
                  {(emailError || pwdError)  && <p>Please enter valid email and password</p>}
                </div>
    </div>
      <div className='input_box1'>
              <label>Name</label>
        <input type="text" name="name" value={name} onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}/>
      </div>
      <div className='combine'>
        <div className='input_box2'>
                <label>Email</label>
        <input type="text" name="email" value={email} onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}/>
        </div>
        <div className='input_box3'>
                <label>Phone</label>
        <input type="text" name="phone" value={phone} onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}/>
        
      </div>
      </div>
        <div className='input_box4'>
                <label>Password</label>
        <input type="password" name="password" value={password} onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}/>
        <div className='detail'>
        <p>contain atleast 8 characters</p>
        <p>contain both lowercase and uppercase letters</p>
        <p>contain atleast one number (0-9) or a symbol</p>
        <p>does not contain your email address</p>
        </div>
        </div>
        <div className='input_box5'>
                <label>Confirm Password</label>
        <input type="password" name="confirm_password" value={confirm_password} onChange={(e)=>setState({...state,[e.target.name]:e.target.value})}/>
            </div>

            <div>
                <button className='button' onClick={handleSubmit}>Signup</button>
            </div>

           
    </div>
  )
}

