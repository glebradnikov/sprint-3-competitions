// burger menu

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__nav').toggleClass('header__nav_active');
    $('.page').toggleClass('page_locked');
  });
});

$(document).ready(function () {
  $('.header__link').click(function (event) {
    $('.header__nav').removeClass('header__nav_active');
    $('.page').removeClass('page_locked');
  });
});

// footer button

$('.footer__email').on('.footer__email', function () {
  if ($(this).val()) {
    $('.footer__button').show();
  } else {
    $('.footer__button').hide();
  }
});
$('.footer__button').click(function () {
  $('.footer__email').val('');
  $(this).hide();
});
