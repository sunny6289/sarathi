import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../../redux/slices/signin/authSlice';
import { Link } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('isLoggedIn', false);
    dispatch(setIsLoggedIn(false));
  }, [dispatch]);
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Logout</h1>
      <p className='text-center'>You have been logged out</p>
      <Link to="/signin" className="text-center block mt-4 text-blue-500 underline">Sign In</Link>
    </div>
  )
}

export default Logout