const data = {
    dia: 7,
    mes: 11,
    ano: 2026,
    dataFormatada: function (){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

data.dia = 9
data.mes = 12

console.log(data.dataFormatada())