import { clearInputs, resetSelects } from "./form/clearInputs";

export default function closeModal(modal, overlay) {
  if (modal == null) return;

  let inputs = modal.querySelectorAll("input");
  let selects = modal.querySelectorAll("select");

  modal.classList.remove("active");
  overlay.classList.remove("active");

  clearInputs(inputs);
  resetSelects(selects);

  let form = modal.querySelector(".modal-form");
  form.dataset.index = "";
}
