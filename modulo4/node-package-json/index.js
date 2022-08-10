// 1. a) passamos os valores peo terminal que serão acessados pela propriedade process.argv. Podemos fazer isso utilizando o comando node index ou npm run start.

// console.log("Olá,", process.argv[2])
// console.log("Sua idade é", process.argv[3], "anos")


// const nome = process.argv[2]
// const idade = Number(process.argv[3]) 
// const somaIdade = (nome, idade) => {
//   return(
//    `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos.`) 
// }
// console.log(somaIdade(nome, idade))

switch(operacao){
    case "soma":
        return(
            process.argv[2] + process.argv[3]
        ); break;
    case "subt":
        return(
            process.argv[2] - process.argv[3]
        ); break;
    case "mult":
        return(
            process.argv[2] * process.argv[3]
        ); break;
    case "div":
        return(
            process.argv[2] / process.argv[3]
        );

}

