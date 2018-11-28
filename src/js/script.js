import "../scss/style.scss";

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 75) {
      $(".navbar").css("background-color", "rgba(48,58,43,0.85)");
      $(".navbar").css("box-shadow", "1px 1px 1px rgba(48,58,43,1");
    } else {
      $(".navbar").css("background-color", "transparent");
      $(".navbar").css("box-shadow", "2px 2px 2px transparent");
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
    500
  );
});
