
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