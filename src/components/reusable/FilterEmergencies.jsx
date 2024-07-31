import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function FilterEmergencies({ label, options, required, onChange }) {
  const filterRef = useRef(null);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const initialSelectedOptions = options.reduce((acc, option) => {
    const category = Object.keys(option)[0];
    acc[category] = [];
    return acc;
  }, {});

  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsOpenFilter(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedOptions]);

  const handleCheckboxChange = (category, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = {
        ...prevSelectedOptions,
        [category]: prevSelectedOptions[category].includes(option)
          ? prevSelectedOptions[category].filter((item) => item !== option)
          : [...prevSelectedOptions[category], option],
      };
      onChange(newSelectedOptions);
      return newSelectedOptions;
    });
  };

  return (
    <>
      <div ref={filterRef}>
        {required === "true" ? (
          <label className="block text-sm font-medium mb-1">
            {label} <span className="text-red-500">*</span>
          </label>
        ) : null}
        <div
          className="border border-neutral-200 p-[12px] flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpenFilter(!isOpenFilter)}
        >
          {label}{" "}
          {!isOpenFilter ? (
            <FaAngleDown className="text-2xl" />
          ) : (
            <FaAngleUp className="text-2xl" />
          )}{" "}
        </div>
        {isOpenFilter && (
          <>
            <div className="fixed"></div>
            <div className="border z-10 border-neutral-200 p-[12px] absolute top-16  bg-white flex flex-col gap-6 shadow-2xl rounded-md w-72 cursor-pointer right-0">
              {options.map((optionObj) => {
                const category = Object.keys(optionObj)[0];
                const optionsList = optionObj[category];
                return (
                  <div key={category}>
                    <h3 className="text-sm font-semibold mb-2">{category}</h3>
                    <div className="flex gap-6 flex-wrap">
                      {optionsList.map((option) => (
                        <label key={option} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedOptions[category].includes(option)}
                            onChange={() => handleCheckboxChange(category, option)}
                            className="mr-2"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default FilterEmergencies;
