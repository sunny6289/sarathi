import React from "react";
import { useParams } from "react-router-dom";
import { TEMP_EVENTS } from "../../../../rawData/tempEvents";

const CardDetails = () => {
  const params = useParams();
  const currCard = TEMP_EVENTS.find((item) => item.id === params.id);

<<<<<<< HEAD
  
=======
>>>>>>> 8f9c556d8ddf78d984bc91d4a7461a026dc0b4c9
  const { src, title, place, Date, Time, organizedBy } = currCard;
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
        <div className="relative">
          <img src={src} alt="pic" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">{title}</h1>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg">
            <p className="text-gray-700">Date: {Date}</p>
            <p className="text-gray-700">Place: {place}</p>
            <p className="text-gray-700">Time: {Time} </p>
            <p className="text-gray-700">Organized By: {organizedBy} </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Description: </h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            culpa quia nobis est consectetur vero repellendus nostrum inventore
            cum dolor ut porro deleniti rem aperiam eius magnam iure, autem
            corrupti blanditiis aut ea doloremque nam recusandae voluptas?
            Eligendi illo, totam consectetur doloremque cum quia eius natus,
            mollitia suscipit sunt quam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
