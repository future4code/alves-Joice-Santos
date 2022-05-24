// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}
retornaTamanhoArray(array)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
retornaArrayInvertido(array)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a,b) {
    return a - b;
  })
}
retornaArrayOrdenado(array)

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter ((numero) => {
      return numero % 2 === 0
    })
    return(numerosPares)
  }


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 const numerosPares = array.filter((numero) => {
   return numero % 2 === 0
 })
let numElevados = []
let numMultiplicados = []
for(let i = 0; i< numerosPares.length; i++){
  numMultiplicados = numerosPares[i] ** 2
  numElevados.push(numMultiplicados)
}
return numElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}