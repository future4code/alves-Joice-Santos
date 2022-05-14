// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Escreva aqui um número") 
  const largura = prompt("Escreva aqui outro número")
 console.log(altura * largura)
}


// EXERCÍCIO 02
function imprimeIdade() {
 const anoAtual = prompt("Digite o ano atual")
 const anoNascimento = prompt("Digite seu ano de nascimento")
 console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
return peso / (altura * altura)  

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Escreva aqui seu nome")
  const idade = prompt("Digite aqui sua idade")
  const email = prompt("Escreva aqui seu e-mail")
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(frase)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite aqui sua cor favorita")
  const cor2 = prompt("Digite aqui sua segunda cor favorita")
  const cor3 = prompt("Digite aqui sua terceira cor favorita")
  const arrayCores = [cor1, cor2, cor3]
  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const check1 = string1.length
  const check2 = string2.length
   return check1 === check2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return retornaUltimoElemento = array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  array[0] = array[array.length - 1]
  array[-1] = array[array.length 0]
return array[0, -1]
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let igualdade = string1.toLowerCase() === string2.toLowerCase()
  return  igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}