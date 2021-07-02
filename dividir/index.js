function dividir(numeroA, numeroB){
    if(numeroA == 0 || numeroB == 0){
        return "Não se pode dividir por zero"
    }else{
        return numeroA / numeroB
    }
}

module.exports = dividir
