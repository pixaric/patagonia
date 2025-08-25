function cargarMenu(ruta) {
  fetch(ruta)
    .then(res => res.text())
    .then(html => {
      document.getElementById("contenido").innerHTML = html;
    })
    .catch(err => {
      console.error("Error al cargar el menú:", err);
    });
}

// Ejemplo de uso:
document.addEventListener("DOMContentLoaded", () => {
  cargarMenu("menus/bebidas.html");
});
