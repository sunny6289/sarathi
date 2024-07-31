import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TEMP_JOBS } from "../../../rawData/job";
import Button from "../../../components/reusable/Button";
import { FaAngleLeft } from "react-icons/fa";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = TEMP_JOBS.find((job) => job.id === id);

  if (!job) {
    return <p className="text-center text-red-500">Job not found.</p>;
  }

  return (
    <div className="bg-gray-100">
      <div className="p-6">
        <Button
          content={
            <>
              <FaAngleLeft className="text-2xl font-bold" />
              <span className="text-lg font-semibold">back</span>
            </>
          }
          variant={"gray"}
          size={"md"}
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="min-h-screen flex flex-col items-center">
        <div>
          <h1 className="text-5xl font-bold mb-4 justify-self-start w-full">
            {job.jobRole}
          </h1>
          <div className="max-w-[900px] w-full p-6 bg-white rounded-lg shadow-md text-lg">
            <p className="mb-4">
              <span className="font-semibold">Company:</span> {job.company}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Type of Work:</span>{" "}
              {job.typeOfWork}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Description:</span>{" "}
              {job.jobDescription}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Skills Required:</span>
            </p>
            <ul className="list-disc list-inside mb-4">
              {job.skillsRequired.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <p className="mb-4">
              <span className="font-semibold">Last Date of Application:</span>{" "}
              {job.lastDateOfApplication}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Expected Salary:</span>{" "}
              {job.expectedSalary}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Experience Required:</span>{" "}
              {job.experience}
            </p>
            <div className="flex justify-end">
              <Button
                content={"Apply"}
                variant={"green"}
                size={"lg"}
                className={"mt-4"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
