// 스킵메뉴 호출
var skipMenu = $('.skip_menu');
var skipNav = $('.skip_menu>a');
skipNav.focus(function(){
  skipMenu.addClass('active');
});
skipNav.blur(function(){
  skipMenu.removeClass('active');
});