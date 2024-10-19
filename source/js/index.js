'use strict';

function listener(selector, event, callback) {
  return selector.addEventListener(event, callback);
}

function selector(selector) {
   return document.querySelector(selector);
}

const homeBtn = selector('.home-nav');
const aboutBtn = selector('.about-nav')
const projectBtn = selector('.project-nav');
const contactBtn = selector('.contact-nav');
const navBtn = selector('.navBtn');

const homePage = selector('#hero-page');
const aboutPage = selector('#about-page');
const projectPage = selector('#project-page');
const contactPage = selector('#contact-page');

listener(window, 'scroll', () => {
  let scrollPosition = window.scrollY || window.pageYOffset;
  let homePos = homePage.offsetTop;
  let aboutPos = aboutPage.offsetTop;
  let projectPos = projectPage.offsetTop;
  let contactPos = contactPage.offsetTop;

  switch(true) {
    case (scrollPosition >= homePos && scrollPosition < aboutPos):
      projectBtn.style.color = "#FFF";
      aboutBtn.style.color = "#FFF";
      contactBtn.style.color = "#FFF";
      homeBtn.style.color = "#FD7014";
      break;

    case (scrollPosition >= aboutPos && scrollPosition < projectPos):
      homeBtn.style.color = "#FFF";
      projectBtn.style.color = "#FFF";
      contactBtn.style.color = "#FFF";
      aboutBtn.style.color = "#FD7014";
      break;

    case (scrollPosition >= projectPos && scrollPosition < contactPos):
      homeBtn.style.color = "#FFF";
      aboutBtn.style.color = "#FFF";
      contactBtn.style.color = "#FFF";
      projectBtn.style.color = "#FD7014";
      break;

    case (scrollPosition >= contactPos):
      homeBtn.style.color = "#FFF";
      aboutBtn.style.color = "#FFF";
      projectBtn.style.color = "#FFF";
      contactBtn.style.color = "#FD7014";
      break;
  }
});
const navBarBtn = selector('.fa-bars');
const navigation = selector('.nav-bar');

listener(navBarBtn, 'click', () => {
  navigation.classList.toggle('displayFlex');
  navigation.classList.toggle('displayNone');
});