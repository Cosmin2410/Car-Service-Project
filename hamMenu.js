// Hamburger menu

const background = document.querySelector('.background');
const backgroundClose = document
  .querySelector('.background')
  .addEventListener('click', closeHamMenu);

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const links = document.getElementsByClassName('links')[0];

toggleButton.addEventListener('click', hamMenu);

function closeHamMenu() {
  links.classList.remove('active');
  background.style.display = 'none';
}

function hamMenu() {
  links.classList.toggle('active');
  background.style.display = 'block';
}

// Drop Down Menu Phone

let windowWidth = window.innerWidth;
let counter = 1;

let dropDownMenu = document
  .querySelector('.down-arrow')
  .addEventListener('click', servicesMenu);

const arrowMenu = document.querySelector('.down-arrow');

function servicesMenu() {
  counter++;
  const servicesLinks = document.querySelectorAll('.services-menu');
  servicesLinks.forEach((serviceLink) => {
    serviceLink.classList.toggle('show');
  });

  if (counter % 2 === 0) {
    arrowMenu.style.transform = 'rotate(180deg)';
  } else {
    arrowMenu.style.transform = 'rotate(360deg)';
  }
}

// Desktop Hover Menu

const desktopHoverServices = document.querySelector('.desktop-menu-services');

let servicesLinkOpen = document
  .querySelector('.services-links')
  .addEventListener('mouseover', showHoverMenuOpen);

function showHoverMenuOpen() {
  if (window.innerWidth <= 885.92) {
    servicesLinkOpen = document
      .querySelector('.services-links')
      .removeEventListener('mouseover', showHoverMenuOpen);
  }

  desktopHoverServices.style.display = 'block';
}

let servicesLinkClose = document
  .querySelector('.services-links')
  .addEventListener('mouseout', showHoverMenuClose);

function showHoverMenuClose() {
  desktopHoverServices.style.display = 'none';
}
