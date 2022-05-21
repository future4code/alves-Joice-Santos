/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack")
if(confirm("Quer iniciar uma nova rodada?")) {
  confirm = true
  console.log("iniciar rodada") 
} else {
   confirm = false
   console.log("O jogo acabou")
}

const rodada1 = {
const carta = comprarCarta()*2
const pontuação = soma(carta)
console.log(`Usuário - cartas ${carta} - pontuação ${pontuação}`)