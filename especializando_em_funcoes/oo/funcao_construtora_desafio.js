// Função construtora -> Produto
// nome, preco, desconto (0 - 1) 
// precoFinal

function Produto(nome, preco, desconto = 0){
    // atributos
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    // métodos
    this.precoFinal = function () {
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('iPad', 7500, 0.1)
console.log(p1.nome, p1.precoFinal())

const p2 = new Produto('Geladeira', 3500, 0.15)
console.log(p2.nome, p2.precoFinal())