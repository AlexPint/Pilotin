/*----- Animation flicker du background texturé noise---- */
//On va chercher l'id qu'on souhaite modifier dans le DOM
// on crée la fonction qui va nous permettre de génerer des valeurs random
//On définti une valeurs entre 0 et 100 %
//La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x, ca aide a ne pas avoir les virgules
//Math.random() renvoie un nombre décimal compris entre 0 (inclus) et 1 (exclus). Cela permet de générer une valeur aléatoire.
//Le +1 est utilisé pour garantir que la valeur maximale soit incluse dans la plage de valeurs possibles.


const noise = document.querySelector('.noise');


function randomPosition(min, max){
 const randomX = Math.floor(Math.random()*(max - min + 1));
 const randomY = Math.floor(Math.random()*(max - min + 1));
 noise.setAttribute('style', `background-position: ${randomX}% ${randomY}%`);
}

setInterval(() => {
    randomPosition(-30, 100);
  }, 50);



/*----- Animation morphing Page ANIM---- */
/* Play Button */

document.addEventListener('DOMContentLoaded', function() {
  const circle = document.querySelector(".circle");
  const playBtn = document.querySelector(".circle__btn");
  const play = document.querySelector(".play");
  const pause = document.querySelector(".pause");
  const wave1 = document.querySelector(".circle__back-1");
  const wave2 = document.querySelector(".circle__back-2");
  const wave3 = document.querySelector(".circle__back-3");
  const wave4 = document.querySelector(".circle__back-4");
  const wave5 = document.querySelector(".circle__back-5");

  playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    play.classList.toggle('visibility');
    pause.classList.toggle('visibility');
    playBtn.classList.toggle('shadow');
    wave1.classList.toggle("paused");
    wave2.classList.toggle("paused");
    wave3.classList.toggle("paused");
    wave4.classList.toggle("paused");
    wave5.classList.toggle("paused");
  });
});





const activeShapeMorphing = document.querySelector('.back_shape--1');
const activeShapeGradient = document.querySelector('.back_shape--2');
const activeMorphing = document.querySelector('.morphing');
const activeGradient = document.querySelector('.gradient');

const headerTitle = document.querySelector('.header_title');
const headerTitleBis = document.querySelector('.header_title--1');
const scrollHidden = document.querySelector('.scroll');


let isScrollingUp = false; // Variable to keep track of the scroll direction

const originalHeaderText = headerTitle.textContent;
const originalHeaderTextBis = headerTitleBis.textContent;

function mooveBackShape() {
  if (isScrollingUp) {
    activeShapeMorphing.style.animation = 'none';
    activeMorphing.style.animation = 'none';
    activeShapeGradient.style.animation = 'none';
    activeGradient.style.animation = 'none';
    // If scrolling up, reverse the animations
    activeShapeMorphing.style.animation = `back-shape-reverse 3s linear 1 both`;
    activeMorphing.style.animation = `morphing-anim-reverse 3s linear 1 both`;
    activeShapeGradient.style.animation = `back-shape2-reverse 3s linear 1 both`;
    activeGradient.style.animation = `gradient-anim-reverse 3s ease-in 1 both`;

    headerTitle.textContent = originalHeaderText; // Set the original text content back
    headerTitleBis.textContent = originalHeaderText; // Set the original text content back

  } else {
    
    // If scrolling down, play the animations normally
    activeShapeMorphing.style.animation = `back-shape 3s linear 1 both`;
    activeMorphing.style.animation = `morphing-anim 3s linear 1 both`;
    activeShapeGradient.style.animation = `back-shape2 3s linear 1 both`;
    activeGradient.style.animation = `gradient-anim 3s ease-in 1 both`;

    headerTitle.textContent = "gradient // gradient / gradient // gradient / gradient // gradient / gradient // gradient / gradient // gradient /";
    headerTitleBis.textContent = "gradient // gradient / gradient // gradient / gradient // gradient / gradient // gradient / gradient // gradient /";
    //scrollHidden.classList.add("hidden");
  }


}

window.addEventListener("wheel", function(event) {
  // Récupérer la valeur du défilement vertical
  const deltaY = event.deltaY;

  if (deltaY < 0) {
    // Scrolling up
    isScrollingUp = true;
  } else {
    // Scrolling down
    isScrollingUp = false;
  }

  console.log("Défilement détecté - deltaY:", deltaY, "isScrollingUp:", isScrollingUp);
  mooveBackShape();
});

