import { useState, useEffect } from "react";
import axios from "axios";
import pageMatches from "./pageMatches"

export default function Perfil() {
    const [perfil, setPerfil] = useState([]);
    const [pagina, setPagina] = useState("pagePerfil");

    useEffect(() => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
        .then((res) => {
          setPerfil(res.data.results);  
        })
        .catch((err) => {
            console.error("Erro ao buscar perfil");
        });
    }, []);

    const trocaPagina = (paginaEscolhida) => {
        setPagina(paginaEscolhida);
      };

    return (
       <div> 
        <h1>Perfis</h1>
        <button onClick={() => trocaPagina(pageMatches)}>Ir para Matches</button>
       </div>
    );
}
