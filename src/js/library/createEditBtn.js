import openModal from "../modal/openModal";
import fillForm from "../modal/form/fillForm";

export default function createEditBtn(overlay, modal, library, bookIndex) {
  let form = modal.querySelector(".modal-form");

  const btn = document.createElement("button");
  btn.classList.add("edit-btn");
  btn.textContent = "Edit";
  btn.addEventListener("click", () => {
    form.dataset.index = bookIndex;
    openModal(modal, overlay);
    fillForm(form, library);
  });

  return btn;
}
