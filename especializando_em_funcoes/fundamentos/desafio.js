// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular (3)(7)(fn)

const somar = (a, b) => a + b
const subtrair = (a, b) => a - b
const multiplicar = (a, b) => a * b
const calcular = a => b => fn => fn(a, b)

console.log(somar(10, 32))
console.log(subtrair(80, 38))
console.log(multiplicar(21, 2))
console.log(calcular(21)(2)(multiplicar))