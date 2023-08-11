window.addEventListener('DOMContentLoaded', ()=>{
const movingElement = document.getElementById('img_box');
const button = document.getElementById('menu');
const section = document.querySelectorAll('#home');
const content = document.getElementById('content');
let initialPosition = 0;
let lastScrollY = 0;
function updatePosition() {
  const scrolledDistance = window.scrollY;
  const scrollDiff = scrolledDistance - lastScrollY;
  const speedMultiplier = 0.2;
  if (Math.abs(scrollDiff) > 1 - 1) {
    initialPosition += scrollDiff * speedMultiplier;
    movingElement.style.transform = `translateX(${initialPosition}px)`;
    content.style.transform = `translateX(-${initialPosition}px)`;
  }
  lastScrollY = scrolledDistance;
  if(initialPosition >= innerWidth){
    movingElement.style.opacity = 0;
  } else {
    movingElement.style.opacity = 1;
  }
  requestAnimationFrame(updatePosition);
}
updatePosition();
const sections = document.getElementById('home')
menu.addEventListener('click', ()=>{
  sections.classList.toggle('active');
})
});