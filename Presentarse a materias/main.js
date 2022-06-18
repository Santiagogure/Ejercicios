let alumnos = [{                 //Creamos una lista de objetos 
  nombre: "Santiago Gurevich", 
  email: "Gurevichyo@gmail.com",
  materia: "Fisica"
}, {
  nombre: "Pedro",
  email: "Pedroyo@gmail.com",
  materia: "Matematica"
},{
  nombre: "Jorge",
  email: "Jorgeyo@gmail.com",
  materia: "Gimnasia"
},{
  nombre: "Lisandro Martinez",
  email: "Lisayo@gmail.com",
  materia: "Literatura"
},{
  nombre: "Ruben Hugo",
  email: "Gurevichyo@gmail.com",
  materia: "Arte"
},];

const boton = document.querySelector('.boton-confirmar')
const contenedor = document.querySelector('.grid-container') 

for(alumno in alumnos) {
  let datos = alumnos[alumno]
  let nombre = datos["nombre"]
  let email = datos["email"]
  let materia = datos["materia"]
  // Escribimos el html en el js para poder aplicar template strings y que cada uno tenga sus propiedades
  let htmlCode = `   <div class="grid-item nombre">${nombre}</div>  
  <div class="grid-item email">${email}</div>
  <div class="grid-item materia">${materia}</div>
  <div class="grid-item semana">
  <select class="semana-elegida">
    <option value="1">Semana 1</option>
    <option value="2">Semana 2</option>
  </select>
</div>` 
 contenedor.innerHTML+= htmlCode
}    

boton.addEventListener("click", ()=> {
  let confirmar = confirm("¿Quieres confirmar las clases?") // Pedir la confirmacion
  if (confirmar) {
   document.body.removeChild(boton) //Removemos el boton
   let elementos = document.querySelectorAll(".semana")
  let semanasElegidas = document.querySelectorAll(".semana-elegida")
  for (elemento in elementos){
    semana = elementos[elemento];
    semana.innerHTML = semanasElegidas[elemento].value // Definimos las semanas
  }
  }
})