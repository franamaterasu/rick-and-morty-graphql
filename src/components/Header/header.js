import "./header.scss";

const Header = ({ handleOnChange, handleSelectChange }) => {
  return (
    <header className="header">
      <h1 className="header__logo">Rick & Morty</h1>
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
      </form>
    </header>
  );
};

export default Header;
