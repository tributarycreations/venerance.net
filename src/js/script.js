import "../scss/style.scss";

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".navbar").css("background-color", "rgba(0,0,0,0.65)");
      $(".navbar-brand").css("display", "block");
    } else {
      $(".navbar").css("background-color", "transparent");
      $(".navbar-brand").css("display", "none");
    }
  });
});

$(".navbar ul li a").on("click", function(e) {
  e.preventDefault();
  var hash = this.hash;
  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top
    },
    1000,
    function() {
      window.location.hash = hash;
    }
  );
});
