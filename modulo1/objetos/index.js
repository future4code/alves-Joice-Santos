// 1. a) "Matheus Nachtergaele", "Virginia Cavendish", canal: "Globo", horario: "14h"

// 2. a) cachorro = "Juca", 3, "SRD", gato = "Juba", 3, "SRD", tartaruga = "Jubo", 3, "SRD"
// b) ela copia todos os dados daquele objeto

// 3. a) "Caio", false , "Caio", undefined
//b) porque não foi atribuido uma chave de altura para o objeto.
 
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]

}

console.log(pessoa [`Eu sou ${nome}, mas pode me chamar de: ${apelidos}`])

const pessoa2 = {
    ...pessoa
    nome: "Joana",
    apelidos: ["Jojo", "Jo", "Joaninha"]
}
console.log(pessoa)
console.log(pessoa2)

const dadosUsuario = {
    nome: "Bruno",
    idade: 23,
    profissao: "instrutor"
}
const dados = dadosUsuario[dadosUsuario.nome.length]
console.log(dados, dadosUsuario.profissao.length)
    
const carrinho = []

const abacaxi = {
    nome: "abacaxi"
    disponibilidade: true
}

const banana = {
    nome: "banana"
    disponibilidade: true
}

const laranja = {
    nome: "laranja"
    disponibilidade: true
}

function escolherFrutas(fruta) {
    let array = []
    array.push(fruta)
    return array
}
carrinho = escolherFrutas[abacaxi, banana, laranja]
console.log(carrinho)


