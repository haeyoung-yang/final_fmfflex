$(document).ready(function () {
    var button_status = 0;
    $(".run-button").on("click", function loop() {
        if (button_status == 0) {
            $(".menu").animate({ opacity: "0%" }, 1000)
            $(".play").animate({ opacity: "100%" }, 1000)
                .animate({ bottom: "35%" }, 1000)
            $(".stop").animate({ opacity: "100%" }, 1000)
                .animate({ bottom: "35%" }, 1000)
            $(".back").animate({ opacity: "100%" }, 1000)
                .animate({ bottom: "35%" }, 1000)
            $(".music-T").animate({ width: "40%" }, 10000)
                .animate({ width: "20%" }, 10000, loop)
            $(".music-B").animate({ width: "40%" }, 10000)
                .animate({ width: "20%" }, 10000, loop)
            $(".pinkbar").animate({ width: "40%" }, 10000)
                .animate({ width: "20%" }, 10000, loop)
            $(".run-button").text("❚❚")
            button_status = 1;
        } else if (button_status == 1) {
            $(".run-button").text("▶")
            button_status = 0;
        }
    })
    $(".run-button").on("mouseover", function () {
        $("#thefile").animate({ opacity: "100%" }, 1000)
        $("#audio").animate({ opacity: "100%" }, 1000)
        $(".name").animate({ width: "61%" }, 1000)
        $(".name2").animate({ width: "61%" }, 1000)
        $(".text1").addClass("move");
        $(".text2").addClass("move");
    })
    $(".play").on("click", function loop() {
        $(".flex1").animate({ left: "40%" }, 10000)
            .animate({ left: "60%" }, 5000, loop)
        $(".festival").animate({ left: "60%" }, 10000)
            .animate({ left: "40%" }, 5000, loop)
        $(".music-T").animate({ width: "40%" }, 10000)
            .animate({ width: "20%" }, 10000, loop)
        $(".music-B").animate({ width: "40%" }, 10000)
            .animate({ width: "20%" }, 10000, loop)
        $(".pinkbar").animate({ width: "40%" }, 10000)
            .animate({ width: "20%" }, 10000, loop)
    })
    $(".play").on("mouseover", function () {
        $(".phover").animate({ opacity: "100%" }, 300)
    })
    $(".play").on("mouseout", function () {
        $(".phover").animate({ opacity: "0%" }, 300)
    })
    $(".stop").on("mouseover", function () {
        $(".shover").animate({ opacity: "100%" }, 300)
    })
    $(".stop").on("mouseout", function () {
        $(".shover").animate({ opacity: "0%" }, 300)
    })
    $(".back").on("mouseover", function () {
        $(".bhover").animate({ opacity: "100%" }, 300)
    })
    $(".back").on("mouseout", function () {
        $(".bhover").animate({ opacity: "0%" }, 300)
    })
    $(".stop").on("click", function (e) {
        e.preventDefault();
        $(".music-T").stop(true, false);
        $(".music-B").stop(true, false);
        $(".pinkbar").stop(true, false);
        $(".flex1").stop(true, false);
        $(".festival").stop(true, false);
    })
    $(".back").on("click", function loop() {
        $(".music-T").animate({ width: "20%" }, 1000)

        $(".music-B").animate({ width: "20%" }, 1000)

        $(".pinkbar").animate({ width: "20%" }, 1000)
        $(".flex1").animate({ left: "50%" }, 1000)

        $(".festival").animate({ left: "50%" }, 1000)

    })
})
