import submitForm from "./submitForm";
import { validateInputs } from "./validateForm";
import closeModal from "../closeModal";
import { clearInputs, resetSelects } from "./clearInputs";

export default class Form {
  constructor(library, formHTML, overlay, modal) {
    this.library = library;
    this.form = formHTML;
    this.inputs = formHTML.querySelectorAll("input");
    this.selects = formHTML.querySelectorAll("select");
    this.init(overlay, modal);
  }
  init(overlay, modal) {
    this.setSubmitBtns(modal, overlay);
  }
  setSubmitBtns(modal, overlay) {
    let submitBtn = this.form.querySelector("button");
    submitBtn.addEventListener("click", (event) =>
      this.submit(modal, overlay, event)
    );
  }
  validateInputs(event) {
    for (let i = 0; i < this.inputs.length; i++) {
      console.log(this.inputs[i]);
      if (!this.inputs[i].checkValidity()) {
        event.preventDefault();
        return false;
      }
    }
    for (let i = 0; i < this.selects.length; i++) {
      if (!this.selects[i].checkValidity()) {
        event.preventDefault();
        return false;
      }
    }
    console.log("hi");
    return true;
  }
  submit(modal, overlay, event) {
    if (this.validateInputs(event)) {
      let book = submitForm(this.form);
      this.library.addBook(overlay, modal, book);
      closeModal(modal, overlay);
      clearInputs(this.inputs);
      resetSelects(this.selects);
    }
  }
}
