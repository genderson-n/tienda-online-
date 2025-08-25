const productos = [
  { id: 1, nombre: "Camisa", precio: 20, imagen: "https://via.placeholder.com/150" },
  { id: 2, nombre: "Pantalón", precio: 30, imagen: "https://via.placeholder.com/150" },
  { id: 3, nombre: "Zapatos", precio: 50, imagen: "https://via.placeholder.com/150" },
];

let carrito = [];

// Mostrar productos
const lista = document.getElementById("listaProductos");
productos.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${p.imagen}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p>$${p.precio}</p>
    <button onclick="agregarCarrito(${p.id})">Agregar al carrito</button>
  `;
  lista.appendChild(card);
});

// Agregar al carrito
function agregarCarrito(id) {
  const prod = productos.find(p => p.id === id);
  carrito.push(prod);
  actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
  const items = document.getElementById("itemsCarrito");
  items.innerHTML = "";
  carrito.forEach((p, index) => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => {
      carrito.splice(index, 1);
      actualizarCarrito();
    };
    li.appendChild(btn);
    items.appendChild(li);
  });

  document.getElementById("cantidad").textContent = carrito.length;
  document.getElementById("total").textContent = carrito.reduce((acc, p) => acc + p.precio, 0);
}

// Mostrar/Ocultar carrito
document.getElementById("verCarrito").addEventListener("click", () => {
  document.getElementById("carrito").classList.toggle("oculto");
});

// Checkout
document.getElementById("checkout").addEventListener("click", () => {
  document.getElementById("formularioCompra").classList.remove("oculto");
});