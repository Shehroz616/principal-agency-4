let steps = document.querySelectorAll(".steps")
let nextLevelBtn = document.querySelectorAll(".next-level")
let currentStep = 0
let timer,reward
function nextStep() {
    steps[currentStep].classList.add("fading")
    setTimeout(() => {
        steps[currentStep].classList.remove("show")
        steps[currentStep + 1].classList.add("show")
        steps[currentStep + 1].classList.add("showing")
        setTimeout(() => {
            steps[currentStep + 1].classList.remove("showing")
            currentStep++
        }, 301);
    }, 301);
}
startBtn.addEventListener("click", () => {
    nextStep()
})
nextLevelBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        nextStep()
        clearInterval(timer)
    })
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


const stepsAnswers  = [
    ["Bottom-down ideas"],
    ["False"],
    ["Principal Global Sustainable Growth Fund","Principal Islamic Global Responsible Equity Fund"],
    ["Principal China Quality Growth Fund","Principal China New Energy Innovation Fund","Principal Vietnam Equity Fund"],
    ["6 Million Net Points (UT) + RM120K Sales (PRS)"],
    ["1.8 Million Net Points (UT) + RM80K Sales (PRS)"],
    ["1.2 Million Net Points (UT) + RM30K Sales (PRS)"],
];

let selectedAnswers = [];

$(".answer-box").click(function () {
    const buttonText = $(this).text();
    console.log(stepsAnswers[currentStep - 2])
    console.log(buttonText)
    const correctAnswers = stepsAnswers[currentStep - 2];
    if (correctAnswers.includes(buttonText)) {
        if (!$(this).hasClass("correct")) {
            $(this).addClass("correct");
            selectedAnswers.push(buttonText);
            if (selectedAnswers.length === correctAnswers.length) {
                nextStep();
                selectedAnswers = [];
            }
        }
    } else {
        $(this).addClass("blink");
        setTimeout(() => {
            $(this).removeClass("blink");
        }, 1000);
    }
});