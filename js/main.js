const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
document.getElementById("cart-total").innerHTML = `${carrito.length} - $${total}`


const productos = [
    {id:1, tipo:"Amuleto", stock: 20, precio: 30},
    {id:2, tipo:"Mascara", stock: 9, precio: 120},
    {id:3, tipo:"Vasija", stock: 12, precio:80}
]

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="card">
    <h4>${producto.tipo}</h4>
    <div class="precio">
    <p>$${producto.precio}</p>
    </div>
    <p> Este es un producto </p>
    <a class="boton" id=${idButton} data-id="${producto.id} "href="#"> Agregar al carrito </a>
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

let boton = document.getElementById("vaciarCarro")
boton.addEventListener("click", vaciarCarrito)
function vaciarCarrito(){
    localStorage.clear()
}