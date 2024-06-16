const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        //Clear button
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        //Delete button
        if (boton.id === "borrar") {
            if (
                pantalla.textContent.length === 1 ||
                pantalla.textContent === "ERROR"
            ) {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        //Equals button
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "ERROR";
            }
            return;
        }

        // Replace 0 with the first number or continue appending numbers/operators
        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
