const subtotal = document.getElementById("subtotalPago");
const total = document.getElementById("totalPago");
const contadorCarrito = document.getElementById("contador")

const pagoCarrito = ( (carrito) => {

    contadorCarrito.innerText = carrito.reduce((acc, el) => acc + el.comprados, 0); //contador de articulos en el carrito
    subtotal.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.comprados), 0); //calculo del subtotal de la venta
    total.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.comprados + el.precio*0.21*el.comprados), 0); // calculo del total de la venta
    localStorage.setItem("carrito",JSON.stringify(carrito)); //grabado del contenido del carrito en el localstorage
});

export default pagoCarrito;