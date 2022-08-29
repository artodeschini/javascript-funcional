
function ordenar(array) {
    return [...array].sort((a, b) => a - b)
}
// Object.freeze faz com que o meu objeto seja imutavel
// nem mesmo o sort irá surgir efeito nem tentar alterar uma posição
const nums = Object.freeze([3, 1, 7, 9, 4, 6])

const numsOrdenados = ordenar(nums)
console.log(nums, numsOrdenados)

const parteNums = nums.slice(1)

console.log(parteNums, nums)