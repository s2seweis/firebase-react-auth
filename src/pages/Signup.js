import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase.js';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main >        
        <section>
            <div>
                <div>                  
                <p style={{textAlign: "center", fontSize:"xx-large", background:"lightblue"}}> Signup </p>                                                                            
                    <form style={{background:"lightblue", padding:"10px", fontSize:"x-large", width:"200px", height:"auto", marginLeft:"20px"}}>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>

                        
                                                                     
                    </form>
                   
                    <p style={{marginLeft:"20px"}}>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>  

                    <div style={{background:"lightblue", padding:"10px", fontSize:"x-large", width:"200px", height:"auto", marginLeft:"20px", display:"grid"}}>
                        <p>Routes:</p>
                        <a style={{marginBottom: '15px'}} href="/">Home</a>
                        <a style={{marginBottom: '15px'}} href="login">Login</a>
                        <a style={{marginBottom: '15px'}} href="loginsuccess">Login Success</a>
                         <a style={{marginBottom: '15px'}} href="signup">Signup</a>
                        </div>                 
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup