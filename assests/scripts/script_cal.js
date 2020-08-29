/* Calculadora 26/08/20 BICTIA */



function sumar (){
    const inputNum1 = parseFloat(document.getElementById('num1').value)
    console.log(inputNum1)
    console.log(typeof inputNum1)
    
    const inputNum2 = parseFloat(document.getElementById('num2').value)
    console.log(inputNum2)
    console.log(typeof inputNum2)

    let resultado = inputNum1 + inputNum2
    console.log(resultado)

    document.getElementById("resultado").innerHTML = resultado;
}

function restar (){
    const inputNum1 = parseFloat(document.getElementById('num1').value)
    console.log(inputNum1)
    console.log(typeof inputNum1)
    
    const inputNum2 = parseFloat(document.getElementById('num2').value)
    console.log(inputNum2)
    console.log(typeof inputNum2)

    let resultado = inputNum1 - inputNum2
    console.log(resultado)

    document.getElementById("resultado").innerHTML = resultado;
}


function multiplicar (){
    const inputNum1 = parseFloat(document.getElementById('num1').value)
    console.log(inputNum1)
    console.log(typeof inputNum1)
    
    const inputNum2 = parseFloat(document.getElementById('num2').value)
    console.log(inputNum2)
    console.log(typeof inputNum2)

    let resultado = inputNum1 * inputNum2
    console.log(resultado)

    document.getElementById("resultado").innerHTML = resultado;

}

function dividir (){
    const inputNum1 = parseFloat(document.getElementById('num1').value)
    console.log(inputNum1)
    console.log(typeof inputNum1)
    
    const inputNum2 = parseFloat(document.getElementById('num2').value)
    console.log(inputNum2)
    console.log(typeof inputNum2)

    let resultado = inputNum1 / inputNum2
    console.log(resultado)

    document.getElementById("resultado").innerHTML = resultado;
}

function igual (){
    swal("En Construcción, hace parte de la Versión 2!");

}