const modal = document.querySelector(".modal");

function handleShowModal() {
  if (!modal) return;
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close modal-close">&times;</button>
      <div class="modal-info">
        <h3>Регистрация прошла успешно!</h3>
        <h4>В течение 24 часов вы получите письмо с подтверждением регистрации.</h4>
      </div>
      <button type="button" class="button-primary close">Хорошо</button>
    </div>
  `;

  modal.showModal();

  const closeBtns = modal.querySelectorAll(".close");
  closeBtns.forEach((btn) => {
    btn.onclick = () => modal.close();
  });

  modal.onclick = (e) => {
    if (e.target === modal) modal.close();
  };
}

export { handleShowModal };
