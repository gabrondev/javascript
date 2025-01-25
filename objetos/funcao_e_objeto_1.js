function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        formatar: function (){
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

const data1 = criarData(7, 11, 2026)
const data2 = criarData(3, 3, 2026)
const data3 = criarData(24, 12, 2025)

console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.formatar())