const flame=document.getElementById("flame");
const smoke=document.getElementById("smoke");
const status=document.getElementById("status");

navigator.mediaDevices.getUserMedia({audio:true})
.then(stream=>{

const audioContext=new AudioContext();

const mic=audioContext.createMediaStreamSource(stream);

const analyser=audioContext.createAnalyser();

mic.connect(analyser);

const data=new Uint8Array(analyser.frequencyBinCount);

function detect(){

analyser.getByteFrequencyData(data);

let volume=data.reduce((a,b)=>a+b)/data.length;

if(volume>35 && flame.style.display!="none"){

flame.style.display="none";

smoke.style.display="block";

smoke.innerHTML="💨";

status.innerHTML="🎉 Happy Birthday Thangachi ❤️";

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

document.getElementById("next").style.display="block";

}

requestAnimationFrame(detect);

}

detect();

});

const nextBtn = document.getElementById("next");

nextBtn.style.display = "None";
nextBtn.style.opacity = "0";
nextBtn.style.transform = "translateY(30px)";

setTimeout(() => {
    nextBtn.style.transition = "all .8s ease";
    nextBtn.style.opacity = "1";
    nextBtn.style.transform = "translateY(0)";
}, 100);

document.getElementById("next").onclick = function () {
    window.location.href = "index.html";
};