import { render } from '@testing-library/react';
import React from 'react';

export default class Inicio extends React.Component{
    state = {
        valorNome: "",
        valorIdade: "",
        valorEmail: "",
        valorEscolaridade: ""

    }
    onChangeNome = (Event) => {
        this.setState({valorNome: Event.target.value})
    }
    onChangeIdade = (Event) => {
        this.setState({valorIdade: Event.target.value})
    }
    onChangeEmail = (Event) => {
        this.setState({valorEmail: Event.target.value})
    }
    onChangeEscolaridade = (Event) => {
        this.setState({valorEscolaridade: Event.target.value})
    }
    onClickBotao = () => {
        const nomeUsuario = {
            nome: this.state.valorNome,
            idade: this.state.valorIdade,
            email: this.state.valorEmail
        }
        this.setState({
            usuario: nomeUsuario,
            valorNome: "",
            valorIdade: "",
            valorEmail: ""
        })
       /* select (
        name="escolaridade", id="escolaridade"> 
        <option(value={"Ensino Medio Incompleto"}>Ensino Medio Incompleto</option>)
        <option(value={"Ensino Medio Completo"}>Ensino Medio Completo</option>)
        <option(value={"Ensino Superior Incompleto"}>Ensino Superior Incompleto</option>)
        <option(value={"Ensino Superior Completo"}>Ensino Superior Completo</option>)
        )
    } */
/*
render() {
  return (
    <div>
  <h1>Etapa 1 - Dados Gerais</h1>
  <section>
    <input value={this.state.valorNome} onChange={this.onChangeNome}>1. Qual o seu nome? </input>
    <input value={this.state.valorIdade} onChange={this.onChangeIdade}>2. Qual sua idade?</input>
    <input value={this.state.valorEmail} onChange={this.onChangeEmail}>3. Qual seu email?</input>
    <button onClick={this.onClickBotao}>Próxima etapa</button>
  </section>

    </div>
  );
}
}
*/