import "./detail.scss";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { characters } = props;
  const { characterName } = useParams();

  const foundCharacter = characters.find((character) => {
    return character.name === characterName;
  });

  const { image, name, status, origin } = foundCharacter;

  return (
    <section className="detail">
      <div className="detail-info">
        <img className="detail-info__image" src={image} alt={name} />
        <p className="detail-info__title">{name}</p>
        <p className="detail-info__line">Status: {status}</p>
        <p className="detail-info__line">
          Origin: {origin.name} - {origin.dimension}
        </p>
      </div>
    </section>
  );
};

export default Detail;
