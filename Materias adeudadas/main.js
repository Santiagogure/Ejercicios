const nombre = document.getElementById("fullname")
const mail = document.getElementById("email")
const materias = document.getElementById("materia")
const boton  = document.getElementById("btn-enviar")
const resultado = document.querySelector('.resultado')

boton.addEventListener("click", (e)=>{
  e.preventDefault()
  let error = validarCampos();
  if (error[0]) {
    resultado.innerHTML = error[1]
    resultado.classList.add("red")
  } else {
    resultado.innerHTML = "Solicitud enviada correctamente"
    resultado.classList.add("green")
    resultado.classList.remove("red")
  }
})

const validarCampos = ()=> {
  let error = [];
  if (fullname.value.length < 5 || fullname.value.length > 40 ) {
    error[0] = true;
    error[1] = "Algunos de los datos es erroneo"
    return error
  } else if(mail.value.length < 5 ||
            mail.value.length > 40 ||
            mail.value.indexOf("@") == -1 ||
            mail.value.indexOf(".") == -1) {
          error[0] = true;
          error[1] = "El mail es invalido"
          return error
  } else if(materias.value < 4 || materias.value > 40){
    error[0] = true;
    error[1] = "El mail es invalido"
    return error;
  }

  error[0] = false
  return error
}