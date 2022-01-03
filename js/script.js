$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      /*настройки слайдера тут: https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html*/
      items:1 /*количество слайдов*/,
      loop: true /*задаем прокручивание слайдов по кругу*/,
      autoplay: true /*пауза для автопрокрутки слайдов*/,
      autoplayTimeout: 3000 /*задаем время паузы в милисекундах (3000мс=3сек) */
  });
});