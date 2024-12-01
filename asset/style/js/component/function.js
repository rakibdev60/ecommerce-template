
/************************ start headder ************************/
const MenuIcon = document.querySelector('.ri-menu-3-fill');
const MenuIconCloss = document.querySelector('.ri-menu-2-line');
const HdrMenu  = document.querySelector('.menus');


MenuIcon.addEventListener('click', function () {
   HdrMenu.classList.add('menus-responsive');
});
MenuIconCloss.addEventListener('click', function () {
    HdrMenu.classList.remove('menus-responsive');
 });

const SrchIcon = document.querySelector('.search-icon');
const SrchIconCloss = document.querySelector('.search-closs');
const SrchFild = document.querySelector('.srch');
 
SrchIcon.addEventListener('click', function () {
SrchFild.classList.add('srch-responsive');
});
SrchIconCloss.addEventListener('click', function () {
    SrchFild.classList.remove('srch-responsive');
 });
/************************ end headder ************************/
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
const ctgySlid = document.querySelector('.ctgy-slid');

function autoScroll() {
    // Scroll by a fixed amount every time (210px)
    ctgySlid.scrollLeft += 210;

    // If the scroll reaches the end, reset to the start
    if (ctgySlid.scrollLeft + ctgySlid.clientWidth >= ctgySlid.scrollWidth) {
        ctgySlid.scrollLeft = 0; // Reset to start
    }
}

// Start auto-scroll every 3 seconds
setInterval(autoScroll, 3000); // Scroll every 3 seconds (3000ms)



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
        const icons = document.querySelectorAll('.products button');

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
/************************ start qty  + - product page ************************/

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}
/************************ end qty  + - product page ************************/
/************************ start description review section product page ************************/

/************************ end description review section product page ************************/
