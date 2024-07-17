import './Card.css';

const Card = ({ card }) => {
    const { id, title, src, organizedBy, Date } = card;
    return (
        <div class="card">
            <div class="card-image">
                <img src={src} alt={title} />
            </div>
            <div class="heading"> {title}
                <div class="author"> By <span class="name">{organizedBy}</span> {Date}</div>
            </div>
        </div>
    );
}

export default Card;
