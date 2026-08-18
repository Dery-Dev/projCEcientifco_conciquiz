// Seleção dos elementos da tela inicial e botões
const telaInicial = document.getElementById("telaInicial");
const botaoComecar = document.getElementById("botaoComecar");
const botoes = document.getElementById("botoes");
const botaonext = document.getElementById("botoes2")

// Seleção dos elementos do cenário do jogo
const trilhos = document.querySelector(".trilhos");
const trem = document.querySelector(".trem");
const bonecoAlavanca = document.querySelector(".boneco-alavanca");
const bonecoAlavanca1 = document.querySelector(".boneco-alavanca1")

botaoComecar.addEventListener("click", function() {

    telaInicial.style.display = "none";

// 2. Exibe os elementos do jogo
    trilhos.style.display = "block";
    trem.style.display = "block";
    bonecoAlavanca.style.display = "block";
    
    botoes.classList.add("visivel");
}); 

var botaoPuxar = document.getElementById("puxar");
var botaoNaoPuxar = document.getElementById("nao-puxar");
function virar() { 
    bonecoAlavanca.style.display = "none";
    bonecoAlavanca1.classList.add("visivel1")
    botaonext.classList.add("visivel2")

}
function continuar() {
botaonext.classList.add("visivel2")
}
function next() {

}