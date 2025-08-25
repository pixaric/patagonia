function generarQR() {
  const qrContainer = document.getElementById("qrcode");
  if (!qrContainer) return;

  const resumenTexto = pedido.map(p => `${p.nombre} x${p.cantidad} (€${(p.precio * p.cantidad).toFixed(2)})`).join("\n");
  const total = pedido.reduce((acc, p) => acc + p.precio * p.cantidad, 0).toFixed(2);
  const contenidoQR = `Pedido:\n${resumenTexto}\nTotal: €${total}`;

  qrContainer.innerHTML = ""; // Limpia el QR anterior
  new QRCode(qrContainer, {
    text: contenidoQR,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
