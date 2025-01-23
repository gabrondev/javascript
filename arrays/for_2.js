// Índices:       0   1   2    3   4   5   6
const numeros = [68, 55, 123, 222, 95, 33, 45, 77]

// foreach => para cada elemento do array
for(let numero of numeros){
    console.log(numero)
}

console.log(numeros)

// foreach => para cada índice do array
for(let indice in numeros){
    console.log(`${indice} => ${numeros[indice]}`)
}