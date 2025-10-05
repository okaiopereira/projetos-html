

const InputTarefa = document.getElementById('NovaTarefa');
const BotaoInserir = document.getElementById('InserirTarefa');
const Lista = document.getElementById('ListaTarefa');

BotaoInserir.addEventListener('click',function(){

    const MsgTarefa = InputTarefa.value.trim();
    
    if( MsgTarefa !== "" ){
        
        let NovoLi = document.createElement('li');

        NovoLi.textContent = MsgTarefa;

        Lista.appendChild(NovoLi);

        InputTarefa.value = '';
    }
    
})