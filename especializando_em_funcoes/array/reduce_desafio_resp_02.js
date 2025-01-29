const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lápis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false},
    
    {nome: 'Impressora', qtde: 5, preco: 1000, fragil: true},
    {nome: 'iPad', qtde: 2, preco: 7500, fragil: true},
    {nome: 'Computador', qtde: 2, preco: 5000, fragil: true}
]
    
// 5000 + 15000 + 10000 = 30000 / 3 = 10.000

// filter, map, reduce

// 1. fragil: true
const eFragil = item => item.fragil

// 2. qtde * preco -> total
const totalItem = item => item.qtde * item.preco

// 3. medias totais

const resultado = carrinho
    .filter(eFragil)
    .map(totalItem)

console.log(resultado)