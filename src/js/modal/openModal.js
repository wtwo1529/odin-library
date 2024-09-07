export default function openModal(modal, overlay) {
  if (modal == null) return;

  let form = modal.querySelector(".modal-form");
  let modalHeader = modal.querySelector(".title");

  if (form.dataset.index) {
    modalHeader.textContent = "Edit Book";
  } else {
    modalHeader.textContent = "Add Book";
  }
  modal.classList.add("active");
  overlay.classList.add("active");
}
