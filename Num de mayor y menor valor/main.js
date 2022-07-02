// //Asi encontramos la palabra mas larga de un array haciendo un bucle for

function palabra(str) {
    let words = str.split(" ")
    let miPalabraMasLarga = "";
    for(let word of words) {
    if (word.length > miPalabraMasLarga.length) {
        miPalabraMasLarga = word
    }
}
return miPalabraMasLarga;   
}
console.log(palabra("Ayer me fui a comer con mi hermano")) 


//Como encontrar el menor y mayor numero de un Array:

function mayorMenor(arr){
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return [min, max]
}
console.log(mayorMenor([20, 4, 5, 30, 2, 100, 1]))


//Aca hay una forma mas complicada pero que sirve para entender la logica
function minMax(arr) {
   let min = arr[0]
   let max = arr[0]
   for(let i = 0; i < arr.length; i++){
    if (min > arr[i]) {
        min = arr[i]
    }
    if (max < arr[i]) {
        max = arr[i]
    }
   } 
   return[min, max]
}

console.log(minMax([20, 4, 5, 30, 2])) //Nos retorna 2 y 30

/*La logica de lo que esta sucediendo mientras recorre el array es algo asi
Min:
 20 > 4   True //Como aca 20 es mayor que 4, lo remplazamos por 4
 4 > 5    False
 4 > 30   False
 4 > 2    True//Como aca 4 es mayor que dos, lo remplazamos por dos
 2        False
 
 Max: 
 20 < 4   False
 20 < 5   False
 20 < 30  True
 30 < 2   False
  
*/


