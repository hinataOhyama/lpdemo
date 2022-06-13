$('.work__slide').slick({
  arrows: true,
  variableWidth: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  nextArrow: '<button class="slide-arrow next-arrow"></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: '10px',
        slidesToShow: 1,
      }
    }
  ]
});

jQuery(document).ready(function($){
  $('.toggle-btn').on('click',function(){
      $('.toggle-btn__line').toggleClass('active');
      $('.global-nav').stop().slideToggle();
  });
});

jQuery(window).on("scroll", function() {
  //スクロールバーの位置を取得
  var scroll = $(window).scrollTop();

  //ウィンドウの高さを取得
  var windowHeight = $(window).height();

  $('.news').each(function() {
    //フェードインさせたい要素の縦位置を取得
    var elemPos = $(this).offset().top;

    //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
    if (scroll > elemPos - windowHeight + 20) {
      $(this).css({
        'opacity': '0.95',
        'transform': 'translateY(0)'
      });
    }
  });
  $('.concept__intro__img,.concept__intro__text').each(function() {
    var elemPos = $(this).offset().top;

    if (scroll > elemPos - windowHeight + 20) {
      $(this).css({
        'opacity': '1',
        'transform': 'translateX(0)'
      });
    }
  });
  $('.concept__desc').each(function() {
    var elemPos = $(this).offset().top;

    if (scroll > elemPos - windowHeight + 20) {
      $(this).css({
        'opacity': '1',
        'transform': 'translateY(0)'
      });
    }
  });
  $('.item__number, .item__desc').each(function() {
    var elemPos = $(this).offset().top;

    if (scroll > elemPos - windowHeight + 20) {
      $(this).css({
        'opacity': '1',
        'transform': 'translateX(0)',
        'transform': 'translateY(0)'
      });
    }
  });
  $('.card__item').each(function() {
    var elemPos = $(this).offset().top;

    if (scroll > elemPos - windowHeight + 20) {
      $(this).css({
        'opacity': '1',
        'transform': 'translateX(0)',
        'transform': 'translateY(0)'
      });
    }
  });
  $('.blog__content').each(function() {
    var elemPos = $(this).offset().top;

    if (scroll > elemPos - windowHeight + 20) {
      $(this).css({
        'opacity': '0.95',
        'transform': 'translateX(0)',
        'transform': 'translateY(0)'
      });
    }
  });
});

$(document).ready(function(){
  $('.heading--top').css({
    'opacity': '1',
    'transform': 'translateX(0)'
  });
  $('.heading--middle').css({
    'opacity': '1',
    'transform': 'translateX(0)'
  });
  $('.heading--bottom').css({
    'opacity': '1',
    'transform': 'translateY(0)'
  });
  $('.main-visual').css({
    'opacity': '1',
  });
  $('.main-visual__contact').css({
    'opacity': '1',
    'transform': 'translateY(0)'
  });
});

$(function () {
  setTimeout('scroll()'); //アニメーションを実行
});

function scroll() {
  $(".scroll__animation").animate({
      //top: "120px"
  }, 4000).animate({
      transform: "Scale(0)"
  }, 4000);
  setTimeout("scroll()", 8000); //アニメーションを繰り返す間隔
}