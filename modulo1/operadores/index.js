/* 
const bool1 = true
const bool2 = false
const bool3 = !bool2 /true

let resultado = bool1 && bool2 
console.log("a. ", resultado) /false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) /false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) /true

console.log("d. ", typeof resultado) */

/* let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = (primeiroNumero) + (segundoNumero)

console.log(soma) 
o problema é que as variaveis estão como string e não como number.
será impresso no console somente a junção dos dois valores.
para resolver isso ele pode usar o comando number para conversão, na linha 20. */
let idadeUsuario = prompt("Qual sua idade?")
let idadeAmigo = prompt("Qual a idade de seu melhor amigo(a)?")
console.log("Sua idade é maior que a do seu melhor amigo(a)?", idadeUsuario > idadeAmigo )
console.log(Number(idadeUsuario) - Number(idadeAmigo))

const respostaUsuario = prompt("Digite aqui um número par")
console.log(Number(respostaUsuario) % 2)
// todos os resultados são 0 porque estpu dividindo números pares por um número par
// se o usuário inserir um número impar irá retornar um valor diferente de 0

idadeAnos = prompt("Quantos anos você tem?")
console.log(Number(idadeAnos), "anos")
console.log(Number(idadeAnos) * 12, "meses")
console.log(Number(idadeAnos) * 365, "dias")
console.log(Number(idadeAnos) * (365 * 24), "horas" )

const numero1 = prompt("Digite um número")
const numero2 = prompt("Digite outro número")
console.log(Number(numero1) > Number(numero2))
console.log(Number(numero1) === Number(numero2))
 const divisao = (Number(numero1) % Number(numero2))
 console.log(Number(divisao) === 0)
 const divisao2 = (Number(numero2) % Number (numero1))
 console.log(Number(divisao2) === 0)


