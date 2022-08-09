const precioAmuleto = 30
const precioMascara = 120
const precioVasija = 80

const stockAmuleto = 20
const stockMascara = 9
const stockVasija = 12



function capturarDatoA(){
    let botonAmuleto = document.getElementById("btnAmuleto").value;
    calculoPrecio(botonAmuleto, precioAmuleto, stockAmuleto)
}
function capturarDatoB(){
    let botonMascara = document.getElementById("btnMascara").value;
    calculoPrecio(botonMascara, precioMascara, stockMascara)
}
function capturarDatoC(){
    let botonVasija = document.getElementById("btnVasija").value;
    calculoPrecio(botonVasija, precioVasija, stockVasija)
}


function calculoPrecio(cantidadPedida, precio, stock){
    if (precio == 30 && stock >= cantidadPedida){
        let precioCalculado = precio * cantidadPedida
    alert("El coste de los amuletos es de "+ precioCalculado + " pesos")
    }
    else if (precio == 30 && stock <= cantidadPedida)
    {
        alert("No hay stock de Amuletos suficiente")
    }
    
    else if (precio == 120 && stock >= cantidadPedida){
        let precioCalculado = precio * cantidadPedida
    alert("El precio final por las mascaras es de "+ precioCalculado + " pesos")
    }
    else if(precio == 120 && stock <= cantidadPedida){
        alert("No hay stock de Mascaras suficiente")
    }

    else if(precio == 80 && stock >= cantidadPedida){
        let precioCalculado = precio * cantidadPedida
    alert("El precio final por las vasijas es de "+ precioCalculado + " pesos")
    }
    else if(precio == 80 && stock <= cantidadPedida){
        alert("No hay stock de Vasijas suficiente")
    }
}

let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
    let botonAmuleto = document.getElementById("btnAmuleto").value;
    let botonMascara = document.getElementById("btnMascara").value;
    let botonVasija = document.getElementById("btnVasija").value;
    alert("La cantidad de productos seleccionados fueron: ")
    alert(botonAmuleto + " Amuletos")
    alert(botonMascara + " Mascaras")
    alert(botonVasija + " Vasijas")
}
//HK