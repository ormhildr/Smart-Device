'use strict';

document.querySelectorAll(`input[name=phone]`).forEach((e) => {
  IMask(e, {mask: `+{7}(000)000-00-00`});
});

const footerMenu = document.querySelectorAll(`.page-footer__list`);
const footerNavTitle = document.querySelectorAll(`.page-footer__nav`);

const modalWindow = document.querySelector(`.modal`);
const modalOverlay = modalWindow.querySelector(`.modal__overlay`);
const modalClosed = modalWindow.querySelector(`.modal__close`);
const modalOpened = document.querySelector(`.header-nav__button`);

if (modalWindow !== null && modalOpened !== null && modalClosed !== null && modalOverlay !== null) {
  modalOpened.addEventListener(`click`, () => {
    modalWindow.classList.add(`modal--active`);
  });

  modalClosed.addEventListener(`click`, () => {
    modalWindow.classList.remove(`modal--active`);
  });

  modalOverlay.addEventListener(`click`, () => {
    modalWindow.classList.remove(`modal--active`);
  });

  window.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === 27) {
      if (modalWindow.classList.contains(`modal--active`)) {
        evt.preventDefault();
        modalWindow.classList.remove(`modal--active`);
      }
    }
  });
}

if (footerMenu !== null && footerNavTitle !== null) {
  Array.from(footerMenu).forEach((el) => {
    el.classList.remove(`page-footer__list--nojs`);
  });

  Array.from(footerNavTitle).forEach((el) => {
    el.classList.remove(`page-footer__nav--nojs`);

    el.addEventListener(`click`, () => {
      const menuList = el.querySelector(`.page-footer__list`);
      menuList.classList.toggle(`page-footer__list--closed`);
      el.classList.toggle(`page-footer__nav--closed`);
      menuList.classList.toggle(`page-footer__list--opened`);
      el.classList.toggle(`page-footer__nav--opened`);
    });
  });
}
