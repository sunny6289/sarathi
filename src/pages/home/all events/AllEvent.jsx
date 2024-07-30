import React from "react";
import { TEMP_EVENTS } from "../../../rawData/tempEvents";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/reusable/Button";
import { FaAngleLeft } from "react-icons/fa";

const AllEvent = () => {
    const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
        <div>
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
      {TEMP_EVENTS.map((event) => (
        <div
        onClick={() => navigate(`/allEvents/${event.id}`)}
          key={event.id}
          className="cursor-pointer flex flex-col items-center justify-center gap-6 mb-10 bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Image */}
          <div
            className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${event.src})` }}
          >
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold bg-black bg-opacity-50 p-4 rounded shadow-lg">
              {event.title}
            </h1>
          </div>
          {/* Event Details */}
          <div className="p-6 w-full">
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
        </div>
      ))}
    </div>
  );
};

export default AllEvent;
