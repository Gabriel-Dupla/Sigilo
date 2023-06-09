function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return

    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `

    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `

    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)

}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor

}

//reescreve acontece evento ao click
document.body.addEventListener('click', e => {
    //se tiver click pelo id
    if(e.target.id == 'jogar-novamente') {
        //restarta a tela
        window.location.reload()


    }

})

function gameOver(numero) {
    if (numero === 'Fim de jogo') {
        return document.body.innerHTML = (`<div><h1>O Jogo Acabou</h1></div>
       <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
`);
    }
}