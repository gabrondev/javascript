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
// 2. qtde * preco -> total
// 3. medias totais

const somar = (a, b) => a + b
const produtoFragil = produto => produto.fragil === true
const calcularPrecoTotal = produto => produto.preco * produto.qtde

const mediaCarrinho = function(carrinho) {
    let precoTotal = carrinho.filter(produtoFragil).map(calcularPrecoTotal).reduce(somar)
    let qtdeCompras = carrinho.filter(produtoFragil).length
    return precoTotal / qtdeCompras
}

console.log(`A média do seu carrinho é R$ ${mediaCarrinho(carrinho)}`)