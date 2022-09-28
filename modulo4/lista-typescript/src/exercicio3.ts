enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filmes = {
    nome: String,
    anoLancamento: Number,
    genero: String
    nota?: Number
}

const filme1: Filmes = {
    nome: "Duna",
    anoLancamento: 2021,
    genero: GENERO.ACAO
}