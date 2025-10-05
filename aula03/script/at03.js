let indiceAtual = 0;

let imagens = [
    {
        url : "imagens/bancodedados.jpeg",
    },

    {
        url : "imagens/cachorrochupetao.jpeg",
    },

    {
        url : "imagens/podenaoman.jpeg",
    },

    {
        url : "imagens/shaq.jpg",
    }
]

function atualizar() {
    const itemAtual = imagens[indiceAtual];
    
    document.getElementById('imagem').src = itemAtual.url;
    
    //isso é só para desabilitar o botao, para o usuario não navegar no nada
    document.getElementById('btn-voltar').disabled = (indiceAtual === 0);
    document.getElementById('btn-avancar').disabled = (indiceAtual === imagens.length - 1);
}

function proximo() {

    if (indiceAtual < imagens.length - 1) {
        indiceAtual++; 
        atualizar();
    }
}


function anterior() {
    if (indiceAtual > 0) {
        indiceAtual--; 
        atualizar(); 
    }
}


document.getElementById('btn-avancar').addEventListener('click', proximo);
document.getElementById('btn-voltar').addEventListener('click', anterior);

atualizar();