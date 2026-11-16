let menuMain = document.querySelector("#menuMain");
let menuUp = document.querySelector("#menuUp");
let menuDown = document.querySelector("#menuDown");
let menuBegin = document.querySelector("#menuBegin");

const volume = document.querySelectorAll("audio").volume;


menuMain.style.cursor = "pointer"
menuMain.addEventListener("mouseover", function () {
    menuMain.style.scale = 1.08;
});
menuMain.addEventListener("mouseout", function () {
    menuMain.style.scale = 1;
});
menuMain.addEventListener("click", function () {
    if (menuUp.style.bottom <= menuMain.style.bottom) {
        menuMain.style.opacity = 0.5;
        menuUp.style.bottom = 2 + 7.5 + 2 + "vh";
        menuDown.style.bottom = 2 + 7.5 + 2 + 7.5 + 2 + "vh";
        menuBegin.style.bottom = 2 + 7.5 + 2 + 7.5 + 2 + 7.5 + 2 + "vh";
    } else {
        menuMain.style.opacity = 1;
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
menuUp.addEventListener("click", function () {
    // console.log(audioVolumeP);
    if (audioVolumeP + 0.1 <= 1) {
        audioVolumeP += 0.1;
        audios.forEach(function (audio) {
            audio.volume = audio.volume / (audioVolumeP - 0.1) * audioVolumeP
        })
    } else {
        audioVolumeP = 1;
        audios.forEach(function (audio) {
            audio.volume = audio.volume;
        })
    }
});

menuDown.style.cursor = "pointer"
menuDown.addEventListener("mouseover", function () {
    menuDown.style.scale = 1.08;
});
menuDown.addEventListener("mouseout", function () {
    menuDown.style.scale = 1;
});
menuDown.addEventListener("click", function () {
    // console.log(audioVolumeP);
    if (audioVolumeP - 0.1 >= 0.1) {
        audioVolumeP -= 0.1;
        audios.forEach(function (audio) {
            audio.volume = audio.volume / (audioVolumeP + 0.1) * audioVolumeP;
        });
    } else {
        audioVolumeP = 0.1;
        audios.forEach(function (audio) {
            audio.volume = audio.volume;
        });
    }
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