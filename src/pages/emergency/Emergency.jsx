import React from "react";
import Emergencies from "../../components/emergencies/Emergencies";
import Button from "../../components/reusable/Button";
import { FaAngleLeft } from "react-icons/fa";

const Emergency = () => {
  return (
    <div>
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
      <Emergencies />
    </div>
  );
};

export default Emergency;
