var menorValor = 1
var maiorValor = 100

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerText = maiorValor

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerText = menorValor

const elementoCaixa = document.getElementById('valor-box')



const numeroSecreto = calculaNumeroSecreto()

console.log(numeroSecreto)


function calculaNumeroSecreto() {
    return parseInt(Math.random() * maiorValor+1 )
}