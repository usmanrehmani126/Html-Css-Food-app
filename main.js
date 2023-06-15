// Show Menu Bar

const nav = document.querySelector('.nav')
const toggle = document.querySelector('.nav-toggle')
let searchBox = document.querySelector('.header .search-form');

toggle.addEventListener('click', () =>{
    nav.classList.toggle('show-menu')
    searchBox.classList.remove('show-search')
})

// Show Search Box

let search = document.querySelector('.right-menu .search');
search.onclick = () => {
    searchBox.classList.toggle('show-search')
    nav.classList.remove('show-menu')
}
// Remove Menu Bar

const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
    nav.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Active Link Color

const linkColor = document.querySelectorAll('.nav-link')
function colorLink(){
    if(colorLink){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))



// Header Shadow

let header = document.querySelector(".header");
window.addEventListener("scroll", () =>{
    if(window.scrollY >= 70){
        header.classList.add("header-shadow")
    }
    else header.classList.remove("header-shadow")
})

// Swipe Home Section
var swiper = new Swiper(".home-container", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});