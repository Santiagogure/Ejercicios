
function sumarTipo(arr){
    let tipos = {}
         for(let i = 0; i < arr.length; i++){
             tipos[arr[i]] ? tipos[arr[i]]++ : tipos[arr[i]]=1
        }
       return tipos
     }

console.log(sumarTipo("auto", "moto", "auto", "auto"))




