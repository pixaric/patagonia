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