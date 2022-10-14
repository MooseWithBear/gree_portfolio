$(document).ready(function () {


// //! sub2_2
// //* FAQ
// $(".contentArea dl").each(function (index) {
//   $(this).find("a").click(function (e){
//     e.preventDefault();
//     if ($(this).parent().parent().hasClass("on")) { //dl이 on 갖고있으면
//         $(this).parent().parent().removeClass("on").find('dd').slideUp("fast");
//         $(this).find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
//     } else {
//         $('.contentArea dd').slideUp("fast").parent().removeClass("on");

//           $(".contentArea i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
//           $(".contentArea dl:eq(" + index + ") dd")
//             .slideDown("slow")
//             .parent()
//             .addClass("on");
//           $(this).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up");

//     }   
//   })
// })

//

//! 중단 공통 클릭
$('.overview li').each(function (index){
    $(this).find("a").click(function (e){
      e.preventDefault();
    console.log(index)
    })
})
// $(".contentArea dl").each(function (index) {


//! 하단 공통 슬라이드
$('.slideList li:eq(0)').css('display','block').css('opacity',1).parent().addClass('now');
$('.slideList li').prepend("<i class='fa-solid fa-left-right'></i>").css('position','relative')
$('.slideList').find('i').css({
  'position':'absolute',
  'top':'3%',
  'right':'5%',
  'font-size':20,
  'transform':'scaleX(1.4)',
  'opacity':0.8,
  'z-index':50,
  'color': '#fff'

})

// $(".slideList li").each(function (index) { 
// })

let now = 0;
let ind = $(".slideList li").length-1; //총 개수 3개
let start_x, end_x;
const images = document.querySelector(".slideList") 
 
images.addEventListener('touchstart', touch_start);
images.addEventListener('touchend', touch_end);
 
function prev(){
  $(".slideList li").css('display','none').removeClass('activeRight').removeClass('activeLeft')

  if(now <= 0){
    now=ind
    $(".slideList li:eq("+now+")").addClass('activeRight').css('display', 'block')
    console.log('if'+now)
  }else {
    now--;

    $(".slideList li:eq("+now+")").addClass('activeRight').css('display', 'block')

  }


}
function next(){
  $(".slideList li").css('display','none').removeClass('activeLeft').removeClass('activeRight')

  if(now >= ind){
    now=0;
    $(".slideList li:eq("+now+")").addClass('activeLeft').css('display', 'block')
  } else {
    now++;
    $(".slideList li:eq("+now+")").addClass('activeLeft').css('display', 'block')
  }
}
 
function touch_start(event) {
  start_x = event.touches[0].pageX
}
 
function touch_end(event) {
  end_x = event.changedTouches[0].pageX;
  if(start_x > end_x){
    next();
    console.log('next')
  }else if (start_x < end_x){
    prev();
    console.log('prev')
  }else {
    console.log('stop')
  }
}
})
