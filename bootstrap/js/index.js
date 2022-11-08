window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
      $(".nav-link").addClass("first");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
      $(".nav-link").removeClass("first");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});


$( window ).resize(function() {
  //창크기 변화 감지
  var windowWidth = $( window ).width();

if(windowWidth<990) {
  $("#species .tab-pane").removeClass("active");
  $("#species .tab-pane:eq(0)").addClass("active");
}else{
  $("#species .tab-pane").addClass("active");
}
});

$("#species .nav-item").click(function () {
  var ind = $("#species .nav-item").index(this);
  var len = $("#species .nav-item").length - 1;
  console.log(ind);
  console.log(len);
  if (ind < len) {
    $("#species .tab-pane").removeClass("active");
    $("#species .tab-pane:eq(" + ind + ")").addClass("active");
  }
});

$("#all-tab").on("click", function () {
  $("#all-tab").parent().addClass("active");
  $(".tab-pane").addClass("active in");
  $('[data-toggle="tab"]').parent().removeClass("active");
});
