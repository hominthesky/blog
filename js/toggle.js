import $ from "./jquery-3.3.1.min.js";

$(document).ready(function() {
  $("div.menu-toggle").click(function(o) {
    o.preventDefault();
    $("#line-1").toggleClass("active");
    $("#line-2").toggleClass("active");
    $("#line-3").toggleClass("active");
    $(".nav-item").slideToggle(200);
  });
});
