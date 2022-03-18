class Datos{

    constructor(nombre, id2, amount, precio, comprados){

        this.nombre = nombre;
        this.id2 = id2;
        this.amount = amount;
        this.precio = precio;
        this.comprados = comprados;
    }

}//fin Class datos 
let datos = new Datos;
let temp = [];
let timerInterval;

Swal.fire({

    title: 'Compra realizada satisfactoriamente',
    html: 'A continuación tienes los datos de tu factura </br> Cierre automático en: <b></b> mseg.',
    timer: 2500,
    timerProgressBar: true,
  
    didOpen: () => {

        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },

    willClose: () => {
        clearInterval(timerInterval)
    }
})

//Carga de los datos del localStorage de la página Productos
document.addEventListener("DOMContentLoaded", (e) => {
    
    localStorage.getItem("factura") ? (temp = JSON.parse(localStorage.getItem("factura")), recoveryData(temp)): []; //IF ternario
});

/*La funcion RecoveryData toma los datos del localStorage e imprime de forma dinámica y automatica los elementos
cargados en el carrito de compras realizado en la pagina productos.HTML, guardados en el key= factura, que es una
copia del contenido de Carrito, porque este último es borrado al efectuar el pago*/

function recoveryData(temp2){

    datos=temp2;
    const DateTime = luxon.DateTime;
    const dt = DateTime.fromISO(new Date().toISOString());

    let base =document.getElementById("contenedorFactura")
    base.innerHTML = `<div class="alineacionTituloFactura">
    <img src="../img/logo1.png" style="width:10%;"> <h2>Ryu Technology</h2></div>
    <div class="alineadorDatosFactura">
    <p>Factura de Compra</p><p>Fecha ${dt.toFormat('dd/MM/yyyy')} - N° 00000001</p>
    </div>
    <div id="carritoContainer" ></div>
    <div class="monto" id="monto">
    </div>`;
        
    let padre = document.getElementById("carritoContainer"); //impresion de los titulos y subtitulos
    let facturaImpresion = document.createElement("div");
    facturaImpresion.className="carritoFactura";
    facturaImpresion.innerHTML =`<div class="alineacionTituloCarrito">
                                    <h2>Artículos Comprados</h2>
                                    <div class="alineacionsubtitulos">
                                        <p>Producto</p><p>Cantidad</p><p>Precio</p>
                                    </div>
                                    <div id="carritoItems" class="alineaFinal"></div>
                                </div>`;
    padre.insertAdjacentElement("beforeend", facturaImpresion);
   
    let items = document.getElementById("carritoItems");
    let nombreContainer = document.createElement("div")
    nombreContainer.className = "nombreContainer";
    items.insertAdjacentElement("beforeend", nombreContainer);

    for(const elementoCarrito of datos){    //impresion columna nombre
        
        let { nombre } = elementoCarrito;

        let li = document.createElement("p");
        li.innerHTML = `${nombre}`;
        nombreContainer.insertAdjacentElement("beforeend", li);
    }

    let items2 = document.getElementById("carritoItems");
    let cantidadContainer = document.createElement("div")
    cantidadContainer.className = "cantidadContainer";
    items2.insertAdjacentElement("beforeend", cantidadContainer);

    for(const elementoCarrito of datos){    //impresion columna cantidad
        
        let { comprados } = elementoCarrito;

        let li = document.createElement("p");
        li.innerHTML = `${comprados}`;
        cantidadContainer.insertAdjacentElement("beforeend", li);
    }

    let items3 = document.getElementById("carritoItems");
    let precioContainer = document.createElement("div")
    precioContainer.className = "precioContainer";
    items3.insertAdjacentElement("beforeend", precioContainer);

    for(const elementoCarrito of datos){    //impresion columna precio
        
        let { precio } = elementoCarrito;
        let li = document.createElement("p");
        li.innerHTML = `${precio}`;
        precioContainer.insertAdjacentElement("beforeend", li);
    }
    
    let root = document.getElementById("monto") //impresion de los totales y subtotales
    let totalImpresion = document.createElement("div"); 
    totalImpresion.className="carritoDatosFactura"
    totalImpresion.innerHTML=`  <p>SubTotal a pagar &#x2002 = &#x2002 $ &#x2002 <span id="subtotalPago"></span></p>
                                <p>IVA a pagar &#x2002 = &#x2002 $ &#x2002 <span id="ivaPago"></span></p>
                                <p>Total a pagar &#x2002 = &#x2002 $ &#x2002<span id="totalPago"></span></p> `;
    root.appendChild(totalImpresion);

    const subtotal = document.getElementById("subtotalPago");
    const ivatotal = document.getElementById("ivaPago");
    const total = document.getElementById("totalPago");
    subtotal.innerText = datos.reduce((acc, el) => acc + (el.precio * el.comprados), 0); //calculo subtotal
    ivatotal.innerText = datos.reduce((acc, el) => acc + (el.precio*0.21*el.comprados), 0);//calculo iva
    total.innerText = datos.reduce((acc, el) => acc + (el.precio * el.comprados + el.precio*0.21*el.comprados), 0); //calculo total

}