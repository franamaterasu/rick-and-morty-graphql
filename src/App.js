import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const AllCharacters = gql`
  query getAllCharacters {
    characters {
      results {
        id
        name
        status
        image
        gender
        origin {
          name
          dimension
        }
      }
    }
  }
`;

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState();
  const { data, loading, error } = useQuery(AllCharacters);

  if (loading) {
    return (
      <section className="message">
        <p className="message__text">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="message">
        <p className="message__text">Error...</p>
      </section>
    );
  }

  const characters = data.characters.results;

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <Router>
      <Header
        handleOnChange={handleOnChange}
        handleSelectChange={handleSelectChange}
      />
      <Switch>
        <Route exact path="/">
          <Home
            cards={characters}
            searchValue={searchValue}
            selectValue={selectValue}
          />
        </Route>
        <Route exact path="/character/:characterName">
          <Detail characters={characters}></Detail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
