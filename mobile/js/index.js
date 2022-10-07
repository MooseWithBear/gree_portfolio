//! FAQ 메뉴열기
  $(".question").each(function (index) { //인덱스 찾아놓기
    $(this).find('a').click(function(e) { //메뉴버튼 클릭시
        e.preventDefault(); //링크이동 없애고
        console.log(index)
            if ($(this).parent().parent().hasClass('on')) { //클래스 갖고 있으면 닫고 끝냄
                $('.ans').slideUp('fast').parent().removeClass('on');
                $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }else { //그게 아니면 일단 클래스 삭제하고, 리스트열어주고, 부모li에만 클래스 부여
                $('.ans').slideUp('fast').parent().removeClass('on');
                $('.question i').removeClass('fa-chevron-up').addClass('fa-chevron-down')
                $('.question:eq('+index+') .ans').slideDown('fast').parent().addClass('on');
                $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
    })
})
