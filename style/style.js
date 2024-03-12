
var navbar = document.querySelector('nav')

window.onscroll = function () {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}



let a = 0;

window.addEventListener('scroll', function() {
    const oTop = document.getElementById('counter').getBoundingClientRect().top - window.innerHeight;

    if (a === 0 && window.pageYOffset > oTop) {
        const counterValues = document.querySelectorAll('.counter-value');

        counterValues.forEach(function(element) {
            const countTo = parseInt(element.getAttribute('data-count'));
            const initialValue = parseInt(element.textContent);
            let currentNum = initialValue;

            const duration = 4000;
            const startTime = performance.now();

            function updateText() {
                const timePassed = performance.now() - startTime;
                const progress = Math.min(timePassed / duration, 1);

                currentNum = initialValue + Math.floor((countTo - initialValue) * progress);
                element.textContent = currentNum;

                if (progress < 1) {
                    requestAnimationFrame(updateText);
                } else {
                    element.textContent = countTo;
                }
            }

            updateText();
        });

        a = 1;
    }
});

// ==========================
 // Smooth scrolling effect using JavaScript
// JavaScript to handle smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const sectionId = this.getAttribute('href').substring(1); // Remove the '#'
      const section = document.getElementById(sectionId);
      
      // Calculate the scroll position, considering the padding-top
      const offsetTop = section.offsetTop - 90;

      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
  });
});

// Spinner
var spinner = function (timeout) {
    setTimeout(function () {
        var spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
            spinnerElement.classList.remove('show');
        }
    }, timeout || 0);
};
spinner(0);
