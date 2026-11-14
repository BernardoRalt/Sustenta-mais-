const elementos = document.querySelectorAll(".revelar");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.2 });

elementos.forEach((elemento) => observador.observe(elemento));

const menu = document.querySelector("#menu-scroll");

window.addEventListener("scroll", () => {
    menu.classList.toggle("visivel", window.scrollY > 100);
});

document.querySelectorAll(".cartao").forEach((cartao) => {
    cartao.addEventListener("click", () => {
        cartao.classList.toggle("selecionado");
    });

    cartao.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            cartao.click();
        }
    });
});