import "./css/fonts.css";
import "./css/style.css";
import "./css/sidebar.css";
import "./css/library.css";
import "./css/overlay.css";
import "./css/modal.css";
import "./css/modal-form.css";
import "./css/book-status.css";

import Modal from "./js/modal/modal";
import Library from "./js/library/library";

const openModalBtns = document.querySelectorAll("#newBookBtn");
const closeModalBtns = document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector("#overlay");

const modalHTML = document.querySelector("#modal");
const modalForm = document.querySelector(".modal-form");

let libraryHTML = document.querySelector(".library");
let myLibrary = new Library(libraryHTML);

let addBookModal = new Modal(
  overlay,
  modalHTML,
  openModalBtns,
  closeModalBtns,
  modalForm,
  myLibrary
);
