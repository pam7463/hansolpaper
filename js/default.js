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
  if($(this).hasClass('active')){
    $('.nav').css('right',0);
  }else{
    $('.nav').css('right','-100%');
  }
});

// 랭귀지오버
$('.lang>a').on('click',function(){
  $('.lang>a').removeClass('active');
  $(this).addClass('active');
});

// 메인네비 클릭
$('.main_nav>li>a').on('click',function(){
  var winWidth = $(window).width();
  if(winWidth<1280){
    if($(this).hasClass('active')){
      var winWidth = $(window).width();
      $(this).removeClass('active');
      $(this).next().slideUp(200);
    }else{
      closeSub();
      $(this).addClass('active');
      $(this).next().slideDown(200);
    } 
  }
})

// 윈도우 리사이즈 이벤트
$(window).on('resize',function(){
  var winWidth = $(window).width();
  if(winWidth>=768){
    closeSub();
  }
})

// 서브메뉴 닫기
function closeSub(){
  $('.main_nav>li>a').removeClass('active');
  $('.main_nav>li>a').next().slideUp();
}

// 문서 스크롤 이벤트
$(document).on('scroll',function(){
  var docTop = $(this).scrollTop();
  if(docTop>0){
    $('.header').addClass('active');
  }else{
    $('.header').removeClass('active');
  }
})

// 내비가로좌표
$('.main_nav>li').hover(function(){
  var navOffset = $(this).offset().left;
  $(this).children('.sub_nav').css('left',navOffset);
})




