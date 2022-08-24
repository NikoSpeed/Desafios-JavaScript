const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`

fetch('productos.json')
.then((response) => response.json())
.then(infromacion => {
    let acumulador = ``;
    infromacion.forEach((producto) =>{
        console.log(producto)
        const idButton = `add-cart${producto.id}`
        acumulador += `<div class="card bg-light">
        <div class="text-center py-3">
        <h4>${producto.tipo}</h4>
        </div>
        <img src="${producto.img}">
        <div class="text-center py-3">
        <p>$${producto.precio}</p>
        </div>
        <div class="text-center py-1">
        <p> Este es un producto </p>
        </div>
        <div class="text-center py-2">
        <a class="boton" id=${idButton} data-id="${producto.id} "href="#"> Agregar al carrito </a>
        </div>
        </div>`
    })
    document.getElementById("seccion-card").innerHTML = acumulador;
})

fetch('productos.json')
.then((response) => response.json())
.then(infromacion => {
infromacion.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener("click", () => {
        carrito.push(producto)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`
        console.log(carrito)
    })
})
})

let boton2 = document.getElementById("vaciarCarro")
  boton2.addEventListener("click", vaciarCarrito)
function vaciarCarrito(){
    swal("ERROR", "Esta funcion no está disponible", "error")
}

