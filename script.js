
/*Burger Menu */

const burgerMenuIcon=document.querySelector('.nav-burger-menu')
const mobileMenu = document.querySelector('.nav-inside-burger-menu')

burgerMenuIcon.addEventListener('click',toggleMobileMenu)

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}