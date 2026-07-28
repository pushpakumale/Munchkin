/* ==========================================
   FOR MY MUNCHKIN ❤️
   Part 3 - script.js
========================================== */

const startButton = document.getElementById("startButton");
const secret = document.getElementById("secret");
const closeSecret = document.getElementById("closeSecret");

// -------------------------------
// Enter Button
// -------------------------------

startButton.addEventListener("click", () => {

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "pages/question.html";
    }, 1000);

});

// -------------------------------
// Secret Message
// Double click title
// -------------------------------

document.querySelector(".main-title").addEventListener("dblclick", () => {

    secret.style.display = "flex";

});

closeSecret.addEventListener("click", () => {

    secret.style.display = "none";

});

// -------------------------------
// Heart Burst Effect
// -------------------------------

document.addEventListener("click", function(e){

    for(let i=0;i<12;i++){

        createHeart(e.clientX,e.clientY);

    }

});

function createHeart(x,y){

    const heart=document.createElement("div");

    heart.innerHTML=["❤️","💖","💕","💗","🌸"][Math.floor(Math.random()*5)];

    heart.style.position="fixed";

    heart.style.left=x+"px";

    heart.style.top=y+"px";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    let dx=(Math.random()-0.5)*200;

    let dy=-150-Math.random()*150;

    heart.animate([

        {

            transform:"translate(0,0) scale(1)",

            opacity:1

        },

        {

            transform:`translate(${dx}px,${dy}px) scale(0)`,

            opacity:0

        }

    ],{

        duration:1800,

        easing:"ease-out"

    });

    setTimeout(()=>{

        heart.remove();

    },1800);

}

// -------------------------------
// Typewriter Effect
// -------------------------------

const description=document.querySelector(".description");

const originalText=description.innerHTML;

description.innerHTML="";

let index=0;

function typeWriter(){

    if(index<originalText.length){

        description.innerHTML+=originalText.charAt(index);

        index++;

        setTimeout(typeWriter,20);

    }

}

window.onload=()=>{

    typeWriter();

}

// -------------------------------
// Cursor Glow
// -------------------------------

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="18px";

glow.style.height="18px";

glow.style.borderRadius="50%";

glow.style.background="rgba(255,100,170,.45)";

glow.style.pointerEvents="none";

glow.style.zIndex="99999";

glow.style.filter="blur(8px)";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-9+"px";

    glow.style.top=e.clientY-9+"px";

});

// -------------------------------
// Random Compliments
// -------------------------------

const compliments=[

"You deserve happiness ❤️",

"I hope today is kind to you 🌸",

"Keep smiling 😊",

"You make the world brighter ✨",

"Don't forget to eat properly 🍕",

"Someone is silently rooting for you 💖",

"You are appreciated 🌷",

"I hope work becomes easier today ☕",

"You've got a beautiful smile ❤️",

"You matter 🌸"

];

setInterval(()=>{

    const bubble=document.createElement("div");

    bubble.className="compliment";

    bubble.innerText=compliments[Math.floor(Math.random()*compliments.length)];

    bubble.style.position="fixed";

    bubble.style.bottom="-50px";

    bubble.style.left=Math.random()*80+10+"%";

    bubble.style.background="rgba(255,255,255,.9)";

    bubble.style.padding="12px 20px";

    bubble.style.borderRadius="30px";

    bubble.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

    bubble.style.fontSize="14px";

    bubble.style.zIndex="999";

    bubble.style.animation="floatBubble 8s linear forwards";

    document.body.appendChild(bubble);

    setTimeout(()=>{

        bubble.remove();

    },8000);

},6000);

// -------------------------------
// Konami Code ❤️
// ↑↑↓↓←→←→BA
// -------------------------------

const code=[

"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"

];

let entered=[];

document.addEventListener("keydown",(e)=>{

    entered.push(e.key);

    entered=entered.slice(-code.length);

    if(JSON.stringify(entered)==JSON.stringify(code)){

        megaHeartRain();

    }

});

function megaHeartRain(){

    for(let i=0;i<250;i++){

        setTimeout(()=>{

            createHeart(
                Math.random()*window.innerWidth,
                Math.random()*window.innerHeight
            );
        },i*15);

    }

}

console.log("❤️ Hidden surprise loaded...");