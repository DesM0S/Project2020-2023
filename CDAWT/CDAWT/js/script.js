(function(){
    const burger = document.querySelector(".nav__burger");
    const nav_list = document.querySelector(".nav__list");
    const nav= document.querySelector(".nav");
    burger.addEventListener('click', () => {
        burger.classList.toggle('nav__burger_activ');
        nav_list.classList.toggle('nav__list_activ');
        nav.classList.toggle('nav_activ');
    })
}())
