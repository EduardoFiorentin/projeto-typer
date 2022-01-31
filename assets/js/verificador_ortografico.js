fraseOriginal = 'Esta frase tem cinco letras bonitas e belas de ouro'

fraseDigitada = 'Esta frase tem ci cinco le letras bonitass e e belas de a ouro'

console.log(verificar(fraseOriginal, fraseDigitada))

function verificar(original, digitada) {
    var arrayA = original.split(' ')
    var arrayB = digitada.split(' ')
    
    //Palavras simetricas e assimetricas
    var palavrasSimetricas = 0
    var palavrasAssimetricas = 0
    for (key = 0; key < arrayA.length; key++) {
        if (arrayA[key] == arrayB[key]) {
            console.log(arrayA[key], arrayB[key])
            palavrasSimetricas++
        } else {
            if (arrayA[key] == arrayB[key+1]) {
                console.log(arrayA[key], arrayB[key+1])
                palavrasAssimetricas++
                arrayB.splice(key, 1)
            } else if (arrayA[key] == arrayB[key-1]) {
                palavrasAssimetricas++
            }
        }
    }
    return palavrasSimetricas + palavrasAssimetricas
}