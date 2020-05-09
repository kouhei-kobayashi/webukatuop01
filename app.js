$( function(){



//変数宣言
var currentItemNum = 1;
var $slideContainer = $('.slider-wrp');
var slideItemNum = $('.slider__item').length;
var slideItemWidth = $('.slider__item').innerWidth();

var slideContainerWidth = slideItemWidth * slideItemNum;

var DURATION = 500;

//スライダー
$slideContainer.attr('style','width:' + slideContainerWidth + 'px');
$('.js-slide-next').on('click',function(){
   
    if(currentItemNum < slideItemNum){
       
        $slideContainer.animate({left: '-='+slideItemWidth+'px'}, DURATION);
     
        currentItemNum++;
    }
});
$('.js-slide-prev').on('click',function(){
   
    if(currentItemNum > 1){
        $slideContainer.animate({left: '+='+slideItemWidth+'px'}, DURATION);
        currentItemNum--;
    }
});
//ハンバーガーメニュー 

$('.js-sp-trigger').on('click',function(){
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
});

//閉じるボタン
$('.js-toggle-sp-menu-target').on('click',function(){

    $('.js-toggle-sp-menu-target').toggleClass('active');
    $('.js-sp-trigger').removeClass('active');
   
});





// スクロール

var effect_pos = 300; // 画面下からどの位置でフェードさせるか(px)
var effect_move = 100; // どのぐらい要素を動かすか(px)
var effect_time = 1000; // エフェクトの時間(ms) 1秒なら1000

// フェードする前のcssを定義
$('.scroll-fade').css({
    opacity: 0,
    transform: 'translateY('+ effect_move +'px)',
   // transform: translateX(100),
    transition: effect_time + 'ms'
});

// スクロールまたはロードするたびに実行
$(window).on('scroll load', function(){
    var scroll_top = $(this).scrollTop();
    var scroll_btm = scroll_top + $(this).height();
    effect_pos = scroll_btm - effect_pos;

    // effect_posがthis_posを超えたとき、エフェクトが発動
    $('.scroll-fade').each( function() {
        var this_pos = $(this).offset().top;
         var windowHieght = $(window).height();
        if ( effect_pos > this_pos - windowHieght+50 ) {
            $(this).css({
                opacity: 1,
                transform: 'translateY(0)'
            });
        }
    });
});

// couseスクロール


$(window).on('scroll', function(){
    $('.plan-panel').each(function(){
       
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHieght = $(window).height();

        if(scroll > pos - windowHieght + windowHieght/5){
           // $(this).find("p").removeClass('move');
            $('.plan-panel').addClass('move');
        }else{
            $(this).find("p").addClass('move');
        };
    });
});





});



