import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase.js';
import { NavLink, useNavigate } from 'react-router-dom'
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/loginsuccess")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main >        
                <section>
                    <div>                                            
                        <p style={{textAlign: "center", fontSize:"xx-large", background:"lightblue"}}> Login </p>                       


                                                          
                        <form style={{background:"lightblue", padding:"10px", fontSize:"x-large", width:"200px", height:"auto", marginLeft:"20px"}}>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                         

                          



                            </div>                               
                        </form>
                       
                        <p style={{marginLeft:"20px"}} className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
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
                </section>
            </main>
        </>
    )
}
 
export default Login