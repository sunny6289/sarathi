<<<<<<< HEAD
import "./Card.css";

const Card = ({ card }) => {
  const { id, title, src, organizedBy, Date } = card;
  return (
    <div className="card">
      <div className="card-image">
        <img src={src} alt={title} />
      </div>
      <div className="heading">
        {" "}
        {title}
        <div className="author">
          {" "}
          By <span className="name">{organizedBy}</span> {Date}
=======
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ card }) => {
    const { id, title, src, organizedBy, Date } = card;
    const navigate = useNavigate();

    const handleClick = () => {

        navigate(`/card/${id}`)
    }

    return (
        <div class="card" onClick={()=> handleClick()}>
            <div class="card-image">
                <img src={src} alt={title} />
            </div>
            <div class="heading"> {title}
                <div class="author"> By <span class="name">{organizedBy}</span> {Date}</div>
            </div>
>>>>>>> 8f9c556d8ddf78d984bc91d4a7461a026dc0b4c9
        </div>
      </div>
    </div>
  );
};

export default Card;
