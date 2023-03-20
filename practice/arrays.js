var numeros = [2, 3, 11 , 5, 8]

var cumplen = numeros.every((num) => {
    return num < 10
})

console.log(cumplen)