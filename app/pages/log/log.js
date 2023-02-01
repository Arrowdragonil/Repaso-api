import { main } from '../main/main';
import './log.css'
import { cleanPage } from '../../herramientas/cleanPage';
export const log = () =>{ 
const app = document.querySelector('#app');
cleanPage(app);
app.innerHTML = `

<div class="login">
<label for="inputName" id="n">introduzca un nombre de usuario</label>

<input type="text" id="nombre" required/>



<button type="button" id="r">login</button>

</div>

`;
const guardarDatos = () => {
    
    localStorage.setItem("name", input.value);
    main();
    
    };

    const botonS = document.querySelector("#r");
    const input = document.querySelector("input");
    botonS.addEventListener("click", () => guardarDatos(input.value));
    
};   
/*  <label for="" inputPassword id="p">introduzca una contraseña</label>
<input type="text" id="password" required/> */