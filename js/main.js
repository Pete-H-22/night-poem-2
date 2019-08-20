window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }


    window.audio_1 = new Audio("tests/1.wav");
    window.audio_2 = new Audio("tests/2.wav");
    window.audio_3 = new Audio("tests/3.wav");
    window.audio_4 = new Audio("tests/4.wav");

    

    const stars_total = 400;
    var i;
    var icon;
    for (i=1; i<=stars_total; i++) {
      var ran = Math.random();
      if (ran < 0.33) {
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

$(".title").click(function(){

  // audio_1.onended = function(){
  //   audio_2.play();
  // }

  // audio_2.onended = function(){
  //   audio_3.play();
  // }

  // audio_3.onended = function(){
  //   audio_4.play();
  // }

  for (let i = 1; i < 4; i++) {
    console.log(i);
    console.log(window["audio_"+i]);
    window["audio_"+i].addEventListener("ended", function(){
      console.log("-> " + (i+1));
      //console.log(window["audio_"+(i+1)]);
      window["audio_"+(i+1)].play();
    });
  }

  audio_1.play();
});