import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setIsLoggedIn } from "../../redux/slices/signin/authSlice";

function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  // Fetch user data on component mount if available
  useEffect(() => {
    dispatch(getUser());
  }, []);
  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    dispatch(setIsLoggedIn(loggedIn));
  }, [dispatch]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {isLoggedIn ? (
        <>
          <h1 className="text-3xl font-bold text-center">
            Welcome to the Home Page
          </h1>
          <p className="text-center">You are logged in</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center">
            You are not logged in
          </h1>
          <p className="text-center">Please login to view this page</p>
        </>
      )}
    </div>
  );
}

export default Home;
