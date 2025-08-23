function toggleMenu() {
  document.getElementById('menuLateral').classList.toggle('show');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menuLateral').classList.remove('show');
  });
});

document.addEventListener('click', function (event) {
  const menu = document.getElementById('menuLateral');
  const toggle = document.querySelector('.menu-toggle');

  if (menu.classList.contains('show') &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)) {
    menu.classList.remove('show');
  }
});



function aplicarFiltro() {
  const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]');
  const soloVegano = document.getElementById('solo-vegano').checked;
  const seleccionados = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => 'alergeno-' + cb.value);

  const items = document.querySelectorAll('.menu-item');

  items.forEach(item => {
    const clases = item.classList;
    const tieneAlergeno = seleccionados.some(alergeno => clases.contains(alergeno));
    const esVegano = clases.contains('vegano');

    if (tieneAlergeno || (soloVegano && !esVegano)) {
      item.style.display = 'none';
    } else {
      item.style.display = '';
    }
  });
}

document.querySelectorAll('.checkboxes input, #solo-vegano').forEach(el => {
  el.addEventListener('change', aplicarFiltro);
});


const botonSubir = document.getElementById('boton-subir');

window.addEventListener('scroll', () => {
  botonSubir.classList.toggle('visible', window.scrollY > 300);
});

botonSubir.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // puedes quitar esto si no quieres animación
  });
});

const listaPedido = [];

function agregarAlPedido(item) {
  listaPedido.push(item);
  actualizarResumen();
}

function actualizarResumen() {
  const ul = document.getElementById("listaPedido");
  ul.innerHTML = "";
  listaPedido.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = producto;
    ul.appendChild(li);
  });
}

function imprimirPedido() {
  const ventana = window.open('', '', 'height=600,width=400');
  ventana.document.write('<html><head><title>Tu Pedido</title></head><body>');
  ventana.document.write('<h2>🧾 Pedido Café Patagonia</h2><ul>');
  listaPedido.forEach(producto => {
    ventana.document.write(`<li>${producto}</li>`);
  });
  ventana.document.write('</ul></body></html>');
  ventana.document.close();
  ventana.print();
}

