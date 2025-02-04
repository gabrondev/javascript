function esperarPor(tempo){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve()
        }, tempo)
    })
}

async function executarPromise() {
    esperarPor(2000)
        .then(() => console.log('[Promise] Depois de 2s...'))
        .then(() => esperarPor(3000))
        .then(() => console.log('[Promise] Depois de 3s...'))
        .then(() => esperarPor(1000))
        .then(() => console.log('[Promise] Depois de 1s...'))
}

async function executarAsync() {
    await esperarPor(2000)
    console.log('[Async/Await] Depois de 2s...')

    await esperarPor(3000)
    console.log('[Async/Await] Depois de 3s...')
    
    await esperarPor(1000)
    console.log('[Async/Await] Depois de 1s...')
}

executarPromise()
executarAsync()