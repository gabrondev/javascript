// Uma função async sempre vai retornar uma PROMISE!!!
async function obterVersiculo(livro, cap, versiculo) {
    const url = `https://bible-api.com/${livro} ${cap}:${versiculo}`

    const resposta = await fetch(url)
    const dados = await resposta.json()
    return dados.verses[0].text
}

async function executar() {
    const texto = await obterVersiculo('luke', 1, 1)
    console.log(texto)
}

executar()

// https://bible-api.com/john 3:16

// function obterVersiculo(livro, cap, versiculo) {
//     const url = `https://bible-api.com/${livro} ${cap}:${versiculo}`
//     return fetch(url)
//     .then(resposta => resposta.json())
//     .then(dados => dados.verses[0])
//     .then(versiculo => versiculo.text)
// }

// obterVersiculo('john', 3, 16)
//     .then(texto => console.log(texto))

