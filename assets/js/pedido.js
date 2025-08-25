let pedido = [];

function agregarAlPedido(nombre, precio) {
  const existente = pedido.find(p => p.nombre === nombre);
  if (existente) {
    existente.cantidad += 1;
  } else {
    pedido.push({ nombre, precio, cantidad: 1 });
  }

  actualizarResumen();
  generarQR();
}

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
    nombre.textContent = producto.nombre;

    // Controles de cantidad
    const cantidadControl = document.createElement("div");
    cantidadControl.className = "cantidad-ticket";

    const btnMenos = document.createElement("button");
    btnMenos.textContent = "➖";
    btnMenos.onclick = () => {
      producto.cantidad -= 1;
      if (producto.cantidad < 1) {
        pedido.splice(index, 1);
      }
      actualizarResumen();
      generarQR();
    };

    const cantidad = document.createElement("span");
    cantidad.textContent = `x${producto.cantidad}`;

    const btnMas = document.createElement("button");
    btnMas.textContent = "➕";
    btnMas.onclick = () => {
      producto.cantidad += 1;
      actualizarResumen();
      generarQR();
    };

    cantidadControl.appendChild(btnMenos);
    cantidadControl.appendChild(cantidad);
    cantidadControl.appendChild(btnMas);

    // Subtotal
    const subtotal = document.createElement("span");
    subtotal.className = "subtotal";
    subtotal.textContent = `€${(producto.precio * producto.cantidad).toFixed(2)}`;

    li.appendChild(nombre);
    li.appendChild(cantidadControl);
    li.appendChild(subtotal);
    lista.appendChild(li);

    suma += producto.precio * producto.cantidad;
  });

  total.textContent = `€${suma.toFixed(2)}`;
}


function vaciarPedido() {
  pedido = [];
  actualizarResumen();
  generarQR();
}

function cambiarCantidadUI(inputId, cambio) {
  const input = document.getElementById(inputId);
  let valor = parseInt(input.value);
  valor = isNaN(valor) ? 1 : valor + cambio;
  if (valor < 1) valor = 1;
  input.value = valor;
}

// Opcional: inicialización segura
document.addEventListener("DOMContentLoaded", () => {
  actualizarResumen();
  generarQR();
  // mostrarFechaHora(); ← solo si está definida
});

function agregarConCantidad(nombre, precio, inputId) {
  const cantidad = parseInt(document.getElementById(inputId).value);
  if (isNaN(cantidad) || cantidad < 1) return;

  const existente = pedido.find(p => p.nombre === nombre);
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    pedido.push({ nombre, precio, cantidad });
  }

  actualizarResumen();
  generarQR();
}

