/* 1- a)
10
50

b) vai dar erro porque ele não vai reconhecer a função
2- a) irá retornar a resposta do usuário com todas as letras minusculas e dizer se está incluso a palavra cenoura.
a utilidade é que para encontrar determinada palavra estando todas as letras na mesma formatação é mais fácil de achar todas os elementos que estou procurando
b) i) eu gosto de cenoura. true
ii) cenoura é bom pra vista. true
iii) cenouras crescem na terra. false */

const sobreMim = `eu sou Joice, tenho 31 anos, moro em Canoas e sou estudante`
function imprimir (sobreMim) {
    console.log(sobreMim)
}
console.log(sobreMim)

const infPessoa = (nome, idade, cidade, profissao) => {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    
}

infPessoa("Joice", 31,"Canoas","estudante")
console.log(infPessoa)

function soma(n1, n2) { 
    return n1 + n2
}
console.log(soma(18,24))

function bool(n1, n2) {
    return n1 >= n2
}
console.log(bool(24,18))

const mensagem = (msg) => {
    msg = msg.toUpperCase()
    msg = msg.length
    return msg
}
const msg4u = mensagem("Não entre em pânico")
console.log(msg4u)