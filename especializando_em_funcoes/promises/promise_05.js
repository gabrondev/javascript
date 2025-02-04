// fetch
const url = 'https://dog.ceo/api/breeds/image/random'

fetch(url)
   .then(resposta => resposta.json())
   .then(dados => console.log(dados))