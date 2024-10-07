let steps = document.querySelectorAll(".steps");
let nextLevelBtn = document.querySelectorAll(".next-level");
let currentStep = 0;
let timer, reward;
function nextStep() {
  steps[currentStep].classList.add("fading");
  setTimeout(() => {
    steps[currentStep].classList.remove("show");
    steps[currentStep + 1].classList.add("show");
    steps[currentStep + 1].classList.add("showing");
    setTimeout(() => {
      steps[currentStep + 1].classList.remove("showing");
      currentStep++;
    }, 301);
  }, 301);
}
startBtn.addEventListener("click", () => {
  nextStep();
});
nextLevelBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    nextStep();
    clearInterval(timer);
    // 1st ajax
    // $.ajax({
    //     url: firstGameTimeUrl,
    //     type: 'POST',
    //     headers: {
    //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //     },
    //     data: {},
    //     success: function(response) {},
    // });
  });
});

function restartGame() {
  currentStep = 0;
  levelCounter = 1;
  selectedAnswers = [];
  $(".steps").removeClass("show").removeClass("fading").removeClass("showing");
  $(".steps:first").addClass("show"); // Show the first step again
  $("#wrong-popup").modal("hide");
}

function nextLevel() {
  // switch (levelCounter) {
  //   case 1:
  //     ajaxUrl = secondGameTimeUrl;
  //     break;
  //   case 2:
  //     ajaxUrl = thirdGameTimeUrl;
  //     break;
  //   case 3:
  //     ajaxUrl = fourthGameTimeUrl;
  //     break;
  //   case 4:
  //     ajaxUrl = fifthGameTimeUrl;
  //     break;
  //   case 5:
  //     ajaxUrl = sixthGameTimeUrl;
  //     break;
  //   case 6:
  //     ajaxUrl = seventhGameTimeUrl;
  //     break;
  //   case 7:
  //     ajaxUrl = eightGameTimeUrl;
  //     break;
  //   default:
  // }

  // $.ajax({
  //     url: ajaxUrl,
  //     type: 'POST',
  //     headers: {
  //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  //     },
  //     data: {},
  //     success: function(response) {
  //         if(response.success){
  //             store();
  //             reward = response.game_reward
  //             let prizeImg = document.querySelector(".prize")
  //             prizeImgSrc = prizeImg.src
  //             if(reward == "Quality Recruiter"){
  //                 document.querySelector('.phone-number-container').remove()
  //                 prizeImg.src=prizeImgSrc.replace("rm-50.svg","CUP.png")
  //             }
  //             else{
  //                 prizeImg.src=prizeImgSrc.replace("rm-50",reward)
  //             }
  //         }
  //     },
  // });
  $("#right-popup").modal("hide");
  levelCounter++;
  nextStep();
  selectedAnswers = [];
}

const stepsAnswers = [
  ["Bottom-down ideas"],
  ["False"],
  [
    "Principal Global Sustainable Growth Fund",
    "Principal Islamic Global Responsible Equity Fund",
  ],
  [
    "Principal China Quality Growth Fund",
    "Principal China New Energy Innovation Fund",
    "Principal Vietnam Equity Fund",
  ],
  ["6 Million Net Points (UT) + RM120K Sales (PRS)"],
  ["1.8 Million Net Points (UT) + RM80K Sales (PRS)"],
  ["1.2 Million Net Points (UT) + RM30K Sales (PRS)"],
];

let selectedAnswers = [];
let levelCounter = 1;
// let ajaxUrl = secondGameTimeUrl
$(".answer-box").click(function () {
  const buttonText = $(this).text();
  const correctAnswers = stepsAnswers[currentStep - 2];
  if (correctAnswers.includes(buttonText)) {
    if (!$(this).hasClass("correct")) {
      $(this).addClass("correct");
      selectedAnswers.push(buttonText);
      if (selectedAnswers.length === correctAnswers.length) {
        $("#right-popup").modal("show");
      }
    }
  } else {
    $("#wrong-popup").modal("show");

    // $(this).addClass("blink");
    // setTimeout(() => {
    //     $(this).removeClass("blink");
    // }, 1000);
  }
});

tryAgain.addEventListener("click", () => {
  restartGame();
});
nextQuestion.addEventListener("click", () => {
  nextLevel();
});
