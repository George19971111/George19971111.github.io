var deleteLog = false;
$(document).ready(function() {
  // alert(`${window.innerHeight}-Высота ${window.innerWidth}-ширина экрана`)
  $("#pagepiling").pagepiling({
    sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke", "#000"],
    direction: "horizontal",
    verticalCentered: false,
    anchors: [
      "firstPage",
      "secondPage",
      "thirdPage",
      "fourthPage",
      "fivePage",
      "sixPage"
    ],
    menu: "#myMenu",
    onLeave: function(index, nextIndex, direction) {
      let nextitem = `0${index}-05`;
      let nextnext = `0${nextIndex}-05`;
      if (nextIndex == 1) {
        document.getElementById("lottie").innerHTML = "";
        lottie.loadAnimation({
          container: document.getElementById("lottie"), // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "data.json" // the path to the animation json
        });
      }
      if (nextIndex == 2) {
        document.getElementById("test_1").innerHTML = "";
        lottie.loadAnimation({
          container: document.getElementById("test_1"), // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "dataf.json",
          rendererSettings: {
            progressiveLoad: false
          }
        });
      }
      if (nextIndex == 3) {
        document.getElementById("test_2").innerHTML = "";
        lottie.loadAnimation({
          container: document.getElementById("test_2"), // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "datasecond.json",
          rendererSettings: {
            progressiveLoad: false
          }
        });
      }
      if (nextIndex == 4) {
        document.getElementById("test_3").innerHTML = "";
        lottie.loadAnimation({
          container: document.getElementById("test_3"), // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "datalast.json",
          rendererSettings: {
            progressiveLoad: false
          }
        });
      }
      if (deleteLog) {
        document.querySelector(
          ".footer_container__flex_last"
        ).innerHTML = nextitem;
      }

      document.querySelector(
        ".footer_container__flex_last"
      ).innerHTML = nextnext;
    }
  });
});
lottie.loadAnimation({
  container: document.getElementById("lottie"), // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "data.json" // the path to the animation json
});
// SMM
$("#open_modal2").click(function() {
  $("#smm_modal").fadeIn();
});
$("#close_iconer").click(function() {
  $("#smm_modal").fadeOut();
});

// WEB
$("#open_modal").click(function() {
  $("#web_modal").fadeIn();
});
$("#close_iconer1").click(function() {
  $("#web_modal").fadeOut();
});

// VIDEO
$("#video_opener").click(function() {
  $("#video_modal").fadeIn();
});
$("#close_iconer2").click(function() {
  $("#video_modal").fadeOut();
});

$(document).keydown(function(e) {
  if (e.keyCode == 27) {
    $("#web_modal").fadeOut();
    $("#smm_modal").fadeOut();
    $("#video_modal").fadeOut();
  }
});

$("#arrow_hidden").click(function() {
  $(".modal__windows").animate({ scrollTop: 0 }, 1000);
});

$(".modal__windows").scroll(function() {
  if ($(".scroller_profer").offset().top < -110) {
    $("#arrow_hidden").css("opacity", "1");
  } else {
    $("#arrow_hidden").css("opacity", "0");
  }
});

$("#arrow_hidden1").click(function() {
  $(".modal__windows").animate({ scrollTop: 0 }, 1000);
});

$(".modal__windows").scroll(function() {
  if ($(".scroller_profer1").offset().top < -110) {
    $("#arrow_hidden1").css("opacity", "1");
  } else {
    $("#arrow_hidden1").css("opacity", "0");
  }
});

$("#arrow_hidden2").click(function() {
  $(".modal__windows").animate({ scrollTop: 0 }, 1000);
});

$(".modal__windows").scroll(function() {
  if ($(".scroller_profer2").offset().top < -110) {
    $("#arrow_hidden2").css("opacity", "1");
  } else {
    $("#arrow_hidden2").css("opacity", "0");
  }
});
