$(document).ready(function () {
  $('.block-d-photo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    asNavFor: '.block-d-photo_bar'
  });
  $('.block-d-photo_bar').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.block-d-photo',
    accessibility: true,
    arrows: true,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    
  });
});

$(document).ready(function () {
  console.log($(".slick-arrow"));
  $(".slick-slide").css("transform", "translateY(-2px)");
  $(".slick-arrow").on("click", function (event) { 
    $(".slick-slide").css("transform", "translateY(-2px)");
    $(".slick-center").css("transform", "translateY(-6px)");
  });
});