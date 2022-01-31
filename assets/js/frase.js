function fraseAleatoria() {
    const numeroFrase = parseInt(Math.random()* (10 - 0) + 0)

    const frases = [
        { frase: "Esta frase tem cinco palavras",
        tempo: 10},
        { frase: "O café acabou",
        tempo: 5},
        { frase: "Esta bela frase tem sete belas palavras",
        tempo: 14},
        { frase: "Na minha maquina funciona",
        tempo: 5}, 
        { frase: "No futuro, os computadores podem pesar não mais que 1.5 toneladas, disseram...",
        tempo: 15},
        { frase: "Não se preocupe se não funcionar direito. Se tudo desse certo, você perderia o emprego",
        tempo: 20},
        { frase: "O problema com os programadores é que você nunca sabe o que um programador está fazendo antes que seja tarde demais",
        tempo: 25},
        { frase: "Dê a um homem um programa, frustre-o por um dia. Ensine um homem a programar, frustre-o pelo resto da vida",
        tempo: 20},
        { frase: "O computador nasceu para resolver problemas que não existiam antes",
        tempo: 15},
        { frase: "É mais difícil ler código do que escrevê-lo",
        tempo: 10},
    ]

    return frases[numeroFrase]
}
