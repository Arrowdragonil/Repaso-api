import "./main.css"
import { cleanPage } from "../../herramientas/cleanPage";
import { mp } from "../ricky/r";

export const main = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = `
    <h1 id="t">Ricky</h1>
    <p id="user">bienvenid@ ${localStorage.name} a la api</p>
    <div id="box">
    <button type="submit" id="b"> <img src="https://res.cloudinary.com/di5oqdvwa/image/upload/v1675246418/imagenes/111descarga_a4yxnx.jpg" height ="80" width="100" id="pi"/></button>
    </div>
    
    `

    const botonS = document.querySelector("#b");
    const botonQ = document.querySelector("#q");
    botonS.addEventListener("click", () => mp(botonS.value));
    
}