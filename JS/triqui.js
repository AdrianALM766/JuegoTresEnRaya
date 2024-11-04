let sw = 0;
let botonesPresionados = 0; // Contador de botones presionados


function reiniciarJuego() {
    // Recorrer todos los botones para restablecerlos
    for (let i = 1; i <= 9; i++) {
        document.form1["boton" + i].value = ""; //quita las x o las o que esten en el tricki
        document.form1["boton" + i].disabled = false; // esto es para habilitar el boton
    }
}

function checkAllButtonsPressed() {
    if (botonesPresionados === 9) { // Hay 9 botones en total
        alert("¡El juego a finalizado!");
    }
}

function pressButton(button) {
    if (button.value === "") {
        if (sw == 0) {
            button.value = "X";
            sw = 1;
        } else {
            button.value = "O";
            sw = 0;
        }
        button.disabled = true; // Deshabilita el botón
        botonesPresionados++; // Incrementa el contador
        checkAllButtonsPressed(); // Verifica si todos los botones han sido presionados
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
