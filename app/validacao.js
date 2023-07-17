



function verificaChuteValido(chute) {
    

    const numero = +chute

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `
            <h2>GAME OVER!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            `
            botaoReseta()
            document.body.style.backgroundColor = "#3F2733"
            document.body.style.color = "white"
        } else {
            elementoChute.innerHTML += '<div>Chute inválido!</div>'
        }   
       
    } 
    if (chuteMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
        botaoReseta()

       
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-chevron-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-chevron-up"></i></div>
        `
        
}

function botaoReseta() {
    document.body.innerHTML += `
    <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
    `

    const resetButton = document.getElementById('jogar-novamente')
    resetButton.addEventListener("click", () => window.location.reload())

}


function chuteMaiorOuMenor(numero) {
    return numero < menorValor || numero > maiorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}
}

