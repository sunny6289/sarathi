import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/slices/signin/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(createUser(data));
    navigate("/signin");
  };

  return (
    <div className="w-full place-content-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Signup</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-4"
        >
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors?.name && (
            <p className="text-red-500">{errors?.name?.message}</p>
          )}

          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors?.email && (
            <p className="text-red-500">{errors?.email?.message}</p>
          )}

          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-md"
          />
          {errors?.password && (
            <p className="text-red-500">{errors?.password?.message}</p>
          )}

          <button className="bg-blue-500 text-white p-2 rounded-md">
            Signup
          </button>
          <Link to="/signin" className="text-blue-500">
            Already have an account? Signin
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
