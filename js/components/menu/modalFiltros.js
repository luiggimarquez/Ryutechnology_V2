const containerFilter = document.querySelector(".containerFiltro");
const hambur = document.querySelector(".burgerFiltro");

hambur.addEventListener("click",() => {

  hambur.classList.toggle("active");
  containerFilter.classList.toggle("active");
})

const cierre = document.querySelector(".contenedorFlex")
  
  
  cierre.addEventListener("click",() =>{

  hambur.classList.remove("active");
  containerFilter.classList.remove("active")
}) 


