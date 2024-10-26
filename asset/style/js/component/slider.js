

function createSlider() {
    return `
            <div class="slider-main">
                <div class="slider-btn">
                    <button onclick="prev()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    </button>
                    <button onclick="next()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    </button>
                </div>
                <div class="slids">
                    <img src="https://images.remotehub.com/d42c62669a7711eb91397e038280fee0/1200x6000/ec1eb042.jpg?version=1618112516" alt="">
                </div>
                <div class="slids">
                    <img src="https://images.remotehub.com/ace0aaa09a7711eb8e999a0aaf11a20e/1200x6000/ce972803.jpg?version=1618112444" alt="">
                </div>
                <div class="slids">
                    <img src="https://images.remotehub.com/512bf05e9a7a11ebac3a9a0aaf11a20e/1200x6000/0a026a71.jpg?version=1618113595" alt="">
                </div>
                <div class="slids">
                    <img src="https://graphicsfamily.com/wp-content/uploads/edd/2023/06/E-commerce-Website-Product-Banner-Design-1180x664.jpg" alt="">
                </div>
            </div>

            <div class="dot-container">
                <span class="dot" onclick="goToSlide(0)"></span>
                <span class="dot" onclick="goToSlide(1)"></span>
                <span class="dot" onclick="goToSlide(2)"></span>
                <span class="dot" onclick="goToSlide(3)"></span>
                <span class="dot" onclick="goToSlide(4)"></span>
            </div> 
    `;
}

// document.getElementById('header').innerHTML = createHeader();
document.querySelectorAll('custom-slider').forEach(el => el.outerHTML = createSlider());
