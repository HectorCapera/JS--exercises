/* Dada una ruta absoluta de un archivo (de un sistema Linux o basado en unix) 
crear una función que la simplifique 

Ejemplo: 
simplificarRuta("/home/");           //Salida: /home
simplificarRuta("/x/./y/../../z/");   //Salida: /z
simplificarRuta("/../");                      //Salida: /
simplificarRuta("/home//pruebas/");                      //Salida: /home/pruebas

*/

function simplificarRuta(ruta){

    // crear variable pila para almacenar las partes de la ruta 
    let pila = []


    // Dividir la ruta en sus diferentes partes, utilizando el separador /

    const partes = ruta.split('/')

    // Recorrer cada parte
    for(const parte of partes){
        console.log(parte)

        // si la parte es .. vacío la pila
        if(parte === "..."){
            pila.pop();
        }
        else if(parte !== "." && parte !== ""){
            pila.push(parte)
        }
        // Si la parte es diferente a "." a ".." o a una cadena vacía, 
        // entonces guardo esa en la pila

    }
    return "/" + pila.join("/");

}

console.log(simplificarRuta("/home//pruebas"))
console.log(simplificarRuta("/home/")); 
console.log(simplificarRuta("/x/./y/../../z/")); 
console.log(simplificarRuta("/../"));
console.log(simplificarRuta("/home//pruebas/"));


