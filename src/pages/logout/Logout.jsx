import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../../redux/slices/signin/authSlice';
import { Link } from 'react-router-dom';
import './Logout.css';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('isLoggedIn', false);
    dispatch(setIsLoggedIn(false));
  }, [dispatch]);
  return (
    <div className='w-full flex items-center justify-center flex-col gap-4 h-[100vh] logout '>
      <h1 className='text-3xl font-bold text-center'>Logout</h1>
      <p className='text-center text-slate-500 text-xl'>You have been logged out</p>
      <Link to="/signin" className="text-center p-2 text-white bg-blue-500 rounded">Sign In</Link>
    </div>
  )
}

export default Logout