// Header Component

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="page-up-btn">
        <a href="#"> <img src="dist/images/arrowhead-up.webp" alt="arrow-top" /> </a>
      </div>

      <div class="small-header">
        <div class="header-row-one">
          <p>#1 Service Auto Multi-Marcă</p>
        </div>
        <div class="header-row-two">
          <p>Luni - Vineri: 08:00 - 17:00 <br /> Sambată: 08:00 - 13:00  </p>
          <p>Programează-te: <a href="tel:+0745 354 522">+0745 354 522</a></p>
        </div>
      </div>

      <nav class="header">
        <h1 class="logo"><a href="index.html">Service Auto</a></h1>

        <img src="dist/images/phone-menu.webp" class="toggle-button" />

        <div class="links">
          <ul>
            <li><a  href="index.html">Acasă</a></li>

            <li class="services-links">
              <a href="services.html">Servicii  <img class='down-arrow-desktop'  src="dist/images/down-arrow.webp" alt="arrow-down">  </a>
              <img
                class="down-arrow"
                src="dist/images/down-arrow.webp"
                alt="arrow-down"
              />
              <div class="desktop-menu-services">
                <p><a href="services-card1.html">Electrică Auto</a></p>
                <p><a href="services-card2.html">Mecanică Auto</a></p>
                <p><a href="services-card3.html">Service sisteme de răcire</a></p>
                <p><a href="services-card4.html">Service Și Reparații Motoare</a></p>    
                <p><a href="services-card5.html">Schimb Kit Distribuție <br /> Și Ambreiaj</a></p>
                <p><a href="services-card6.html">Reparații Suspensie <br /> Și Frânare</a></p>
              </div>
            </li>

            <li class="services-menu">
              <a href="services-card1.html">Electrică Auto</a>
            </li>
            <li class="services-menu">
              <a href="services-card2.html">Mecanică Auto</a>
            </li>
            <li class="services-menu">
              <a href="services-card3.html">Service sisteme de răcire</a>
            </li>
            <li class="services-menu">
              <a href="services-card4.html">Service Și Reparații Motoare</a>
            </li>
            <li class="services-menu">
              <a href="services-card5.html">Schimb Kit Distribuție <br /> Și Ambreiaj</a>
            </li>
            <li class="services-menu">
              <a href="services-card6.html">Reparații Suspensie <br /> Și Frânare</a>
            </li>
            <li><a href="aboutus.html">Despre Noi</a></li>
            <li><a href="https://ascompactservice.ro/Contact/">Contact</a></li>
          </ul>
        </div>
        <div class="background"></div>
      </nav>
    </header>
    `;
  }
}

customElements.define('get-header', Header);

// Footer Component

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <footer>
<div class="footer-contact">
  <div class="contact location">
    <img src="../dist/images/pin.webp" alt="maps pin" />
    <div class="contact-text">
      <p>Strada Pufuleti Nr.18</p>
      <p>Rosu, Chiajna</p>
    </div>
  </div>

  <div class="contact mail">
    <img src="../../dist/images/mail.webp" alt="illustration of a envelope" />
    <div class="contact-text">
      <p>Trimite-ne un mail: </p>
      <a href = "mailto:ascompactservice@gmail.com">ascompactservice@gmail.com</a>
    </div>
  </div>

  <div class="contact phone">
    <img src="../../dist/images/phone.webp" alt="illustration of a phone" />
    <div class="contact-text">
      <p>Sună-ne la:</p>
      <a href="tel:+0745 354 522">+0745 354 522</a>
    </div>
  </div>
</div>

<div class="footer-nav">
  <div class="logo-text">
    <h3>Service Auto</h3>
    <p>A&S Compact Service, Service Auto De Calitate</p>
  </div>

  <div class="navigation">
    <h3>Link-uri Utile</h3>
    <a href="index.html">Acasă </a>
    <a href="services.html"> Servicii </a>
    <a href="aboutus.html"> Despre Noi </a>
    <a href="https://ascompactservice.ro/Contact/"> Contact </a>
  </div>

  <div class="footer-services">
    <h3>Serviciile Noastre</h3>
    <a href="services-card1.html"> Electrică Auto </a>
    <a href="services-card2.html"> Mecanică Auto </a>
    <a href="services-card3.html"> Service sisteme de răcire </a>
    <a href="services-card4.html"> Service Și Reparații Motoare </a>
    <a href="services-card5.html"> Schimb Kit Distributie  Și Ambreiaj </a>
    <a href="services-card6.html"> Reparatii Suspensie  Si Franare </a>
  </div>

  <div class="footer-social">
  <a href="https://www.facebook.com/ascompactservice" target="blank" class="social-margin">
   <div class="social-icon facebook">
     <i class="fa fa-facebook" aria-hidden="true"></i>
   </div>
   </a>  
  </div>

  </div>
  
  <div class="footer-copyright">
  <p>
  © Copyright A&S Compact Service 2022.<br />
  <a href="GDPR/privacy.html">Privacy policy</a> ,
  <a href="GDPR/terms.html">Terms and conditions</a>
  </p>
  <p>Created by NC Web Design</p>
  </div>
  </footer>
  `;
  }
}
{
  /* <a target=”_blank” href="https://www.facebook.com/ascompactservice"><i class="fa fa-facebook-f"></i></a> */
}

customElements.define('get-footer', Footer);

//   <a href="#"><i class="fa fa-instagram"></i></a>
//  <a href="#"> <i class="fa fa-twitter"></i></a>

// Appointment

class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="appointment">
<div class="appointment-title">
  <h2>Programează-ți o întâlnire astăzi</h2>
  <p>Specialistii dumneavoastră în reparații și întreținere auto</p>
</div>
<div class="number-button">
<a href="tel:+0745 354 522">+0745 354 522</a>
  <a href="https://ascompactservice.ro/Contact/" class="btn--active">Contact</a>
</div>
</div>
`;
  }
}

customElements.define('get-app', App);

// Discount

class Discount extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="discount-services">
    <i class="fa fa-percent"></i>
    <h3>Programare Telefonică</h3>
    <p>Face-ți o programare acum, menționați că veniți de pe site și beneficiați de o reducere de 10 RON.</p>
    <a href="https://ascompactservice.ro/Contact/">Contact</a>
  </div>

`;
  }
}

customElements.define('get-discount', Discount);

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
