// Funcion generadora de numeros pares

 function* general() {  //Como es una funcion generadora es Obligatorio el *
    let indice = 0;
    while (true) {
        indice+=2;
        if (indice === 16) {
            return indice
        }
        yield indice
    }
}

const gen = general()   /*Gen es automaticamente un objeto generator, 
//  super importante para despues podes retornar el valor en el console*/

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

