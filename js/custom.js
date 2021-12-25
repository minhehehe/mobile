$(function(){
    var swiper = new Swiper(".gnb_slide", {
      slidesPerView: 'auto',//동시에 보여줄 슬라이드 갯수
      spaceBetween: 20, // 슬라이드간 간격
    });

  var swiper = new Swiper(".main_visual .main_slide", {
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 3000,   // 시간 설정
    disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    loop:true,
    pagination: {
      el: ".main_visual .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

      var swiper = new Swiper(".best .best_slide", {
        slidesPerView: 1.5,//동시에 보여줄 슬라이드 갯수
        spaceBetween: 10, // 슬라이드간 간격
        // pagination: {
        //   el: ".swiper-pagination",
        //   type: "progressbar",
        // },
      });

      var swiper = new Swiper(".life .pro", {
        slidesPerView: 1.5,
        spaceBetween: 10,
      
      });
      
      $('.now_gnb li').click(function(e){
        e.preventDefault();
        
        $('.now_gnb li').removeClass('on');
        $(this).addClass('on');

            // index, eq
        //내가선택한것의 순서를 가져온다
        idx = $(this).index();
        // alert(idx)
        $('.item_wrap ul').removeClass('on').eq(idx).addClass('on');


    })
      $('.player_area button').click(function(){
      $('.player_area').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/fBgC1Z7zdrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')

      })
      $('.grop').click(function(){
        $('.info').toggleClass('on')
      })




})
