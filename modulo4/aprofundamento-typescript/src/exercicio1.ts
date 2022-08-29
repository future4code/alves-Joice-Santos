type MinhaString = {
    nome: string,
    corFavorita: CorFavorita
}

type MeuNumero = {
    idade: number
}

type Pessoa = MinhaString & MeuNumero;

enum CorFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"

}

const pessoa1: Pessoa = {
    nome: "Ana",
    corFavorita: CorFavorita.AMARELO,
    idade: 25
}

const pessoa2: Pessoa = {
    nome: "Bruno",
    corFavorita: CorFavorita.LARANJA,
    idade: 28
}

const pessoa3: Pessoa = {
    nome: "Cristina",
    corFavorita: CorFavorita.VIOLETA,
    idade: 42
}

const pessoa4: Pessoa = {
    nome: "Daniel",
    corFavorita: CorFavorita.ANIL,
    idade: 38
}

const pessoas: Pessoa[] = []

pessoas.push(pessoa1, pessoa2, pessoa3,pessoa4);

console.table(pessoas)