
//Asi se suman numeros impares:
const impares = ([1, 3, 7, 2, 4, 6, 8])

const perde =  impares.reduce((a, c) =>(c % 2 !== 0 ? a + c : a), 0)

console.log(perde)  



//Hacer que devuelva true a los impares:
 function esImpar(numero) {
    if (numero%2===0) {
        return false
    } else{
        return true
    }
 }

 console.log(esImpar(5)) //Devuelve true porque es impar


