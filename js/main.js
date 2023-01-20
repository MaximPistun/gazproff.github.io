"use strict"
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    },
};
if (isMobile.any()) {
    document.body.classList.add('_touch');
}else{
    document.body.classList.add('_pc');
}


let headerTl = gsap.timeline()
headerTl.to(".header", {y: -150, duration: 2, opacity:0})
            .to(".header", { duration:0.6, background: "#fff", })
            .to(".header", {y: 0, duration:2, opacity:1, paddingBottom: "5px", paddingTop: "10px"})


ScrollTrigger.create({
    animation: headerTl,
    trigger: ".intro",
    start: "top",
    end: "bottom",
    scrub: true,
})
let headertlAct = gsap.timeline()
headertlAct.to(".header", {y: -150, duration: 2, opacity:0})
            .to(".header", { duration:0.6, background: "#fff", })
            .to(".header", {y: 0, duration:2, opacity:1, paddingBottom: "5px", paddingTop: "10px"})


ScrollTrigger.create({
    animation: headertlAct,
    trigger: ".intro",
    start: "top",
    end: "bottom",
    scrub: true,
})