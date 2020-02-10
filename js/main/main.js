document.addEventListener("DOMContentLoaded", function(){
  new WOW({
    mobile:false,
  }).init();
  document.getElementById("first_button").click();
});

$("#slick_one").slick({
  arrows: false,
  dots: true
});
// $("#slick_two").slick({
//   arrows: false,
//   dots: true
// });
$("#slick_three").slick({
  arrows: false,
  dots: true
});
// Scroll
$(document).scroll(function(){
  if (
    $(window).scrollTop() > $(".header_container").height() &&
    $(document).width() > 500
  ) {
    // After_header_nav_menu_dinamic
    $(".navbar_order").removeClass("header_container__navbar");
    $(".navbar_order").addClass("header_container__navbar_scroll");
    $(".header_order").addClass("header_container_content_scroll");
  } else {
    $(".navbar_order").addClass("header_container__navbar");
    $(".navbar_order").removeClass("header_container__navbar_scroll");
    $(".header_order").removeClass("header_container_content_scroll");
  }
});
// Scroll
// Burger_menu
var menu_button = $(".burger_menu");
var menu_item = $(".burger_menu_item");
var menu_button_closer = $(".burger_menu_item__closeicon");
menu_button.click(function (){
 $(menu_item).fadeIn()
});
menu_button_closer.click(function() {
  $(menu_item).fadeOut()
});

$(window).resize(function() {
  $(menu_item).fadeOut()
});
$(document).keydown(function(e){
  if(e.keyCode == 27){
    $(menu_item).fadeOut()
  }
})
// Links
$(".navigation__menu li a").click(function(event) {
  event.preventDefault();
  var id = $(this).attr('href'),
  top = $(id).offset().top;
  $('html,body').animate({scrollTop:top-100},1000)
});
$(".burger_menu_item__navigation_itemlist li a").click(function(event) {
  event.preventDefault();
  var id = $(this).attr('href'),
  top = $(id).offset().top;
  $('html,body').animate({scrollTop:top},1000)
  menu_item.addClass("disabled");
});
$(".header_container__img_arrow_button").click(function() {
  $("html,body").animate(
    { scrollTop: $(".header_container").height() + 20 },
    1000
  );
});
// Links
function funcItem(item) {
  var filter_item = document.querySelectorAll(
    ".filter_main_item"
  );
  for (var i = 0; i < filter_item.length; i++) {
    filter_item[i].classList.add("disabled_item");
  }
  document.getElementById(item).classList.remove("disabled_item");
}

var button_items = document.querySelectorAll(".ourportfolio__filters__list li");
for (var i = 0; i < button_items.length; i++) {
  button_items[i].addEventListener("click", function(e) {
    for (var j = 0; j < button_items.length; j++) {
      button_items[j].style.color = "#6c6c6c";
      button_items[j].style.fontWeight = 400
    }
    e.target.style.color = "#222222";
    e.target.style.fontWeight = 600
  });
}
$('.ourportfolio__filters__list_item__img').click(function(e){
  console.log(e.target)
})