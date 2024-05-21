

export const getAllAbrigos = async () =>{

    const res = await fetch ("http://172.16.101.146:5999/abrigo")
    const data = await res.json()

    return data

}

export const abrigosInformation = async () =>{

    let abrigosContainer = document.querySelector("#abrigosContainer")
    let allAbrigos = getAllAbrigos()

    for (let abrigo of allAbrigos){
        abrigosContainer.innerHTML = /*html*/`
        <div class="clothe">
        <img src="${abrigo.imagen}" alt="">
        <div class="textClothe">
            <p>${abrigo.nombre}</p>
            <p>${abrigo.precio}</p>
            <button>Agregar</button>
        </div>
    </div>`
    }
}


await abrigosInformation()