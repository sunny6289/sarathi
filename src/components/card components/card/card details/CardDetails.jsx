import { useParams } from "react-router-dom";
import { TEMP_EVENTS } from "../../../../rawData/tempEvents";
import Button from "../../../reusable/Button";

const CardDetails = () => {
  const params = useParams();
  const currCard = TEMP_EVENTS.find((item) => item.id === params.id);
  const { src, title, place, Date, Time, organizedBy } = currCard;
  /*
      This component will be conditionally rendered depending upon 'params.id'
      if 'params.id.slice(0,3) === 'eve' then it will rendered for Event Description
      if 'params.id.slice(0,3) === 'edu' then it will rendered for Book Description
      if 'params.id.slice(0,3) === 'job' then it will rendered for Job Description
      So we will be importing "TEMP_EVENTS, TEMP_BOOKS, TEMP_JOBS" all of them
  */
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

      <div className="mt-3 flex">
        <div className="px-3 flex-1">
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
        <div className="btnContainer flex justify-around items-center flex-1">
          <Button content='Join' variant={'blue'} size={'md'} className={"pl-[100px] pr-[100px]"}/>
          <Button content='Save' variant={'green'} size={'md'} className={"pl-[100px] pr-[100px]"}/>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
