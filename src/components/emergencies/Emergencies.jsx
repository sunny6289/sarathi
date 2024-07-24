import React, { useState } from "react";
import { TEMP_EMERGENCIES } from "../../rawData/emergencies";
import Button from "../reusable/Button";
import { FaAngleLeft } from "react-icons/fa";
import FilterEmergencies from "../reusable/FilterEmergencies";

const Emergencies = () => {
  const options = [{ By: ["High", "Moderate", "Critical"] }];

  const initialSelectedOptions = options.reduce((acc, option) => {
    const category = Object.keys(option)[0];
    acc[category] = [];
    return acc;
  }, {});

  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);

  const handleFilterChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
  };

  const filteredEmergencies = TEMP_EMERGENCIES.filter((emer) => {
    const categorySelectedOptions = selectedOptions["By"] || [];
    return (
      categorySelectedOptions.length === 0 ||
      categorySelectedOptions.includes(emer.severity)
    );
  });

  return (
    <div className="p-4 overflow-x-hidden relative">
      <div className="flex items-center justify-between">
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

        <FilterEmergencies
          label="Sort"
          options={options}
          required="false"
          onChange={handleFilterChange}
        />
      </div>
      {filteredEmergencies.map((emer) => (
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
