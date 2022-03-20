// Count numbers when the page is scrolled

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
