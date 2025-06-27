// navbar color change on scroll
const navbar = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled'); 
  }

  else {
    navbar.classList.remove('scrolled'); 
  }
});

// Scroll into section
function scrollInto (id){
  const section = document.getElementById(id)

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
}

// Auto increment applications number
const startValue = 234;
const increment = 11;
const maxDay = 28;

const today = new Date();
const currentDay = today.getDate();

let displayValue = startValue;
if (currentDay >=1 && currentDay <= maxDay){
  displayValue = startValue + increment * (currentDay - 1); 
}

document.querySelector(".applications-number").textContent = displayValue;

// NAVBAR NUMBER INCREMENT ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const applicationsNumberElement = document.querySelector(".applications-number");

    if (applicationsNumberElement) {
        animateCounter(applicationsNumberElement, 0, displayValue, 2000); // Animate from 0 to 549 in 2 seconds
    }
});

// Function to animate the counter
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); 
        const currentValue = Math.floor(progress * (end - start) + start);

        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Company partners slider
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const slides = Array.from(slider.querySelectorAll(".slide"));

        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            slider.appendChild(clone);
        });

        let scrollAmount = 0; 
        const slideWidth = slides[0].offsetWidth; 
        const totalWidth = slides.length * slideWidth;

        const isMiddleSlider = slider.classList.contains("slider-middle");
        const direction = isMiddleSlider ? -1 : 1;

        const speed = 0.5; // Adjust this value to change speed (higher = faster)

        function slide() {
            scrollAmount += direction * speed; // Use the speed multiplier

            if (direction === 1 && scrollAmount >= totalWidth) {
                scrollAmount = 0; 
            } else if (direction === -1 && scrollAmount <= 0) {
                scrollAmount = totalWidth; 
            }

            slider.style.transform = `translateX(-${scrollAmount}px)`;

            requestAnimationFrame(slide);
        }

        requestAnimationFrame(slide);
    });
});

// Mentor slider
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('#mentorSliderContainer .mentor-slider');
  const slides = document.querySelectorAll('#mentorSliderContainer .mentor-slide');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const visibleSlides = 5;
  let position = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${position * (100 / visibleSlides)}%)`;
  }

  nextBtn.addEventListener('click', () => {
    if (position < slides.length - visibleSlides) {
      position++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (position > 0) {
      position--;
      updateSlider();
    }
  });
});

// Waiting list form



