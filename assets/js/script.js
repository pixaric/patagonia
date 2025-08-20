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

  // Like/Dislike con opción de cambiar voto
  const voteBoxes = document.querySelectorAll(".vote-box");

  voteBoxes.forEach((box) => {
    const id = box.getAttribute("data-id");
    const likeBtn = box.querySelector(".like-btn");
    const dislikeBtn = box.querySelector(".dislike-btn");
    const likeCount = box.querySelector(".like-count");
    const dislikeCount = box.querySelector(".dislike-count");

    let saved = JSON.parse(localStorage.getItem("votes-" + id)) || {
      like: 0,
      dislike: 0,
      voted: null
    };

    likeCount.textContent = saved.like;
    dislikeCount.textContent = saved.dislike;

    function vote(type) {
      if (saved.voted === type) return; // ya votó lo mismo

      // Si cambia de voto, resta el anterior
      if (saved.voted === "like") saved.like--;
      if (saved.voted === "dislike") saved.dislike--;

      // Suma el nuevo voto
      saved[type]++;
      saved.voted = type;

      localStorage.setItem("votes-" + id, JSON.stringify(saved));

      likeCount.textContent = saved.like;
      dislikeCount.textContent = saved.dislike;

      updateStarRatings();
    }

    likeBtn.addEventListener("click", () => vote("like"));
    dislikeBtn.addEventListener("click", () => vote("dislike"));
  });

  // Estrellas basadas en votos
function updateStarRatings() {
  const starBlocks = document.querySelectorAll(".star-rating");

  starBlocks.forEach((block) => {
    const id = block.getAttribute("data-id");
    const stars = block.querySelectorAll(".star");
    const voteCount = block.querySelector(".vote-count");
    const saved = JSON.parse(localStorage.getItem("votes-" + id)) || { like: 0, dislike: 0 };

    const totalVotes = saved.like + saved.dislike;
    let rating = 0;

    if (totalVotes > 0) {
      rating = Math.round((saved.like / totalVotes) * 5);
    }

    stars.forEach((star, index) => {
      star.classList.toggle("active", index < rating);
    });

    voteCount.textContent = `(${totalVotes} voto${totalVotes !== 1 ? 's' : ''})`;
  });
}

  updateStarRatings();
});