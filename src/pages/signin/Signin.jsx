import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser, setIsLoggedIn } from "../../redux/slices/signin/authSlice";
import { Link, useNavigate } from "react-router-dom";

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
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)]">
        <h1 className="text-3xl font-bold">Signin</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-4"
        >
          <input
            {...register("username", { required: "username is required" })}
            type="text"
            placeholder="username"
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
            Signin
          </button>
          <Link to="/signup" className="text-blue-500">
            Don't have an account? Signup
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signin;
