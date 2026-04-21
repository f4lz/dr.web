import { setFormValue } from "./useForm.js";

export default function createRegInputs() {
  const inputsWrapper = document.querySelector(".form__inputs-wrapper");
  const formEmailAlert = document.querySelector(".form__alert-email");
  const formButton = document.querySelector(".form__button");
  const checkbox = document.querySelector(".form__checkbox");

  const inputs = [
    {
      label: "Фамилия, Имя",
      name: "name",
      value: "",
      type: "text",
    },
    {
      label: "Компания",
      name: "company",
      value: "",
      type: "text",
    },
    {
      label: "Должность",
      name: "jobTitle",
      value: "",
      type: "text",
    },
    {
      label: "E-mail",
      name: "email",
      value: "",
      type: "email",
    },
    {
      label: "Телефон",
      name: "tel",
      value: "",
      type: "tel",
    },
  ];

  const inputsFragment = document.createDocumentFragment();

  inputs.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("form__input");
    li.innerHTML = `
              <label for="${item.name}">${item.label}</label>
              <input type="${item.type}" name="${item.name}" id="${item.name}" value="${item.value}"/>
              <p class="error-message" data-error-for="${item.name}"></p>
          `;

    const input = li.querySelector("input");
    input.addEventListener("input", (event) => {
      setFormValue({
        button: formButton,
        emailAlert: formEmailAlert,
        inputs: inputs,
        name: item.name,
        value: event.target.value,
        checkbox: checkbox,
      });
    });

    inputsFragment.append(li);
  });

  inputsWrapper.append(inputsFragment);

  if (checkbox) {
    checkbox.addEventListener("change", (event) => {
      setFormValue({
        button: formButton,
        emailAlert: formEmailAlert,
        inputs: inputs,
        name: "checkbox",
        value: event.target.checked,
        checkbox: checkbox,
      });
    });
  }
}
