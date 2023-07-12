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


/*----- Animation loader terminal Page INDEX---- */


// Récupération des éléments HTML. On va chercher les classes correspondantes et on en fait des variables
const progressBar = document.querySelector('.loader__progress');
const braket = document.querySelector('.braket1');
const braket2 = document.querySelector('.braket2');
const textLoader = document.querySelector('.loader__text');
const resultLoader = document.querySelector('.loader__result');

// Initialisation des variables qui vont permettre de contrôler l'avancement de l'animation
// 'progress'c'est le pourcentage de progression de la barre d'animation
let progress = 0;
//'step'est là pour les étapes de mises à jour de la barre de chargement. Pour définir le nombre d'étapes de la barre de chargement 100%/step soit 100/20=5 étapes 100%/50=2 étape . Parametre qui doit être modifié si on ajoute un if.
let step = 10;
//Le délai c'est la durée de chaque étape, il y en a 10, c'est donc 10(l'étape de lancment doit etre prise en compte, ce qui enleve 1s)*1000ms=10s. attention au nombre de step
let delay = 1000;
// !!!!!!  100%/step=étapes*delay=durée totale   !!!!!!!!

// Fonction d'animation
function animate() {
  // Mise à jour de la barre de chargement. On ajoute à progress la valeur d'une unité pour chaque appel
  progress += step;
  //on modifie la largeur de la barre en implémentant du style et notamment à la propriété width
  //`${progress}%` c'est la syntaxe pour intégrer une chaîne de caractère.
  progressBar.style.width = `${progress}%`;
  braket.style.visibility = `visible`;
  braket2.style.visibility = `visible`;
  // Mise à jouru texte
  if (progress >= 0 && progress < 10) {
    textLoader.innerHTML = '<p>Initialisation de la page. fetchmetadata/code|source2[].1992@</p>';
    delay; 
  } else if (progress >= 10 && progress < 20) {
    textLoader.innerHTML = '<p> Traitement des données. loadDep:extradata%$190991[</p>';
    delay;
  } else if (progress >= 20 && progress < 30) {
    textLoader.innerHTML = '<p>Chargement de la page. extract:npm-package-dev/color/#</p>';
    delay;
  } else if (progress >= 30 && progress < 40) {
    textLoader.innerHTML = '<p>Auteur. finalize:author-who-quién es-quem é esse-どなた</p>';
    //--
    const p = document.createElement('p');
    p.innerText = '> Qui ?';
    resultLoader.appendChild(p);
    //--
    delay;
  } else if (progress >= 40 && progress < 50) {
    textLoader.innerHTML = '<p>Métier. finalize:p@r#o$f%es&s*i(i)o_n=</p>';
    //--
    const p = document.createElement('p');
    p.innerText = '> Il fait quoi au juste ce monsieur ?';
    resultLoader.appendChild(p);
    //--
    delay;
  } else if (progress >= 50 && progress < 60) {
    textLoader.innerHTML = '<p>Calcul des données. finalize: since|1234567890|</p>';
    //--
    const p = document.createElement('p');
    p.innerText = '> Depuis quand ?';
    resultLoader.appendChild(p);
    //--
    delay;
  } else if (progress >= 60 && progress < 70) {
    textLoader.innerHTML = '<p>Connexions annexes de la page. connexion:twitter_linkedin_what else</p>';
    //--
    const p = document.createElement('p');
    p.innerText = '> Suivez-moi !';
    resultLoader.appendChild(p);
    //--
    delay;
  } else if (progress >= 70 && progress < 80) {
    textLoader.innerHTML = '<p>Essai créatif numéro 1! refresh-package:fr:uk:de:pt:ch:nl:at</p>';
    //--
    const p = document.createElement('p');
    p.innerText = '> Forme abstraite';
    resultLoader.appendChild(p);
    //--
    delay;
  } else if (progress >= 80 && progress < 90) {
    textLoader.innerHTML = '<p>Navigation. finalize: réalisations/savoir-faire/book/</p>';
    //--
    const p = document.createElement('p');
    p.innerText = '> Il sait faire quoi d\'autres ?';
    resultLoader.appendChild(p);
    //--
    delay += 2000;
  } else if (progress >= 90 && progress < 100) {
    textLoader.innerHTML = '<p>Achievement Unloacked……</p>';
    //--
    const p = document.createElement('p');
    p.innerText = '> Terminé !';
    resultLoader.appendChild(p);
    //--
    delay -= 2000;
  }


  // Condition d'arrêt, le chiffre 100 représente l'objectif de progression qui doit être atteint cad 100%
  if (progress < 100) {
    // SetTimeout définit un minuteur qui execute la fonction, étant donner qu'on a une boucle avec if, cela permet dee répeter l'animation jusqu'à ce que la condition d'arrêt soit remplie
    setTimeout(animate, delay); // Appel récursif
  }
}

// Lancement de l'animation
setTimeout(function() {
  animate();
}, 7400);


document.addEventListener('DOMContentLoaded', function() {
  const revealImage = document.querySelector(".gif_nosignal");
  const thingsMenu = document.querySelector(".things_menu");

  thingsMenu.addEventListener('click', (e) => {
    e.preventDefault();
    revealImage.classList.toggle('visible');

    setTimeout(() => {
      revealImage.classList.remove('visible');
    }, 2000);
  });
});
