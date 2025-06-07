window.addEventListener("DOMContentLoaded", function () {
    function init() {
        gsap.registerPlugin(ScrollTrigger);

        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        ScrollTrigger.refresh();
    }

    init();

    let cursor = document.querySelector(".cursor");
    let main = document.querySelector("#main");

    document.addEventListener("mousemove", (dets) => {
        cursor.style.left = dets.x + 20 + "px";
        cursor.style.top = dets.y + 20 + "px";
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: "#main",
            start: "top 30%",
            end: "top 0",
            scrub: 2
        }
    });

    tl.to(".page1 h1", { x: -100 }, "anim");
    tl.to(".page1 h2", { x: 100 }, "anim");
    tl.to(".page1 video", { width: "90%" }, "anim");

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: "#main",
            start: "top -115%",
            end: "top -130%",
            scrub: 2
        }
    });

    tl2.to("#main", { backgroundColor: "#fff" });

    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: "#main",
            start: "top -280%",
            end: "top -300%",
            scrub: 2
        }
    });

    tl3.to("#main", { backgroundColor: "#0F0D0D" });

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            let att = item.getAttribute("data-image");
            cursor.style.width = "300px";
            cursor.style.height = "250px";
            cursor.style.borderRadius = "0";
            cursor.style.backgroundImage = `url(${att})`;
        });

        item.addEventListener("mouseleave", () => {
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.borderRadius = "50%";
            cursor.style.backgroundImage = `none`;
            item.style.backgroundColor = "transparent";
        });
    });

    let h4 = document.querySelectorAll("#nav h4");
    let purple = document.querySelector("#purple");
    h4.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            purple.style.display = "block";
            purple.style.opacity = 1;
        });
        item.addEventListener("mouseleave", () => {
            purple.style.display = "none";
            purple.style.opacity = 0;
        });
    });
});
