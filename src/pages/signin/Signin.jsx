import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser, setIsLoggedIn } from "../../redux/slices/signin/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { setToast } from "../../redux/slices/toastSlice";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    localStorage.setItem("isLoggedIn", true);
    dispatch(setIsLoggedIn(true));
    dispatch(setToast({ message: "Logged in successfully", status: "success" }));
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            placeholder="Username"
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button className="bg-blue-500 text-white p-2 rounded-md">
            Sign In
          </button>
          <Link to="/signup" className="text-blue-500 text-center">
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;
