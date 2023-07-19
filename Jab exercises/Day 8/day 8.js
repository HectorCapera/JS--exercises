// 1. la función contador de la moneda debe tener un length de los div de moneda que se realicen
// 2. establecer el focus en el input
// 3. leer el contenido del input a través de value
// 4. establecer un math.random para que arroje un número de entre el 2 y el 9
// 5. Crea un condicional que; se crea tantas div como el número descrito por el usuario
// en cada caja se muestra un n° aleatorio entre como máximo el n° descrito por el usuario
// 6. si el n° aleatorio coincide con el n° descrito por el usuario, se suma una moneda.
// 7. si no hay ninguna coincidencia, se restan tantas monedas como el n° descrito por el usuario.
// 8. si el usuario debe saldo se muestra como número negativo hasta que vuelva a tener saldo.
// 9. las coincidencias se muestran de color verde y un mensaje de cuantas coincidencias y el n° de monedas que ganó.

// window.onload = inicio;

// let urlDeLaMoneda = "https://www.html6.es/img/moneda.png";
// let monedasIniciales = 5;
// let max = 9;
// let min = 2;
// const boton = document.querySelector(".boton");
// const input = document.getElementById("campo");

// let conteoMonedas = 0; // Variable para almacenar el conteo de monedas

// function inicio() {
//   conteoMonedas = monedasIniciales; // Establecer el conteo de monedas al valor inicial

//   for (let i = 1; i <= monedasIniciales; i++) {
//     document
//       .querySelector(".monedas")
//       .insertAdjacentHTML("beforeend", `<img src="${urlDeLaMoneda}">`);
//     // No aumentar el conteo de monedas aquí, ya que ya lo hicimos en la inicialización
//   }

//   document.querySelector(
//     ".contadorMoneda"
//   ).innerHTML = `Monedas: ${conteoMonedas}`;

//   input.focus();
// }

// function generarNumeros() {
//   let numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
//   console.log("numeroAleatorio:", numeroAleatorio);
// }
// // acá se generan los cuadros dependiendo del número del input y plasmar los números aleatorios

// function crearDivs() {
//   let cantidad = Number(input.value);

//   if (cantidad >= 2 && cantidad <= 9) {
//     let contenedor = document.querySelector(".contenido");
//     contenedor.innerHTML = ""; // Borrar divs anteriores

//     let cuadrosVerdes = 0;
//     let cuadrosRojos = 0;

//     for (let i = 0; i < cantidad; i++) {
//       let numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
//       let color = numeroAleatorio === cantidad ? "verde" : "rojo";
//       let div = document.createElement("div");
//       div.classList.add("cuadro", color);
//       contenedor.appendChild(div);

//       div.textContent = numeroAleatorio;

//       if (color === "verde") {
//         cuadrosVerdes++;
//       } else {
//         cuadrosRojos++;
//       }
//     }

//     input.value = ""; // Borrar contenido del input
//     input.focus(); // Establecer foco en el input

//     conteoMonedas += cuadrosVerdes - cuadrosRojos; // Actualizar el conteo de monedas global
//     document.querySelector(
//       ".contadorMoneda"
//     ).innerHTML = `Monedas: ${conteoMonedas}`;
//   } else {
//     input.value = ""; // Borrar contenido del input
//     input.focus(); // Establecer foco en el input
//   }
// }

// boton.addEventListener("click", function () {
//   crearDivs();
// });

window.onload = inicio;
let valor;
let monedas = 5;
let coincidencia = 0;
function inicio() {
  document.querySelector(".boton").onclick = empezar;
  dibujarMonedas();
  vaciar();
}
function empezar() {
  coincidencia = 0;
  valor = document.querySelector("#campo").value;
  if (valor >= 2 && valor <= 9) {
    crearCuadros();
  } else {
    vaciar();
  }
}

function crearCuadros() {
  document.querySelector(".contenido").innerHTML = "";
  for (let k = 0; k < valor; k++) {
    let azar = Math.ceil(Math.random() * valor);
    let estilo = comprobar(azar);
    document
      .querySelector(".contenido")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="cuadro ${estilo}">${azar}</div>`
      );
  }
  if (coincidencia > 1) {
    var mensaje = `Se han producido ${coincidencia} coincidencias 
    y has ganado ${coincidencia} monedas`;
    monedas += coincidencia;
  } else if (coincidencia === 1) {
    var mensaje = `Se han producido ${coincidencia} coincidencia 
    y has ganado ${coincidencia} moneda`;
    monedas += coincidencia;
  } else {
    var mensaje = `no se ha producido ninguna coincidencia 
    y has perdido ${valor} monedas`;
    monedas -= valor;
  }
  document.querySelector(".informacion").innerHTML = mensaje;
  dibujarMonedas();
  vaciar();
}
function comprobar(azar) {
  if (azar == valor) {
    coincidencia++;
    return "verde";
  } else {
    return "rojo";
  }
}

function dibujarMonedas() {
  let m = document.querySelector(".monedas");
  m.innerHTML = `<div>Monedas: <span class="grande"> ${monedas} </span></div>`;
  for (let k = 0; k < monedas; k++) {
    m.insertAdjacentHTML(
      "beforeend",
      `<img src="https://www.html6.es/img/moneda.png">`
    );
  }
}
function vaciar() {
  document.querySelector("#campo").value = "";
  document.querySelector("#campo").focus();
}
