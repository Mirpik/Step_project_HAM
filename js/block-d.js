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
    // appendArrows: $('.block-d-nav_arrow'),
    // prevArrow: $('.boro_')
  });
});
// let photo = $(".block-d-photo-img-photo");
// $(photo).each(function (index, element) {
//   // element == this
// console.log($(index)[2]);
// });