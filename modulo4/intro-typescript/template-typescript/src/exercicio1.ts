const triangulos = (a: number, b: number,c: number): string => {
    if(a === b && b === c ){
        return "Equilátero"
    }else if(a !== b && b !== c){
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}
console.log(triangulos)
