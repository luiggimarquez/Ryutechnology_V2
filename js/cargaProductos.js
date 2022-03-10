import imprimirCarrito from "./components/cart/imprimirCarrito.js";
import pagoCarrito from "./components/cart/pagoCarrito.js"



let carro=[];
const containerProduct = document.getElementById('divProductos');

class Carrito{

    constructor(nombre, id2, amount, precio, comprados, marca, img, tipo){

        this.nombre = nombre;
        this.id2 = id2;
        this.amount = amount;
        this.precio = precio;
        this.comprados = comprados;
        this.marca = marca;
        this.img = img;
        this.tipo = tipo;
    }

}//fin Class Carrito 

document.DOMContentLoaded = new Promise(function (resolve) {

    if (document.readyState != "loading")

        return resolve();
    else
        document.addEventListener("DOMContentLoaded", function () {
  
            return resolve();
        });
    });
    
    document.DOMContentLoaded.then(function () {

        (localStorage.getItem("carrito")) ? ( (carro = new Carrito), (carro = JSON.parse(localStorage.getItem("carrito"))), (imprimirCarrito(carro))) : []; //if ternario
        
    });

export default function cargarProductos(items) {

    containerProduct.innerHTML="";
    items.forEach(producto => {

        let { id,nombre,tipo,marca,cantidad,precio,img } = producto;

        let div = document.createElement('div');
        div.classList.add('item1');
        div.setAttribute("id","item1");
        div.innerHTML = `
                <div class="alineadorContenido">
            
                    <img src="${img}" alt="">
                    <div class="datosBoton">
                            <span>${nombre}</span>
                            <img src="../img/plus.png" class="botonRedondo" id="id${id}">
                    </div>

                    <div class="dataBase">

                        <p>Marca: ${marca}</p></br>
                        <p>Tipo: ${tipo}</p></br>
                        <p>Precio: ${precio}</p></br>
                        <p>Disponibles: ${cantidad}</p></br>
                        
                    </div>

                </div>`;

        containerProduct.appendChild(div);
       
        let i=0;
        let articulos = document.getElementById(`id${id}`);
        articulos.addEventListener("click", () =>{
 
        if(carro == ""){ 
                        
            carro[0]= new Carrito(nombre, id, cantidad-1, precio, 1, marca, img, tipo )
                        
        }else{
            
            let busquedaID = carro.find((elemento) => (elemento.id2 == producto.id))
                        
            if(busquedaID != undefined){
                        
                let l=0 ;
            
                if(busquedaID.amount > 0){ //si el producto en carrito tiene cantidad cero, no agrega más
            
                    for (const elemento of carro){
            
                        (elemento.id2 == busquedaID.id2) && (carro[l].comprados++, carro[l].amount-- ); // Logical AND en lugar del if, comprados++ aculuma articulos repetidos, amount-- resta 1 del numero disponible por articulo
                        l++; // sugar syntax contador
                    }
            
                }else{
            
                   // muestra alerta cuando ya se agregaron todos los articulos que habian por producto
                    const Toast = Swal.mixin({
                    toast: true,
                    position: 'center-left',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                      
                    Toast.fire({
                        icon: 'info',
                        title: 'No hay más productos en stock'
                    })
                }
            
            }else{
            
                carro.push(new Carrito( nombre, id, cantidad-1, precio, 1, marca, img, tipo))
            }
        }   
            imprimirCarrito(carro); //funcion para mostrar contenido en el modal del carrito
           
        }); // fin evento
        

    });// fin ForEach()
  
} 

export function quitarArticulo2(dato,elementoRemover) { //elimina el articulo despues de pulsar el boton
                
    elementoRemover.parentElement.remove();
    carro=carro.filter((elemento)=> elemento.id2 != dato.id2);
               
    imprimirCarrito(carro);
    pagoCarrito(carro);
            
};

export function LimpiarCarro(contenidoCarrito){

    carro=contenidoCarrito; //vacia el contenido de la variable cuando se procesa la compra
}

export {carro}; 
