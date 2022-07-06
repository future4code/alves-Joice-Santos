import axios from "axios";
import PokeCard from "./components/PokeCard";
import { useEffect, useState } from "react";

function App() {
  const [pokeList, setPokeList] = useState ([]) 
  const [pokeName, setPokeName] = useState ("")
  // Passo 3b
  // Implemente suas variáveis de estado aqui.

  // Passo 3c
  getPokemon = () => {
    axios
    .get(`${"https://pokeapi.co/api/v2/pokemon/?limit=151"}/pokemon/`)
    .then(Response => setPokeList(Response.data))
    .catch(Error => console.log(Error))
  }

  useEffect(() => {
    
  }, [])
  // componentDidMount = () => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  //     .then((res) => {
  //       this.setState({ pokeList: res.data.results });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Passo 3a
  function changePokeName(event) {
    useState(Response => setPokeName(Response.data))
    // Passo 3d
    // Implementa a função aqui.
  }

  // Passo 3e
  // const pokeOptions = this.state.pokeList.map(pokemon => {
  //   return (
  //     <option key={pokemon.name} value={pokemon.name}>
  //       {pokemon.name}
  //     </option>
  //   );
  // });

  // Passo 4a
  const pokemon = true && <PokeCard />;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
          {changePokeName}
        <select id={"select-pokemon"} >
          <option value={""}>Nenhum</option>
          {/* Passo 3e */}
          {/* {pokeOptions} */}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
};

export default App;
