/*=========================================
 RulerTek Tracking Systems
 Module 1 JavaScript
==========================================*/

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 800);

});


// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(7,26,61,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(7,26,61,.55)";
        header.style.boxShadow = "none";

    }

});


// Hero Fade Animation

const hero = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    let value = window.scrollY;

    hero.style.opacity = 1 - value / 700;

    hero.style.transform =
        `translateY(${value * 0.25}px)`;

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// Mobile Menu

const menu = document.querySelector(".menu");

const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Active Menu

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
right:25px;
bottom:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#FFC107;
color:#071A3D;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.25);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// Button Hover Effect

document.querySelectorAll(".primary-btn,.secondary-btn,.call-btn,.whatsapp-btn")
.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});


console.log("RulerTek Tracking Systems Loaded Successfully");
// Counter Animation

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

let count=parseInt(counter.getAttribute("data-count"))||0;

const increment=target/80;

if(count<target){

count+=increment;

counter.innerText=Math.ceil(count)+"+";

counter.setAttribute("data-count",count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});
