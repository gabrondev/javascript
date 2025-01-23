const nome = ['Ana', 'Bia', 'Carlos', 'Daniel', 'Rafael']

function paraCadaElemento(elemento, indice, array){
    console.log(elemento, indice, array)
}

nome.forEach(paraCadaElemento)

nome.forEach(function (elemento, indice, array){
    console.log(elemento, indice, array)
})