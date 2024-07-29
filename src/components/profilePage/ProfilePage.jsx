import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../reusable/Button";
import { FaAngleLeft } from "react-icons/fa6";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    profilePicture: "https://via.placeholder.com/150",
    name: "ABCD",
    dob: "1990-01-01",
    gender: "Male",
    email: "abcd@example.com",
    phone: "1234567890",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfileData, setTempProfileData] = useState(profileData);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        setProfileData((prevState) => ({
          ...prevState,
          profilePicture: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type. Please upload an image.");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const handleEditClick = () => {
    setIsEditing(true);
    setTempProfileData(profileData);
  };

  const handleSaveClick = () => {
    setProfileData(tempProfileData);
    setIsEditing(false);
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
        <div className="flex flex-col items-center">
          <div
            {...getRootProps()}
            className="w-32 h-32 rounded-full overflow-hidden mb-4 cursor-pointer border-2 border-gray-300"
          >
            <input {...getInputProps()} />
            <img
              className="w-full h-full object-cover"
              src={profileData.profilePicture}
              alt="Profile"
            />
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
                  content="Save"
                  variant="green"
                  size="md"
                  onClick={handleSaveClick}
                />
                <Button
                  content="Cancel"
                  variant="red"
                  size="md"
                  onClick={handleCancelClick}
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
              <button
                onClick={handleEditClick}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
