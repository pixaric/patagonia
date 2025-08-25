let pedido = [];


function agregarAlPedido(nombre, precio) {
  const existente = pedido.find(p => p.nombre === nombre);
  if (existente) {
    existente.cantidad += 1;
  } else {
    pedido.push({ nombre, precio, cantidad: 1 });
  }

  actualizarResumen();
  generarQR(); // ← Regenera el QR automáticamente
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

function cambiarCantidadUI(inputId, cambio) {
  const input = document.getElementById(inputId);
  let valor = parseInt(input.value);
  valor = isNaN(valor) ? 1 : valor + cambio;
  if (valor < 1) valor = 1;
  input.value = valor;
}


  actualizarResumen();
  generarQR();




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

