import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/reusable/Button";
import { FaAngleLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

const AllEvent = () => {
  const navigate = useNavigate();
  const data = useSelector(state => state.newEvent.data);
  console.log(data);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
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
        />
        <h1 className="text-4xl font-bold text-center mb-6">All Events</h1>
      </div>
      {data?.map((event) => (
        <div
          onClick={() => navigate(`/allEvents/${event.id}`)}
          key={event.id}
          className="cursor-pointer flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-10 bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Title */}
          <div className="p-6 w-full md:w-1/3">
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold">
              {event.title}
            </h1>
          </div>
          {/* Event Details */}
          <div className="p-6 w-full md:w-2/5">
            <p className="text-lg text-gray-700 mb-2">
              <strong>Place:</strong> {event.place}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Date:</strong> {event.Date}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Time:</strong> {event.Time}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Organized By:</strong> {event.organizedBy}
            </p>
          </div>
          {/* Image */}
          <div className="w-1/4 h-full flex-shrink-0">
            <img src={event.src} alt={event.title} className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllEvent;
