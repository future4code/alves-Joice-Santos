// 1. será impresso uma lista com os objetos, contendo as informações de nomes e apelidos nos aarrays.
// 2. será impresso os nomes, "Amanda Rangel", "Lais Petra", "Leticia Chijo"
// 3. será impresso os apelidos [Mandi, Laura]

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomePets = pets.filter((nomes) => {
//      return nomes.nome
//  } )
//  console.log(nomePets)

//  const salsichas = pets.filter((racaSalsicha) => {
//      return racaSalsicha.raca === "Salsicha"
//  })
//  console.log(salsichas)

//  const poodles = pets.filter((racaPoodle) => {
//      return racaPoodle.raca === "Poodle"
//  }).map(nome, raca) => {
//      return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nome}`
//  }
//  console.log(poodles)

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.filter((produto) => {
     return produto.categoria.toLowerCase === "nome"
 })
 console.log(nomeProdutos)

 const categoriaBebidas = produtos.filter((bebida) => {
     return bebida.categoria === "Bebidas"
 })
console.log(categoriaBebidas)

