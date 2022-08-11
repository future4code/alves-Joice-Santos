const anoBissexto = (ano) => {
    if(ano % 4 === 0) && (ano % 100 !== 0){
    return "o ano é bissexto"
    } else {
        return "o ano não é bissexto"
    }
}