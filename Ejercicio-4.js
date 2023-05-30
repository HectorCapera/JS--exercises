/* Ejercicio 4 
El juego del ahorcado

El usuario tendrá que ir adivinando y encubriendo las letras de una palabra
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano)

ejemplo: 
juegoDelAhorcado('hector')

/ salida 
Adivina la letra : e 
la palabra es _e___
te quedan 5 intentos
*/ 





function juegoDelAhorcado(palabraSecreta){
    // crear variable palabra oculta con guiones bajos
    let palabraOculta = "_".repeat(palabraSecreta.length);
    
    // Variable con el número de intentos que va a tener 
    let intentos = 5;
    // Bucle para pedir letras que se ejecuta mientras
    // no se han adivinado las letras y queden intentos
    while(intentos > 0 && palabraOculta !== palabraSecreta){

        //pedimos una letra
        let letra = prompt("Adivina una letra");

        // Comprobar si la letra está en la palabra para actualizar
        // la variable palabra oculta

        if(palabraSecreta.includes(letra)){

            // actualizar la variable palabra oculta
            // meter la letra en la posición correcta

            for(let contadorLetras = 0; contadorLetras < palabraSecreta.length; contadorLetras++){
                
                if(letra === palabraSecreta[contadorLetras]){
                    

                    //Convertir la palabraOculta en un array

                    let palabraOcultaArray = Array.from(palabraOculta);
                    

                    //Seleccionar su indice y cambiar el _ por la letra adivinada

                    palabraOcultaArray[contadorLetras] = letra;
                    
                    //Unir el array en un string de nuevo
                    //Actualizar la variable palabraOculta

                    palabraOculta = palabraOcultaArray.join("")
                }
                
            }

        }else{
        // Si no existe la letra en la palabra entonces resto un intento
        
        intentos --;

        }



        // Mostrar el estado actual de la palabra oculta 
        console.log(`la palabra es: ${palabraOculta}`);

        // Mostrar cuantos intentos quedan
        console.log(`te quedan ${intentos} intentos`);
    }
    
    //Cuando salga del bucle
    // Mensaje de victoria o derrota

    if(palabraOculta === palabraSecreta){
        console.log(`En hora buena, has ganado! la palabra secreta era: ${palabraSecreta}`)
    }else{
        console.log(`Lo siento, has perdido. La palabra secreta era: ${palabraSecreta}`)
    }

    
}

const lanzarJuego = document.querySelector("#lanzarJuego");

lanzarJuego.addEventListener("click", () => juegoDelAhorcado("hector"));