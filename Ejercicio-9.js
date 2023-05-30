/* Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array

Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8

*/




function sumaPares(numero){

    let suma = 0 ;

    // recorrer el array de números
    numero.forEach(numeroActual => {
    
    // en cada iteración comprobar si el número que estoy recorriendo es par

    if(numeroActual % 2 === 0 ){

        suma += numeroActual;
    }
    
});


    // si es par lo sumo

     

    // una vez termine el bucle, devuelvo el resultado
return suma

}


console.log(sumaPares([2, 13, 6, 15]));