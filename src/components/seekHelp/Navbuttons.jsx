import React, { useState } from "react";
import Button from "../reusable/Button";
import { FaAngleLeft, FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbuttons() {
  const navigate = useNavigate();
  const [emergenyContactVisible, setEmergenyContactVisible] = useState(false)
  return (
    <div className="relative">
    <div className="flex justify-between p-3">
      <Button
        content={
          <>
            <FaAngleLeft className="text-2xl font-bold" />
            <span className="text-lg font-semibold">Back</span>
          </>
        }
        className={"bg-slate-400"}
        onClick={() => navigate(-1)}
      />
      <Button
        content={
          <>
            <span className="text-lg font-semibold">Emergency Contacts</span>
            <FaChevronDown className="text-2xl font-bold" />
          </>
        }
        onClick={() => setEmergenyContactVisible(!emergenyContactVisible)}
        variant={"red"}
      />
    </div>
    <div className={`${(emergenyContactVisible)? `min-h-min min-w-max opacity-100 transition-all`: `h-0 opacity-0 transition-all`} bg-slate-200 absolute right-4 flex-col flex gap-2 p-3 rounded text-xl text-slate-700`}>
        <p><span className="text-slate-900 font-semibold">National Emergency: </span>112</p>
        <p><span className="text-slate-900 font-semibold">Police: </span>100</p>
        <p><span className="text-slate-900 font-semibold">Fire: </span>101</p>
        <p><span className="text-slate-900 font-semibold">Ambulance: </span>102</p>
        <p><span className="text-slate-900 font-semibold">Women Helpline: </span>1091</p>
        <Link to={'https://indianhelpline.com/'} target="_blank"><p><span>See More...</span></p></Link>
    </div>
    </div>
  );
}

export default Navbuttons;
