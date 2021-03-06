import { Link } from "react-router-dom";
import "./card.scss";

const Card = (props, handleClick) => {
  const info = props.data;

  const { name, status, image } = info;

  return (
    <article className="card" onClick={handleClick}>
      <Link to={`./character/${name}`}>
        <img className="card__image" src={image} alt={name} />
      </Link>
      <p className="card__info">
        {name} - <span>{status}</span>
      </p>
    </article>
  );
};

export default Card;
