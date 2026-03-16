const words = ["Python Developer", "Web Developer", "Problem Solver"];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

currentWord = words[wordIndex];

if(!isDeleting){
letterIndex++;
}else{
letterIndex--;
}

document.getElementById("typing").textContent = currentWord.substring(0,letterIndex);

if(!isDeleting && letterIndex === currentWord.length){
isDeleting = true;
setTimeout(typeEffect,1000);
return;
}

if(isDeleting && letterIndex === 0){
isDeleting = false;
wordIndex = (wordIndex + 1) % words.length;
}

setTimeout(typeEffect,100);
}

typeEffect();


/* Smooth scrolling navigation */

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

let start = window.pageYOffset;
let end = target.offsetTop;
let distance = end - start;
let duration = 2000;   // bigger number = slower scroll
let startTime = null;

function animation(currentTime){

if(startTime === null) startTime = currentTime;

let timeElapsed = currentTime - startTime;

let run = start + distance * (timeElapsed / duration);

window.scrollTo(0, run);

if(timeElapsed < duration){
requestAnimationFrame(animation);
}

}

requestAnimationFrame(animation);

});

});