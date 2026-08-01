/* ==========================================
   RulerTek Tracking Systems
   Premium Website Script
========================================== */

// ================= Loader =================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        },800);
    }

});

// ================= Sticky Navbar =================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(7,26,61,.95)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.30)";

    }

    else{

        header.style.background="rgba(7,26,61,.75)";
        header.style.boxShadow="none";

    }

});

// ================= Mobile Menu =================

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

if(menu){

menu.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}

// ================= Smooth Scroll =================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ================= Counter =================

const counters=document.querySelectorAll(".counter");

let counterStarted=false;

function startCounter(){

if(counterStarted) return;

const stats=document.querySelector(".stats");

if(!stats) return;

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight-100){

counterStarted=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

});

}

}

window.addEventListener("scroll",startCounter);

// ================= Fade Animation =================

const reveal=document.querySelectorAll(

".about,.services,.products,.fleet,.stats,.contact,.product-card,.service-card"

);

function revealSection(){

const windowHeight=window.innerHeight;

reveal.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<windowHeight-100){

item.style.opacity="1";

item.style.transform="translateY(0px)";

}

});

}

reveal.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".8s";

});

window.addEventListener("scroll",revealSection);

revealSection();

// ================= Active Menu =================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ================= Hero Floating =================

const heroLogo=document.querySelector(".hero-logo");

if(heroLogo){

setInterval(()=>{

heroLogo.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-12px)"},

{transform:"translateY(0px)"}

],{

duration:3000,

iterations:1

});

},3000);

}

// ================= Back To Top =================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`

position:fixed;
right:20px;
bottom:165px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#071A3D;
color:#FFC107;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 10px 25px rgba(0,0,0,.30);

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ================= Floating Buttons =================

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/917598781902";

whatsapp.target="_blank";

whatsapp.className="float-whatsapp";

whatsapp.innerHTML='<i class="fa-brands fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

const call=document.createElement("a");

call.href="tel:+917598781902";

call.className="float-call";

call.innerHTML='<i class="fa-solid fa-phone"></i>';

document.body.appendChild(call);

console.log("RulerTek Premium Website Loaded");
