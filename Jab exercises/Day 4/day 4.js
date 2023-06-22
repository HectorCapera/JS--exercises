window.onload = inicio;


// Variables globales del random 
let min = 1;
let max = 10;

// función random 
function random1() {
    let randomNumber = Math.floor(Math.random() * (max - min + 1 )) + min;
    return randomNumber;
    }

// input del value del usuario 
function inputUsuario(){
    let inputElement3 = Number(document.getElementById("random3").value);
    document.getElementById("random3").focus();
    return inputElement3
}

    
// atrapa el value random de los dos primeros inputs y los suma, además comprueba si el valor del tercer input es igual a la suma de los dos primeros inputs
function inicio () {
    let input1 = random1();
    let input2 = random1();
    

    let inputElement1 = document.getElementById("random1");
    inputElement1.value = input1;

    let inputElement2 = document.getElementById("random2");
    inputElement2.value = input2;

    let suma = input1 + input2;


    
    console.log("input1:", input1);
    console.log("input2:", input2);
    



    function comprobar() {
    let valorInput = inputUsuario();
        

    if (suma == valorInput) {
        document.getElementById("resultado").innerHTML="Es correcto";
        resultado.style.color = "green";
    } else {
        document.getElementById("resultado").innerHTML=`Es incorrecto, la suma de ${input1} + ${input2} es = ${suma}`;
        resultado.style.color = "red";
    }

}
    
    document.getElementById("button").onclick = comprobar

}

