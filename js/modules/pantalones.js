

export const getAllPantalones = async () =>{

    const res = await fetch ("http://172.16.101.146:5999/pantalon")
    const data = await res.json()

    return data
}

export const pantalonesInformation = async () =>{

    let pantalonesContainer = document.querySelector("#pantalonesContainer")
    let allPantalones = getAllPantalones()

    for (let pantalon of allPantalones){
        pantalonesContainer.innerHTML = /*html*/`
        <div class="clothe">
            <img src="${pantalon.imagen}" alt="">

            <div class="textClothe">
                <p>${pantalon.nombre}</p>
                <p>${pantalon.precio}</p>
                <button>Agregar</button>
            </div>
        </div>
        `
    }
}

await pantalonesInformation()
