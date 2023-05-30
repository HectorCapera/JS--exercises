/*  Ejercicio 5

Dado un array  de personas con nombres y apellidos crear una función para ordenar el array  por los apellidos en nombres alfabéticos 

Ejemplo: 

ordenarPorApellidos([
    "Hector Capera",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);


*/




function ordenarPorApellidos(personas){

// crear una variable nueva 

let apellidos = personas.map(persona => persona.split(" ")[1])

// ordenar apellidos 

apellidos.sort();

// crear un nuevo array con los nombres y apellidos ordenados 

const personasOrdenadas = apellidos.map(apellido =>{
    
    // Encontrar el nombre y el apellido original correspondiente

    const nombreOriginal = personas.find(nombreCompleto => {
        return nombreCompleto.split(" ")[1] === apellido
    })
    return nombreOriginal
})

return personasOrdenadas


}

console.log(ordenarPorApellidos([
    "Hector Capera",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]));

ordenarPorApellidos()