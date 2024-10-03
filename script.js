const caixaprincipal = document.querySelector('.caixa-principal');
const caixapergunta = document.querySelector('.caixa-pergunta');
const caixaalternativa = document.querySelector('.caixa-alternativa');
const caixaresultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado:"Você gosta da inteligencia artificial?",
        alternativas:[
            {
            texto:"SIM",
            afirmativa:"afirmativa da alternativa 1"
        },
        {
            texto:"NÃO",
            afirmativa: "afirmativa da alternativa 2"
        }
            
        ]
    },
    {
        enunciado:"Você credita que as pessoas estão ficando alienadas por conta das IA's?",
        alternativas:[
            {
            texto:"SIM",
            afirmativa:"afirmativa da alternativa 1"
        },
        {
            texto:"NÃO",
            afirmativa: "afirmativa da alternativa 2"
        }
    ]
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
        botaoAlternativas.textContent= alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
posicao++;
mostrapergunta();
        })

        caixaAlternativa.appendChild(botaoAlterntivas);
    }
}
mostrapergunta();