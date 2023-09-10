/*----- Animation flicker du background texturé noise---- */
const logo = document.querySelector('.menu_logo');
const logoW = document.querySelector('.menu_logo-white');
const background= document.querySelector('.menu');
const txtColor= document.querySelector('.menu_txt');
const txtColor1= document.querySelector('.menu_txt--1');
const txtColor2= document.querySelector('.menu_txt--2');

// Ajoutez un écouteur d'événement de défilement à la fenêtre
window.addEventListener('scroll', function () {
    // Vérifiez la position actuelle de défilement
    if (window.scrollY === 0) { // Utilisez === pour une égalité stricte
        // Si la position de défilement est égale à 0, ajoutez la classe "visible" et supprimez la classe "invisible"

        logoW.classList.add('visible');
        logoW.classList.remove('invisible');
        logo.classList.remove('visible');
        logo.classList.add('invisible');
        background.style.backgroundColor = '#00000000';
        txtColor.classList.add('white')
        txtColor.classList.remove('black')
        txtColor1.classList.add('white')
        txtColor1.classList.remove('black')
        txtColor2.classList.add('white')
        txtColor2.classList.remove('black')

    } else {
        // Sinon, ajoutez la classe "invisible" et supprimez la classe "visible"
        logo.classList.add('visible');
        logo.classList.remove('invisible');
        logoW.classList.remove('visible');
        logoW.classList.add('invisible');
        background.style.backgroundColor = '#FFFFFF';
        txtColor.classList.add('black')
        txtColor.classList.remove('white')
        txtColor1.classList.remove('white')
        txtColor1.classList.add('black')
        txtColor2.classList.remove('white')
        txtColor2.classList.add('black')
    }
});