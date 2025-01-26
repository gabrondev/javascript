const a = 4
console.log(a)

// Function Declaration
function bomDia(){
    console.log('Bom dia!')
}

bomDia()

// Function Expression
const boaTarde = function () {
    console.log('Boa tarde!')
}

boaTarde() // Retorna undefined pois não tem return

function somar(a = 0, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3, 5, 6, 7, 8, 9) // Pode passar mais parâmetros do que a função pede, que não gerará erro
console.log(resultado)

resultado = somar() // Por ter definido valores padrão, não retornará NaN ao deixar os parâmetros em branco
console.log(resultado)