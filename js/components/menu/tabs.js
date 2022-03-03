let boton1 = document.getElementById("tabAxis");
let boton2 = document.getElementById("tabCisco");
let boton3 = document.getElementById("tabAvaya");
let boton4 = document.getElementById("tabCrestron");

const openTab = (e,nombreTab) => { 

    let i=0, contenidoTab, tablinks;
  
    contenidoTab = document.getElementsByClassName("contenidoTab");
    
    for (i = 0; i < contenidoTab.length; i++) {

      contenidoTab[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++){

      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(nombreTab).style.display = "block";
    e.className += "active";
}

boton1.addEventListener("click", () => openTab(this,"Axis"));
boton2.addEventListener("click", () => openTab(this,"Cisco"));
boton3.addEventListener("click", () => openTab(this,"Avaya"));
boton4.addEventListener("click", () => openTab(this,"Crestron"));