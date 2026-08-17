const botaoPuxar = document.getElementById("puxar");
const botaoNaoPuxar = document.getElementById("nao-puxar");

botaoPuxar.addEventListener("click", function() {
    console.log("O jogador puxou a alavanca!");
});

botaoNaoPuxar.addEventListener("click", function() {
    console.log("O jogador não puxou a alavanca!");
});

const telaInicial = document.getElementById("telaInicial");
const botaoComecar = document.getElementById("botaoComecar");
const botoes = document.getElementById("botoes");

botaoComecar.addEventListener("click", function() {

    telaInicial.style.display = "none";

    botoes.classList.add("visivel");


});