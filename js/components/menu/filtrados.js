import checkAll from "./checkAll.js"
import roundRange from "./roundRange.js"
import productos from "../../main.js";
import cargarProductos from "../../cargaProductos.js"

checkAll(document.querySelector('[data-check-all-container]'));

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