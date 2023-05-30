/*
Enunciado Ejercicio 11:
Crea una función a la cual le pase un array de numeros
y un numero que será el resultado de la suma de dos de los valores

Ejemplos:
sumarDos([3, 7, 8, 2], 10) // [3, 7] (ambos suman 10)
sumarDos([4, 5, 9, 1], 10) // [9, 1]
sumarDos([1, 2, 3, 4], 5) // [2, 3]

*/

function sumarDos(numeros, resultado){

for (let i = 0 ; i < numeros.length; i++){


    // calculo para sacar el segundo número para devolver 
    let primerNumero = numeros[i];
    let segundoNumero = resultado - numeros[i];

    /* comprobar si existe un segundo número en el array que 
    sumado al primero de el resultado */

    if (numeros.includes(segundoNumero) && segundoNumero !== numeros[i]){

        return [primerNumero, segundoNumero];
    }
}


}

console.log(sumarDos([4, 5, 9, 1], 10)); 