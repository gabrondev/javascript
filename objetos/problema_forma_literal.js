const data1 = {
    dia: 7,
    mes: 11,
    ano: 2026,
    formatar: function (){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data2 = {
    dia: 3,
    mes: 3,
    ano: 2023,
    formatar: function (){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data3 = {
    dia: 24,
    mes: 12,
    ano: 2025,
    exibir: function (){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.exibir())