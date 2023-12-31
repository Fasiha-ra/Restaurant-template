
// ----Menu Bar-----
document.querySelector(".menu-btn").addEventListener('click', function () {
  document.querySelector('.nav-list').classList.toggle('active');
});

// ------Single Item Slider-----
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true
});

//-----Swiper Slider----
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  // autoplay: {
  //     delay: 3000,
  // },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  grabCursor: true,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


})