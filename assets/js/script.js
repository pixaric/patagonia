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
