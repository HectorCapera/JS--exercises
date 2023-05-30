/*
Enunciado Ejercicio 10:
Crea una función que reciba un DNI (8 números) y calcule la letra del DNI

Es un proceso matemático facil que se basa en obtener el 
resto de la división entera del número de DNI y el número 23. 
Y con el resto se obtiene la letra, usandolo como posición o indice
dentro de un array de letras.

Este sería el array de letras:
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Ejemplos:
generarLetraDNI("25439343");  // Resultado: 25439343D

*/

function generarLetraDNI(dni){

    // definir el array de letras para el DNI

    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 
                    'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 
                    'H', 'L', 'C', 'K', 'E', 'T'];

    // Convertir número de DNI a entero 
    dni = parseInt(dni);
    // Comprobar si el DNI es valido 8 dígitos    
    if( dni > 0 && dni < 99999999){

    // Cálculo de la letra del DNI
        let resto = dni % 23;
        console.log("DNI válido");

        let letra = letras [resto];

        return dni + letra; 

    } else{
        return "DNI no válido"
    }
    // Conseguir la letra del array con base al resto
    

    //Devolver el DNI completo 
    
    
}


console.log(generarLetraDNI("25339343"));
