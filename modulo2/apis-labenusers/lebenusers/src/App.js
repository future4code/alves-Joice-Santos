import React from "react";
import axios from "axios";
import TelaCadastro from "./componentes/TelaCadastro";
import TelaListaUsuarios from "./componentes/TelaListaUsuarios";

export default class App extends React.Component{
  state = {
    telaAtual: "cadastro"
  };

 /* componentDidMount() {
    this.pegarUsuario();
  }

  pegarUsuario = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
     {
      headers: {
        Authorization: "joice-santos-alves"
      }
    }
  )
  .then((resposta) => {
    this.setState({usuarios: resposta.data.result.list});
  })
  .catch((erro) => {
    this.setState({erro: erro.response.data});
  });
  };

  novoUsuario = () => {
    const addUsuario = {
      name: this.state.criarUsuario
    };
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", addUsuario, {
      headers: {
        Authorization: "joice-santos-alves"
      }
    }
  )
  .then((resposta) => {
    console.log(resposta);
    resposta.status === 200 & alert("usuário criado");
    this.pegarUsuario();
  })
  .catch((erro) => {
    alert(erro.response.data.message);
  });
  };

onChangeUsuario = (e) => {
  this.setState({criarUsuario: e.target.value});
}; 

  render() {
    return <main>
<input  value={this.state.criarUsuario} onChange={this.onChangeUsuario}/>
<button onClick={this.criarUsuario}>Criar Usuário</button>
{
  this.state.erro ?
  <p>{this.state.erro}</p> :
  this.state.usuarios.map((usuario) => {
  return <p key={usuario.id}>{usuario.name}</p>
  })
}
    </main>
  }; */
  render(){
    return(
      <div>
        <TelaCadastro />
        <TelaListaUsuarios />
      </div>
    )
  }
}
