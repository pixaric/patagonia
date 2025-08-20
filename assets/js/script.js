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

  // Like/Dislike con localStorage
  const voteBoxes = document.querySelectorAll(".vote-box");

  voteBoxes.forEach((box) => {
    const id = box.getAttribute("data-id");
    const likeBtn = box.querySelector(".like-btn");
    const dislikeBtn = box.querySelector(".dislike-btn");
    const likeCount = box.querySelector(".like-count");
    const dislikeCount = box.querySelector(".dislike-count");

    // Cargar votos guardados
    const savedVotes = JSON.parse(localStorage.getItem("votes-" + id)) || { like: 0, dislike: 0, voted: null };
    likeCount.textContent = savedVotes.like;
    dislikeCount.textContent = savedVotes.dislike;

    // Función para votar
    function vote(type) {
      if (savedVotes.voted) return; // ya votó

      savedVotes[type]++;
      savedVotes.voted = type;
      localStorage.setItem("votes-" + id, JSON.stringify(savedVotes));

      likeCount.textContent = savedVotes.like;
      dislikeCount.textContent = savedVotes.dislike;
    }

    likeBtn.addEventListener("click", () => vote("like"));
    dislikeBtn.addEventListener("click", () => vote("dislike"));
  });
});