let btnopen = document.querySelector('.wrapper-ico');
let conte = document.querySelector('#conte');
let btnclose = document.querySelector('.setting-nav__close');
// let setting_nav = document.querySelector('.setting-nav');

btnopen.addEventListener('click', btnClick);
function btnClick(){
    conte.classList.toggle("contant-hidden");
}

btnclose.addEventListener('click', btnClickeClose);
function btnClickeClose(){
    conte.classList.add("contant-hidden");
}


document.addEventListener('click', function(){
    console.log("hi");
    if(!conte.classList.contains('contant-hidden')){
        console.log("dddd")
    }
})

// ффффффффффффффффффффффффффффффффффффффффффф
// const btnMenu = document.querySelector('.wrapper-ico');
// const menu = document.querySelector('.setting-nav');
// const toggleMenu = function() {
//     menu.classList.remove('contant-hidden');
// }

// btnMenu.addEventListener('click', function(e) {
//     e.stopPropagation();
//     toggleMenu();
// });

// document.addEventListener('click', function() {
//     if (setting_nav ) {
//         conte.classList.toggle('contant-hidden');
//     }
// });





//логика для мини бургера карточки
//открытие и закрытие бургера
let miburbtn = document.querySelector('.miniburger');
let minibur = document.querySelector('#minibur');
let cardAvtoe = document.querySelector('.card__avtot');

miburbtn.addEventListener('click', miniBurger);

function miniBurger(){
    minibur.classList.toggle("display_none");
    cardAvtoe.classList.toggle("display_none");
}
//открытие и закрытие соц сетей
let openMenuShareBtn = document.querySelector('.open-menu-share');
let menuShare = document.querySelector('#menu-share');

openMenuShareBtn.addEventListener('click', menuShareOpen);

function menuShareOpen(){
    menuShare.classList.toggle("display_none");
}

//добавление и удаление карточки
let addCardBtn = document.querySelector('.add-card');
let delCard = document.querySelector('#delcard');

addCardBtn.addEventListener('click', addCard);
function addCard(){
    delCard.classList.toggle("display_none");
    addCardBtn.classList.toggle("display_none");
}
    
delCard.addEventListener('click', DelCard);
function DelCard(){
    delCard.classList.toggle("display_none");
    addCardBtn.classList.toggle("display_none");
}



// нати все мини бургеры для каждой карточки
const tabHeaders = document.querySelectorAll("[data-card]");

// для каждого заголовка запустили ф-ю tabsHen

tabHeaders.forEach(tabsHen);

function tabsHen(item){
    // console.log(item);
    // по кликудля каждого заголовка запускаем ф-ю tabsClick
    item.addEventListener("click", tabsClick);
}

function tabsClick(){
    console.log("ff");
    console.dir(this.dataset.cardavtor);
    //находим название йд связанного блока с контента
    const tabId = this.dataset.card;
    const card_avtoe = this.dataset.cardavtor;

    //скрываес блоки с контентом
    // находим по дате втребуду блоки контента 
    // и скрываем их
    document.querySelectorAll("[data-tab-content]").forEach(function(item){
        item.classList.add("display_none");
    });
    // по йд включаем нужный блок с контентом
                                        //remove
    document.getElementById(tabId).classList.toggle("display_none");
}
