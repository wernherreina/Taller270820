/* taller 27-08-20 */
const mensajeNombre = document.getElementById('mensajeAlertaNombre')
console.log(mensajeNombre)

const mensajeAlertaTyC = document.getElementById('mensajeAlertaTyC')
console.log(mensajeAlertaTyC)

function validarFormulario(e){
    e.preventDefault()
    let inputName = document.getElementById('name').value
    console.log(inputName)
    const inputTyC = document.getElementById('inputTyC')
    console.log(inputTyC)
    if(inputName == ''){
    mensajeNombre.innerText = "Por favor llena el campo Nombre"
    //inputName.classlist.add(BgcAlert)
    swal("Error!", "Falta el campo Nombre!", "error");
  
    }
    if(inputTyC.checked ==false){
        mensajeAlertaTyC.innerText = 'Debes Aceptar Terminos'
        swal("Error!", "Falta Aceptar terminos!", "error");
        
    }

    if(inputName != "" && inputTyC.checked) {
        swal("Muy Bien!", "Registro Exitoso!", "Success");
        setTimeout(()=>{window.location = './assests/pages/calc.html'},2000)
    }

    
}
