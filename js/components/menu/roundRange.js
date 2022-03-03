
let slider = document.getElementById("rango");
let salida = document.getElementById("valor");



const roundRange =  () => {

    salida.innerHTML = slider.value;

    slider.oninput = function() {
        
        salida.innerHTML = this.value;
       
    }
    
    return (slider.value)

};

export default roundRange;