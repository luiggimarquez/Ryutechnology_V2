import * as load from "../../cargaProductos.js";
import pagoCarrito from "./pagoCarrito.js";
import procesarPago from "./procesarPago.js";
import cerrarModal from "../menu/modal.js";
import vaciarCarrito from "./vaciarCarrito.js";

export default function imprimirCarrito(contenidoCarrito){

    pagoCarrito(contenidoCarrito); //actualiza total y subtotal antes de escribir en el dom

    let botonCarrito=document.getElementById("carritoActivo");
    botonCarrito.addEventListener("click", () =>{

        if(contenidoCarrito != ""){
                        
            let padre = document.getElementById("carrito");
            padre.innerHTML =[];
            let carritoImpresion = document.createElement("div");
            carritoImpresion.className="carrito";
            carritoImpresion.innerHTML =`

            <div class="alienacionCarrito" id="quitar">
                <img src="../img/logo1.png" alt="Logo Empresa" class="logoCart"> <h2>Artículos del Carrito</h2>

                <div class="agruparIconosCarrito">
                    <button class="button" id="procesarPago"> − Procesar Pago − </button>

                    <div class="label">
                        <img id="vaciar" src="../img/vaciar.png" alt="vaciar carrito" class="logoVaciar"><label>Vaciar</label>
                    </div>

                </div>
            </div>
            <div class="titulosCarrito"><p>Producto</p><p>Cantidad</p><p>Precio</p></div>`;

            padre.insertAdjacentElement("beforeend", carritoImpresion);

            for(let elementoCarrito of contenidoCarrito){

                let article = document.createElement("div");
                article.className ="articulosCarrito";
                article.innerHTML = `<p>${elementoCarrito.nombre}</p> <p>${elementoCarrito.comprados}</p> <p>${elementoCarrito.precio} $ </p> <img src="../img/bin.png" class="botonBin" id="tag${elementoCarrito.id2}">`;
                carritoImpresion.insertAdjacentElement("beforeend", article);
                
                let quitarArticulo = document.getElementById(`tag${elementoCarrito.id2}`);
                quitarArticulo.addEventListener("click",() =>{
                    
                    
                    // alert boton borrado

                    Swal.fire({
                        title: 'Estas seguro que lo deseas eliminar?',
                        text: "No lo podrás revertir!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, bórralo',
                        cancelButtonText: 'No, cancela!'
                      }).then((result) => {

                            if (result.isConfirmed) {

                                load.quitarArticulo2(elementoCarrito,quitarArticulo);
                                
                                Swal.fire(
                                    'Deleted!',
                                    'Tu artículo fue eliminado.',
                                    'success'
                                )
                        }
                    });
                    
                    
                });//fin envento

                let vaciar = document.getElementById("vaciar");
                vaciar.addEventListener("click",() =>{

                    Swal.fire({
                        title: 'Estás seguro? ',
                        text: "Vaciarás el carrito",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sí, deseo limpiarlo!'
                    }).then((result) => {

                        if (result.isConfirmed) {

                            contenidoCarrito = vaciarCarrito(contenidoCarrito);
                            pagoCarrito(contenidoCarrito);
                            load.LimpiarCarro(contenidoCarrito);
                            cerrarModal();

                            Swal.fire(
                                'Deleted!',
                                'Tu carrito se ha vaciado totalmente',
                                'success'
                            )
                        }
                    })
                });
                

            }//fin for

            pagoCarrito(contenidoCarrito); //actualiza total y subtotal en caso de borrase items

            let pagar = document.getElementById("procesarPago")
            pagar.addEventListener("click",() =>{

                swal.fire({

                    title: 'Estás seguro que deseas procesar la compra?',
                    text: "Si deseas agregar más productos, presiona cancelar",
                    icon: 'warning',
                    dangerMode: true,
                    showCancelButton: true,
                    confirmButtonText: 'Si, comprar!',
                    confirmButtonColor: '#3085d6',
                    cancelButtonText: 'No, quiero seguir comprando!',
                    cancelButtonColor: '#d33',
                    reverseButtons: true

                    }).then((result) => {

                        if (result.isConfirmed) {

                            contenidoCarrito = procesarPago(contenidoCarrito); // termina la compra, borra el carrito, retorna el carro vacio
                            
                            setTimeout(() => {
                                window.open("./factura.html", "_blank"); // abre una pestaña con la factura    
                            }, 2500);
                            
                            pagoCarrito(contenidoCarrito); // actualiza el contenido del carrito
                            let limpiar = document.getElementById("quitar"); 
                            limpiar.parentElement.remove(); // limpia la pantalla del modal
                            load.LimpiarCarro(contenidoCarrito); //enviamos la variable con carro vacio para actualizar su valor en el script cargarProductos.js
                            cerrarModal();

                            swal.fire({

                                confirmButtonColor: '#3085d6',
                                icon: 'success',
                                title: 'Procesado!',
                                text:'Estamos preparando su compra'
                            })
                            
                        } else if (
                          
                            result.dismiss === Swal.DismissReason.cancel
                        )   {
                                cerrarModal();
                                swal.fire({
                                    confirmButtonColor: '#3085d6',
                                    title: 'Cancelado',
                                    text: 'Puedes seguir agregando artículos a tu compra',
                                    icon: 'info',
                                })
                            }
                    });
            });

        }else{
        
            const quitar = document.querySelector(".carrito");
            (quitar != undefined) && (quitar.remove()); //evita que de error cuando se intente borrar dos veces el carrito
            let padre = document.getElementById("carrito");  //cuando el carrito esta vacio muestra en pantalla que no tiene nada.
            padre.innerHTML =[];
            let carritoImpresion = document.createElement("div");
            carritoImpresion.className="carrito";
            carritoImpresion.innerHTML ="<h2>Empty</h2>";
            padre.insertAdjacentElement("beforeend", carritoImpresion);
            pagoCarrito(contenidoCarrito);
        }

    });// fin evento boton carrito
    
}// fin funcion