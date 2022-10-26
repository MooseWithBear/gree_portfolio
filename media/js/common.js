$(document).ready(function(){

    




    var visHeight, screenHeight;

    // 사이즈 받아오기
    function reSize(){
        visHeight = $('.videoBox').height();
        screenHeight = $(window).height();  //스크린의 높이
    }
    reSize();

    // 창 사이즈 변경 시 사이즈 다시 받아오기
    $(window).resize(function(){
        reSize();
    });

    /* 헤더 on 추가 */
    $(document).scroll(function(){

        var windowTop = $(window).scrollTop();
        if(windowTop > visHeight-150){
            $('#headerArea').addClass('on');
        } else {
            $('#headerArea').removeClass('on');
        }

    });


    

    $('.scrolldown').click(function(e){
        e.preventDefault();
        
        screenHeight = $(window).height();
        $('html,body').animate({'scrollTop':screenHeight}, 500);
    });





 

    //var gnbCnt = 0;
    $(document).on('click', '.menuOpen', function(e){
        e.preventDefault();

        if($('#headerArea').hasClass('active')){ // 닫아라

            $("#headerArea").removeClass('active');
            //$('html, body').css({overflow:""});
            //$('.videoBox, #content, #footerArea').css({filter:""});
            //gnbCnt = 0;
        } else { // 열어라
            
            $("#headerArea").addClass('active');
            //$('html, body').css({overflow:"hidden"});
            //$('.videoBox img, .videoBox video, #content, #footerArea').css({filter:"blur(10px)"});
            //gnbCnt = 1; // open상태
        }
    });

    $(document).on('click', '.nav_bg', function(){
        $("#headerArea").removeClass('active');
    });








    /* quick top */
    $(document).on('click', '.quicktop', function(e){
        e.preventDefault();
        $('html,body').animate({'scrollTop':0});
    });

    // $('.quicktop').hide();
    
    // $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    //     var scroll = $(window).scrollTop(); //스크롤의 거리
    //     var scrollFoot = $('#footerArea').offset().top - $(window).height() + 100; // 푸터에서의 값 계산
        
    //     //$('.text').text(scroll);
    //     if(scroll > 300){ // 300이상의 거리가 발생되면
    //         $('.quicktop').fadeIn('slow');  // top 보이기
    
    //         if(scroll < scrollFoot){ // footer보다 작으면 bottom:20, fixed
    //             $('.quicktop').css('bottom',25).css('position','fixed');
    //         } else { // footer보다 크면 bottom:200, absolute
    //             $('.quicktop').css('bottom',76).css('position','absolute');
    //         };
    
    //     }else{
    //         $('.quicktop').fadeOut('fast'); // top 감추기
    //     }
    // });

});