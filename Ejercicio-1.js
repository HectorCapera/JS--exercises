/* Dado un array de super heroes de Marvel, haz un programa que pueda mostrar la información del superhéroe 
Añade la capacidad de buscar la información de varios superhéroes a la vez

Ejemplo: 
mostrarInformacionSuperheroe ('Iron Man');

Salida: 
Nombre real : Tony Stark
Poderes : Tecnología avanzada, Movilidad Aérea 
Equipo : Los vengadores

Ejemplo 2: 
mostrarInformacionSuperheroes([Array de nombres]);

Salida: 
Muestra la información de todos los superheroes 

*/


const infoSuperHeroe = {
    'Iron man': {
        nombre: "Tony Stark",
        poderes: ["Tecnología avanzada", "Movilidad Aérea"],
        equipo: "Los vengadores"
    },
    'Spider Man': {
        nombreReal: "Peter Parker",
        poderes: ["Telaraña", "Sentido Arácnido"],
        equipo: "Los vengadores"
    },
    'Capitan America': {
        nombreReal: "Steve Rogers",
        poderes: ["Super fuerza", "Regeneración acelerada"],
        equipo: "Los vengadores"
    },
    'Scarlet Witch': {
        nombreReal: "Wanda Maximoff",
        poderes: ["Telequinesis", "Volar"],
        equipo: "Los vengadores"
    },
    'Black Panther': {
        nombreReal: "T Challa",
        poderes: ["Fuerza sobrehumana", "Agilidad"],
        equipo: "Los vengadores"
    }
    
}

const infoHeroe = (aka =>{

    // acá se verifica que el la información esté dentro de las variables 
    if (aka in infoSuperHeroe){
        
    // se efectúa el mensaje de la consola a través de la constante informacion que toma como base los datos insertados de infoSuperHeroe con los datos de [aka] 
    // porque puede contener espacios o puntos 
        const informacion = infoSuperHeroe[aka]
        console.log(`Nombre Real: ${informacion.nombreReal}`);
        console.log(`Poderes: ${informacion.poderes.join(", ")}`);
        console.log(`Equipo: ${informacion.equipo}`);

    }else{
        console.log( `No se encuentra en la base de datos de super héroes`)
    }
})
// Por consecuente se invoca la función 


// infoHeroe("Black Panther")


const mostrarInformacionSuperheroes = (akas =>{

    akas.forEach(nombre => {

        infoHeroe (nombre)
    });
})

mostrarInformacionSuperheroes(["Spider Man", "Capitan America", "Black Panther", "Iron man", "Joker"])


