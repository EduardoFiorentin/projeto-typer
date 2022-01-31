function iniciarVerificador() {
    var alvo = $(".frase").text()
    var patternA = "^";
    var patternB = "g";   
    $(".text-area").on('input', function(){
        patternA += $(".text-area").val()
        var regex = new RegExp(patternA, patternB)
        var resultado = regex.test(alvo)

        patternA = "^"
        
        if (resultado == true) {
            $(".text-area").addClass("text-area-verde")
            $(".text-area").removeClass("text-area-vermelho")
        } else {
            $(".text-area").addClass("text-area-vermelho")
            $(".text-area").removeClass("text-area-verde")
        }
    })
}