import { useEffect, useState } from "react";
import Character from "./Character";
import NavPages from "./NavPages";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setloading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container ">
      <NavPages page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="row">
          {characters.map((char) => {
            return (
              <div className="col-md-4" key={char.id}>
                <Character char={char} />
              </div>
            );
          })}
        </div>
      )}
      <NavPages page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
