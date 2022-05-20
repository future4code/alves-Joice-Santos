// 1. a) ele irá solicitar ao usuario que digite um número e depois vai verificar se esse o resto da divisão desse número por 2 é igual a 0.
// Se for igual irá imprimir a mensagem "Passou no teste" e se for diferente irá imprimir a mensagem "Não passou no teste".
// b) Para todos os números pares
// c) Para os números impares

// 2. a) para retornar o valor do item escolhido pelo usuario.
// b) O preço da fruta maçã é R$2.25
// c) ele retornaria o valor de pera e de default

// 3. a) ela está criando uma função
// b) com o numero 10, como atende a condição de ser maior que 0, vai retornar "Esse número passou no teste".
// com o numero -10, retornaria um erro pois é menor que zero.

const idadeUsuario = Number(prompt("Digite sua idade"))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
console.log(idadeUsuario)

const turnoDoDia = prompt("Qual turno você estuda? Digite M para matutino, V para vespertino ou N para noturno. ").toUpperCase()
console.log(turnoDoDia)

let turno1 =(turnoDoDia === "M")
let turno2 =(turnoDoDia === "V")
let turno3 =(turnoDoDia === "N")


    if (turno1) {
        console.log("Bom dia!")
    } if (turno2) {
        console.log("Boa tarde!")
    } else if (turno3) {
        console.log("Boa noite!")
    }


function respostaTurno(variavelTurno) {
    switch (variavelTurno){
        case "M":
            console.log("Bom dia!")
            break
            case "V":
                console.log("Boa tarde!")
                break
                case "N":
                    console.log("Boa noite!")
                    break
                    default:
                        console.log("Turno não encontrado")
    }
    

}
respostaTurno(turnoDoDia)

const generoFilme = prompt("Qual genero de filme iremos assistir?").toLowerCase()
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

function assistirFilme (genero, preco){
    if ((genero==="fantasia") && (preco <15)){
        console.log("Bom filme!")
    } else{
    console.log("Escolha outro filme")
}
}
assistirFilme(generoFilme, precoIngresso)