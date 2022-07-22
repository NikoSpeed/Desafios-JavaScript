let cantAmuletos = parseInt(prompt("Cuantos amuletos vas a llevar?"))
let cantMascaras = parseInt(prompt("Cuantas mascaras queres?"))
let cantVasijas = parseInt(prompt("Cuantas vasijas necesitas?"))

const precioAmuleto = 30
const precioMascara = 120
const precioVasija = 80

const stockAmuleto = 20
const stockMascara = 9
const stockVasija = 12

calculoPrecioAmuleto(cantAmuletos, precioAmuleto, stockAmuleto)
calculoPrecioMascara(cantMascaras, precioMascara, stockMascara)
calculoPrecioVasija(cantVasijas, precioVasija, stockVasija)

function calculoPrecioAmuleto(cantidadPedidaA, precioA, stockA){
    if (stockA >= cantidadPedidaA){
    let precioCalculado = precioA * cantidadPedidaA
    alert("El precio final por los amuletos es de "+ precioCalculado + " pesos")
    }
    else{
        alert("No hay stock de Amuletos suficiente")
    }
}

function calculoPrecioMascara(cantidadPedidaM, precioM, stockM){
    if (stockM >= cantidadPedidaM){
        let precioCalculado = precioM * cantidadPedidaM
        alert("El precio final por las masacaras es de "+ precioCalculado + " pesos")
    }
    else{
        alert("No hay stock de Mascaras suficiente")
    }
}

function calculoPrecioVasija(cantidadPedidaV, precioV, stockV){
    if (stockV >= cantidadPedidaV){
        let precioCalculado = precioV * cantidadPedidaV
        alert("El precio final por las vasijas es de "+ precioCalculado + " pesos")
    }
    else{
        alert("No hay stock de Vasijas suficiente")
    }
}

alert("Gracias por su compra, a continuacion le llevaremos a una nueva seccion de creacion de amuletos")


let cantHacer = parseInt(prompt("Cuantos amuletos quieres crear?"))

class Amuleto{
    constructor(nombre, precio, utilidad){
        this.nombre = nombre;
        this.precio = precio;
        this.utilidad = utilidad;
    }
}


for (i = cantHacer; i > 0; i--) {
    let nombreAmuleto = prompt("Ingrese nombre del Amuleto")
    let precioAmuleto = parseInt(prompt("Ingrese precio del Amuleto"))
    let utilidadAmuleto = prompt("Describa la utilidad del Amuleto")

    const Amuletos = []
    Amuletos.push(new Amuleto(nombreAmuleto, precioAmuleto, utilidadAmuleto))

    for (const datos of Amuletos){
        console.log(datos.nombre);
        console.log(datos.precio);
        console.log(datos.utilidad);
    }
}

