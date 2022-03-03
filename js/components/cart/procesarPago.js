import  vaciarCarrito from "./vaciarCarrito.js";

let backup = [];

export default function procesarPago(carro){

    backup = carro;
    carro = vaciarCarrito(carro) //vaciar carrito
    localStorage.setItem("factura",JSON.stringify(backup)); //graba en localStorage el contenido del carrito para mostrarlo luego en la factura
    
    return carro; // devuelve vacio para actualizar que el carrito ya no tiene nada
}

