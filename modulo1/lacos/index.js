// 1. o codigo está repetindo os valores a partir de 0 até antes de chegar no 5.
// vai imprimir a soma desses numeros = 10

//2. a) vai ser impressos todos os numeros maiores que 18 

// 3. ele imprimiria 4 linhas, adicionando um asterisco para cada linha

let pet = Number(prompt("Quantos pets você tem?"))

if (pet === 0) {
    console.log("Que pena! Você pode adotar um pet")
} else if (pet > 0) {
    let arrayPets = []
    while (arrayPets.length < pet) {
        let outroPet = prompt("Digite o nome do seu pet")
        arrayPets.push(outroPet)
    }
    console.log(arrayPets)
}

const arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
for(let i =0; i >0; i++) {
    arrayOriginal += i
}
console.log(arrayOriginal)

/*let valor1 = arrayOriginal[]
let valor2 = 10
for(let valor1 / valor2; i++) {
    arrayOriginal += i
}
console.log(arrayOriginal)*/

/*let novoArray = []
while (arrayOriginal % 2) {
    let i =0; i% 2; i++
}
 (let i =0; i % 2; i++){
    novoArray += i
}
console.log(novoArray) */
