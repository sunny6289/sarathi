import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../reusable/Button";
import { FaAngleLeft } from "react-icons/fa";

const AskDonation = () => {
  const [banner, setBanner] = useState("https://via.placeholder.com/800x200");
  const [donationData, setDonationData] = useState({
    amount: "",
    donorName: "",
    donorDob: "",
    donorGender: "",
    donorType: "",
    donorEmail: "",
    donorPhone: "",
    message: "",
  });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        setBanner(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type. Please upload an image.");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    alert("Data is saved...");
    setDonationData({
      amount: "",
      donorName: "",
      donorDob: "",
      donorGender: "",
      donorType: "",
      donorEmail: "",
      donorPhone: "",
      message: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Button
        content={
          <>
            <FaAngleLeft />
            Back
          </>
        }
        variant="blue"
        size="md"
        onClick={() => history.back()}
      />
      <div {...getRootProps()} className="mb-4 cursor-pointer">
        <input {...getInputProps()} />
        <img
          className="w-full h-64 object-cover rounded"
          src={banner}
          alt="Banner"
        />
      </div>
      {/* Form */}
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <form className="w-full text-left">
          <div className="mb-2">
            <label className="block text-gray-700">
              Name:
              <input
                type="text"
                name="donorName"
                value={donationData.donorName}
                onChange={handleChange}
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </label>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">
              Date of Birth:
              <input
                type="date"
                name="donorDob"
                value={donationData.donorDob}
                onChange={handleChange}
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </label>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">
              Gender:
              <select
                name="donorGender"
                value={donationData.donorGender}
                onChange={handleChange}
                className="mt-1 block w-full border rounded px-2 py-1"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">
              Individual or NGO:
              <select
                name="donorType"
                value={donationData.donorType}
                onChange={handleChange}
                className="mt-1 block w-full border rounded px-2 py-1"
              >
                <option value="">Select Type</option>
                <option value="Individual">Individual</option>
                <option value="NGO">NGO</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">
              Amount:
              <input
                type="number"
                name="amount"
                value={donationData.amount}
                onChange={handleChange}
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </label>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">
              Any Text:
              <textarea
                name="message"
                value={donationData.message}
                onChange={handleChange}
                className="mt-1 block w-full border rounded px-2 py-1"
              />
            </label>
          </div>
          <div className="flex justify-between mt-4">
            {/* <button
              type="button"
              onClick={handleSaveClick}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Save
            </button> */}
            <Button
              content="Save"
              variant='green'
              size='md'
              onClick={handleSaveClick}
              className="rounded hover:bg-green-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskDonation;
