document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('toggle', function () {
      if (item.open) {
        document.querySelectorAll('.menu-item').forEach((other) => {
          if (other !== item) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
});