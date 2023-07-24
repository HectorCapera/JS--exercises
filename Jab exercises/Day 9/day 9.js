// /*
// 1. Recuperar el value del input -
// 2. Crear un array vacío
// 3. Añadir el value del input al array
// 4. Mostrar el array en la pantalla
// 5. Borrar el contenido del input
// 6. Establecer el foco en el input
// 7. La primer letra del array debe ser en mayúscula
// 8. El nombre no se puede volver a utilizar si ya está plasmado en el dom
// 9. En el array se añaden los nombres, si ya están repetidos no se añaden.
// */

const miArray = [];
function agregarValor() {
  const valorInput = document.getElementById("campo").value;
  const valorCapitalizado = capitalizarPrimeraLetra(valorInput);

  if (miArray.includes(valorCapitalizado)) {
    alert("El nombre ya existe en el array");
  } else {
    // Agregar el valor al array
    miArray.push(valorCapitalizado);

    console.log(miArray);

    mostrarDivsArray();
  }

  // Vaciar el contenido del input y enfocar nuevamente
  vaciar();
}
function mostrarDivsArray() {
  const divsContenedor = document.querySelector(".nombre_rey");

  // Vaciar el contenido del contenedor antes de mostrar los divs actualizados
  divsContenedor.innerHTML = "";

  // Crear y agregar cada div al contenedor
  miArray.forEach((valor) => {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = valor;
    divsContenedor.appendChild(nuevoDiv);
  });
}

function vaciar() {
  document.getElementById("campo").value = "";
  document.getElementById("campo").focus();
}

function capitalizarPrimeraLetra(cadena) {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
}

function validarArray() {
  const valorInput = document.getElementById("campo").value;
  if (miArray.includes(valorInput) === true) {
    alert("El nombre ya existe en el array");
  } else {
    console.log("no funciona");
  }
}
