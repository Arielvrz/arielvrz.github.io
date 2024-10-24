
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;
const numeroIntentos = 3;
let intentos = 1;

function generarNumeroAleatorio() {
    
    let mensaje;
    
    const parrafo = document.querySelector("#idParrafo");

    
    if (intentos <= numeroIntentos) {
        let numero = parseInt(prompt("¿Qué número se ha generado (Intento " + intentos + ")?"));

        if (numero === numeroAleatorio) {
            mensaje = `Es correcto, pudiste adivinar el numero oculto (${numeroAleatorio}). Refresque la página para volver a jugar.`;
        } else if (intentos === numeroIntentos) {
            mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
        } else {
            if (numero < numeroAleatorio) {
                mensaje = `El número es más alto. Vuelve a intentar. Quedan ${numeroIntentos - intentos} intentos.`;
            } else {
                mensaje = `El número es más bajo. Vuelve a intentar. Quedan ${numeroIntentos - intentos} intentos.`;
            }
        }

        // Aumentamos el valor de los intentos
        intentos++;
    } else {
        mensaje = `Su número de intentos ha terminado. El número oculto era: ${numeroAleatorio}. Refresque la página para volver a jugar.`;
    }
    parrafo.innerHTML = mensaje;
}