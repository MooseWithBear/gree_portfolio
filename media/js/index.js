$(document).ready(function () {

$('.trail_01 div').hover(function(){
    $(this).find('a').addClass('aHover')
    $(this).find('i').addClass('iHover')

}, function (){
    $(this).find('a').removeClass('aHover')
    $(this).find('i').removeClass('iHover')

})
$('.trail_02 li').hover(function(){
    $(this).find('a').addClass('aHover')
    $(this).find('i').addClass('iHover')

}, function (){
    $(this).find('a').removeClass('aHover')
    $(this).find('i').removeClass('iHover')

}
// , function() {
//     $(this).removeClass('aHover')
//     $(this).find('i').removerClass('iHover')
// }
)  


    
// //   $(".about li").each(function (e) {
// //     $(".about li:eq("+e+")").css('background', 'url("./images/about_'+ (e+1) +'.webp")')
// //   });

// $('.ab_01 li').each(function (index){

//     $(this).hover(function (){
//     // console.log(index)

//     $(".ab_01 li:eq("+index+")").css('background','url("./images/about_'+ (index+1) +'p.webp") 0 0 no-repeat').css('background-size','contain')
//     }, function(){
//         $(".ab_01 li:eq("+index+")").css('background','url("./images/about_'+ (index+1) +'.webp") 0 0 no-repeat').css('background-size','contain')
//     })
// })

// $('.ab_02 li').each(function (index){
    
//     $(this).hover(function (){
//     // console.log(index)

//     $(".ab_02 li:eq("+index+")").css('background','url("./images/about2_'+ (index+1) +'p.webp") 50% 50% no-repeat').css('background-size','cover')
//     }, function(){
//         $(".ab_02 li:eq("+index+")").css('background','url("./images/about2_'+ (index+1) +'.webp") 50% 50% no-repeat').css('background-size','cover')
//     })
// })

// // $(".ab_01 li").click(function(){
// //     var num = $("li").index(this);
// //     console.log(num)
// //     (".ab_01 li:eq("+num+")").css('background','url("./images/about_'+ (num+1) +'p.webp") 0 0 no-repeat').css('background-size','contain')




// // }

// // )



// //   $(".cast li").each(function (e) {
// //     $(".cast li:eq("+e+")").css('background', 'url("./images/about_'+ (e+1) +'.webp") 50% 50% no-repeat').css('background-size', 'contain')

// //   });

// //   $(".trail_01 div").css();
// //   $(".trail_02 li").each(function (e) {

// //   });

// //   $(".gallery li").each(function (e) {

// //   });
});
