$(document).ready(function () {
  const hotelSleder = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  
    effect: 'coverflow',
  
  });
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  
  
  });
  var menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('click', () => {
    console.log('lf')
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
  })


  var modalButton = $('[data-toggle="modal"]')
  var closeModalButton = $('.modal__close')
  modalButton.on('click', openModal)
  closeModalButton.on('click', closeModal)

  
  function openModal() {
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.addClass('modal__overlay--active')
    modalDialog.addClass('modal__dialog--active')
  }
  function closeModal(e) {
    e.preventDefault();
    var modalOverlay = $('.modal__overlay')
    var modalDialog = $('.modal__dialog')
    modalOverlay.removeClass('modal__overlay--active')
    modalDialog.removeClass('modal__dialog--active')
  }
  


});