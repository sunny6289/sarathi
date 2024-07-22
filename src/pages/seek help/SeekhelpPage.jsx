import React from "react";
import SeekHelpForm from "../../components/seekHelp/SeekHelpForm";
import Navbuttons from "../../components/seekHelp/Navbuttons";

function SeekhelpPage() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Navbuttons />
        <SeekHelpForm />
      </div>
    </>
  );
}

export default SeekhelpPage;
