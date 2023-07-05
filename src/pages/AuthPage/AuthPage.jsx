import React from 'react';
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from '../../components/LoginForm/LoginForm';



export default function Auth({ setUser }) {
  const [userPref, setUserPref] = useState('signup')
  function handlePref() {
    if (userPref === 'signup') {
      setUserPref('login')
    } else {
      setUserPref('signup')
    }
  }
    return (
      <div>
        <h1>Welcome to Eden</h1>
        <h2>LOOKING FOR PLANTS TO FILL YOUR GARDEN?</h2>
        <h3>SIGN UP NOW!</h3>
        <h3> WE HAVE A VARIETY OF TREES, SHRUBS, HERBS, AND FLOWERS! </h3>
        <h3>CHECK OUT OUR PRODUCTS BY LOGGING IN! </h3>
        { userPref === 'signup' ? <SignUpForm setUser={setUser} /> : <LogInForm setUser={setUser} />}
        <button onClick={handlePref}>
          { userPref === 'signup' ? 'Aleady a member? Log In' : 'Need an Account? Sign Up'}
          </button>
      </div>
    );
  }