import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const { id, title, src, organizedBy, Date } = card;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/allEvents/${id}`);
  };

  return (
    <div
      className="w-[190px] bg-white p-2 rounded-md flex flex-col justify-between cursor-pointer"
      onClick={() => handleClick()}
    >
      <div className="hover:scale-95 transition-all">
        <img src={src} alt={title} />
      </div>
      <div className="hover:cursor-pointer p-[10px] font-semibold text-[rgb(88,87,87)]">
        {" "}
        {title}
        <div className="text-sm font-normal">
          {" "}
          By{" "}
          <span className="font-semibold hover:cursor-pointer">
            {organizedBy}
          </span>{" "}
          {Date}
        </div>
      </div>
    </div>
  );
};

export default Card;
