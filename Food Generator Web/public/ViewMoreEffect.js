
$(document).ready(function() {
  var interval = setInterval(function() {
    $(".moreDetail").animate({
      'marginTop' : "-=15px"
});
$(".moreDetail").animate({
      'marginTop' : "+=15px"
});
}, 100);
});