function createBannerr() {
    return `
            <div class="bannerr" style="background-image: url('https://images.remotehub.com/d42c62669a7711eb91397e038280fee0/1200x6000/ec1eb042.jpg');">
         
            </div>
    `;
}

document.querySelectorAll('custom-banner').forEach(el => el.outerHTML = createBannerr());
