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

$("input").on("input", function () {
  if ($(this).val()) {
    $("button").show();
  } else {
    $("button").hide();
  }
});
$("button").click(function () {
  $("input").val('');
  $(this).hide();
});
