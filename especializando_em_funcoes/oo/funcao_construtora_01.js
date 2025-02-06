// Molde - Função construtora
function Data(dia, mes, ano) {
    // Atributos públicos
    this.dia = dia
    this.mes = mes
    this.ano = ano
}

const d1 = new Data(1, 1, 2023) // obj ou instância #1
const d2 = new Data(1, 2, 2024) // obj ou instância #2

console.log(typeof d1, d1)
console.log(typeof d2, d2)

console.log(`${d1.dia}/${d1.mes}/${d1.ano}`)

d1.mes = 6
d1.ano = 2025

console.log(`${d2.dia}/${d2.mes}/${d2.ano}`)