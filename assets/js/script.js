
  document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    openButtons.forEach(button => {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        document.getElementById(`modal-${id}`).style.display = 'block';
      });
    });

    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none';
      });
    });

    window.addEventListener('click', (e) => {
      document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
