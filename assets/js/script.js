function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

document.addEventListener('click', function (event) {
  const nav = document.querySelector('.nav-links');
  const toggle = document.querySelector('.menu-toggle');

  if (nav.classList.contains('show') &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)) {
    nav.classList.remove('show');
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

