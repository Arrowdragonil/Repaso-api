import './r.css'
import { cleanPage } from "../../herramientas/cleanPage";
const link = "https://rickandmortyapi.com/api/character"

export const mp = async () => {
    app.innerHTML = `
    <div id="s">
    <p class="saludo">Bienvenid@ ${name} a la api</p>
    <input type="text" id="find" required/>
    <button type="text" id="findCharacter">Buscar</button>
    </div>
    `;

    getCharacters();
}

export function buscarCharacter (nombreCharacter) {
    const chaContainer = document.querySelector("div")
    console.log(cha)
    const buscar = cha.filter((characters) => characters.name.toLowerCase().includes(nombreCharacter.toLowerCase()));
   console.log(buscar);
   
   chaContainer.innerHTML = "";
   buscar.forEach((ob) => {
    chaContainer.innerHTML +=`
    <div class="cha">
      
      <img src="${ob.image}"/>
      <h2>nombre: ${ob.name}  tipo: ${ob.type}</h2>
      
      <h3>altura: ${ob.height}  peso: ${ob.weight}</h3>
      </div>
    `
   })
}

let cha = [];
const getCharacters = async () => {
    try {
        let characters = [];
        for (let i = 1; i < 30; i++) {
            const response = await fetch(`${link}${i}`);
            const dataJSON = await response.json();
            characters.push(dataJSON);
        }
        transformData(characters);
    } finally {
        
    }
    
    function transformData(l) {
        const mappedCharacters = l.map((ob) => ({

        //image: ob.sprites.other.home.front_default,
        name: ob.name,
        type: ob.type,
        gender: ob.gender ,

        
        }));
        print(mappedCharacters);
        cha = mappedCharacters;
        
    }

    
    function print(list) {
        const chaContainer = document.createElement("div")
        chaContainer.classList.add('character-container')
        const container = document.querySelector("#app");
        for (const ob of list) {
            const template = `
        
            <div class="poke">
            
            <img src="${ob.image}"/>
            <h2>nombre: ${ob.name}  tipo: ${ob.type}</h2>
            
            <h3>altura: ${ob.height}  peso: ${ob.weight}</h3>
            </div>
            
            `;
            chaContainer.innerHTML += template;
            
            
          } 
          container.appendChild(chaContainer)
        }
    const botonBuscar = document.querySelector("#findCharacter");
    const input = document.querySelector("#find");
    botonBuscar.addEventListener("click", () => buscarCharacter(input.value));
    }