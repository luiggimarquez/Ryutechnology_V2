

let productos = [];
let products = [];

class Producto{

    constructor(id, nombre, tipo, marca, precio, cantidad, img){

        this.id = id;
        this.nombre = nombre;
        this.tipo=tipo;
        this.marca = marca;
        this.cantidad = cantidad;
        this.precio = precio;
        this.img = img;
    }

}// fin Class Producto

    const res = await fetch("../js/data/productosDb.json")
    .then( (consulta) =>  consulta.json())
    .then((consulta) => {
        products = consulta;
    })
    .catch(error => console.error("error localizado"));


products.forEach(elemento =>{

    let { id,nombre,tipo,marca,precio,cantidad,img } = elemento;
    productos[id-1] = new Producto( id, nombre, tipo, marca, precio, cantidad, img); 
})


export default productos;

