$(document).ready(function() {

//^ nav 영역 //

        // 헤더 스크롤 반응
        var smh=$('.visual').height();
        // gnb 스크롤 이벤트 체크
        $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);
            
            if(scroll>100){//스크롤300까지 내리면
                $('#headerArea').addClass('on');
            } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
                $('#headerArea').removeClass('on');
            };
        });

    // !nav modal 열기
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    $(".hamberger").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();
        var documentHeight =  $(document).height();
        $("#gnb").css('height',documentHeight); 
        if(op==false){
        $("#gnb").removeClass('hide').addClass('aladin');
        $(".hamberger i").addClass('fa-solid fa-xmark').addClass('close');
        op=true;
        }else {
            $("#gnb").removeClass('aladin');
            $(".hamberger i").removeClass('fa-solid fa-xmark').addClass('fa-solid fa-bars').removeClass('close');
            op=false;
        }
    })

    //! nav 뎁스리스트 열기
    $(".depth1").each(function (index) { //인덱스 찾아놓기
        $(this).find('.depth1_t').click(function(e) { //메뉴버튼 클릭시
            e.preventDefault(); //링크이동 없애고
                if ($(this).parent().parent().hasClass('on')) { //클래스 갖고 있으면 닫고 끝냄
                    $('.depth1 ul').slideUp('fast').parent().removeClass('on');
                    $(this).find('i').addClass('fa-chevron-down').removeClass('fa-chevron-up')
                }else { //그게 아니면 일단 클래스 삭제하고, 리스트열어주고, 부모li에만 클래스 부여
                    $('.depth1 ul').slideUp('fast').parent().removeClass('on');
                    $('.depth1:eq('+index+') ul').slideDown('fast').parent().addClass('on');
                    $('.depth1 i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
                    $(this).find('i').addClass('fa-chevron-up').removeClass('fa-chevron-down');

                }
        })
    })


    //! family site 열기
    var open = false;
    $(".family>a").click(function(e) { //메뉴버튼 클릭시
        e.preventDefault();
        if(open==false) {
            $('.familyListBox').slideDown('fast'); //열어줌
            $('#footerArea').addClass('on');
            open = true;
        } else {
            $('.familyListBox').slideUp('fast').removeClass('on') //닫아줌
            $('#footerArea').removeClass('on');
            open = false;
        }
    })

























})
