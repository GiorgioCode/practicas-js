let boton = document.getElementById("button-addon2")
let input = document.getElementById("input_anio")
let anio = 0
input.addEventListener("change", (e) => {
    anio = e.target.value.toLowerCase();
});

function bisiesto(anio_a_verificar) {
    if(anio_a_verificar>=1582){
        if (anio_a_verificar%4==0){
            if (anio_a_verificar%100!=0) {
                if(anio_a_verificar%400!=0) {
                    return("es bisiesto")
                }else {
                    return("no es bisiesto")
                }
            } else {
                return("no es bisiesto")
            }
    
        } else {
            return("no es bisiesto")
        }
    } else {
        return("el año no se encuentra dentro del calendario GREGORIANO")
    }
}

boton.addEventListener("click", (e)=>{
    if (anio!==0) {
        alert("El año " + anio +" "+bisiesto(anio))
    } else {
        alert("debe introducir un año para poder calcularlo =)")
    }
})

