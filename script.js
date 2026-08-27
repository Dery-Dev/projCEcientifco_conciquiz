// Tela inicial
const telaInicial = document.getElementById("telaInicial");
const botaoComecar = document.getElementById("botaoComecar");

//tela final
const telafinal1 = document.getElementById('Telafinal-b')
const telafinal2 = document.getElementById('Telafinal-n')
const telafinal3 = document.getElementById('Telafinal-r')

telafinal1.style.display = "none"
telafinal2.style.display = "none"
telafinal3.style.display = "none"

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
// PESSOAS

const cincoPessoas = document.getElementById("cincoPessoas");
const umaPessoa = document.getElementById("umaPessoa");
const pessoaRica = document.getElementById("pessoaRica");
const monalisa = document.getElementById("monalisa");
const cincodormindo = document.getElementById("cincodormindo")
const idosos = document.getElementById("idosos")
const enemy = document.getElementById("enemy")
const cat = document.getElementById("cat")
const politic = document.getElementById("politic")

function esconderPessoas() {
    cincoPessoas.style.display = "none";
    umaPessoa.style.display = "none";
    pessoaRica.style.display = "none";
    monalisa.style.display = "none";
    cincodormindo.style.display = "none";
    idosos.style.display = "none";
    enemy.style.display = "none";
    cat.style.display = "none";
    politic.style.display = "none";
}
        esconderPessoas();

    // MOSTRAR AS PESSOAS DE ACORDO COM A PERGUNTA
function mostrarPessoas() {

    esconderPessoas();

    // PERGUNTA 1
    if (perguntaAtual === 0) {

        cincoPessoas.style.display = "block";
        umaPessoa.style.display = "block";

    }

    // PERGUNTA 2
    else if (perguntaAtual === 1) {

        cincodormindo.style.display = "block";
        umaPessoa.style.display = "block";

    }

    // PERGUNTA 3
    else if (perguntaAtual === 2) {

        idosos.style.display = "block";
        umaPessoa.style.display = "block";

    }

    // PERGUNTA 4
    else if (perguntaAtual === 3) {

        politic.style.display = "block";
        umaPessoa.style.display = "block";

    }

    // PERGUNTA 5
    else if (perguntaAtual === 4) {

        idosos.style.display = "block";
        cat.style.display = "block";
        umaPessoa.style.display = "block";

    }

    // PERGUNTA 6
    else if (perguntaAtual === 5) {

        politic.style.display = "block";
        monalisa.style.display = "block";

    }

    // PERGUNTA 7
    else if (perguntaAtual === 6) {

        enemy.style.display = "block";
        pessoaRica.style.display = "block";

    }
}


// PERGUNTAS

const perguntas = [
    "Um trem está indo em direção a 5 pessoas. Você pode puxar a alavanca para desvia-lo para o outro trilho, matando 1 pessoa, você puxa a alavanca?",

    "O trem está indo em direção a 5 pessoas dormindo. Você pode puxar a alavanca para desvia-lo para o outro trilho, matando 1 pessoa inocente, você puxa a alavanca?",

    "O trem vai passar em cima de 5 idosos que se sairem vivos terão apenas mais 2 anos de vida no máximo, se você puxar a alavanca, o trem passará por cima de um parente seu.",

    "O trem passará por cima de 1 político que roubou milhões, que se morrer fará você ser caçado por todo o país, se você puxar a alavanca, o trem matará uma pessoa completamente inocente.",

    "O trem vai passar por cima de cinco idosos que não viveram até o final do ano, se você puxar a alavanca, o trem passará por cima de um adoravel gatinho e seu dono, você puxa a alavanca?",

    "O trem passará por cima de 1 politico corrupto, se você puxar a alavanca, o trem passará por cima da monalisa original e que você pagara pela destruição dela.",

    "O trem vai matar seu maior inimigo (que matou seu maior amor acidentalmente). Puxando a alavanca, ele desvia para um criminoso rico que te oferece 1 milhão para sobreviver. Você puxa a alavanca?"

];

let perguntaAtual = 0;


// MOSTRAR PERGUNTA

function mostrarPergunta() {
    pergunta.textContent = perguntas[perguntaAtual];
    pontos.style.display = "flex"
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
    mostrarPessoas();

});

function virar() { 
    bonecoAlavanca.style.display = "none";
    bonecoAlavanca1.classList.add("visivel1")
    bonecoAlavanca1.style.display = "block";
    if (perguntaAtual == 0 || perguntaAtual == 1 || perguntaAtual == 2 || perguntaAtual == 6) {
    pontos.style.display = "block"
    ponto++
    pontos.textContent = `Pontos de moral: ${ponto}`
    }
}

function continuar() {
    // Garante que o boneco normal continua aparecendo e o da alavanca some
    bonecoAlavanca.style.display = "block";
    bonecoAlavanca1.style.display = "none";
    bonecoAlavanca1.classList.remove("visivel1");
    if (perguntaAtual == 3 || perguntaAtual == 5 || perguntaAtual == 4 ) {
    pontos.style.display = "block"
    ponto++
    pontos.textContent = `Pontos de moral: ${ponto}`
    }
}

// ESCOLHA: PUXAR

botaoPuxar.addEventListener("click", function() {
    iniciarTurno();
});


// ESCOLHA: NÃO PUXAR

botaoNaoPuxar.addEventListener("click", function() {
    iniciarTurno();
});

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
        mostrarPessoas();


        botoes.classList.add("visivel");
       bonecoAlavanca.style.display = "block" 
    }
    else {

        // Chegou ao fim das 7 perguntas
        ;
        trilhos.style.display = "none"
        trem.style.display = "none"
        pergunta.style.display = "none"
        bonecoAlavanca.style.display = "none"
        bonecoAlavanca1.style.display = "none"
        enemy.style.display = "none";
        pessoaRica.style.display = "none";

        // Centraliza os pontos na tela final
        pontos.classList.add("tela-final");

        if (ponto == 7) {
        telafinal1.style.display = "flex"
        } else if (ponto < 7 && ponto > 3){ 
            telafinal2.style.display = "flex"; 
        } else {
            telafinal3.style.display = "flex"
        }
    }

});

// INICIAR TURNO

function iniciarTurno() {

    botoes.classList.remove("visivel");
    // simula a animação do trem
    setTimeout(function() {

  containerNext.style.display = "flex";

    }, 2000);

}




console.log(cincoPessoas);
console.log(umaPessoa);
console.log(politic);

