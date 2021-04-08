import "./home.scss";
import List from "../../components/List";

const Home = (props) => {
  const cards = props.cards;
  const value = props.searchValue;
  const selectValue = props.selectValue;

  const filterByName = cards.filter((card) => {
    let filterName =
      card.name.toLowerCase().includes(value.toLowerCase()) &&
      card.status.includes(selectValue);
    return filterName;
  });

  return (
    <section className="home">
      {selectValue === undefined && value === "" ? (
        <List cards={cards} />
      ) : selectValue === undefined && value !== "" ? (
        <List cards={filterByName} />
      ) : filterByName.length === 0 ? (
        <section className="no-results">
          <p className="no-results__intro">No existen resultados</p>
        </section>
      ) : (
        <List cards={filterByName} />
      )}
    </section>
  );
};

export default Home;
