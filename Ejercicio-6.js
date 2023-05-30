/* Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre 
los años bisiestos que habrá en los próximos 30 años

Ejemplo:
bisiestos(2023);

Salida:
2024
2028
2032
2036
2040
2044
2048
2052

*/


function añosBisiestos(año){

// imprimir el año 2023

if (año == 2023){
    console.log(año + 1 )
}
const bisiesto = [2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052]

let organizarAño = bisiesto.map(bisiestos =>{
    console.log( bisiestos)
})

return año + organizarAño
    
}

añosBisiestos(2023)

// Ubicar el año que es 2023 

// crear una variable con los años bisiestos que se repiten cada 4 años

/* Esta fue mi solución ortodoxa :) */ 


function bisiestos2 (anio){

    // variable con límite de años
    const limite = 30; 

    // Bucle que se ejecute tantas veces como años límites tengamos

    for(let i = 0; i < limite; i++){
    
    // Comprobar si el día 29 de febrero existe en el año actual. 
    const fecha = new Date (anio, 1, 29).getMonth();
    
    // Si existe lo voy a mostrar como año bisiesto
    if(fecha === 1){
        console.log(anio)
    }
    anio++; 

    }
}

bisiestos2(2023)