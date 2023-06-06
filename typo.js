/*----- Animation flicker du background texturé noise---- */
//On va chercher l'id qu'on souhaite modifier dans le DOM
// on crée la fonction qui va nous permettre de génerer des valeurs random
//On définti une valeurs entre 0 et 100 %
//La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x, ca aide a ne pas avoir les virgules
//Math.random() renvoie un nombre décimal compris entre 0 (inclus) et 1 (exclus). Cela permet de générer une valeur aléatoire.
//Le +1 est utilisé pour garantir que la valeur maximale soit incluse dans la plage de valeurs possibles.

/*
const noise = document.querySelector('.noise');


function randomPosition(min, max){
 const randomX = Math.floor(Math.random()*(max - min + 1));
 const randomY = Math.floor(Math.random()*(max - min + 1));
 noise.setAttribute('style', `background-position: ${randomX}% ${randomY}%`);
}

setInterval(() => {
    randomPosition(-30, 100);
  }, 50);
*/


//On définit un cadre avec les propriétés de largeur et de hauteur adapté à l'écran dfe l'utilisateur 
const stage = { w: window.innerWidth, h: window.innerHeight };
//On définit un cadre avec les propriétés de largeur et de hauteur adapté à l'écran dfe l'utilisateur 
const ball = { obj: null, x: 0, y: 0, vx: 0, vy: 0, w: 50, h: 50 };
//On définit une valeur maximale de vitesse pour éviter que le math random ne fournisse des valeurs trop hautes
const maxSpeed = 1;
// Intervalle de temps en millisecondes que met la balle pour aller de px en px
const intervalDuration = 2;


// On attend que le document soit chargé avant de lancer l'animation

document.addEventListener('DOMContentLoaded', function() {
  // On lie l'objet à la classe correspondante dans le DOM
  ball.obj = document.getElementById('ball1');
  // la fonction runGame est appelé pour démarrer la séquence
  runGame();
});

// l'objectif de cette nouvelle fontion est de calculer des valeurs aléatoires pour amener des variations de vitesse.
function getRandomSpeed() {
    //Math.random calcule un nombre entre O et 1 exclus. On le mutipllie à un nombre comme 1à et une aura une plage entre 0 et 10.
  return Math.random() * maxSpeed;
}

function runGame() {
    // Permet de mettre à jour les dimensions de l'écran à chaque itération du jeu, afin de s'assurer que la taille de l'écran correspond bien à celui de l'utilisateurs et s'adapté s'il modifie la taille de son écran
  stage.h = window.innerHeight;

  // On ajoute la valeur de la position de la balle, à la valeur de la vitesse pour anticiper la position définitive et faire en sorte que la balle ne sorte pas du cadre
  const nextX = ball.x + ball.vx;
  const nextY = ball.y + ball.vy;

// Si la positon hoizontale de la balle est inférieure à 0, ou (||) supéreur ou égale à la taille de l'écran - la taille de la balle
  if (nextX < 0 || nextX >= stage.w - ball.w) {
    //si la condition précédente est vraie, alors on exécute la ligne suivante
    // si la valeur actuelle de la balle est positive alorts la nouvelle vitesse sera negative sinon elle sera positive
    ball.vx = ball.vx > 0 ? -getRandomSpeed() : getRandomSpeed();
  }

  if (nextY < 0 || nextY >= stage.h - ball.h) {
    ball.vy = ball.vy > 0 ? -getRandomSpeed() : getRandomSpeed();
  }
  // on ajoute la valeur vitesse à la position de la balle pour déplacer de facon progressive celle-ci. position + vitesse = déplacement
  ball.x += ball.vx;
  ball.y += ball.vy;
  // on applique à l'ID "ball" un style et notamment et une transformation qui permet de déplacer la balle sur l'axe x et y. ce code l'intègre dans le DOM
  ball.obj.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
}

ball.vx = getRandomSpeed();
ball.vy = getRandomSpeed();

// setInterval sert à exécuter la fonction "runGame" sur la base du timing (ms) définit via la variable dédiée 
const gameInterval = setInterval(runGame, intervalDuration);

const stopElement = document.querySelector('.stop');
// On ajoute un évènement pour stopper la progression de la balle 
stopElement.addEventListener('mouseenter', function() {
  // Cette ligne arrête l'intervalle de jeu en utilisant la fonction clearInterval. 
  clearInterval(gameInterval);
  ball.vx = 0;
  ball.vy = 0;
});


