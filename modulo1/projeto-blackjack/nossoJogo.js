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

function cartasUsuario(){
const carta1= comprarCarta()
const carta2= comprarCarta()
const pontuacaoUsuario= (carta1.valor + carta2.valor)
console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${pontuacaoUsuario}`)
}
cartasUsuario()

function cartasComputador(){
   const cartaComp1= comprarCarta()
   const cartaComp2= comprarCarta()
   const pontuacaoComp= (cartaComp1.valor + cartaComp2.valor)
   console.log(`Computador - cartas: ${cartaComp1.texto} ${cartaComp2.texto} - pontuação ${pontuacaoComp} `)
}
cartasComputador()

function vencedor(pontuacaoUsuario, pontuacaoComp){
   if (pontuacaoUsuario > pontuacaoComp){
      console.log("O usuário ganhou!");
   } else if(pontuacaoUsuario = pontuacaoComp){
      console.log("Empate!");
   } else {
      console.log("O computador ganhou!");
   }
}
vencedor()