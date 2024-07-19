import React from "react";
import { useParams } from "react-router-dom";
import { TEMP_EVENTS } from "../../../../rawData/tempEvents";

const CardDetails = () => {
  // const params = useParams();
  // const currCard = TEMP_EVENTS.find((item) => item.id === params.id);

  // const { src, title, place, Date, Time, organizedBy } = currCard;
  const currCard = {
    id: 'event4',
    src: 'https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8172.jpg?ga=GA1.1.557918792.1704901850&semt=ais_user',
    title: 'Learn web development',
    place: 'Online',
    Date: '15 September, 2024',
    Time: '4 PM',
    organizedBy: 'App Brewery'
}
const { src, title, place, Date, Time, organizedBy } = currCard;
  return (
    <div className="min-h-screen bg-gray-100 p-3">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
        <div className="relative">
          <img src={src} alt="pic" className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">{title}</h1>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="flex justify-between items-center mb-2">
          <div className="text-lg">
            <p className="text-gray-700"><span className='text-lg font-semibold'>Date:</span> {Date}</p>
            <p className="text-gray-700"><span className='text-lg font-semibold'>Place:</span> {place}</p>
            <p className="text-gray-700"><span className='text-lg font-semibold'>Time:</span> {Time} </p>
            <p className="text-gray-700"><span className='text-lg font-semibold'>Organized By:</span> {organizedBy} </p>
          </div>
        </div>
      </div>

      <div className="mt-3 w-[60%] flex">
        <div className="px-3">
          <h2 className="text-4xl font-semibold mb-3">Description: </h2>
          <p className="text-gray-700 leading-relaxed text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            culpa quia nobis est consectetur vero repellendus nostrum inventore
            cum dolor ut porro deleniti rem aperiam eius magnam iure, autem
            corrupti blanditiis aut ea doloremque nam recusandae voluptas?
            Eligendi illo, totam consectetur doloremque cum quia eius natus,
            mollitia suscipit sunt quam?
          </p>
        </div>
        <div className="btnContainer">
          
          {/*
            It'll contain Save (green btn) and Join (Blue btn)
          */}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
