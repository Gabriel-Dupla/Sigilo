function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    if (chuteForInvalido(numero)) {
        console.log('Valor inválido')

    }
    if (numeroForMaiorOuMenorQueOValorPermitid(numero)) {
        console.log(`Valor inválido: o número secreto precisa estar entre ${menor-valor} e ${maiorValor}`)
    }

}

function chuteForInvalido() {
    return Number.isNaN(numero)

}

function numeroForMaiorOuMenorQueOValorPermitid(numero) {
    return numero > maiorValor || numero < menorValor

}