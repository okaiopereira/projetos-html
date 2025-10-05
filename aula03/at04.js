const DetalhesElemento = document.querySelector('details');
const abrir = document.querySelector('summary');
const resp = abrir.nextElementSibling;

abrir.addEventListener('click', function(event){
    
    resp.classList.toggle('escondido');
    DetalhesElemento.classList.toggle('aberto-js')
})
