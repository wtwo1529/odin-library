export default function createEditBtn(overlay, modal, library) {
  let form = modal.querySelector(".modal-form");

  const btn = document.createElement("button");
  btn.classList.add("edit-btn");
  btn.textContent = "Edit";
  btn.addEventListener("click", () => {
    formHTML.dataset.index = bookIndex;
    openModal(modal, overlay);
    fillForm(form, library);
  });

  return btn;
}   
