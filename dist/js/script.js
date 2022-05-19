class Header extends HTMLElement{connectedCallback(){this.innerHTML='\n    <header>\n      <div class="page-up-btn">\n        <a href="#"> <img src="images/arrowhead-up.png" alt="arrow-top" /> </a>\n      </div>\n\n      <div class="small-header">\n        <div class="header-row-one">\n          <p>#1 Service Auto Multi-Marca</p>\n        </div>\n        <div class="header-row-two">\n          <p>Luni - Vineri: 08:00 - 17:00 <br /> Sambata: 08:00 - 13:00  </p>\n          <p>Programeaza-te: <a href="tel:+0745 354 522">+0745 354 522</a></p>\n        </div>\n      </div>\n\n      <nav class="header">\n        <h1 class="logo"><a href="index.html">Service Auto</a></h1>\n\n        <img src="dist/images/phone-menu.webp" class="toggle-button" />\n\n        <div class="links">\n          <ul>\n            <li><a  href="index.html">Acasa</a></li>\n\n            <li class="services-links">\n              <a href="services.html">Servicii  <img class=\'down-arrow-desktop\'  src="images/down-arrow.png" alt="arrow-down">  </a>\n              <img\n                class="down-arrow"\n                src="images/down-arrow.png"\n                alt="arrow-down"\n              />\n              <div class="desktop-menu-services">\n                <p><a href="services-card1.html">Performance Upgrade</a></p>\n                <p><a href="services-card2.html">Transmission Services</a></p>\n                <p><a href="services-card3.html">Break Repair & Service</a></p>\n                <p><a href="services-card4.html">Engine Service & Repair</a></p>\n                <p><a href="services-card5.html">Suspension Service</a></p>\n                <p><a href="services-card6.html">Cooling System Service</a></p>\n              </div>\n            </li>\n\n            <li class="services-menu">\n              <a href="services-card1.html">Performance Upgrade</a>\n            </li>\n            <li class="services-menu">\n              <a href="services-card2.html">Transmission Services</a>\n            </li>\n            <li class="services-menu">\n              <a href="services-card3.html">Break Repair & Service</a>\n            </li>\n            <li class="services-menu">\n              <a href="services-card4.html">Engine Service & Repair</a>\n            </li>\n            <li class="services-menu">\n              <a href="services-card5.html">Suspension Service</a>\n            </li>\n            <li class="services-menu">\n              <a href="services-card6.html">Cooling System Service</a>\n            </li>\n            <li><a href="aboutus.html">Despre Noi</a></li>\n            <li><a href="contact.html">Contact</a></li>\n          </ul>\n        </div>\n        <div class="background"></div>\n      </nav>\n    </header>\n    '}}customElements.define("get-header",Header);class Footer extends HTMLElement{connectedCallback(){this.innerHTML=' <footer>\n<div class="footer-contact">\n  <div class="contact location">\n    <img src="images/pin.png" />\n    <div class="contact-text">\n      <p>Strada Pufuleti Nr.18</p>\n      <p>Rosu, Chiajna</p>\n    </div>\n  </div>\n\n  <div class="contact mail">\n    <img src="images/mail.png" />\n    <div class="contact-text">\n      <p>Trimite-ne un mail: </p>\n      <a href = "mailto:ascompactservice@gmail.com">ascompactservice@gmail.com</a>\n    </div>\n  </div>\n\n  <div class="contact phone">\n    <img src="images/phone.png" />\n    <div class="contact-text">\n      <p>Suna-ne la:</p>\n      <a href="tel:+0745 354 522">+0745 354 522</a>\n    </div>\n  </div>\n</div>\n\n<div class="footer-nav">\n  <div class="logo-text">\n    <h3>Service Auto</h3>\n    <p>A&S Compact Service, service auto de calitate</p>\n  </div>\n\n  <div class="navigation">\n    <h3>Link-uri Utile</h3>\n    <a href="index.html">Acasa </a>\n    <a href="services.html"> Servicii </a>\n    <a href="aboutus.html"> Despre Noi </a>\n    <a href="contact.html"> Contact </a>\n  </div>\n\n  <div class="footer-services">\n    <h3>Serviciile Noastre</h3>\n    <a href="services-card1.html"> Performance Upgrade </a>\n    <a href="services-card2.html"> Transmission Services </a>\n    <a href="services-card3.html"> Break Repair & Service </a>\n    <a href="services-card4.html"> Engine Service & Repair </a>\n    <a href="services-card5.html"> Suspension Service </a>\n    <a href="services-card6.html"> Cooling System Service </a>\n  </div>\n\n  <div class="footer-social">\n    <a href="#"><i class="fa fa-facebook-f"></i></a>\n  </div>\n</div>\n\n<div class="footer-copyright">\n  <p>\n    © Copyright Service Auto 2022. All right reserved <br />\n    <a href="GDPR/privacy.html">Privacy policy</a> ,\n    <a href="GDPR/terms.html">Terms and conditions</a>\n  </p>\n  <p>Created by NC Web Design</p>\n</div>\n</footer>\n'}}customElements.define("get-footer",Footer);class App extends HTMLElement{connectedCallback(){this.innerHTML='<div class="appointment">\n<div class="appointment-title">\n  <h2>Programează-ți o întâlnire astăzi</h2>\n  <p>Specialistii dumneavoastră în reparații și întreținere auto</p>\n</div>\n<div class="number-button">\n  <h2>+40 745 354 522</h2>\n  <a href="contact.html" class="btn--active">Contact</a>\n</div>\n</div>\n'}}customElements.define("get-app",App);class Discount extends HTMLElement{connectedCallback(){this.innerHTML='\n    <div class="discount-services">\n    <i class="fa fa-percent"></i>\n    <h3>Programare Telefonica</h3>\n    <p>Face-ti o programare acum, mentionati ca veniti de pe site și beneficiază de o reducere de 10 RON.</p>\n    <a href="contact.html">Contact</a>\n  </div>\n\n'}}customElements.define("get-discount",Discount);let nextBtn=document.querySelector(".next-button"),prevBtn=document.querySelector(".prev-button");nextBtn&&nextBtn.addEventListener("click",moveToNextSlide),prevBtn&&prevBtn.addEventListener("click",moveToPrevSlide);let slidePositionImages=0,slidesImages=document.querySelectorAll(".image");const totalSlidesImages=slidesImages.length;function updateSlidePositionImages(){for(let e of slidesImages)e.classList.remove("image-visible");slidesImages[slidePositionImages].classList.add("image-visible")}let slidePositionText=0,slidesText=document.querySelectorAll(".review");const totalSlidesText=slidesText.length;function updateSlidePositionText(){for(let e of slidesText)e.classList.remove("review-visible");slidesText[slidePositionText].classList.add("review-visible")}function moveToNextSlide(){slidePositionImages===totalSlidesImages-1?slidePositionImages=0:slidePositionImages++,slidePositionText===totalSlidesText-1?slidePositionText=0:slidePositionText++,updateSlidePositionText(),updateSlidePositionImages()}function moveToPrevSlide(){0===slidePositionImages?slidePositionImages=totalSlidesImages-1:slidePositionImages--,0===slidePositionText?slidePositionText=totalSlidesText-1:slidePositionText--,updateSlidePositionText(),updateSlidePositionImages()}const background=document.querySelector(".background"),backgroundClose=document.querySelector(".background").addEventListener("click",closeHamMenu),toggleButton=document.getElementsByClassName("toggle-button")[0],links=document.getElementsByClassName("links")[0];function closeHamMenu(){links.classList.remove("active"),background.style.display="none"}function hamMenu(){links.classList.toggle("active"),background.style.display="block"}toggleButton.addEventListener("click",hamMenu);let windowWidth=window.innerWidth,counter=1,dropDownMenu=document.querySelector(".down-arrow").addEventListener("click",servicesMenu);const arrowMenu=document.querySelector(".down-arrow");function servicesMenu(){counter++;document.querySelectorAll(".services-menu").forEach((e=>{e.classList.toggle("show")})),arrowMenu.style.transform=counter%2==0?"rotate(180deg)":"rotate(360deg)"}const desktopHoverServices=document.querySelector(".desktop-menu-services");let servicesLinkOpen=document.querySelector(".services-links").addEventListener("mouseover",showHoverMenuOpen);function showHoverMenuOpen(){window.innerWidth<=885.92&&(servicesLinkOpen=document.querySelector(".services-links").removeEventListener("mouseover",showHoverMenuOpen)),desktopHoverServices.style.display="block"}let servicesLinkClose=document.querySelector(".services-links").addEventListener("mouseout",showHoverMenuClose);function showHoverMenuClose(){desktopHoverServices.style.display="none"}if("/aboutus.html"==window.location.pathname){let e=!1;window.addEventListener("scroll",(()=>{let n=document.querySelector(".count-number").getBoundingClientRect().top,i=window.innerHeight;if(!e&&n<i){document.querySelectorAll(".number").forEach((n=>{n.innerHTML="0";const i=()=>{dataAttr=+n.getAttribute("data-counter"),initialValue=+n.innerHTML,divideDataAttr=dataAttr/450,initialValue<dataAttr?(n.innerHTML=`${Math.ceil(initialValue+divideDataAttr)}`,e=!0,setTimeout(i,1)):n.innerHTML=dataAttr};i()}))}}))}