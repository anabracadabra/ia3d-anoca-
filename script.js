const caixaprincipal = document.querySelector('.caixa-principal');
const caixapergunta = document.querySelector('.caixa-pergunta');
const caixaalternativa = document.querySelector('.caixa-alternativa');
const caixaresultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado:"Você gosta da inteligencia artificial?",
        alternativas:["SIM","NÃO"]
    },
    {
        enunciado:"Você credita que as pessoas estão ficando alienadas por conta das IA's?",
        alternativas:["SIM","NÃO"]
    },
    {
        enunciado:"Você utiliza com frequência IA?",
        alternativas:["SIM","NÃO"]
    }
    
]
let posicao = 0;
let pergunta;
function mostrapergunta(){
    perguntaAtual=perguntas[posicao];
    caixapergunta.textContent=perguntaAtual.enunciado;
}

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas= document.createElement("button");
        botaoAlternativas.textContent= alternativa;
        caixaAlternativa.appendChild(botaoAlterntivas);
    }
}
mostrapergunta();