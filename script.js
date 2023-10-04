function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
};

init()

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 20 + "px";
    cursor.style.top = dets.y + 20 + "px"
})

gsap.from(".page1 h1, h2", {
    opacity: 0,
    color: "red",
    duration: 3,
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start: "top 28%",
        end: "top 0",
        scrub: 5
    }
})

tl.to(".page1 h1", {
    x: -100,
}, "anime")

tl.to(".page1 h2", {
    x: 100
}, "anime")

tl.to(".page1 video", {
    width: "90%"
}, "anime")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start: "top -100%",
        end: "top -120%",
        scrub: 3
    }
})

tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        markers: true,
        start: "top -310%",
        end: "top -320%",
        scrub: 3
    }
});

tl3.to(".main", {
    backgroundColor: "#0f0d0d"
})

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var att = elem.getAttribute("data-image")
        cursor.style.width = "400px"
        cursor.style.height = "380px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        purple.style.display = "block"
    })
    elem.addEventListener("mouseleave", function () {
        purple.style.display = "none"
    })
})