function dividir(numeroA, numeroB){
    if(numeroA == 0 || numeroB == 0){
        return "Não se pode dividir por zero"
    }else{
        return console.log(numeroA / numeroB)
    }
}

module.exports = dividir
