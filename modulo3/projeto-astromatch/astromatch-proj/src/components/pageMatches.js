import  { useState, useEffect } from "react";
import axios from "axios";
import pagePerfil from "./pagePerfil"


export default function App() {
    const [match, setMatch] = useState([]);
    const [pagina, setPagina] = useState("");

    useEffect(() => {
       axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
        .then((res) => {
          setMatch(res.data.results);  
        })
        .catch((err) => {
            console.error("Erro ao mostrar match");
        }); 
    })

    const trocaPagina = (paginaEscolhida) => {
        setPagina(paginaEscolhida);
      };

    return ( 
        <div>
          <button onClick={() => trocaPagina(pagePerfil)}>Ir para Perfil</button>
        </div>
        );
}