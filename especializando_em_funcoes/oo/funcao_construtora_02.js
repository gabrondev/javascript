// Molde - Função construtora
function Data(dia, mes, ano) {
    // Atributos públicos
    this.dia = dia
    this.mes = mes
    this.ano = ano

    // Método de instância público (Comoportamento)
    this.exibir = function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(1, 1, 2023) // obj ou instância #1
const d2 = new Data(1, 2, 2024) // obj ou instância #2

console.log(d1.exibir())
console.log(d2.exibir())
