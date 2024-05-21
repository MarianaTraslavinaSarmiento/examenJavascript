import { agregarCarrito } from "./agregar.js"


const getAllProductos = async () =>{

    const res = await fetch ("http://172.16.101.146:5999/")
    const data = await res.json()

    return data
}

const productosInformation = async () =>{

    let productosContainer = document.querySelector("#productosContainer")
    let allProductos = await getAllProductos()

    for (let producto of allProductos){
        productosContainer.innerHTML += /*html*/`
        <div class="clothe">
            <img src="${producto.imagen}" alt="">
            <div class="textClothe">
                <p>${producto.nombre}</p>
                <p>${producto.precio}</p>
                <button id="agregarCarrito">Agregar</button>
            </div>
        </div>
        `
    }
}

await productosInformation()

let agregar = document.querySelector("#agregarCarrito")

for (let button of agregar){
    button.addEventListener('click', agregarCarrito);
}
