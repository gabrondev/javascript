// Indexada:    0    1    2    3    4   5
const notas = [7.8, 7.3, 5.8, 9.8, 8.3, 10]

console.log(notas)
console.log(notas[3])

// O que é constante é o tipo da variável notas, não seus valores
// Por isso é possível alterar um elemento do array
notas[2] = 8.5 
console.log(notas[2])
console.log(notas)

notas[6] = 9.9
console.log(notas[6])
console.log(notas)
