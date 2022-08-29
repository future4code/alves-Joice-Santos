export type Transaction = {
    valor: number,
    data: Date,
    descricao: string
}

export type User = {
    nome: string,
    CPF: string,
    dataNascimento: Date,
    saldo: number,
    extrato: Array<Transaction>
}

export let users: User[] = []