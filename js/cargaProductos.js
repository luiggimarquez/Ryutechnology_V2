import imprimirCarrito from "./components/cart/imprimirCarrito.js";
import pagoCarrito from "./components/cart/pagoCarrito.js"
import productos from "./main.js";
import checkAll from "./components/menu/checkAll.js"
import roundRange from "./components/menu/roundRange.js"
import filtradoBusqueda from "./components/menu/busqueda.js"

checkAll(document.querySelector('[data-check-all-container]'));

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

let filtrado = document.querySelector('.filtro')

filtrado.addEventListener("change", () =>{

    
    let filtroUno = document.getElementById("check1");
    let filtroDos = document.getElementById("check2");
    let filtroTres = document.getElementById("check3");
    let filtroCuatro = document.getElementById("check4");
    let filtroCinco = document.getElementById("check5");
    let filtroSeis = document.getElementById("check6");
    let filtroSiete = document.getElementById("check7");
    let filtroOcho = document.getElementById("check8");
    let filtroNueve = document.getElementById("check9");
    let filtroDiez = document.getElementById("check10");
    let filtroOnce = document.getElementById("check11");
    
    let input = document.getElementById("mySearch"); 
    input.value=""; /* el buscador por palabras es independinte al fitro por tipo y marca, cuando se presiona algún filtro, se borra la palabra buscada
    pero si se puede filtrar por algún checkbox y luego buscar alguna palabra, esto, el buscador filtra por el DOM*/
    
  ((filtroUno.checked && filtroDos.checked && filtroTres.checked))&& (cargarProductos(productos)); 

    let filtrados=[];
    let filtrados2=[];
    let resultado = [];

    /*Las siguientes asignaciones vienen de los value de los inputs y se                
    usan para servir de guia para filtrar en el array de productos*/                    

    (filtroUno.checked)&& filtrados.push(filtroUno.value);
    (filtroDos.checked)&& filtrados.push(filtroDos.value);
    (filtroTres.checked)&& filtrados.push(filtroTres.value);
    (filtroCuatro.checked)&& filtrados.push(filtroCuatro.value);
    (filtroCinco.checked)&& filtrados.push(filtroCinco.value);
    (filtroSiete.checked)&& filtrados.push(filtroSiete.value);
    (filtroOcho.checked)&& filtrados.push(filtroOcho.value);
    (filtroNueve.checked)&& filtrados.push(filtroNueve.value);
    (filtroDiez.checked)&& filtrados.push(filtroDiez.value);
    (filtroOnce.checked)&& filtrados.push(filtroOnce.value);

    (filtroCuatro.checked)&& filtrados2.push(filtroCuatro.value);
    (filtroCinco.checked)&& filtrados2.push(filtroCinco.value);
    (filtroSiete.checked)&& filtrados2.push(filtroSiete.value);
    (filtroOcho.checked)&& filtrados2.push(filtroOcho.value);
    (filtroNueve.checked)&& filtrados2.push(filtroNueve.value);
    (filtroDiez.checked)&& filtrados2.push(filtroDiez.value);
    (filtroOnce.checked)&& filtrados2.push(filtroOnce.value);
    

    // Filtrados filtra en cadena, desde marca hasta los tipos
    // Filtrados2 es para cuando solo se filtren tipos
    
    resultado = productos.filter(objeto => filtrados.includes(objeto.marca)); //guarda el resultado de filtrar por marca
    
    if(filtroCuatro.checked || filtroCinco.checked || filtroSiete.checked || filtroOcho.checked || filtroNueve.checked || filtroDiez.checked || filtroOnce.checked){ // If controla si están activos los filtros tipos

        resultado = resultado.filter(objeto => filtrados.includes(objeto.tipo)); // filtra el resultado de marca por tipo

        if((filtroUno.checked || filtroDos.checked || filtroTres.checked) == false){ //if controla cuando están desactivados los filtros marca

            resultado = productos.filter(objeto => filtrados2.includes(objeto.tipo)); //filtra tipos solamente cuando ningún filtro marca esté activo
        }

    }

    cargarProductos(resultado);

   
  //si no hay ningún filtro activo, mediante el Falsy muestra todos los artículos

    ((filtroUno.checked || filtroDos.checked || filtroTres.checked || filtroCuatro.checked || filtroCinco.checked || filtroSeis.checked || filtroSiete.checked || filtroOcho.checked || filtroNueve.checked || filtroDiez.checked || filtroOnce.checked)) || ((resultado = productos), cargarProductos(productos)); //Falsy
    
        
    let valorRange = roundRange() //Lee valor del roundrange
    let resultado2 = resultado.filter(elemento => (elemento.precio <= valorRange)) //filtra los resultados filtrados o no de los checkbox
    cargarProductos(resultado2);
    
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
