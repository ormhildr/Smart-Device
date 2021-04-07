'use strict';

const footerMenu = document.querySelectorAll(`.page-footer__list`);
const footerNavTitle = document.querySelectorAll(`.page-footer__nav`);

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
