import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Filter({ label, options, required }) {
  const filterRef = useRef(null);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const initialSelectedOptions = options.reduce((acc, option) => {
    const category = Object.keys(option)[0];
    acc[category] = [];
    return acc;
  }, {});

  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions
  );

  useEffect(() => {
    const handleClick = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsOpenFilter(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [selectedOptions]);

  const handleCheckboxChange = (category, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const isSelected = prevSelectedOptions[category].includes(option);
      const newSelectedOptions = isSelected
        ? {
            ...prevSelectedOptions,
            [category]: prevSelectedOptions[category].filter(
              (opt) => opt !== option
            ),
          }
        : {
            ...prevSelectedOptions,
            [category]: [...prevSelectedOptions[category], option],
          };
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
          className="border border-neutral-200 p-[12px] flex justify-between items-center"
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
          <div className="border border-neutral-200 p-[12px] bg-white flex flex-col gap-6 shadow-2xl rounded-md">
            {options.map((optionObj) => {
              const category = Object.keys(optionObj)[0];
              const optionsList = optionObj[category];
              return (
                <div key={category}>
                  <h3 className="text-sm font-semibold mb-2">{category}</h3>
                  <div className="flex gap-6 flex-wrap">
                    {optionsList.map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedOptions[category].includes(option)}
                          onChange={() =>
                            handleCheckboxChange(category, option)
                          }
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
        )}
      </div>
    </>
  );
}

export default Filter;
