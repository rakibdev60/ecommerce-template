/******* start slider 

function adjustSliderHeight() {
    const header = document.querySelector('header');
    const slider = document.querySelector('.slider-main');
  
    const headerHeight = header.offsetHeight;
  
    slider.style.height = `calc(100vh - ${headerHeight}px)`;
  
  }
  
  
window.addEventListener('load', adjustSliderHeight);
window.addEventListener('resize', adjustSliderHeight);
********/
const slides = document.querySelectorAll(".slids");
const dots = document.querySelectorAll(".dot"); 
let counter = 0;


slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});


setInterval(() => {
    next();
}, 4000); // 4000ms = 4 seconds

const next = () => {
    counter++;
    if (counter >= slides.length) counter = 0;
    slideImages();
    updateDots();
};

const prev = () => {
    counter--;
    if (counter < 0) counter = slides.length - 1; 
    slideImages();
    updateDots();
};

const slideImages = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};


const updateDots = () => {
    dots.forEach((dot, index) => {
        dot.classList.remove('dot-active');
        if (index === counter) {
            dot.classList.add('dot-active');
        }
    });
};


const goToSlide = (index) => {
    counter = index;
    slideImages();
    updateDots();
};

/******* end slider ********/
/************************ start categories slider ************************/
function moveRight() {
    const container = document.querySelector('.ctgy-slid'); 
    container.scrollBy({
        left: 210, 
        behavior: 'smooth'
    });
}

function moveLeft() {
    const container = document.querySelector('.ctgy-slid');
    container.scrollBy({
        left: -210,
        behavior: 'smooth'
    });
}

/************************ end categories slider ************************/

/************************ start product favorited ************************/
        const icons = document.querySelectorAll('.top button');

        icons.forEach(icon => {
            icon.addEventListener('click', function() {
                
                if (this.id !== 'favorited') {
                    this.id = 'favorited';
                } else {
                    this.id = '';
                }
            });
        });
/************************ end product favorited ************************/