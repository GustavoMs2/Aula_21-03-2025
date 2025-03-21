function maior(arrayLetra){
    var maior= ''
    for(var i = 0; i < arrayLetra.length; i++){
        if(arrayLetra[i].length > maior.length){
            maior = arrayLetra[i]
        }
    }
    console.log(maior)
}
maior(['Gustavo,Ricarrdo,Enzo'])