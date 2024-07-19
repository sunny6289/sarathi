import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ card }) => {
  const { id, title, src, organizedBy, Date } = card;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${id}`);
  };

  return (
    <div className="card" onClick={() => handleClick()}>
      <div className="card-image">
        <img src={src} alt={title} />
      </div>
      <div className="heading">
        {" "}
        {title}
        <div className="author">
          {" "}
          By <span className="name">{organizedBy}</span> {Date}
        </div>
      </div>
    </div>
  );
};

export default Card;
