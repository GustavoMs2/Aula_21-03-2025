function maior(arrayNumero){
    var maior = 0
    for(var i = 0; i < arrayNumero.length; i++){
        if(arrayNumero[i] > maior){
            maior = arrayNumero[i]
        }
    }
    console.log(maior)
}
maior([10,2,5,8,125])