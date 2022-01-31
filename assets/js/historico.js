//Remover item do historico
$("tbody tr").click(function(){
    $(this).remove()
})

//coletar dados e fazer o placar
function fazerPlacar() {

    var numPalavrasDigitadas = $(".num-palavras-digitadas-contador").text(); 

    var tempoRestante = $(".contador-segundos").text()
    var tempo = tempoInicial - tempoRestante;
    var pps = numPalavrasDigitadas/tempo;

    //criando itens
    var linha = $("<tr>")

    var contPalavras = $("<td>")
    contPalavras.text(numPalavrasDigitadas)
    contPalavras.addClass("palavras-digitadas")

    var contTempo = $("<td>")
    contTempo.text(tempo)

    
    var contPontos = $("<td>")
    contPontos.text(pps)


    linha.append(contPalavras)
    linha.append(contTempo)
    linha.append(contPontos)

    $(linha).click(function(){
        $(this).remove()
    })


    var corpoTabela = $(".table__tbody")
    corpoTabela.append(linha)
}