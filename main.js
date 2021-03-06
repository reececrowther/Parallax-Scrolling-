gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3,
});

// plaents animation 
scene1.to("#bigPlanet", { y: -1.7 * speed, x: 0 * speed }, 0)
scene1.to("#comets", { y: 8 * speed, x: 0 * speed, scale: 0.9, ease: "power1.in" }, 0)
scene1.to("#smallPlanet", { y: -2 * speed, x: -1 * speed }, 0.03)
scene1.to("#mediumPlanet", { y: 0 * speed, x: 1.2 * speed }, 0)


//animate text
scene1.to("#info", { y: 8 * speed }, 0)

//scene 2 ease
let scene2vis = gsap.timeline();
ScrollTrigger.create({
    animation: scene2vis,
    trigger: ".scrollElement",
    start: "990 top",
    end: "3000 5000",
    scrub: 1,
});

scene2vis.to("#scene2",{ css: { visibility: "visible"} }, 0)


/* moon increase */
let moon = gsap.timeline();
ScrollTrigger.create({
    animation: moon,
    trigger: ".scrollElement",
    start: "1000 top",
    end: "3000 5000",
    scrub: 1,
});

moon.to("#moon", { y: - 10 * speed, x: 0 * speed }, 0)
moon.to("#moon", { css: { scaleX: "1", scaleY: "1" , opacity: "1"} }, 0)
moon.to("#moonBg",{ css: { opacity: "1"} }, 0)
moon.to("#scene2Stars",{ css: { opacity: "1"} }, 0)


let info1 = gsap.timeline();
ScrollTrigger.create({
    animation: info1,
    trigger: ".scrollElement",
    start: "1500 top",
    end: "3000 5000",
    scrub: 1,
});
let info = document.getElementById('info-title');

info1.to("#info-1",{ css: { opacity: "1"} }, 0)
info1.to("#info-1", { y: - 2 * speed, x: 0 * speed }, 0)

window.addEventListener("scroll",(event) =>{
    let scroll = this.scrollY;
    console.log(scroll);
    if(scroll > 1400 && scroll < 2000){
        info.innerHTML = "Web Developer";
    }
    else if(scroll > 2000 && scroll < 2500){
        info.innerHTML = "Game Developer";
    }
    else if(scroll > 2500 && scroll < 3000){
        info.innerHTML = "3D Modeler";
    }
})



/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: ".scrollElement",
    start: "2000 top",
    end: "4000 5000",
    scrub: 3,
});

scene3.fromTo("#bigMountain", { y: 300 }, { y: -740 }, 0)
scene3.fromTo("#smallMountain", { y: 300 }, { y: -740 }, 0)
scene3.fromTo("#frontMountains", { y: 300 }, { y: -740 }, 0.23)
scene3.fromTo("#backTrees", { y: 300 }, { y: -740 }, 0.33)
scene3.fromTo("#rightMountain", { y: 300 }, { y: -800 }, 0.53)

scene3.fromTo("#leftTrees", { y: 300 }, { y: -740 }, 0.73)
scene3.fromTo("#rightTrees", { y: 300 }, { y: -700 }, 0.90)

/* Scene 4 */
let scene4 = gsap.timeline();
ScrollTrigger.create({
    animation: scene4,
    trigger: ".scrollElement",
    start: "3000 top",
    end: "5000 bottom",
    scrub: 3,
});

scene4.to("#scene4BG",{ css: { opacity: "1"} }, 0)
scene4.to("#clouds",{ css: { opacity: "1"} }, 0.1)
scene4.to("#sun", { y: -3 * speed, x: -9 * speed }, 0.3)
scene4.to("#sun", { css: { scaleX: "1.3", scaleY: "1.3" , opacity: "1"} }, 0.3)
scene4.fromTo("#BackMountains", { y: 300 }, { y: -790 }, 0.40)
scene4.fromTo("#hiker", { y: 300 }, { y: -790 }, 1)
scene4.to("#info-2",{ css: { opacity: "1"} }, 2)


/* skills */
let icons = gsap.timeline();
ScrollTrigger.create({
    animation: icons,
    trigger: ".scrollElement",
    start: "5000 top",
    end: "6000 bottom",
    scrub: 3,
});
icons.to("#icon-section",{ css: { opacity: "0.8"} }, 0)


var iconRow = document.getElementsByClassName('icons');
var a = 0;

for (var i = 0; i < iconRow.length; i++) {
    var a = Math.floor(Math.random() * 31);
    var shift = (2 * a);
    iconRow[i].style.marginLeft = "-1" + shift + "px";
    console.log(shift);
}
console.log(iconRow);


//reset scrollbar position after refresh
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

const enterFullIcon = '<img src="Svgs/full-screen.png">'
const exitFullIcon = '<img src="Svgs/exitfullscreen.png">'
let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
e.preventDefault();
if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    fsEnter.innerHTML = exitFullIcon;
}
else {
    fullscreen = false;
    document.exitFullscreen();
    fsEnter.innerHTML = enterFullIcon;
}
});


let findOutMore = document.getElementById('home-page-button');
findOutMore.addEventListener('click', function () {
    window.scrollTo(0, 2000);
});
