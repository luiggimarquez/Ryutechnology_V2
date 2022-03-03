import productos from "./main.js";
import cargarProductos from "./cargaProductos.js";


document.DOMContentLoaded = new Promise(function (resolve) {

  if (document.readyState != "loading")

    return resolve();

  else

    document.addEventListener("DOMContentLoaded", function () {

      return resolve();

    });
});

  document.DOMContentLoaded.then(function () {
    
    cargarProductos(productos);

        
});
