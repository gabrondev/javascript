const calcularMediaAluno = function (aluno){
    let atributosAluno = Object.values(aluno)
    let notas = []
    let somaNotas = 0
    let mediaAluno = 0

    const pegarNotas = atributo => typeof atributo === 'number' ? notas.push(atributo) : 0
    const somarNotas = nota => somaNotas += nota

    atributosAluno.map(pegarNotas)
    notas.map(somarNotas)
    mediaAluno = Math.round(somaNotas / notas.length)

    return {nome: aluno.nome, media: mediaAluno}
}

const alunos = [
    {nome: "Taber Hampe", n1:6.4, n2:9.7, n3:8.6, n4:2.2}, 
    {nome: "Gar Cobelli", n1:6.6, n2:3.3, n3:8.5, n4:2.9}, 
    {nome: "Conrade Joiner", n1:5.7, n2:4.4, n3:7.1, n4:5.6},
    {nome: "Chuck Burris", n1:2.8, n2:5.0, n3:0.5, n4:0.9},
    {nome: "Charmian Barrell", n1:5.8, n2:3.8, n3:7.9, n4:7.0}, 
    {nome: "Lilah Scotson", n1:4.8, n2:6.1, n3:0.6,n4:7.6}
]

const mediasAlunos = alunos.map(calcularMediaAluno)
console.log(mediasAlunos)