
// Mi solución fue con eventos y escuchadores de eventos, y funciones. 

// primerBoton = () => {
//     button1.onclick = message1.innerHTML = "¡Haz hecho clic!";
// }

// const button1 = document.getElementById("myButton");
// const message1 = document.getElementById("messageContainer");

// button1.addEventListener("click", primerBoton);

// const removerPrimerMsj = function (){
//     message1.innerHTML = "";
// }

// const button2 = document.getElementById("myButton2");
// const imagen = document.getElementById("miImagen");
// segundoBoton = () => {
//     button2.onclick = message1.innerHTML = "";
//     imagen.onclick = imagen.src ="png-transparent-responsive-web-design-html-logo-world-wide-web-angle-text-rectangle.png";
    
// }

// myButton2.addEventListener("click", segundoBoton);



// const button3 = document.getElementById("myButton3");
// const getButton = document.getElementById("buttonLoop");
// const createButton = document.createElement("button");


// const newButton = () =>{
//     button3.onclick = createButton.textContent  = "Botón";
//     getButton.appendChild(createButton);
// }

// button3.addEventListener("click", newButton);

// const button4 = document.getElementById("myButton4");



// button4.removeEventListener("click", myButton2);

window.onload=inicio;

function inicio(){
    document.querySelectorAll(".button-style")[0].onclick=accion1;
    document.querySelectorAll(".button-style")[1].onclick=accion2;
    document.querySelectorAll(".button-style")[2].onclick=accion3;
    document.querySelectorAll(".button-style")[3].onclick=accion4;
};
function accion1(){
    document.querySelector(".containerItems").innerHTML="¡Hola mundo!";
}
function accion2(){
    document.querySelector(".containerItems").innerHTML="<img src='./png-transparent-responsive-web-design-html-logo-world-wide-web-angle-text-rectangle.png'>";
}

function accion3(){
    document.querySelector(".containerItems").insertAdjacentHTML("beforeend", "<button >Botón</button>");
}

function accion4(){
    document.querySelector(".containerItems").innerHTML="";
}