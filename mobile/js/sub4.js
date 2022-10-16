//! sub 4_1 미디어센터
$(document).ready(function () {











// ! sub4_2 FAQ

  var faqArticle = $(".sub_faq ul li"); // 전체 li
  $(".sub_faq").find("a").append('<i class="fa-regular fa-square-plus"></i>');
  $(".sub_faq ul li p a").click(function (e) {
    e.preventDefault();
    var answer = $(this).parent().parent(); // 해당 li
    if (answer.is(".on")) {
      // li에 on이 있으면
      answer.removeClass("on"); // on없애고
      answer.children().next().stop().slideUp("fast"); // 본인 닫아라
      $(this).find("i").removeClass("fa-square-minus").addClass("fa-square-plus");
    } else {
      // li에 on이 없으면
      faqArticle.removeClass("on"); // 다른 li에 on 없애고
      $(".sub_faq ul li p").find("i").removeClass("fa-square-minus").addClass("fa-square-plus");

      answer.addClass("on"); // 내 li에만 on을 넣어라
      faqArticle.children().next().stop().slideUp("fast");
      answer.children().next().stop().slideDown("fast");
      $(this).find("i").removeClass("fa-square-plus").addClass("fa-square-minus");
    }
  });

  $(".all").toggle(
    function (e) {
      e.preventDefault();
      $(this).html('답변 모두 닫기 <i class="fa-regular fa-square-minus"></i>');
      faqArticle.find("i").removeClass("fa-square-plus").addClass("fa-square-minus");
      faqArticle.children().next().stop().slideDown("fast");
    },
    function (e) {
      e.preventDefault();
      $(this).html('답변 모두 열기 <i class="fa-regular fa-square-plus"></i>');
      faqArticle.find("i").removeClass("fa-square-minus").addClass("fa-square-plus");
      faqArticle.children().next().stop().slideUp("fast");
    }
  );


  //

});

