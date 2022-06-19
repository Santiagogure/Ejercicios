 const materiasHTML = document.querySelector(".materias")

const materias = [
    {
        nombre: "Calculo 3",
        nota:  7
    }, {
        nombre: "Fisica 5",
        nota:  5
    },{
        nombre: "Algoritmos",
        nota:  6
    }, {
        nombre: "Matematica",
        nota:  9
    },  {
        nombre: "Historia",
        nota:  3
    },{   
        nombre: "Literatura",
        nota:  4
    }
];

const obtenerMateria =  (id) => {
    return new Promise((resolve, reject) => {
        materia = materias[id]
        if (materia == undefined) reject("No se encontro la materia")
        // else setTimeout(resolve(materia), Math.random()*400);   De esta forma no se ejecuta el setTimeout
        else setTimeout(() => resolve(materia), Math.random()*100) //Pero de esta forma me mostraria siempre la misma materia
    })
}

const devolverMaterias = async () => {
 let materia = []
 for (var i = 0; i < materias.length; i++) {
   // materia[i] = obtenerMateria(i); Aca es donde esta el problema y el por que nos muestra siempre la misma
    materia[i] =  await obtenerMateria(i) //Aca esta la solucion, hay que usar await
    let newHtmlCode = ` 
    <div class="materia">
    <div class="nombre">${materia[i].nombre}</div>
    <div class="nota">${materia[i].nota}</div>
</div>`;
materiasHTML.innerHTML += newHtmlCode
    
 }
}

devolverMaterias()
