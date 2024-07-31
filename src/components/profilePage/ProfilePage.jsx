import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../reusable/Button";
import { FaAngleLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { updateProfileData } from "../../redux/slices/profile/profileSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.profileData);

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfileData, setTempProfileData] = useState(profileData);

  const handleEditClick = () => {
    setIsEditing(true);
    setTempProfileData(profileData);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    console.log(tempProfileData);
    dispatch(
      updateProfileData({
        ...tempProfileData,
        dob: tempProfileData.dob.split("-").reverse().join("-"),
        email: tempProfileData.email,
        name: tempProfileData.name,
        phone: tempProfileData.phone,
        gender: tempProfileData.gender,
      })
    );
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setTempProfileData(profileData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container flex flex-col items-center p-4 mx-auto space-y-8">
      <div className="w-full flex justify-start">
        <Button
          content={
            <>
              <FaAngleLeft className="mr-2" />
              Back
            </>
          }
          variant="gray"
          size="md"
          onClick={() => history.back()}
        />
      </div>
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <div
          className="flex justify-end text-xl cursor-pointer"
          onClick={handleEditClick}
        >
          <FaEdit />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex place-content-center place-items-center leading-none">
            <span className="text-black text-[7rem] font-bold font-mono text-center leading-none">
              {profileData.name.slice(0, 1).toUpperCase()}
            </span>
          </div>

          {isEditing ? (
            <div className="w-full">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={tempProfileData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Date of Birth:
                  <input
                    type="date"
                    name="dob"
                    format="dd-MM-yyyy"
                    value={tempProfileData.dob}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Gender:
                  <select
                    name="gender"
                    value={tempProfileData.gender}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={tempProfileData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Phone:
                  <input
                    type="tel"
                    name="phone"
                    value={tempProfileData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <Button
                  content="Cancel"
                  variant="red"
                  size="md"
                  onClick={handleCancelClick}
                />
                <Button
                  content="Save"
                  variant="green"
                  size="md"
                  onClick={handleSaveClick}
                />
              </div>
            </div>
          ) : (
            <div className="w-full text-left">
              <p className="text-gray-600 mb-2">
                <strong>Name:</strong> {profileData.name}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Date of Birth:</strong> {profileData.dob}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Gender:</strong> {profileData.gender}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Email:</strong> {profileData.email}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Phone:</strong> {profileData.phone}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
