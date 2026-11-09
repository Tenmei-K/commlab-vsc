let menuMain = document.querySelector("#menuMain");
let menuUp = document.querySelector("#menuUp");
let menuDown = document.querySelector("#menuDown");
let menuBegin = document.querySelector("#menuBegin");

const volume = document.querySelectorAll("audio").volume;

menuDown.addEventListener("click", function () {
    console.log("volume down")
    // if (volumePer > 0) {
    //     volumePer -= 0.05;
    //     audio.volume = originalVolume * volumePer;
    // } else {
    //     volumePer = 0;
    //     audio.volume = 0;
    // }
    document.querySelectorAll("audio").forEach(
        function (audio) {
            audio.volume = 0.5;
        })
});
document.querySelectorAll("audio").forEach(
    function (audio) {
        // setVolume(audio)
        let originalVolume = audio.volume;
        // let volumePer = 1;
        menuMain.addEventListener("click", function () {
            audio.volume = originalVolume
        });

        menuUp.addEventListener("click", function () {
            //     if (volumePer < 1) {
            //         volumePer += 0.05;
            //         audio.volume = originalVolume * volumePer;
            //     } else {
            //         volumePer = 1;
            //         audio.volume = originalVolume;
            //     }
            audio.volume /= 0.95
        });
    }
);

menuMain.style.cursor = "pointer"
menuMain.addEventListener("mouseover", function () {
    menuMain.style.scale = 1.08;
});
menuMain.addEventListener("mouseout", function () {
    menuMain.style.scale = 1;
});
menuMain.addEventListener("click", function () {
    if (menuUp.style.bottom <= menuMain.style.bottom) {
        menuUp.style.bottom = 1.6 + 7 + 2 + "vh";
        menuDown.style.bottom = 1.6 + 7 + 2 + 7 + 2 + "vh";
        menuBegin.style.bottom = 1.6 + 7 + 2 + 7 + 2 + 7 + 2 + "vh";
    } else {
        menuUp.style.bottom = menuMain.style.bottom;
        menuDown.style.bottom = menuMain.style.bottom;
        menuBegin.style.bottom = menuMain.style.bottom;
    }
})

menuUp.style.cursor = "pointer"
menuUp.addEventListener("mouseover", function () {
    menuUp.style.scale = 1.08;
});
menuUp.addEventListener("mouseout", function () {
    menuUp.style.scale = 1;
});

menuDown.style.cursor = "pointer"
menuDown.addEventListener("mouseover", function () {
    menuDown.style.scale = 1.08;
});
menuDown.addEventListener("mouseout", function () {
    menuDown.style.scale = 1;
});

menuBegin.style.cursor = "pointer"
menuBegin.addEventListener("mouseover", function () {
    menuBegin.style.scale = 1.08;
});
menuBegin.addEventListener("mouseout", function () {
    menuBegin.style.scale = 1;
});
menuBegin.addEventListener("click", function () {
    document.location = "../index.html";
});


// function setVolume(audio) {

// }