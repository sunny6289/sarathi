import React from "react";
import { TEMP_EMERGENCIES } from "../../rawData/emergencies";

const Emergencies = () => {
  return (
    <div className="p-4">
      {TEMP_EMERGENCIES.map((emer) => (
        <div
          key={emer.id}
          className="w-full p-4 mb-4 bg-white rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{emer.type}</h2>
            <span
              className={`px-2 py-1 rounded ${
                emer.severity === "Critical"
                  ? "bg-red-500 text-white"
                  : emer.severity === "High"
                  ? "bg-yellow-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {emer.severity}
            </span>
          </div>
          <p className="text-gray-600 mt-2">{emer.description}</p>
          <div className="text-gray-500 mt-2">
            <p>{emer.location}</p>
            <p>
              {emer.date} at {emer.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Emergencies;
