function createCategoriesSlider() {
    return `
            <div class="categories">
                <h1>Ceategories Gallery</h1>
                <div class="sliderr-btn">
                    <button class="crsr-hover" onclick="moveLeft()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    </button>
                    <button class="crsr-hover" onclick="moveRight()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </button>
                </div>
                <div class="ctgy-slid">
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                    <a href="">
                    <div class="ctgy-top">
                        <img src="https://contents.mediadecathlon.com/p2393865/59e9499e49d170903fb3c71ddaf67c3a/p2393865.jpg?format=auto&quality=70&f=2520x0" alt="">
                    </div>
                    <div class="ctgy-down">
                        <span>Shoes for winter</span>
                    </div>
                    </a>
                </div>
            </div>
    `;
}

// document.getElementById('header').innerHTML = createHeader();
document.querySelectorAll('custom-categories-slider').forEach(el => el.outerHTML = createCategoriesSlider());
