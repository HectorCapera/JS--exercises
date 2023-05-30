/* Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano

Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV

*/

function enteroARomano(numero){

const numeroDecimal = numero
    // variable para guardar string final

let resultado = "";

    // listado de número romanos

const caracteresRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    // el equivalente en números decimales
const valoresDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    // Bucle para recorrer números decimales
for (let i = 0; i < valoresDecimales.length; i++){
    // console.log(valoresDecimales[i], caracteresRomanos[i])

        

        // Bucle para iterar mientras el número sea mayor 
        // o igual al número decimal que estoy recorriendo
        while(numero >= valoresDecimales[i]){


        // añadir el carácter romano al resultado
        resultado += caracteresRomanos [i]

        numero -= valoresDecimales[i]

          // Actualizar número para restar el valor decimal
        // que se ha agregado al resultado de números romanos
    }
}


    // devolver resultado
    return "el número decimal que ingresaste  fue: " + numeroDecimal + " Y en romano es: " + resultado
}

console.log(enteroARomano(123))