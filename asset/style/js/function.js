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
/************ end headder ************/
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
/************* end product favorited ***************/
/************* start qty  + - cart page ************/
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
    /********** end qty  + - cart page *********/
    /********** start qty  + - cart offcanvas *********/
    function increaseQnty() {
        const quantityInput = document.getElementById('quantity');
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }

    function decreaseQnty() {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    }
/********** end qty  + - cart offcanvas *********/
/********** start proflle menu icon profile page *********/
const profileMenuIcon = document.querySelector('.profile-menu-icon');
const profileMenuField = document.querySelector('.profile-menu');

profileMenuIcon.addEventListener('click', function () {
    profileMenuField.classList.toggle('profile-menu-responsive'); // 'd-block' ক্লাস যোগ বা সরাবে
});
/********** end proflle menu icon profile page *********/
