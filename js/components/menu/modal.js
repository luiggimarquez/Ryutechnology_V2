let modal = document.getElementById("myModal");
let btn = document.getElementById("carritoActivo");
let span = document.getElementsByClassName("close")[0];


// evento para abrir modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// evento para cierre en la X
span.onclick = function() {
  modal.style.display = "none";
}
// evento para cierre del modal haciendo click por fuera
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

export default function cerrarModal(){

  modal.style.display = "none";

}