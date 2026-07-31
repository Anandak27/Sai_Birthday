function openGift(){

document.getElementById("gift-message").innerHTML=
"💖 Surprise! You are the greatest blessing in my life. Happy Birthday Thangachi! 🎂❤️";

launchConfetti();

document.querySelector("gift-box")
.style.display="none";

}

function launchConfetti(){

for(let i=0;i<100;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";
confetti.style.width="10px";
confetti.style.height="10px";
confetti.style.background=
`hsl(${Math.random()*360},100%,50%)`;

confetti.style.left=Math.random()*100+"vw";
confetti.style.top="-20px";

confetti.style.borderRadius="50%";

document.body.appendChild(confetti);

let fall=Math.random()*5+3;

confetti.animate([

{transform:"translateY(0px)"},
{transform:`translateY(${window.innerHeight}px)`}

],{

duration:fall*1000,
iterations:1

});

setTimeout(()=>{
confetti.remove();
},fall*1000);

}

}

const message = `🎂 Happy Birthday Thangachi ❤️

இனிய பிறந்தநாள் வாழ்த்துக்கள் ❤️

You are my favorite Sister👸🏻.

Thank you for all memories,
smiles and happiness.

Love You Forever 💖`;

let index = 0;

function startTyping(){

document.getElementById("typing")
.innerHTML="";

index=0;

document.querySelector(".surprise-btn")
.style.display="none";

typeEffect();

}

function typeEffect(){

if(index < message.length){

document.getElementById("typing")
.innerHTML += message.charAt(index);

index++;

setTimeout(typeEffect,50);

}

}

function playVideo(){

document
.getElementById("videoBox")
.style.display="block";

const video =
document.getElementById(
"birthdayVideo"
);

video.play();

document
.querySelector(".play-btn")
.style.display="none";

}


// // document.querySelector(".gift").onclick=function(){

// // confetti({

// // particleCount:400,

// // spread:360

// // });

// // alert("I Love You Thangachi ❤️\nHappy Birthday 🎂");

// // }

// function openGift() {
//     const gift = document.querySelector(".gift");
//     const message = document.getElementById("gift-message");

//     // Gift opening animation
//     gift.style.transform = "scale(1.4) rotate(25deg)";

//     // Change gift emoji
//     gift.innerHTML = "💝";

//     // Show surprise message
//     message.innerHTML =
//         "🎉 Happy Birthday My Dear Thangachi ❤️<br><br>You're the greatest gift in my life. Love you forever! 🫀";

//     message.style.opacity = "1";

//     // Optional confetti (if canvas-confetti is included)
//     if (typeof confetti === "function") {
//         confetti({
//             particleCount: 250,
//             spread: 120,
//             origin: { y: 0.6 }
//         });
//     }
// }

function showAlert() {
    alert("I Love You Thangachi ❤️\nHappy Birthday 🎂");
}

function showLoveAlert() {
    document.getElementById("loveAlert").style.display = "flex";
}

function closeLoveAlert() {
    document.getElementById("loveAlert").style.display = "none";
}

const images = document.querySelectorAll(".memory-card img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("zoom");

    });

});


// REASON 
const reasonCards = document.querySelectorAll(".reason-card");

reasonCards.forEach(card => {

    card.addEventListener("click", function(){

        reasonCards.forEach(c => {

            if(c !== this){

                c.classList.remove("active");

            }

        });

        this.classList.toggle("active");

    });

});


// LETTER

const letter = document.querySelector(".letter-box");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            letter.style.opacity="1";

            letter.style.transform="translateY(0) scale(1)";

        }

    });

});

letter.style.opacity="0";
letter.style.transform="translateY(100px) scale(.9)";
letter.style.transition="1s ease";

observer.observe(letter);

// VIDEO
// function playVideo() {

//     const box = document.getElementById("videoBox");
//     const video = document.getElementById("birthdayVideo");

//     box.style.display = "block";

//     box.scrollIntoView({
//         behavior: "smooth"
//     });

//     video.play();
// }

function playVideo() {

    const videoBox = document.getElementById("videoBox");
    const video = document.getElementById("birthdayVideo");
    const button = document.getElementById("surpriseBtn");

    // Hide the button
    button.style.display = "none";

    // Show the video
    videoBox.style.display = "flex";

    // Scroll to video
    videoBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Play the video
    video.play();
}