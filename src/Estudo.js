let numeros = [1, 2, 3, 4, 5];

console.log(numeros[2]);

numeros.push(10);

console.log(numeros[5]);

// Maneiras de se criar objetos no Java Script

// Construção literal 
var pessoa = {
    nome: "Joao",
    idade: 30,
    profissao: "Engenheiro"
}
console.log(pessoa);

// Criando um algoritmo recursivo que printa os valores de soma até 10
// É essencial entender como estabelecer funções de parada
function somaDez(num){
    if(num < 9){
        num++;
        console.log(num);
        somaDez(num)
    }
    return;
}

somaDez(0);


// Construção com construtor
