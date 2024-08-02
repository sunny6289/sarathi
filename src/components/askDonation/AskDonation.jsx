import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../reusable/Button";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createEvent } from "../../redux/slices/allEvents/newEventSlice";

const AskDonation = () => {
  const dispatch = useDispatch();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [eventData, seteventData] = useState({
    title: "",
    organisationName: "",
    dateOfCreation: "",
    place: "",
    time: "",
    description: "",
  });

  const onDropBackground = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type. Please upload an image.");
    }
  };

  const {
    getRootProps: getBackgroundRootProps,
    getInputProps: getBackgroundInputProps,
  } = useDropzone({
    onDrop: onDropBackground,
    accept: "image/*",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    seteventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    
    dispatch(createEvent({
      src: "https://via.placeholder.com/300x300?text=DefaultImageDueToNoBackend",
      title: eventData.title,
      place: eventData.place,
      Date: eventData.dateOfCreation,
      Time: eventData.time,
      organizedBy: eventData.organisationName,
    }))
    seteventData({
      title: "",
      organisationName: "",
      dateOfCreation: "",
      place: "",
      time: "",
      description: "",
    });
    alert("Event created successfully");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button */}
      <div className="flex justify-start p-6">
        <Button
          content={
            <>
              <FaAngleLeft />
              Back
            </>
          }
          variant="gray"
          size="md"
          onClick={() => history.back()}
          className="flex-shrink-0"
        />
      </div>

      {/* Form Container */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
          {/* Background Image Dropzone */}
          <div {...getBackgroundRootProps()} className="mb-4 cursor-pointer">
            <input {...getBackgroundInputProps()} />
            <img
              className="w-full h-64 object-cover rounded"
              src={backgroundImage || "https://via.placeholder.com/800x200"}
              alt="Background"
            />
          </div>

          {/* Form */}
          <form className="w-full text-left" onSubmit={handleSaveClick}>
            <div className="mb-2">
              <label className="block text-gray-700">
                Title:
                <input
                  type="text"
                  name="title"
                  value={eventData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">
                Organisation Name:
                <input
                  type="text"
                  name="organisationName"
                  value={eventData.organisationName}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">
                Date of Creation:
                <input
                  type="date"
                  name="dateOfCreation"
                  value={eventData.dateOfCreation}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">
                Place:
                <input
                  type="text"
                  name="place"
                  value={eventData.place}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">
                Time:
                <input
                  type="time"
                  name="time"
                  value={eventData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">
                Description:
                <textarea
                  name="description"
                  value={eventData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded px-2 py-1"
                />
              </label>
            </div>
            <div className="flex justify-between mt-4">
              <Button
                type="submit"
                content="Save"
                variant="green"
                size="md"
                className="rounded hover:bg-green-700"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskDonation;
