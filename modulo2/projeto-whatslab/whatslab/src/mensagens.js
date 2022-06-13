import React from "react";

    export default class Whatslab extends React.Component {
        state = {
            usuario: "",
            mensagem: ""
        };
    
adicionaMsg = (Event) => {
    this.setState({mensagem: Event.target.value });
};

adicionaUsuario = (Event)  => {
    this.setState({usuario: Event.target.value});
};

return (
    <div>
         <h1>Whatslab</h1>
            <ul>{array.map((elemento) => {
                return <li>{elemento}</li>;
            }
            )}
            </ul>
            <input name={"Usuário"} onChange= {this.adicionaUsuario}></input>
            <input name={"Mensagem"} name= {"Mensagem"} onChange={this.adicionaMsg}></input>
            <button onClick>Enviar</button>
    </div>
 );
    
}