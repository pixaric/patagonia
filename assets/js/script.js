document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll("#cafes details");

  detailsElements.forEach((el) => {
    el.addEventListener("toggle", () => {
      if (el.open) {
        detailsElements.forEach((other) => {
          if (other !== el) {
            other.removeAttribute("open");
          }
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Colapso exclusivo para cafés
  const detailsElements = document.querySelectorAll("#cafes details");
  detailsElements.forEach((el) => {
    el.addEventListener("toggle", () => {
      if (el.open) {
        detailsElements.forEach((other) => {
          if (other !== el) {
            other.removeAttribute("open");
          }
        });
      }
    });
  });

  // Evaluación con estrellas
  const ratings = document.querySelectorAll(".rating");

  ratings.forEach((rating) => {
    const stars = rating.querySelectorAll(".star");

    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const value = parseInt(star.getAttribute("data-value"));
        rating.setAttribute("data-score", value);

        stars.forEach((s, i) => {
          s.classList.toggle("active", i < value);
        });
      });
    });
  });
});