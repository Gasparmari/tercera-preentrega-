class Producto {

    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}



function guardarProductoEnLs(producto) {
    
    const productoAAgregar = {
        nombre: producto.nombre,
        precio: producto.precio
    }

    const ls = localStorage.getItem("carrito")

    if(ls === null) {
        const carrito = [productoAAgregar]
        localStorage.setItem("carrito", JSON.stringify(carrito))


    localStorage.setItem('carrito', JSON.stringify(carrito))
    }
}



function renderizarProductos(productos) {

    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    for(const producto of productos) {

        const divPadre = document.createElement("div");
        divPadre.className = "col-12 col-sm-4 mb-2";

        const divCard = document.createElement("div");
        divCard.className = "card";
        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body";
        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = producto.nombre;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `<strong>Precio:</strong> $${producto.precio} - <strong>Stock:</strong> ${producto.stock}`;

        const button = document.createElement("button");
        button.className = "btn btn-primary";
        button.innerText = "Comprar";
        
        
        button.addEventListener("click", () => {

            guardarProductoEnLs(producto)
        }) 


        divCardBody.append(h5, p);
        divCardBody.append(h5, p, button);
        divCard.append(divCardBody);
        divPadre.append(divCard);

        contenedor.append(divPadre);
    }

}


const listadoDeProductos = [
    new Producto("harry potter", 5000, 5),
    new Producto("juegos del hambre", 14000, 10),
    new Producto("el hobbit", 10000, 2),
    new Producto("juego de tronos", 8000, 4),
];

renderizarProductos(listadoDeProductos);
