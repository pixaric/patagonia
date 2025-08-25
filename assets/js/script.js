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

// QR

function generarQR() {
  if (!pedido || pedido.length === 0) return;

  let resumen = "Producto             Cantidad   Subtotal\n";
  resumen += "----------------------------------------\n";
  let total = 0;

  pedido.forEach(p => {
    const subtotal = p.precio * p.cantidad;
    total += subtotal;

    const nombre = p.nombre.padEnd(20); // columna 1
    const cantidad = `x${p.cantidad}`.padEnd(10); // columna 2
    const precio = `${subtotal.toFixed(2)} EUR`; // columna 3

    resumen += `${nombre}${cantidad}${precio}\n`;
  });

  resumen += "----------------------------------------\n";
  resumen += "Total".padEnd(30) + `${total.toFixed(2)} EUR`;

  new QRious({
    element: document.getElementById("codigoQR"),
    value: resumen,
    size: 200,
    background: "#fffdf5",
    foreground: "#4B2E2E",
    level: "H"
  });
}







