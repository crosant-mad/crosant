/* ==========================================
   CROSÁNT
   APP.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        HEADER SCROLL
    =========================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "rgba(248,244,238,.96)";
            header.style.backdropFilter = "blur(12px)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

            document.querySelector(".logo").style.color = "#1D1D1B";

            document.querySelectorAll("nav a").forEach(link => {
                link.style.color = "#1D1D1B";
            });

        } else {

            header.style.background = "transparent";
            header.style.backdropFilter = "none";
            header.style.boxShadow = "none";

            document.querySelector(".logo").style.color = "#FFFFFF";

            document.querySelectorAll("nav a").forEach(link => {
                link.style.color = "#FFFFFF";
            });

        }

    });

    /*=========================================
        SCROLL SUAVE
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*=========================================
        REVEAL ANIMATION
    =========================================*/

    const reveals = document.querySelectorAll(

        ".concepto, .collection, .card, .atelier, footer"

    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    reveals.forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });

    /*=========================================
        CARDS HOVER
    =========================================*/

    const cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-12px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px)";

        });

    });

});
