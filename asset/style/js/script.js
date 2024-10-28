// Function to dynamically load a JS file
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}



loadScript('asset/style/js/component/header.js');
loadScript('asset/style/js/component/slider.js');
loadScript('asset/style/js/component/catagories.js');
loadScript('asset/style/js/component/features-products.js');
loadScript('asset/style/js/component/shoes-products.js');
loadScript('asset/style/js/component/banner.js');
loadScript('asset/style/js/component/function.js');
// loadScript('asset/style/js/component/gsap-function.js');
loadScript('footer.js');