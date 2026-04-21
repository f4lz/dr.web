import {
  validateForm,
  onHandleDisableButton,
  validateInput,
} from "./validation.js";

const setFormValue = ({
  button,
  emailAlert,
  inputs,
  name,
  value,
  checkbox,
}) => {
  if (name === "checkbox") {
    validateForm({ inputs, checkbox });
    onHandleDisableButton(button);
    return;
  }

  const currentInput = inputs.find((input) => input.name === name);
  if (!currentInput) return;

  currentInput.value = value;

  if (currentInput.type === "email") {
    emailAlert.classList.add("show");
  }

  validateInput(currentInput);
  validateForm({ inputs, checkbox });
  onHandleDisableButton(button);
};

export { setFormValue };
