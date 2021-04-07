import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Header from "./components/Header";
import Home from "./pages/Home";

const AllCharacters = gql`
  query getAllCharacters {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState();
  const { data, loading, error } = useQuery(AllCharacters);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  const characters = data.characters.results;

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <Header
        handleOnChange={handleOnChange}
        handleSelectChange={handleSelectChange}
      />
      <Home
        cards={characters}
        searchValue={searchValue}
        selectValue={selectValue}
      />
    </>
  );
}

export default App;
