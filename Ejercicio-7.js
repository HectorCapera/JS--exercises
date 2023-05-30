/* Enunciado Ejercicio 7:
Dada un array de enteros, detectar si esa lista
de números es una permutación del 1 al ultimo número del array.

En este caso una permutación es una secuencia de números
en orden sin que falte ninguno entre ellos.

Devolver el número faltante más grande.

El array puede venir desordenado.

Ejemplos:
permutacion([1, 2, 3, 4, 5])   // Devuelve: 5
permutacion([1, 2, 3, 5]))     // Devuelve: 4

*/

function permutacion(numeros){
    // ordenar el array de numeros
    numeros.sort((menor, mayor)=> menor - mayor );
    
    // Pila de números faltantes 

    let numerosFaltantes = [];

    // Recorrer el array, para comprobar si cada elemento es igual al siguiente más uno
    for(let i = 0; i < numeros.length; i++){

        let numeroFalta = numeros [i] + 1;

        console.log(numeros[i], i + 1)
        if(numeros [i + 1] !== numeroFalta){
            numerosFaltantes.push(numeroFalta)
        }
    }

    numerosFaltantes.pop();
    // Si todo es correcto devolver el último número

    let resultado = numeros[numeros.length -1];
    if(numerosFaltantes.length >= 1){
        resultado = numerosFaltantes[numerosFaltantes.length - 1]
    }
    
    return resultado ;
}

console.log("El numero más grande que falta es:",permutacion([1,2,3,4,5,6]))