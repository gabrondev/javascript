// Function Declaration => Declaração de Função
function somar(a, b){
    return a + b
}

// Function Expression
// No Javascript também tem como armazenar uma >função< em uma variável
let subtrair = function(a, b){ // Função sem nome: função anônima
    return a - b
}

console.log(subtrair(30, 27))

console.log(somar(30, 27))