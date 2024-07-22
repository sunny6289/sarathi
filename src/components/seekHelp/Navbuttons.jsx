import React from "react";
import Button from "../reusable/Button";
import { FaAngleLeft, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbuttons() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
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
            <span className="text-lg font-semibold">Emergency</span>
            <FaChevronDown className="text-2xl font-bold" />
          </>
        }
        onClick={() => navigate(-1)}
        variant={"red"}
      />
    </div>
  );
}

export default Navbuttons;
