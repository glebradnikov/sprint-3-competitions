// burger menu

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__nav').toggleClass('header__nav_active');
    $('.header__burger').toggleClass('header__burger_active');
    $('.page').toggleClass('page_locked');
  });
});

$(document).ready(function () {
  $('.header__link').click(function (event) {
    $('.header__nav').removeClass('header__nav_active');
    $('.header__burger').removeClass('header__burger_active');
    $('.page').removeClass('page_locked');
  });
});
