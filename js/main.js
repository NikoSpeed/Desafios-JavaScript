let cantAmuletos = parseInt(prompt("Cuantos amuletos vas a llevar?"))
let cantMascaras = parseInt(prompt("Cuantas mascaras queres?"))
let cantVasijas = parseInt(prompt("Cuantas vasijas necesitas?"))

const precioAmuleto = 30
const precioMascara = 120
const precioVasija = 80

const stockAmuleto = 20
const stockMascara = 9
const stockVasija = 12

calculoPrecio(cantAmuletos, precioAmuleto, stockAmuleto)
calculoPrecio(cantMascaras, precioMascara, stockMascara)
calculoPrecio(cantVasijas, precioVasija, stockVasija)


function calculoPrecio(cantidadPedida, precio, stock){
    if (precio == 30 && stock >= cantidadPedida){
        let precioCalculado = precio * cantidadPedida
    alert("El precio final por los amuletos es de "+ precioCalculado + " pesos")
    }
    else if (precio == 30 && stock!= 20)
    {
        alert("No hay stock de Amuletos suficiente")
    }
    
    else if (precio == 120 && stock >= cantidadPedida){
        let precioCalculado = precio * cantidadPedida
    alert("El precio final por las mascaras es de "+ precioCalculado + " pesos")
    }
    else if(precio == 120 && stock!= 9){
        alert("No hay stock de Mascaras suficiente")
    }

    else if(precio == 80 && stock >= cantidadPedida){
        let precioCalculado = precio * cantidadPedida
    alert("El precio final por las vasijas es de "+ precioCalculado + " pesos")
    }
    else if(precio == 80 && stock!= 12){
        alert("No hay stock de Vasijas suficiente")
    }
}

alert("Gracias por su compra, a continuacion le llevaremos a una nueva seccion de creacion de amuletos")


let cantHacer = parseInt(prompt("Cuantos amuletos quieres crear?"))

class Amuleto{
    constructor(nombre, precio, utilidad){
        this.nombre = nombre
        this.precio = precio
        this.utilidad = utilidad
    }
}


for (i = cantHacer; i > 0; i--) {
    let nombreAmuleto = prompt("Ingrese nombre del Amuleto")
    let precioAmuleto = parseInt(prompt("Ingrese precio del Amuleto"))
    let utilidadAmuleto = prompt("Describa la utilidad del Amuleto")

    const Amuletos = []
    Amuletos.push(new Amuleto(nombreAmuleto, precioAmuleto, utilidadAmuleto))

    for (const datos of Amuletos){
        console.log(datos.nombre)
        console.log(datos.precio)
        console.log(datos.utilidad)
    }
}

let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
    alert("La cantidad de productos seleccionados fueron: ")
    alert(cantAmuletos + " Amuletos")
    alert(cantMascaras + " Mascaras")
    alert(cantVasijas + " Vasijas")
    alert(cantAmuletos + cantMascaras + cantVasijas + " Productos en total")
}
//HK