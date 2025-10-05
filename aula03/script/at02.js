const NomeDigitado = document.getElementById("nome");
const BotaoSaudacao = document.getElementById("btnSaudar");
const Mensagem = document.getElementById("Msg");

function Saudar(){

    const nome = NomeDigitado.value;

    if( nome === ""){
        Mensagem.textContent = 'Por favor, digite seu nome.';
    }
    else{
        Mensagem.textContent = `Olá, ${nome}! seja bem vindo(a)!`; 
    }
}
BotaoSaudacao.addEventListener('click',Saudar);