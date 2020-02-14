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
      let nextnext = `0${nextIndex}-06`;
      if (nextIndex == 1) {
        document.querySelector(".a").style.fill = "#4a4697";
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
        setTimeout(() => {
          document.querySelector(".a").style.fill = "#ff3333";
        }, 600);
        document.getElementById("test_1").innerHTML = "";
        lottie.loadAnimation({
          container: document.getElementById("test_1"), // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "dataweb.json",
          rendererSettings: {
            progressiveLoad: false
          }
        });
      }
      if (nextIndex == 3) {
        setTimeout(() => {
          document.querySelector(".a").style.fill = "#3399cc";
        }, 600);
        document.getElementById("test_2").innerHTML = "";
        lottie.loadAnimation({
          container: document.getElementById("test_2"), // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "datasmm.json",
          rendererSettings: {
            progressiveLoad: false
          }
        });
      }
      if (nextIndex == 4) {
        setTimeout(() => {
          document.querySelector(".a").style.fill = "#ff9900";
        }, 600);
        document.getElementById("test_3").innerHTML = "";
        lottie.loadAnimation({
          container: document.getElementById("test_3"), // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: true,
          path: "datamp4.json",
          rendererSettings: {
            progressiveLoad: false
          }
        });
      }
      if (nextIndex == 5) {
        setTimeout(() => {
          document.querySelector(".a").style.fill = "#3366cc";
        }, 600);
      }
      if (nextIndex == 6) {
        setTimeout(() => {
          document.querySelector(".a").style.fill = "#9966cc";
        }, 600);
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

let arrayBrif = [];
let allBrifItem = document.querySelectorAll(".form_controller__brif__item");
for (let i = 0; i < allBrifItem.length; i++) {
  allBrifItem[i].addEventListener("click", () => {
    allBrifItem[i].classList.toggle("selected");
  });
}
document
  .querySelector(".form_controller__button")
  .addEventListener("click", e => {
    for (let i = 0; i < allBrifItem.length; i++) {
      if (allBrifItem[i].classList.contains("selected")) {
        arrayBrif.push(allBrifItem[i].innerText);
        allBrifItem[i].classList.remove("selected");
      }
    }
    if (
      $("#checkbox_1")[0].checked == true &&
      document.querySelector("#name").classList.contains("success_form") &&
      document.querySelector("#tel").classList.contains("success_form") &&
      document.querySelector("#email").classList.contains("success_form")
    ) {
      afterSend();
    } else if (
      window.innerWidth < 500 &&
      document.querySelector("#name").classList.contains("success_form") &&
      document.querySelector("#tel").classList.contains("success_form") &&
      document.querySelector("#email").classList.contains("success_form")
    ) {
      if (window.confirm("Принимаете ли вы соглашение использования данных")) {
        afterSend();
      }
    } else if (
      window.innerWidth < 330 &&
      document.querySelector("#name").classList.contains("success_form") &&
      document.querySelector("#email").classList.contains("success_form")
    ) {
      if (window.confirm("Принимаете ли вы соглашение использования данных")) {
        afterSend();
      }
    } else if (
      window.innerHeight < 480 &&
      document.querySelector("#name").classList.contains("success_form") &&
      document.querySelector("#email").classList.contains("success_form")
    ) {
      if (window.confirm("Принимаете ли вы соглашение использования данных")) {
        afterSend();
      }
    } else if (
      !document.querySelector("#name").classList.contains("success_form") ||
      !document.querySelector("#tel").classList.contains("success_form") ||
      !document.querySelector("#email").classList.contains("success_form")
    ) {
      for (
        let i = 0;
        i < document.querySelectorAll(".name_former").length;
        i++
      ) {
        if (
          !document
            .querySelectorAll(".name_former")
            [i].classList.contains("success_form")
        ) {
          document
            .querySelectorAll(".name_former")
            [i].classList.remove("defaul_form");
          document
            .querySelectorAll(".name_former")
            [i].classList.add("error_form");
          document.querySelectorAll(".name_former")[i].placeholder =
            "Заполните данное поле*";
        }
      }
    } else {
      alert("Примите соглашение использования ваших данных");
    }
  });
let important_input = document.querySelectorAll(".name_former");
for (let i = 0; i < important_input.length; i++) {
  important_input[i].addEventListener("blur", () => {
    if (important_input[i].value.length == 0) {
      important_input[i].classList.remove("success_form");
      important_input[i].classList.remove("defaul_form");
      important_input[i].classList.add("error_form");
      important_input[i].placeholder = "Заполните данное поле";
    } else {
      important_input[i].classList.add("success_form");
      important_input[i].classList.remove("defaul_form");
      important_input[i].classList.remove("error_form");
    }
  });
}
function afterSend() {
  console.log("da");
  $.ajax({
    method: "POST",
    url: "",
    cache: false,
    data: [
      $(".form_controller").serialize(),
      arrayBrif,
      $("#upload-file")[0].files[0]
    ]
  });
  arrayBrif = [];
  $(".form_controller")[0].reset();
  important_input[0].placeholder = "Имя";
  important_input[1].placeholder = "e-mail";
  important_input[2].placeholder = "Телефон";
  for (let i = 0; i < important_input.length; i++) {
    important_input[i].classList.remove("success_form");
    important_input[i].classList.add("defaul_form");
    important_input[i].classList.remove("error_form");
  }
}
