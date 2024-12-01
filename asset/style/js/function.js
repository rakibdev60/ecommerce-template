
/************ start headder ************/
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

/************* start product favorited ************/
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
    const moveY = (y / rect.height) * 100 + 5; // Adjust Y position slightly to center vertically
    // Adjust the zoomed image's position based on mouse position
    zoomedImage.style.transformOrigin = `${moveX}% ${moveY}%`;
    zoomedImage.style.transform = `scale(${zoomLevel})`;
});
/************************ start description review section product page ************************/
/************************ start qty  + - cart page ************************/

function increaseQuantity(button) {
    const input = button.closest('li').querySelector('.qty-input');
    input.value = parseInt(input.value) + 1;
};

function decreaseQuantity(button) {
    const input = button.closest('li').querySelector('.qty-input');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
};

/************************ end qty  + - cart page ************************/
