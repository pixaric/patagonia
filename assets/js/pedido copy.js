let pedido = [];


function agregarAlPedido(nombre, precio) {
  const existente = pedido.find(p => p.nombre === nombre);
  if (existente) {
    existente.cantidad += 1;
  } else {
    pedido.push({ nombre, precio, cantidad: 1 });
  }
  actualizarResumen();
}


function actualizarResumen() {
  const lista = document.getElementById("listaPedido");
  const total = document.getElementById("totalPedido");
  if (!lista || !total) return;

  lista.innerHTML = "";
  let suma = 0;

  pedido.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} – €${producto.precio.toFixed(2)}`;
    lista.appendChild(li);
    suma += producto.precio;
  });

  total.textContent = `€${suma.toFixed(2)}`;
}

function vaciarPedido() {
  pedido = [];
  actualizarResumen();
}

// pop-up
function mostrarPopup() {
  document.getElementById("popupOferta").style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popupOferta").style.display = "none";
}

// Mostrar el popup después de 3 segundos
setTimeout(mostrarPopup, 3000);

function mostrarFechaHora() {
  const ahora = new Date();
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  const formato = ahora.toLocaleString('es-ES', opciones);
  document.getElementById("fechaHora").textContent = `📅 ${formato}`;
}

// Mostrar fecha y hora al cargar el ticket
mostrarFechaHora();

function actualizarResumen() {
  const lista = document.getElementById("listaPedido");
  const total = document.getElementById("totalPedido");
  const resumen = document.getElementById("resumenPedido");
  if (!lista || !total || !resumen) return;

  lista.innerHTML = "";
  let suma = 0;

  pedido.forEach((producto, index) => {
    const li = document.createElement("li");
    li.className = "item-ticket";

    // Nombre del producto
    const nombre = document.createElement("span");
    nombre.className = "producto-nombre";
    nombre.textContent = `${producto.nombre} – €${producto.precio.toFixed(2)}`;

    // Botón de eliminar
    const eliminar = document.createElement("button");
    eliminar.className = "boton-eliminar";
    eliminar.textContent = "✖"; // Puedes usar ❌ o 🗑️ si prefieres
    eliminar.title = "Eliminar este producto";
    eliminar.onclick = () => {
      pedido.splice(index, 1);
      actualizarResumen();
    };

    li.appendChild(nombre);
    li.appendChild(eliminar);
    lista.appendChild(li);
    suma += producto.precio;
  });

  total.textContent = `€${suma.toFixed(2)}`;
}
//pedido
pedido.forEach((producto, index) => {
  const li = document.createElement("li");
  li.className = "item-ticket";

  const nombre = document.createElement("span");
  nombre.className = "producto-nombre";
  nombre.textContent = `${producto.nombre} – €${producto.precio.toFixed(2)}`;

  const eliminar = document.createElement("span");
  eliminar.className = "eliminar-x";
  eliminar.textContent = "✖";
  eliminar.title = "Eliminar este producto";
  eliminar.onclick = () => {
    pedido.splice(index, 1);
    actualizarResumen();
  };

  li.appendChild(nombre);
  li.appendChild(eliminar);
  lista.appendChild(li);
});

function actualizarResumen() {
  const lista = document.getElementById("listaPedido");
  const total = document.getElementById("totalPedido");
  const resumen = document.getElementById("resumenPedido");
  if (!lista || !total || !resumen) return;

  lista.innerHTML = "";
  let suma = 0;

  pedido.forEach((producto, index) => {
    const li = document.createElement("li");
    li.className = "item-ticket";

    // Nombre del producto
    const nombre = document.createElement("span");
    nombre.className = "producto-nombre";
    nombre.textContent = `${producto.nombre} – €${producto.precio.toFixed(2)}`;

    // Ícono de eliminar
    const eliminar = document.createElement("span");
    eliminar.className = "eliminar-x";
    eliminar.textContent = "✖";
    eliminar.title = "Eliminar este producto";
    eliminar.onclick = () => {
      pedido.splice(index, 1);
      actualizarResumen();
    };

    li.appendChild(nombre);
    li.appendChild(eliminar);
    lista.appendChild(li);
    suma += producto.precio;
  });

  total.textContent = `€${suma.toFixed(2)}`;
}

