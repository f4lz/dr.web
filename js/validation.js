let isValid = false;

const setError = (name, error) => {
  const errorEl = document.querySelector(`[data-error-for="${name}"]`);
  const inputEl = document.querySelector(`#${name}`);
  if (!errorEl || !inputEl) return;

  if (error) {
    errorEl.textContent = error;
    inputEl.classList.add("input-error");
    return;
  }
  errorEl.textContent = "";
  inputEl.classList.remove("input-error");
};

const validateInput = (currentInput) => {
  if (!currentInput.value.trim()) {
    setError(currentInput.name, "Укажите данные");
    return;
  }
  setError(currentInput.name, null);
};

const disableButton = (button) => {
  if (!button) return;

  button.disabled = true;
  button.classList.add("button-primary--disabled");
};

const enableButton = (button) => {
  if (!button) return;

  button.disabled = false;
  button.classList.remove("button-primary--disabled");
};

const onHandleDisableButton = (button) => {
  if (!isValid) return disableButton(button);
  enableButton(button);
};

const validateForm = ({ inputs, checkbox }) => {
  if (!checkbox.checked) {
    isValid = false;
    return;
  }
  isValid = true;

  if (!inputs) return;
  inputs.forEach((input) => {
    isValid = !!input.value;
  });
};

export {
  validateForm,
  validateInput,
  setError,
  onHandleDisableButton,
  disableButton,
  enableButton,
  isValid,
};
