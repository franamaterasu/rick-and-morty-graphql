import Card from "../Card";
import "./list.scss";

const List = (props) => {
  const cards = props.cards;

  return (
    <section className="list">
      {cards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </section>
  );
};

export default List;
