/* Ejercicio 3 
Dadas dos fechas, crea una función que me proporcione la diferencia de días entre ellas

Ejemplo: 
diferenciaDeDias("Dec 1, 2023", "Dec 24, 2023" ); // salida 23 

*/

const fecha = new Date()

// encontrar la formula de la fecha "Date" 

console.log(fecha)



function diferenciaDeDias(fecha1, fecha2){

    //Dar el formato correcto a las fechas

    fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1)
    fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2)

    // Obtener los milisegundos entre las dos fechas 
    const diferenciaEnMilisegundos = Math.abs(fecha1.getTime() - fecha2.getTime())
    // se utiliza el método Math.abs para cambiarlo a un número absoluto positivo, pues inicialmente da negativo

    //Dividir la diferencia en milisegundos entre el número de milisegundos 
    //Que tiene un día y redondear para sacar los días

    const dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

    if(isNaN(dias)){
        return "Formato de fecha incorrecta, usa el formato adecuado"
    }

    // el return permite conocer el estado de la función, es importante testearla
    return "la diferencia son" + dias + "días";
}

console.log(diferenciaDeDias("Dec 1, 2023", "Dec 24, 2023"))