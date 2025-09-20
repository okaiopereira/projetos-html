
//Questão 01 
//Tipos de Variáveis

console.log('\nQuestão 01: Tipos de Variáveis \n')

let nome = "Kaio";
let idade = 18;
let jamucei = true;

//Acabei deixando 'type' para mostrar o tipo da váriavel
console.log('Olá ' + nome + ' \nType: ' + typeof nome);
console.log('A sua idade é ' + idade + '\nType: ' + typeof idade);
console.log('Você mucou hoje? '+ jamucei + '\nType: ' + typeof jamucei);

//Questão 02  
//Operações Matemáticas

console.log("\nQuestão 02: Operações Matemáticas \n");

let num1 = 7;
let num2 = 9;

console.log('Subtração: ', num1 - num2);
console.log('Adição: ', num1 + num2);
console.log('Multiplicação: ', num1 * num2);
console.log('Divisão: ', num1 / num2);


//Questõo 03 
//Contatenação e Interpolação

console.log('\nQuestao 03: Contatenação e Interpolação \n');

let cidade = 'Carapicuíba';
let estado = 'São Paulo';

console.log(`Eu moro em ${cidade} no estado de ${estado}.`);


//Questão 04 
//Verificação para tirar a habilitação

console.log('\nQuestão 04: Verificação para tirar habilitação \n');

let idad = Number(prompt('Precisamos saber da sua idade para verificar se você pode tirar a CNH: '));

if( idad >= 18 ){
    alert('Você já pode tirar a habilitação.');
}
else{
    let idadeCNH = 18 - idad;
    alert(`Ainda falta ${idadeCNH} anos para poder tirar a habilitação.`);
}


//Questão 05 
//Tabuada com For

console.log('\nQuestão 05: Tabuada com For \n');

console.log('Nesse programa iremos fazer uma tabuada do número digitado automaticamente!');
let numtab = Number(prompt('Digite o número que deseja ver a tabuada: '));

for (let i = 0; i < 11; i++) {
    let res = numtab * i;
    console.log(`${numtab} x ${i} = ${res}`);
}


//Questão 06 
//Comparação de Tipos e Valores

console.log('\nQuestão 06: Comparação de Tipos e Valores');

let numeroaspas = '25';
let numero = 25;

console.log( `'${numeroaspas}' == ${numero} é `, numeroaspas == numero );
//O == converte as variáveis para um tipo comum para comparar.
console.log( `'${numeroaspas}' === ${numero} é `, numeroaspas === numero );
//Já o === não converte para comparar, então na visão do === o 25 é um número e o '25' é uma string, ao contrario do == que converte os dois para o mesmo tipo para realizar a comparação.

//Questão 07
//Estrutura Switch para Dias da Semana

console.log('Questão 07: Estrutura Swicth para Dias da Semana');
console.log('O valor digitado resultará em um dia semana.');
let numsemana = Number(prompt('Digite um valor de 1 a 7: '));

switch (numsemana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3: 
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;
    case 7:
        console.log('Sabado');
        break;
    default:
        console.log('Número invalido!')
        break;
}


//Questão 08
//Contagem Regressiva

console.log('Questão 08: Contagem Regressiva');

let numer = 10

while(numer > 1){
    console.log(numer);
    numer = numer - 1;
    if(numer == 5){
        console.log(numer);
        console.log('Contagem Interrompida!');
        break;
    }
}


//Questão 09
//Encontrando Números Pares

console.log('Questão 09: Encontrando Números Pares');

for (let p = 1; p < 20; p++) {
    console.log(p);
    p = p + 1;
    if( p % 2 == 0){
        console.log(p + ' Encontrei um número par!');
    }
}


//Questão 10
//Mini Calculadora

console.log('Questão 10: Mini Calculadora');

let res;
let numero1 = Number(prompt('Digite um número: '));
let numero2 = Number(prompt('Digite outro número: '));
let sinal = prompt('Escolha a operação que deseja realizar: ');

if( sinal == '+' ){
    res = numero1 + numero2;
}
else if( sinal == '-' ){
    res = numero1 - numero2;
}
else if( sinal == '*' ){
    res = numero1 * numero2;
}
else if ( sinal == '/' ){
    if ( numero2 == 0 ){
        console.log('Desculpa, mas não tem como dividir por 0!');
    }
    else{
        res = numero1 / numero2;
    }
}
    console.log(`${numero1}  ${sinal}  ${numero2}  = ${res} `);



