import { enableButton, isValid, disableButton } from "./validation.js";
import { handleShowModal } from "./modal.js";

export default function regForm() {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitButton = e.submitter;

    if (!isValid) return;

    // Промис для условного запроса
    return new Promise((resolve) => {
      disableButton(submitButton);
      setTimeout(() => {
        resolve(console.log("Form Submitted"));
      }, 1000);
    }).then((data) => {
      console.log(data);
      handleShowModal();
      enableButton(submitButton);
    });
  });
}
