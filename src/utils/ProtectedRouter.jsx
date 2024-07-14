import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setIsLoggedIn } from '../redux/slices/signin/authSlice';

export const ProtectedRoute = ({ element }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    dispatch(setIsLoggedIn(loggedIn));
  }, [dispatch]);

  return isLoggedIn ? element : <Navigate to="/signin" />;
};
