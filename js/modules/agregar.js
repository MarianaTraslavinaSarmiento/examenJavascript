
export const agregarCarrito = document.querySelector('#agregarCarrito');

agregarCarrito.addEventListener('click', () => {
    let numeroProductos = document.querySelector('#numeroDeProductos');
    numeroProductos.textContent = +numeroProductos.textContent+1;
});
