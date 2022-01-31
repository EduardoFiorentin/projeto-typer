var areaDigitação = $(".text-area")
var botaoReset = $(".botao-reset")
var tempo;
var tempoInicial;

$(document).ready(function(){
    configurarBotoes()
    trocaFrase()
    iniciarGame()
    iniciarVerificador()
    iniciaContadorPalavrasDigitadas()
})

function iniciarGame() {
    $(".text-area").on('focus', function(){
        iniciaTimer()
    })
}

function trocaFrase() {
    var novaFrase = fraseAleatoria()
    var frase = novaFrase.frase
    var tempo = novaFrase.tempo
    var tamanhoFrase = novaFrase.frase.split(' ').length

    $(".frase").text(frase)
    $(".contador-segundos").text(tempo)
    $(".contador-palavras").text(tamanhoFrase)
    tempoInicial = novaFrase.tempo
    iniciarVerificador()
}

function iniciaTimer() {
    var numSegundos = $(".contador-segundos").text()
    var contador = setInterval(function(){
        numSegundos--
        $(".contador-segundos").text(numSegundos)

        var terminar = $(".text-area").val() == $(".frase").text()

        if (numSegundos == 0 || terminar) {
            clearInterval(contador)
            bloquearGame()
            fazerPlacar()
        }
    }, 1000)
}

function bloquearGame () {
    areaDigitação.attr('disabled', true)
}

function configurarBotoes() {
    $(".botao-historico").on('click', function(){
        var placar = $(".placar")
        placar.slideToggle(200)
    })
    $(".botao-reset").on('click', function(){
        $('.text-area').attr('disabled', false)
        resetarGame()
    })
    $(".botao-troca-frase").on('click', function(){
        trocaFrase()
    })
}

function resetarGame() {
    //resetar segundos
    $(".contador-segundos").text(tempoInicial)

    //refazer contagem de palavras
    var tamanhoFrase = $(".frase").text().split(' ').length
    $(".contador-palavras").text(tamanhoFrase)

    //limpar text area
    $(".text-area").val(" ")
    $(".text-area").addClass("text-area-verde")
    $(".text-area").removeClass("text-area-vermelho")
}


function iniciaContadorPalavrasDigitadas() {
    $(".text-area").on('input', function(){
        var digitado = $(this).val()
        var tamanhoFrase = digitado.split(' ').splice(' ').length
        $(".num-palavras-digitadas-contador").text(tamanhoFrase)
    })
}