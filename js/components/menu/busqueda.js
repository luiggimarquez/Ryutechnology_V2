const filtradoBusqueda = () => {

    let input = document.getElementById("mySearch");
    
    input.addEventListener("keyup", (e) => {

        let filter =input.value.toUpperCase();
        let div = document.querySelectorAll(".alineadorContenido");
        let div3 = document.querySelectorAll(".item1")

        let i=0;

        for (const p of div) {

            let temp = p.innerText.toUpperCase().includes(filter)

            if (temp){

                div3[i].style = "";
                div[i].removeAttribute("id","filtros");
                    
            }else{

                div3[i].style = "padding:0px; width:0;";
                div[i].setAttribute("id","filtros")    
                    
            }
            i++;
        }

    });
}

filtradoBusqueda();
export default filtradoBusqueda;
