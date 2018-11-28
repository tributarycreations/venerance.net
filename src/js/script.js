import "../scss/style.scss";

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 75) {
      $(".navbar").css("background-color", "rgba(48,58,43,0.90)");
    } else {
      $(".navbar").css("background-color", "transparent");
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
