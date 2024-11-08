let sw = 0; //! interruptor que alterna entre 0 y 1
let botonesPresionados = 0; //un contador que registra el numero total de botones presionados

//! Esta funcion recarga la pagina, lo cual reestablece el juego
function reiniciarJuego() {
    location.reload();
}

function checkAllButtonsPressed() {
    if (botonesPresionados === 9) { //? verifica si hay botones no presionados
        alert("¡El juego a finalizado!");
    }
}

function pressButton(button) {
    if (button.value === "") { //! verifica si el boton a sido presionado
        if (sw == 0) {
            button.value = "X";
            sw = 1; //cambia el valor a 1 
        } else {
            button.value = "O";
            sw = 0; //cambia el valor a 0
        }
        button.disabled = true; // Deshabilita el botón una vez ya presionado
        botonesPresionados++; //! Incrementa el contador de botones presionados
        checkAllButtonsPressed(); //? llamada a la funcion checkAllButtonPressed()
    }
}

//! esta funcion implementa la logica para el modo de un solo jugador
function UnSoloJugador() {
    // Crear una lista de botones no presionados hasta el momento
    let botonesLibres = [];
    for (let i = 1; i <= 9; i++) {
        if (document.form1["boton" + i].value === "") {
            botonesLibres.push(document.form1["boton" + i]);
        }
    }

    // Si hay botones libres, seleccionar uno al azar
    if (botonesLibres.length > 0) {
        let botonAleatorio = botonesLibres[Math.floor(Math.random() * botonesLibres.length)];
        pressButton(botonAleatorio); // Presionar el botón seleccionado aleatoriamente
        ganador(); // Verificar si hay un ganador después de presionar el botón
    }
}


function b1() { pressButton(document.form1.boton1); ganador(); }
function b2() { pressButton(document.form1.boton2); ganador(); }
function b3() { pressButton(document.form1.boton3); ganador(); }
function b4() { pressButton(document.form1.boton4); ganador(); }
function b5() { pressButton(document.form1.boton5); ganador(); }
function b6() { pressButton(document.form1.boton6); ganador(); }
function b7() { pressButton(document.form1.boton7); ganador(); }
function b8() { pressButton(document.form1.boton8); ganador(); }
function b9() { pressButton(document.form1.boton9); ganador(); }

//! esta funcion verifica si hay un gandor en el tablero, viendo todas las formas posibles en las que se puede ganar en tres en raya
function ganador() {
    //! Verificar filas
    if (document.form1.boton1.value === document.form1.boton2.value && 
        document.form1.boton2.value === document.form1.boton3.value && 
        document.form1.boton1.value !== "") {
        if (document.form1.boton1.value === "X") {
            alert("¡El jugador 1 ha ganado!");
        } else {
            alert("¡El jugador 2 ha ganado!");
        }
        return; // Salir de la función
    }

    if (document.form1.boton4.value === document.form1.boton5.value && 
        document.form1.boton5.value === document.form1.boton6.value && 
        document.form1.boton4.value !== "") {
        if (document.form1.boton4.value === "X") {
            alert("¡El jugador 1 ha ganado!");
        } else {
            alert("¡El jugador 2 ha ganado!");
        }
        return; // Salir de la función
    }

    if (document.form1.boton7.value === document.form1.boton8.value && 
        document.form1.boton8.value === document.form1.boton9.value && 
        document.form1.boton7.value !== "") {
        if (document.form1.boton7.value === "X") {
            alert("¡El jugador 1 ha ganado!");
        } else {
            alert("¡El jugador 2 ha ganado!");
        }
        return; // Salir de la función
    }

    //! Verificar columnas
    if (document.form1.boton1.value === document.form1.boton4.value && 
        document.form1.boton4.value === document.form1.boton7.value && 
        document.form1.boton1.value !== "") {
        if (document.form1.boton1.value === "X") {
            alert("¡El jugador 1 ha ganado!");
        } else {
            alert("¡El jugador 2 ha ganado!");
        }
        return; // Salir de la función
    }

    if (document.form1.boton2.value === document.form1.boton5.value && 
        document.form1.boton5.value === document.form1.boton8.value && 
        document.form1.boton2.value !== "") {
        if (document.form1.boton2.value === "X") {
            alert("¡El jugador 1 ha ganado!");
        } else {
            alert("¡El jugador 2 ha ganado!");
        }
        return; // Salir de la función
    }

    if (document.form1.boton3.value === document.form1.boton6.value && 
        document.form1.boton6.value === document.form1.boton9.value && 
        document.form1.boton3.value !== "") {
        if (document.form1.boton3.value === "X") {
            alert("¡El jugador 1 ha ganado!");
        } else {
            alert("¡El jugador 2 ha ganado!");
        }
        return; // Salir de la función
    }

    //! Verificar diagonales
    if (document.form1.boton1.value === document.form1.boton5.value && 
        document.form1.boton5.value === document.form1.boton9.value && 
        document.form1.boton1.value !== "") {
        if (document.form1.boton1.value === "X") {
            alert("¡El jugador 1 ha ganado!");
        } else {
            alert("¡El jugador 2 ha ganado!");
        }
        return; // Salir de la función
    }

    if (document.form1.boton3.value === document.form1.boton5.value && 
        document.form1.boton5.value === document.form1.boton7.value && 
        document.form1.boton3.value !== "") {
        if (document.form1.boton3.value === "X") {
            alert("¡El jugador 1 ha ganado!");
        } else {
            alert("¡El jugador 2 ha ganado!");
        }
        return; // Salir de la función
    }
}

