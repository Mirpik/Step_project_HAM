$(document).ready(function () {
  $('.block-d-photo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
    // appendArrows: $('.block-d-nav_arrow'),
    // prevArrow: $('.boro_')
  });
});