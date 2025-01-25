// Classe!
// Função Construtora -> Criar Objetos
function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano

    this.formatar = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(1, 1, 2028)
data1.ano = 2025
console.log(data1.formatar())

const data2 = new Data(24, 12, 2026)
console.log(data2.formatar())
console.log(data2.dia)


// 1. Iniciar com letra maiúsucla [Não obrigatório]
// 2. Chamar função com o new Data(...)
// 3. Usar o this para acrescentar atributos e métodos no objeto

// JavaScript => ECMAScript 2015