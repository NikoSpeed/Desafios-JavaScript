const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`

const productos = [
    {
        id:1,
        tipo:"Amuleto",
        img:"https://static.wikia.nocookie.net/hollowknight/images/3/34/Kingsoul.png",
        stock: 20,
        precio: 30
    },

    {
        id:2,
        tipo:"Mascara",
        img:"https://static.wikia.nocookie.net/hollowknight/images/2/20/Ancient_Mask.png",
        stock: 9,
        precio: 120
        },
    
    {
        id:3,
        tipo:"Vasija",
        img:"https://static.wikia.nocookie.net/hollowknight/images/4/4c/Soul_Vessel.png",
        stock: 12,
        precio:80
        }
]

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="card bg-light">
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



productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener("click", () => {
        carrito.push(producto)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`
        console.log(carrito)
    })
})

let boton2 = document.getElementById("vaciarCarro")
  boton2.addEventListener("click", vaciarCarrito)
function vaciarCarrito(){
    swal("ERROR", "Esta funcion no está disponible", "error")
}

