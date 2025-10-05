let cont = 0;
const contadorTela = document.getElementById("contador");
const btnIncrementar = document.getElementById("BtnAumentar");
const btnReset = document.getElementById("BtnResetar");


function aumentar(){
    cont+= 1;
    contadorTela.textContent = cont;
}
btnIncrementar.addEventListener('click',aumentar);

function resetar(){
    cont = 0;
    contadorTela.textContent = cont;
}
btnReset.addEventListener('click', resetar)