const caixaprincipal = document.querySelector('.caixa-principal');
const caixapergunta = document.querySelector('.caixa-pergunta');
const caixaalternativa = document.querySelector('.caixa-alternativa');
const caixaresultado = document.querySelector('.caixa-resultado');
const pergunta = [
    {
        enunciado:"pergunta 1",
        alternativas:["alternativa 1","alternativa 2"]
    }
    {
        enunciado:"pergunta 1",
        alternativas:["alternativa 1","alternativa 2"]
    }
    {
        enunciado:"pergunta 1",
        alternativas:["alternativa 1","alternativa 2"]
    }
    
]
let atual=0;
let pergunta;
function mostrapergunta(){
    perguntaAtual=perguntas[atual]
    caixapergunta.textContent=perguntaAtual.enunciado;
}