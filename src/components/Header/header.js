import { Link } from "react-router-dom";
import "./header.scss";

const Header = ({
  handleOnChange,
  handleSelectChange,
  handleSelectOrderChange,
  handleResetClick,
}) => {
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
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select onChange={handleSelectOrderChange} className="header__select">
          <option value="">Select Order</option>
          <option value="init">A-Z</option>
          <option value="finish">Z-A</option>
        </select>
        <input
          className="header__input header__input--reset"
          type="reset"
          onClick={handleResetClick}
        ></input>
      </form>
    </header>
  );
};

export default Header;
