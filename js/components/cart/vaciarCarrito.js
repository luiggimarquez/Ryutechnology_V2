
export default function vaciarCarrito(carro){

    carro = carro.filter((elemento) => (elemento.id2) == 0) //vaciar carrito

    return carro;
}