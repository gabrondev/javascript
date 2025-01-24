// Objeto: Aluno
// Atributos: nome, disciplinas (nome, 3 notas)
// Método: media(disciplina), mediaGlobal

const aluno = {
    nome: "Gabriel",
    disciplinas: [
        { nome: "Matemática", notas: [8, 7, 9] },
        { nome: "Física", notas: [8, 9, 10] },
        { nome: "Química", notas: [6, 8, 9] }
    ],
    media: function (nomeDisciplina){
        let somaNotas = 0
        let indiceDisciplina = 0
        
        for (let disciplina in this.disciplinas){
            if (this.disciplinas[disciplina].nome == nomeDisciplina){
                indiceDisciplina = disciplina
            }
        }

        for (let nota of this.disciplinas[indiceDisciplina].notas){
            somaNotas += nota
        }

        return Math.round(somaNotas / this.disciplinas[indiceDisciplina].notas.length)
    },
    mediaGlobal: function (){
        let somaMedias = 0
        let qtdeDisciplinas = 0

        for (let disciplina in this.disciplinas) {
            qtdeDisciplinas += 1
            somaMedias += this.media(this.disciplinas[disciplina].nome)
        }

        return Math.round(somaMedias / qtdeDisciplinas)
    }
}

let nomeAluno = aluno.nome

console.log(`Avaliação do aluno ${nomeAluno}...`)
console.log(`A média do ${nomeAluno} em matemática é ${aluno.media("Matemática")}`)
console.log(`A média do ${nomeAluno} em física é ${aluno.media("Física")}`)
console.log(`A média do ${nomeAluno} em química é ${aluno.media("Química")}`)
console.log(`A média global do ${nomeAluno} é ${aluno.mediaGlobal()}`)