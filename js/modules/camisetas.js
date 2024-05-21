import { agregarCarrito } from "./agregar.js"


const getAllCamisetas = async () =>{

    const res = await fetch ("http://172.16.101.146:5999/camiseta")
    const data = await res.json()

    return data
}

const camisetasInformation = async () =>{

    let camisetasContainer = document.querySelector("#camisetasContainer")
    let allCamisetas = await getAllCamisetas()

    for (let camiseta of allCamisetas){
        camisetasContainer.innerHTML += /*html*/`
        <div class="clothe">
            <img src="${camiseta.imagen}" alt="">
            <div class="textClothe">
                <p>${camiseta.nombre}</p>
                <p>${camiseta.precio}</p>
                <button id="agregarCarrito">Agregar</button>
            </div>
        </div>
        `
    }
}

await camisetasInformation()

let agregar = document.querySelector("#agregarCarrito")

for (let button of agregar){
    button.addEventListener('click', agregarCarrito);
}