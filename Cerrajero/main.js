const contenedor = document.querySelector(".flex-container")  
let boton = document.querySelector('.send-button')
let valorantiguo = boton.value
boton.value = valorantiguo.toUpperCase();


function crearLlave(nombre, modelo, precio) {
    img = "<img class='llave-img' src= llave.png>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`         // Creamos lo que nos va a devolver y su forma
    return [img, nombre, modelo, precio];               //
}

let documentFragment = document.createDocumentFragment(); //Creamos un fragmento para despues en el ciclo poder trabajar con el html y no con el div

for (var i = 1; i <= 20; i++) {  //Creamos un ciclo for para obtener 20 modelos.
    let modeloRandom = Math.round(Math.random()* 10000) //Generamos los numeros aleatorios 
    let precioRandom = Math.round(Math.random()* 10+30)
    let llave  = crearLlave(`llave ${i}`, `modeloRandom ${modeloRandom}`, precioRandom) //Aca retornamos los valores generados, y los visualizamos en la pantalla al hacer que llave = crearLlave()
    let div = document.createElement("DIV"); 
    div.addEventListener('click', () =>{document.querySelector(".key-data").value = modeloRandom}) // Esto es unicamente para que en nuestro input invisible se registre la clase que seleccionamos. 
    div.tabIndex = i; //Esto funciona para que cuando hagamos clic en el elemento, este pueda ser focuseable
    div.classList.add(`item-${i}`, 'flex-item'); //Le agregamos las clases al div para despues trabajar en CSS
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3] // Debemos escribirlo asi porque si no no lo va a retornar por su condicion de array. 
    documentFragment.appendChild(div); 
}

contenedor.appendChild(documentFragment) //Repasar como funciona el appendChild


    
