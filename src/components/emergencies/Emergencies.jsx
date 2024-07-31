import React, { useState } from "react";
import { TEMP_EMERGENCIES } from "../../rawData/emergencies";
import Button from "../reusable/Button";
import { FaAngleLeft } from "react-icons/fa";
import FilterEmergencies from "../reusable/FilterEmergencies";
import './emergencies.css';
import { useSelector } from "react-redux";

const INITIAL_CONTACT_VALUES = {
  emerId: "",
  contactName: "",
  contactNum: "",
  contactMailId: ""
}

const Emergencies = () => {
  const data = useSelector((state) => state.emergency.data);
  console.log(data);
  const options = [{ By: ["High", "Moderate", "Critical"] }];
  const [contactDetails, setContactDetails] = useState(INITIAL_CONTACT_VALUES);

  const [contactVisible, setContactVisible] = useState(false);
  const initialSelectedOptions = options.reduce((acc, option) => {
    const category = Object.keys(option)[0];
    acc[category] = [];
    return acc;
  }, {});

  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);

  const handleFilterChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
  };

  const filteredEmergencies = data.filter((emer) => {
    const categorySelectedOptions = selectedOptions["By"] || [];
    return (
      categorySelectedOptions.length === 0 ||
      categorySelectedOptions.includes(emer.severity)
    );
  });
  const setContactValues = (emerId) =>{
    const emer = filteredEmergencies.filter((em)=> em.id===emerId);
    // console.log(emer);
    setContactDetails({
      contactName: emer[0].name,
      contactNum: emer[0].mobileNo,
      contactMailId: emer[0].mailId,
      emerId: emerId,
    })
    setContactVisible(true);
  }

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
          variant="gray"
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
      {/* emergency list */}
      <div className="relative">
      {filteredEmergencies.map((emer) => (
        <div
          key={emer.id}
          className="w-full p-4 mb-4 bg-white rounded-lg shadow-md relative"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{emer.type}</h2>
            <span
              className={`px-2 py-1 rounded ${emer.severity === "Critical"
                  ? "bg-red-500 text-white"
                  : emer.severity === "High"
                    ? "bg-yellow-500 text-white"
                    : "bg-green-500 text-white"
                }`}
            >
              {emer.severity}
            </span>
          </div>
          <div className="desc-contact-container flex items-center justify-between my-2">
            <div className="desc-container">
              <p className="text-gray-600 mt-2">{emer.description}</p>
              <div className="text-gray-500 mt-2">
                <p>{emer.location}</p>
                <p>
                  {emer.date} at {emer.time}
                </p>
              </div>
            </div>
            <Button onClick={()=>setContactValues(emer.id)} content={"Contact Me"} variant={"blue"} size={'md'} className={`${(contactVisible && emer.id===contactDetails.emerId?`opacity-0`:`showContactBtn`)}`}></Button>
          </div>
          {
        contactVisible && emer.id===contactDetails.emerId?
          (
            <div className="contact-pop-up bg-blue-500 rounded-md font-semibold py-4 px-6 flex items-center justify-between gap-5 showContact">
              <h1 className="text-2xl text-white">{contactDetails.contactName}</h1>
              <span className="text-2xl text-slate-200">{contactDetails.contactNum}</span>
              <span className="text-2xl text-slate-200">{contactDetails.contactMailId}</span>
              <Button content={'Close'} variant={'gray'} size={'md'} onClick={()=>setContactVisible(false)}></Button>
            </div>
          ) :
          ""
      }
        </div>
      ))}
      
      </div>
    </div>
  );
};

export default Emergencies;
