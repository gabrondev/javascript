function exibirNoConsole(funcao){
    if(typeof funcao === 'function'){
        const resultado = funcao()
        console.log(`O resultado é ${resultado}`)
    }
}

function bomDia(){
    return 'Bom dia'
}

// Para passar uma função como parâmetro para outra função,
// não se pode invocá-la, apenas passar seu nome:
exibirNoConsole(bomDia)

exibirNoConsole(2)
exibirNoConsole('Boa tarde')