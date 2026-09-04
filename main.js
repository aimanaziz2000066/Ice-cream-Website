var tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#s1",
        start: "0% 80%",
        end: "50% 50%",
        scrub: true,
    }
})

tl.to(".hero-center-image",{
    top: "123%",
    left: "50%",
    width: "56.2vw",
    rotate: "0",

})


var tl1 = gsap.timeline({

    scrollTrigger:{

        trigger: "#s2",

        start: "0% 65%",

        end: "50% 50%",

        scrub: true,

    }

})


tl1.to(".hero-center-image",{
    top: "190%",
    left: "21.5%",
    width: "65vw",
    rotate: "0",

})


var tl2 = gsap.timeline({

    scrollTrigger:{
        trigger: "#s3",
        start: "0% 80%",
        end: "50% 50%",
        scrub: true,
    }
})


tl2.to(".hero-center-image",{
    top: "270.8%",
    left: "29%",
    width: "58vw",
    rotate: "-48deg",

})
