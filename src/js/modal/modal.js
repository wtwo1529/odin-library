import openModal from "./openModal";
import closeModal from "./closeModal";
import Form from "./form/Form";

export default class Modal {
  constructor(overlay, modal, openBtns, closeBtns, formHTML, library) {
    this.overlay = overlay;
    this.modal = modal;
    this.form = new Form(library, formHTML, overlay, modal);
    this.init(openBtns, closeBtns);
  }
  init(openBtns, closeBtns) {
    this.setOpenBtns(openBtns);
    this.setCloseBtns(this.overlay);
    this.setCloseBtns(closeBtns);
  }
  setOpenBtns(btns) {
    if (NodeList.prototype.isPrototypeOf(btns)) {
      btns.forEach((btn) => {
        btn.addEventListener("click", () => this.open());
      });
    } else {
      btns.addEventListener("click", () => this.open());
    }
  }
  setCloseBtns(btns) {
    if (NodeList.prototype.isPrototypeOf(btns)) {
      btns.forEach((btn) => {
        btn.addEventListener("click", () => this.close());
      });
    } else {
      btns.addEventListener("click", () => this.close());
    }
  }
  open() {
    openModal(this.modal, this.overlay);
  }
  close() {
    closeModal(this.modal, this.overlay);
  }
}
