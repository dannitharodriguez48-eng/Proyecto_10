const botones = document.querySelectorAll(".boton");
const contenidos = document.querySelectorAll(".contenido");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        botones.forEach(function (elemento) {
            elemento.classList.remove("activo");
        });

        contenidos.forEach(function (contenido) {
            contenido.classList.remove("activo");
        });

        boton.classList.add("activo");
        const id = boton.getAttribute("data-id");
        document.getElementById(id).classList.add("activo");
    });
});
