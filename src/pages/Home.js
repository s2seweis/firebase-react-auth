import React, {useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase.js';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate ();

  const handleLogout = () => {
    signOut (auth)
      .then (() => {
        // Sign-out successful.
        navigate ('/');
        console.log ('Signed out successfully');
      })
      .catch (error => {
        // An error happened.
      });
  };

  useEffect (() => {
    onAuthStateChanged (auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log ('uid', uid);
      } else {
        // User is signed out
        // ...
        console.log ('user is logged out');
      }
    });
  }, []);

  return (
    <section>
      <nav>

        <div
          style={{
            textAlign: 'center',
            fontSize: 'xx-large',
            background: 'lightblue',
          }}
        >
          <p>
            Welcome Home{' '}
          </p>
        </div>

        <div
          style={{
            background: 'lightblue',
            width: '200px',
            fontSize: 'x-large',
            marginLeft: '20px',
            height: 'auto',
          }}
        >

          <div style={{display: 'grid', padding: '20px'}}>
            <p>Routes:</p>

            <a style={{marginBottom: '15px'}} href="/">Home</a>
            <a style={{marginBottom: '15px'}} href="login">Login</a>
            <a style={{marginBottom: '15px'}} href="loginsuccess">
              Login-Success
            </a>
            <a style={{marginBottom: '15px'}} href="signup">Signup</a>
          </div>

          <div style={{justifyContent: 'center', display: 'flex', padding:"20px"}}>
            <button style={{fontSize:"inherit"}} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Home;
