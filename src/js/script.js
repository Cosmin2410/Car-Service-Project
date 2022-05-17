// Testimonial

let nextBtn = document.querySelector('.next-button');
let prevBtn = document.querySelector('.prev-button');

if (nextBtn) {
  nextBtn.addEventListener('click', moveToNextSlide);
}

if (prevBtn) {
  prevBtn.addEventListener('click', moveToPrevSlide);
}

//Images changing when button press
let slidePositionImages = 0;
let slidesImages = document.querySelectorAll('.image');
const totalSlidesImages = slidesImages.length;

function updateSlidePositionImages() {
  for (let slide of slidesImages) {
    slide.classList.remove('image-visible');
  }
  slidesImages[slidePositionImages].classList.add('image-visible');
}

//Text changing when text press

let slidePositionText = 0;
let slidesText = document.querySelectorAll('.review');
const totalSlidesText = slidesText.length;

function updateSlidePositionText() {
  for (let slide of slidesText) {
    slide.classList.remove('review-visible');
  }

  slidesText[slidePositionText].classList.add('review-visible');
}
// Buttons changing the image and text when pressed

function moveToNextSlide() {
  if (slidePositionImages === totalSlidesImages - 1) {
    slidePositionImages = 0;
  } else {
    slidePositionImages++;
  }

  if (slidePositionText === totalSlidesText - 1) {
    slidePositionText = 0;
  } else {
    slidePositionText++;
  }

  updateSlidePositionText();
  updateSlidePositionImages();
}

function moveToPrevSlide() {
  if (slidePositionImages === 0) {
    slidePositionImages = totalSlidesImages - 1;
  } else {
    slidePositionImages--;
  }

  if (slidePositionText === 0) {
    slidePositionText = totalSlidesText - 1;
  } else {
    slidePositionText--;
  }

  updateSlidePositionText();
  updateSlidePositionImages();
}
//
//
//

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

//
//
//

// Count numbers when the page is scrolled
if (window.location.pathname == '/aboutus.html') {
  let executed = false;
  window.addEventListener('scroll', () => {
    let content = document.querySelector('.count-number');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (!executed && contentPosition < screenPosition) {
      const numbers = document.querySelectorAll('.number');

      numbers.forEach((number) => {
        number.innerHTML = '0';

        const loopCounter = () => {
          dataAttr = +number.getAttribute('data-counter');
          initialValue = +number.innerHTML;
          divideDataAttr = dataAttr / 450;
          if (initialValue < dataAttr) {
            number.innerHTML = `${Math.ceil(initialValue + divideDataAttr)}`;
            executed = true;
            setTimeout(loopCounter, 1);
          } else {
            number.innerHTML = dataAttr;
          }
        };
        loopCounter();
      });
    }
  });
}

// Cookie Pop Up

// const cookie = document.querySelector('.cookie-pop-up');
// const goUpBtn = document.querySelector('.page-up-btn');

// const closeCookieX = document
//   .querySelector('.close-cookie')
//   .addEventListener('click', closeX);

// const closeCookieYes = document
//   .querySelector('.close-cookie-yes')
//   .addEventListener('click', closeYes);

// function closeX() {
//   cookie.style.display = 'none';
//   goUpBtn.style.bottom = '5rem';
// }

// function closeYes() {
//   cookie.style.display = 'none';
//   goUpBtn.style.bottom = '5rem';
// }
