const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise é bem legal!')
})

promise.then(console.log)

// é como uma Promise porém posso chamar quantos dados eu queira chamando next
const obs = new Observable(subscriber => {
    subscriber.next('Observer')
    subscriber.next('é')
    subscriber.next('bem')
    setTimeout(() => {
        subscriber.next('legal!')
        // enverra o subscriber e identifica que nao ira gera mais nenhum valor
        subscriber.complete()
    }, 1000)
})

obs.subscribe(console.log)
obs.subscribe(texto => console.log(texto.toUpperCase()))