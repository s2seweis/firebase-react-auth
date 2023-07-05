import React, {} from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LoginSuccess from './pages/LoginSuccess';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>                                                                       
               <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/loginsuccess" element={<LoginSuccess/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;