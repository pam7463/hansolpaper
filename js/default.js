// 스킵메뉴 호출
var skipMenu = $('.skip_menu');
var skipNav = $('.skip_menu>a');
skipNav.focus(function(){
  skipMenu.addClass('active');
});
skipNav.blur(function(){
  skipMenu.removeClass('active');
});

// 토글메뉴
$('.tgl_btn').on('click',function(){
  $(this).toggleClass('active');
})