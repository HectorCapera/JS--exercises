window.onload = inicio;


const nombreCorrecto = "HECTOR"


function inicio() {
document.querySelectorAll(".button1")[0].onclick = button1;

}



function button1() {
    let input =  (document.getElementById("input").value);
    let nombreMayus = input.toUpperCase();
    let nombreFormateado = input.substr(0,1).toUpperCase() + input.substr(1).toLowerCase();
    
    if ( nombreMayus == nombreCorrecto){
        document.querySelector(".saludo").innerHTML = `Hola ${nombreFormateado}! <button id="boton">
        Ir a la web </button>`;
        document.querySelector("#boton").onclick = acceder;
    }else {
        document.querySelector(".saludo").innerHTML = "";
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
    }
}
function acceder(){
    location.href ="https://www.google.com/"
}


// function capitalize (){
//     const input =  document.getElementById("input").value;
//     const inputCapitalized = input.charAt(0).toUpperCase() + input.slice(1);
//     document.getElementById("input").value = inputCapitalized;
// }
