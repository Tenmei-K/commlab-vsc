let textWrapper = document.querySelector(".text-wrapper")
let text = document.querySelector("#select")
let chinese = document.querySelector("#chinese")
let english = document.querySelector("#english")

// let aChinese = 1;
// let aEnglish = 1;
// let delAChinese = -0.015;
// let delAEnglish = -0.015;

let a = 1;
let delA = 0.01;

// let chineseShine, englishShine;


// setInterval(function () {
//     if (a < 0 || a > 1.05) {
//         delA *= -1
//     }
//     a += delA;
//     text.style.color = "rgb(80, 80, 80, " + a + ")"
// }, 15);

chinese.style.cursor = "pointer"
chinese.addEventListener("mouseover", function () {
    // chinese.style.scale = 1.05

    // if (aChinese < 0 || aChinese > 1) {
    //     delAChinese *= -1
    // }

    // chineseShine = setInterval(function () {
    //     if (aChinese < 0 || aChinese > 1.05) {
    //         delAChinese *= -1
    //     }
    //     aChinese += delAChinese;
    //     chinese.style.color = "rgb(70, 70, 70, " + aChinese + ")"
    // }, 15);

    chinese.style.backgroundColor = "rgb(70, 70, 70)";
    chinese.style.color = "rgb(255, 255, 255)";

})
chinese.addEventListener("mouseout", function () {
    // clearInterval(chineseShine);
    // chinese.style.scale = 1;
    chinese.style.backgroundColor = "rgb(255, 255, 255)";
    chinese.style.color = "rgb(70, 70, 70)";
    // aChinese = 1;
    // delAChinese = -0.015;
})
chinese.addEventListener("click", function () {
    document.location = "chinese/index-chinese.html"
})

english.style.cursor = "pointer"
english.addEventListener("mouseover", function () {
    // english.style.scale = 1.05

    // if (aEnglish < 0 || aEnglish > 1) {
    //     delAEnglish *= -1
    // }

    // englishShine = setInterval(function () {
    //     if (aEnglish < 0 || aEnglish > 1.05) {
    //         delAEnglish *= -1
    //     }
    //     aEnglish += delAEnglish;
    //     english.style.color = "rgb(70, 70, 70, " + aEnglish + ")"
    // }, 15);

    english.style.backgroundColor = "rgb(70, 70, 70)";
    english.style.color = "rgb(255, 255, 255)";
})
english.addEventListener("mouseout", function () {
    // clearInterval(englishShine);
    // english.style.scale = 1;
    english.style.backgroundColor = "rgb(255, 255, 255)";
    english.style.color = "rgb(70, 70, 70)";
    // aEnglish = 1;
    // delAEnglish = -0.015;
})
english.addEventListener("click", function () {
    document.location = "english/index-english.html"
})

