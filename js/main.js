// =======================================
// ATHIRA PORTFOLIO
// MAIN.JS
// =======================================

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// -----------------------------
// Navbar Background on Scroll
// -----------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "rgba(255,255,255,.75)";
        navbar.style.backdropFilter = "blur(25px)";
        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.15)";

    }

    else{

        navbar.style.background = "rgba(255,255,255,.15)";
        navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.08)";

    }

});

// -----------------------------
// Hero Animation
// -----------------------------

gsap.from(".hero-left h3",{

    y:50,
    opacity:0,
    duration:1

});

gsap.from(".hero-left h1",{

    y:60,
    opacity:0,
    duration:1,
    delay:.3

});

gsap.from(".hero-left h2",{

    y:60,
    opacity:0,
    duration:1,
    delay:.6

});

gsap.from(".hero-left p",{

    y:60,
    opacity:0,
    duration:1,
    delay:.9

});

gsap.from(".btn",{

    scale:.8,
    opacity:0,
    duration:1,
    delay:1.2

});

gsap.from(".hero-right img",{

    x:120,
    opacity:0, 
    duration:1.5,
    delay:.5
});

// -----------------------------
// Scroll Animation
// -----------------------------

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{

        opacity:0,

        y:80,

        duration:1,

        scrollTrigger:{

            trigger:section,

            start:"top 75%"

        }

    });

});

// -----------------------------
// Button Hover
// -----------------------------

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        gsap.to(button,{
            scale:1.05,
            duration:.3
        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{
            scale:1,
            duration:.3
        });

    });

});

console.log("Athira Portfolio Loaded Successfully");
// =======================================
// FLOATING PETALS
// =======================================

const petalsContainer = document.getElementById("petals-container");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
        (8 + Math.random()*6) + "s";

    petal.style.opacity =
        Math.random();

    petal.style.transform =
        `scale(${0.5 + Math.random()})`;

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },14000);

}

setInterval(createPetal,700);