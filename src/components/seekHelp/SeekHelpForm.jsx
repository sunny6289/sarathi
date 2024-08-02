import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { setToast } from "../../redux/slices/toastSlice";
import { useDispatch } from "react-redux";
// import Filter from "../reusable/Filter";
import { createEmergency } from "../../redux/slices/emergency/emergencySlice";

const SeekHelpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const helpType = useWatch({ control, name: "helpType" });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createEmergency({
      contactNumber: data.contactNumber,
      description: data.description,
      emailAddress: data.emailAddress,
      fullName: data.fullName,
      helptype: data.helpType,
      location: data.location,
      urgency: data.urgency,
      date: new Date().toISOString().split("T")[0],
      time: new Date().toISOString().split("T")[1].split(".")[0],
    }));
    reset({
      additionalInfo:"",
      contactNumber:"",
      description:"",
      emailAddress:"",
      fullName:"",
      helpType:"",
      location:"",
      urgency:""
    });
    dispatch(
      setToast({
        message: "Form submitted successfully",
        status: "success",
      })
    );
  };



  const options = [
    { Food: ["Option 1", "Option 2", "Option 3"] },
    { Shelter: ["Option 1", "Option 2", "Option 3"] },
    { "Medical Assistance": ["Option 1", "Option 2", "Option 3"] },
    { "Financial Support": ["Option 1", "Option 2", "Option 3"] },
    { Employment: ["Option 1", "Option 2", "Option 3"] },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Seek Help Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* filter component */}
          {/* <Filter label="Yooo" options={options} />  */}
          <div>
            <label className="block text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">Full Name is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register("contactNumber", { required: true })}
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">Contact Number is required</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("emailAddress", { required: true })}
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.emailAddress && (
              <p className="text-red-500 text-sm">Email Address is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Location (City, State) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("location", { required: true })}
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">Location is required</p>
            )}
          </div>
        </div>

        {/* Type of Help Needed */}
        <div>
          <label className="block text-sm font-medium">
            Type of Help Needed <span className="text-red-500">*</span>
          </label>
          <select
            {...register("helpType", { required: true })}
            className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select an option</option>
            <option value="Food">Food</option>
            <option value="Shelter">Shelter</option>
            <option value="Medical Assistance">Medical Assistance</option>
            <option value="Financial Support">Financial Support</option>
            <option value="Employment">Employment</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
          {errors.helpType && (
            <p className="text-red-500 text-sm">Type of Help is required</p>
          )}
        </div>

        {helpType === "Other" && (
          <div>
            <label className="block text-sm font-medium">
              Please Specify <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("otherHelp", { required: helpType === "Other" })}
              className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.otherHelp && (
              <p className="text-red-500 text-sm">
                Please specify the type of help
              </p>
            )}
          </div>
        )}

        {/* Detailed Description */}
        <div>
          <label className="block text-sm font-medium">
            Detailed Description of Help Needed{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">Description is required</p>
          )}
        </div>

        {/* Urgency Level */}
        <div>
          <label className="block text-sm font-medium">
            Urgency Level <span className="text-red-500">*</span>
          </label>
          <select
            {...register("urgency", { required: true })}
            className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select an option</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
          {errors.urgency && (
            <p className="text-red-500 text-sm">Urgency level is required</p>
          )}
        </div>

        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium">
            Additional Information
          </label>
          <textarea
            {...register("additionalInfo")}
            className="mt-1 block w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SeekHelpForm;
