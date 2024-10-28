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
loadScript('asset/style/js/component/gsap-fun.js');
loadScript('footer.js');

/**** cursor ****/
var mainDev = document.querySelectorAll("#main-body")
var cursor = document.querySelector("curosr")

mainDev.addEventListener(mousemove,function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})


/**** cursor ****/