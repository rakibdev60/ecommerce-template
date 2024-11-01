// const scroll = new LocomotiveScroll({
//     el: document.querySelector('html'),
//     smooth: true
// });

/**** cursor ****/
var mainDev  = document.querySelector('#main-body');
var cursor   = document.querySelector('#cursor');
var cursor2  = document.querySelector('#cursor2')
var crsrHover = document.querySelectorAll('.crsr-hover');

mainDev.addEventListener('mousemove', function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0
    });
});

mainDev.addEventListener('mousemove', function(dets) {
    gsap.to(cursor2, {
        x: dets.x,
        y: dets.y,
        duration: 1.5,
        ease: "back.out"
    });
});
// Loop through each product and add event listeners
crsrHover.forEach(crsrHover => {
    crsrHover.addEventListener('mouseenter', function() {
        gsap.to(cursor2, {
            scale: 4
        });
    });

    crsrHover.addEventListener('mouseleave', function() {
        gsap.to(cursor2, {
            scale: 1

        });
    });
});
/**** cursor ****/
/****** liner ******/
var anmtdDiv = document.querySelector('.animated');
var anmtdsvg = document.querySelector('#animate-line');
var finalPath = 'M 10 80 Q 95 100 180 80';

anmtdDiv.addEventListener("mousemove", (e) => {
    var { left, top } = anmtdDiv.getBoundingClientRect();
    var x = e.clientX - left;
    var y = Math.max(0, Math.min(100, e.clientY - top));
    
    gsap.to(anmtdsvg, { attr: { d: `M 10 80 Q 95 ${y} 180 80` } });
    // gsap.to(anmtdsvg, { attr: { d: `M 10 80 Q ${x} ${y} 180 80` } });
});

anmtdDiv.addEventListener("mouseleave", () => {
    gsap.to(anmtdsvg, { 
        attr: { 
            d: finalPath 
        },
        duration:0.8,
        ease:"elastic.out(1.0.2)"
    });
});


// anmtdDiv.forEach(anmtdDiv => {
//     anmtdDiv.addEventListener('mousemove', function (dets) {

//         var svgAnmtdPath   = `M 10 100 Q 500 ${dets.y} 900 100`
        
//         gsap.to(anmtdsvg, {
//             Attr:{
//                 d:svgAnmtdPath
//             }
//         })
//     })
// })

/****** liner ******/