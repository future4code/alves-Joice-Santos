import { useState, useEffect } from "react";
import header from "./components/header";
import pagePerfil from "./components/pagePerfil";
import pageMatches from "./components/pageMatches"

export default function App() {
  const [valorPagina, setValorPagina] = useState(0);
  const [novoEstado, setNovoEstado] = useState("AstroMatch");
  const [pagina, setPagina] = useState("pagePerfil");

  const trocaPagina = (paginaEscolhida) => {
    setPagina(paginaEscolhida);
  };
  
  return ( 
  <div>
    < header />
    {novoEstado}
    <button onClick={() => trocaPagina(pagePerfil)}>Ir para Perfil</button>
    <button onClick={() => trocaPagina(pageMatches)}>Ir para Matches</button>
  </div>
  );
}
