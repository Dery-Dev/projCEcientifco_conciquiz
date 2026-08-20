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
    "Pergunta de teste 3",
    "Pergunta de teste 4",
    "Pergunta de teste 5",
    "Pergunta de teste 6",
    "Pergunta de teste 7"
];

let perguntaAtual = 0;


// MOSTRAR PERGUNTA

function mostrarPergunta() {
    pergunta.textContent = perguntas[perguntaAtual];
}


// INICIAR O JOGO

botaoComecar.addEventListener("click", function() {

    telaInicial.style.display = "none";

    trilhos.style.display = "block";
    trem.style.display = "block";
    bonecoAlavanca.style.display = "block";
<<<<<<< HEAD


    botoes.classList.add("visivel");

=======


    botoes.classList.add("visivel");

>>>>>>> 02fb07c924e9f8750364cd0e0284612dc195ea73
    mostrarPergunta();

});

<<<<<<< HEAD
function virar() { 
    bonecoAlavanca.style.display = "none";
    bonecoAlavanca1.classList.add("visivel1") 
}
=======
>>>>>>> 02fb07c924e9f8750364cd0e0284612dc195ea73

// ESCOLHA: PUXAR

botaoPuxar.addEventListener("click", function() {
    iniciarTurno();
});


// ESCOLHA: NÃO PUXAR

botaoNaoPuxar.addEventListener("click", function() {
    iniciarTurno();
});


// INICIAR TURNO

function iniciarTurno() {

    botoes.classList.remove("visivel");
<<<<<<< HEAD
 bonecoAlavanca1.style.display = "none";
 bonecoAlavanca1.style.display = "block"
=======

>>>>>>> 02fb07c924e9f8750364cd0e0284612dc195ea73
    // simula a animação do trem
    setTimeout(function() {

        botaoNext.style.display = "block";

    }, 2000);

}


// BOTÃO NEXT

botaoNext.addEventListener("click", function() {

    botaoNext.style.display = "none";
<<<<<<< HEAD
    bonecoAlavanca1.style.display = "none";
=======
>>>>>>> 02fb07c924e9f8750364cd0e0284612dc195ea73

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

        botoes.classList.add("visivel");
<<<<<<< HEAD
        bonecoAlavanca.style.display = "block"
=======
>>>>>>> 02fb07c924e9f8750364cd0e0284612dc195ea73
    }
    else {

        // Chegou ao fim das 7 perguntas
        console.log("Fim");

    }

});

