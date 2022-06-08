/* O arquivo TEM que ser importado com a extensão .js */
import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
/* form eh do tipo Element, portanto tem um metodo addEventListener.
Quando quando enviado o formulario acionará o metodo.adiciona() do controller  */
form.addEventListener("submit", (event) => {
    event.preventDefault(); /** Evita o refresh da pagina */
    controller.adiciona();
});
