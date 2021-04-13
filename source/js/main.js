'use strict';

const body = document.body;
const footerMenu = document.querySelectorAll(`.page-footer__list`);
const footerNavTitle = document.querySelectorAll(`.page-footer__nav`);

const modalWindow = document.querySelector(`.modal`);
const modalOverlay = modalWindow.querySelector(`.modal__overlay`);
const modalClosed = modalWindow.querySelector(`.modal__close`);
const modalOpened = document.querySelector(`.header-nav__button`);

const forms = document.querySelectorAll(`form`);

window.Modernizr.on(`webp`, function (result) {
  if (result) {
    body.classList.add(`page__webp`);
  }
});

document.querySelectorAll(`input[name=phone]`).forEach((e) => {
  window.IMask(e, { mask: `+{7}(000)000-00-00` });
});

const openModal = () => {
  modalWindow.classList.add(`modal--active`);
  body.style.overflow = `hidden`;
};

const closeModal = () => {
  modalWindow.classList.remove(`modal--active`);
  body.style.overflow = `visible`;
};

if (modalWindow !== null && modalOpened !== null && modalClosed !== null && modalOverlay !== null) {
  modalOpened.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    openModal();
    modalWindow.querySelector(`input[name=name]`).focus();
  });
  modalClosed.addEventListener(`click`, closeModal);
  modalOverlay.addEventListener(`click`, closeModal);

  window.addEventListener(`keydown`, function (evt) {
    if (evt.keyCode === 27) {
      if (modalWindow.classList.contains(`modal--active`)) {
        evt.preventDefault();
        closeModal();
      }
    }
  });
}

if (footerMenu !== null && footerNavTitle !== null) {
  Array.from(footerMenu).forEach((el) => {
    el.classList.remove(`page-footer__list--nojs`);

    if (el.classList.contains(`page-footer__list--opened`)) {
      el.classList.remove(`page-footer__list--opened`);
      el.classList.add(`page-footer__list--closed`);
    }
  });

  Array.from(footerNavTitle).forEach((el) => {
    el.classList.remove(`page-footer__nav--nojs`);

    if (el.classList.contains(`page-footer__nav--opened`)) {
      el.classList.remove(`page-footer__nav--opened`);
      el.classList.add(`page-footer__nav--closed`);
    }

    el.addEventListener(`click`, () => {
      const openedList = document.querySelector(`.page-footer__list--opened`);
      const openedNav = document.querySelector(`.page-footer__nav--opened`);

      if (openedList !== null && openedNav !== null && openedNav !== el) {
        openedList.classList.remove(`page-footer__list--opened`);
        openedNav.classList.remove(`page-footer__nav--opened`);
        openedList.classList.add(`page-footer__list--closed`);
        openedNav.classList.add(`page-footer__nav--closed`);
      }

      const menuList = el.querySelector(`.page-footer__list`);
      menuList.classList.toggle(`page-footer__list--closed`);
      el.classList.toggle(`page-footer__nav--closed`);
      menuList.classList.toggle(`page-footer__list--opened`);
      el.classList.toggle(`page-footer__nav--opened`);
    });
  });
}

if (forms !== null) {
  Array.from(forms).forEach((el) => {
    const formName = el.querySelector(`input[name=name]`);
    const formPhone = el.querySelector(`input[name=phone]`);
    const formNMessage = el.querySelector(`textarea[name=message]`);

    el.addEventListener(`submit`, () => {
      localStorage.setItem(`name`, formName.value);
      localStorage.setItem(`phone`, formPhone.value);
      localStorage.setItem(`message`, formNMessage.value);
    });
  });
}
