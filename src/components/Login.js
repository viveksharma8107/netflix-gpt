import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg'/>
      </div>
      <form onSubmit={e=>e.preventDefault()} className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded bg-opacity-75'>
         <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In': 'Sign Up'}</h1>
         
         {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
         <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
         
         <input  ref={password} type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
         <p className='text-red-500 font-semibold text-sm py-2'>{errorMessage}</p>
         <button className='p-2 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? 'Sign In': 'Sign Up'}</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign up now.': 'Already registered? Sign in Now.'}</p>
      </form>
      </div>
  )
}

export default Login