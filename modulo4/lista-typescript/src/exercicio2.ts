const imprimeParametro = {
    if ("input" === string) {
        return "string";
    }
    else if ("input" === "true") {
        return "boolean";
    }
    else if ("input" === "false") {
        return "boolean";
    }
    else {
        return "Number";
    }    
}

console.log(imprimeParametro(12 ))