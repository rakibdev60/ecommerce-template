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
