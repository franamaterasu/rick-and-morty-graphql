import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({ handleOnChange, handleSelectChange }) => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <h1>Rick & Morty</h1>
      </Link>
      <form className="header__form">
        <input
          type="text"
          placeholder="Buscar un personaje"
          onChange={handleOnChange}
          className="header__input"
        />
        <select onChange={handleSelectChange} className="header__select">
          <option value="">Select Status</option>
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </form>
    </header>
  );
};

export default Header;
