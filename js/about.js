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




// Tableau de mots à utiliser
const wordArrayMoove = ['Pourquoi ?', 'Avoir un bagage technique', 'Découvrir la base du web', 'On aime les animations', 'L\'aspect créatif', 'Pourquoi pas en faite !', 'Plus d\'infos en dessous', 'Juste en dessous'];
// Tableau de mots à utiliser 
const wordArraySport = ['Trail', 'Vélo', 'Boxe', 'Natation', 'Randonnée', 'Snowboard'];
// Tableau de mots à utiliser
const wordArrayCareer = ['Management du sport', 'Evénementiel sportif', 'Chef de Projet', 'Lyon Urban Trail', 'Lyon Free Bike', 'STL VTT', 'Budget', 'Coordination générale'];
// On vient pointer l'élément du DOM à modifier
const paragraphMoove = document.getElementById('mooveParagraph');
const paragraphSport = document.getElementById('sportParagraph');
const paragraphCareer = document.getElementById('careerParagraph');
// On indique l'index pour que une fois que le tableau a été parcouru, il revienne à cet index
let currentIndexMoove = 0;
let currentIndexSport = 0;
let currentIndexCareer = 0;
let maxIndexMoove = wordArrayMoove.length;
let maxIndexSport = wordArraySport.length;
let maxIndexCareer = wordArrayCareer.length;

// On met en place la fonction pour le changement de mot
function changeWords() {
  // On ajoute le contenu des tableaux aux éléments du DOM correspondants en indiquant les index initiaux
  paragraphMoove.textContent = wordArrayMoove[currentIndexMoove];
  paragraphSport.textContent = wordArraySport[currentIndexSport];
  paragraphCareer.textContent = wordArrayCareer[currentIndexCareer];

  // On incrémente les index pour passer au mot suivant
  currentIndexMoove++;
  currentIndexSport++;
  currentIndexCareer++;

  // Si l'index atteint la fin du tableau, on le réinitialise à 0 pour revenir au début
  if (currentIndexMoove >= maxIndexMoove) {
    currentIndexMoove = 0;
  }
  if (currentIndexSport >= maxIndexSport) {
    currentIndexSport = 0;
  }
  if (currentIndexCareer >= maxIndexCareer) {
    currentIndexCareer = 0;
  }
}

// Appel initial de la fonction pour afficher les premiers mots
changeWords();

// Interval en millisecondes (modifiable selon vos besoins)
const intervalMs = 1500;
// On appelle la fonction changeWords en fonction de l'intervalle déterminé en amont
setInterval(changeWords, intervalMs);