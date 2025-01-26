// Quando você tem apenas uma sentença de código em uma arrow function, ela sempre retorna o valor mesmo sem return
// Por isso não pode usar a palavra return
const somar = (a = 0, b = 0) => a + b

console.log(somar(4, 5)) // return implícito