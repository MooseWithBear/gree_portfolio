var target = document.querySelector(".lili");
target.addEventListener("mouseover", mOver, false);
target.addEventListener("mouseout", mOut, false);
var img = document.getElementById("img1")

function mOver() {
    img.setAttribute("src", "../images/index/trailer_2p.webp")
}

function mOut() {  
    img.setAttribute("src", "../images/index/trailer_2.webp")
}



// function hover(element) {
//     element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
//   }
  
//   function unhover(element) {
//     element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
//   }