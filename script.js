// Tela inicial
const telaInicial = document.getElementById("telaInicial");
const botaoComecar = document.getElementById("botaoComecar");

// Botões de decisão
const botoes = document.getElementById("botoes");
const botaoPuxar = document.getElementById("puxar");
const botaoNaoPuxar = document.getElementById("nao-puxar");
 
// Botão Next
const botaoNext = document.getElementById("next");

// Pergunta
const pergunta = document.getElementById("pergunta");


// ELEMENTOS DO CENÁRIO

const trilhos = document.querySelector(".trilhos");
const trem = document.querySelector(".trem");
const bonecoAlavanca = document.querySelector(".boneco-alavanca");
const bonecoAlavanca1 = document.querySelector(".boneco-alavanca1");


// PERGUNTAS

const perguntas = [
    "Pergunta de teste 1",
    "Pergunta de teste 2",
    "O trem vai passar em cima de 5 idosos inocentes, se você puxar a alavanca, o trem passará por cima de um parente aleatório seu.",
    "O trem passará por cima de 10 políticos corruptos, que se forem mortos, farão você ser caçado por todo o país se você puxar a alavanca, o trem matará um político honesto que governava uma cidade em ascensão",
    "O trem vai passar por cima de uma caixa que possui uma chance de ter um animal aleatório lá dentro, se você puxar a alavanca, o trem passará por cima de um biólogo que acabou de descobrir uma nova espécie que ainda não foi catalogada.",
    "O trem passará por cima de 5 pessoas com uma doença rara, se você puxar a alavanca,o trem passará por cima do único médico que pode curar pessoas com esse tipo de doença de graça. (elas não são as únicas no mundo com essa doença)",
    "O trem passará por cima de 100 pessoas completamente inocentes, se você puxar a alavanca, o trem passará por cima da sua mãe e de seu pai."
];

let perguntaAtual = 0;


// MOSTRAR PERGUNTA

function mostrarPergunta() {
    pergunta.textContent = perguntas[perguntaAtual];
}

//Pontuação 
const pontos = document.getElementById("pontos")
let ponto = 0
pontos.style.display = "none"

// INICIAR O JOGO

botaoComecar.addEventListener("click", function() {

    telaInicial.style.display = "none";

    trilhos.style.display = "block";
    trem.style.display = "block";
    bonecoAlavanca.style.display = "block";


    botoes.classList.add("visivel");

    mostrarPergunta();

});

function virar() { 
    bonecoAlavanca.style.display = "none";
    bonecoAlavanca1.classList.add("visivel1")
    bonecoAlavanca1.style.display = "block";
    pontos.style.display = "block"
    ponto++
    pontos.textContent = `Pontos de moral: ${ponto}`
}

function continuar() {
    // Garante que o boneco normal continua aparecendo e o da alavanca some
    bonecoAlavanca.style.display = "block";
    bonecoAlavanca1.style.display = "none";
    bonecoAlavanca1.classList.remove("visivel1");
}

// ESCOLHA: PUXAR

botaoPuxar.addEventListener("click", function() {
    iniciarTurno();
});


// ESCOLHA: NÃO PUXAR

botaoNaoPuxar.addEventListener("click", function() {
    continuar()
    iniciarTurno();
});


// INICIAR TURNO

function iniciarTurno() {

    botoes.classList.remove("visivel");
    // simula a animação do trem
    setTimeout(function() {

  containerNext.style.display = "flex";

    }, 2000);

}


// BOTÃO NEXT
const botaoNextElement = document.getElementById("next");
const containerNext = document.getElementById("containerNext")

botaoNext.addEventListener("click", function() {

    containerNext.style.display = "none";
    bonecoAlavanca1.style.display = "none";
    bonecoAlavanca1.classList.remove("visivel1");

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

        botoes.classList.add("visivel");
       bonecoAlavanca.style.display = "block" 
    }
    else {

        // Chegou ao fim das 7 perguntas
        console.log("Fim");
        trilhos.style.display = "none"
        trem.style.display = "none"
        pergunta.style.display = "none"
        bonecoAlavanca.style.display = "none"
        bonecoAlavanca1.style.display = "none"
    }

});

