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
/************************ end qty  + - product page ************************/
// Get elements
    const zoomContainer = document.querySelector('.zoom-container');
    const zoomedImage = document.getElementById('zoomed-image');
    const thumbnailImages = document.querySelectorAll('.products-images img');
    const sImage = document.querySelector('.product-image');
    const mainImage = document.querySelector('.product-image img');
    // Update zoomed image on thumbnail click
    thumbnailImages.forEach(image => {
        image.addEventListener('click', () => {
            mainImage.src = image.src;
            zoomedImage.src = image.src;
        });
    });
// Show zoomed image on hover
sImage.addEventListener('mouseenter', () => {
    zoomContainer.style.display = 'block';
});
// Hide zoomed image when not hovering
sImage.addEventListener('mouseleave', () => {
    zoomContainer.style.display = 'none';
});
// Move zoomed image based on mouse position
sImage.addEventListener('mousemove', (e) => {
    const rect = sImage.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X within main image
    const y = e.clientY - rect.top;  // Mouse Y within main image
    const zoomLevel = 3; // Zoom factor
    // Calculate percentage position within the image
    const moveX = (x / rect.width) * 100;
    const moveY = (y / rect.height) * 100 - 5; // Adjust Y position slightly to center vertically
    // Adjust the zoomed image's position based on mouse position
    zoomedImage.style.transformOrigin = `${moveX}% ${moveY}%`;
    zoomedImage.style.transform = `scale(${zoomLevel})`;
});
/************************ start description review section product page ************************/
