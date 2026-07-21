// ===============================
// ATHIRA PORTFOLIO LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    gsap.to(".loader-logo",{
        scale:1.2,
        duration:1
    });

    gsap.to("#loader h1",{
        opacity:1,
        y:-10,
        duration:1,
        delay:.5
    });

    gsap.to("#loader p",{
        opacity:1,
        duration:1,
        delay:1
    });

    gsap.to("#loader",{

        opacity:0,

        duration:1,

        delay:2.8,

        onComplete:()=>{

            loader.style.display="none";

            gsap.from("#home",{

                opacity:0,

                y:80,

                duration:1.3

            });

        }

    });

});