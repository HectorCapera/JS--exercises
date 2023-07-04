window.onload = inicio;

function inicio() {
  document.querySelector(".boton").addEventListener("click", imagen1());
  document.querySelector(".boton").addEventListener("click", intercambio);
}

function imagen1() {
  let imagen = document.querySelector(".boton");
  document.querySelector(".precio").innerHTML = "3€";
  document.querySelector(".descripcion").innerHTML = "Café de Colombia";
  document.querySelector("img").src = "https://www.html6.es/img/cafe1.png";

  imagen.classList.add("boton_inicial");
}

function imagen2() {
  document.querySelector(".precio").innerHTML = "7€";
  document.querySelector(".descripcion").innerHTML = "Café para llevar";
  document.querySelector("img").src = "https://www.html6.es/img/cafe2.png";
  let imagen2 = document.querySelector(".boton");

  imagen2.classList.add("boton_primerClic");
}

function imagen3() {
  const precio = document.querySelector(".precio");
  const descripcion = document.querySelector(".descripcion");
  const boton = document.querySelector(".boton");

  precio.innerHTML = "10€";
  descripcion.innerHTML = "Café para llevar con cupcake";
  boton.classList.add("boton_segundoClic");



  
}

let veces = 0;
function intercambio() {
  veces++;
  let imagen = document.querySelector(".boton");

  if (veces == 1) {
    imagen2();

    imagen.classList.add("boton_primerClic");
  } else if (veces == 2) {
    imagen3();

    imagen.classList.remove("boton_primerClic");
    imagen.classList.add("boton_segundoClic");
  } else if (imagen.classList.contains("boton_segundoClic")) {
    imagen.classList.remove("boton_segundoClic");
    imagen.classList.add("boton_inicial");
    
    imagen1();
    veces = 0;
  }
}
