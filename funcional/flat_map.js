const letrasAninhadas = [
    ['O', ['l'], 'á'],
    [' '],
    ['m', ['u', ['n']], 'd', 'o'],
    ['!', '!', '!', '!']
]

//aqui o flat remove infinitamente os elementos de matriz tornando só um vetor de uma dimensao
const letras = letrasAninhadas.flat(Infinity)

const resultado = letras
    .flatMap(l => [l, ','])
    .reduce((a, b) => a + b)

console.log(resultado)