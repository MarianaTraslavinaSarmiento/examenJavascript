
export function agregarCarrito(){

    let numeroProductos = document.querySelector('#numeroDeProductos');
    numeroProductos.textContent= Number(numeroProductos.textContent)+1;

    console.log(numeroProductos.textContent)

}
