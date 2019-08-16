window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }

    const stars_total = 100;
    var i;
    var icon;
    for (i=1; i<=stars_total; i++) {
      var ran = Math.random();
      if (ran < 0.5) {
        icon = "star";
      } else {
        icon = "add";
      }

      if (icon == "star") {
        $(".parent").append("<div class='material-icons item i-"+i+"'>"+icon+"</div>");
      } else {
        $(".parent").append("<div class='material-icons item invis i-"+i+"'>"+icon+"</div>");
      }
    }
  }

$(document).on("click",".item",function(){
  console.log("*");
  if ($(this).html() == "star") {
    $(this).html("add");
    $(this).addClass("invis");
  } else {
    $(this).html("star");
    $(this).removeClass("invis");
  }
});

$(".title").mouseenter(function(){
  $(this).html("play_arrow");
});

$(".title").mouseout(function(){
  $(this).html("brightness_3");
});