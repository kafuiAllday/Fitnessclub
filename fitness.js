let mobileNav = document.querySelector('button')
let section = document.querySelector('.hero-nav .nav-links')
let links = document.querySelectorAll('.main-links')


mobileNav.addEventListener('click',()=>{
    section.classList.add('move')
})

links.forEach((link) => {
    link.addEventListener('click',()=>{
        section.classList.remove('move')
    })
    
});