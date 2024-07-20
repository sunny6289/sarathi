import { useNavigate } from "react-router-dom";
import { FaFilter, FaSort, FaChevronDown, FaAngleLeft } from "react-icons/fa6";
import EducationandJobContainer from "../../components/Education and Job Components/EducationandJobContainer/EducationandJobContainer";
import "./WeProvide.css";
import { useState } from "react";
import Button from "../../components/reusable/Button";
import { LuFilter } from "react-icons/lu";

const WeProvide = () => {
  const navigate = useNavigate();
  const [filterContent, setFilterContent] = useState(false);
  return (
    <div className="h-min-screen w-[100%] bg-white flex-col ">
      <div className="backBtnAndFilterContainer min-h-8 px-20 py-8 flex items-center justify-between">
        <div className="backBtnAndFilter flex gap-28">
          <Button
            content={
              <>
                <FaAngleLeft className="text-2xl font-bold" />
                <span className="text-lg font-semibold">back</span>
              </>
            }
            className={"bg-slate-400"}
            onClick={() => navigate(-1)}
          />
          <Button
            className={"text-neutral-700 bg-slate-200"}
            content={
              <>
                {filterContent ? (
                  <FaFilter className="text-xl" />
                ) : (
                  <LuFilter className="text-xl" />
                )}
                <span className="text-lg font-semibold">Filter</span>
              </>
            }
            onClick={() => setFilterContent(!filterContent)}
          />
        </div>
        {filterContent ? (
          <div className="filterContent w-[70%] flex items-center justify-around">
            <Button
              className={"bg-slate-200 text-neutral-700"}
              content={
                <>
                  <span className="text-lg font-semibold">Job Type</span>
                  <FaChevronDown className="text-lg" />
                </>
              }
            />
            <Button
              className={"bg-slate-200 text-neutral-700"}
              content={
                <>
                  <span className="text-lg font-semibold">Domain</span>
                  <FaChevronDown className="text-lg" />
                </>
              }
            />
            <Button
              className={"bg-slate-200 text-neutral-700"}
              content={
                <>
                  <span className="text-lg font-semibold">Sort</span>
                  <FaSort className="text-lg" />
                </>
              }
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="eduAndjobContainer flex justify-center items-center">
        <EducationandJobContainer />
      </div>
    </div>
  );
};

export default WeProvide;
