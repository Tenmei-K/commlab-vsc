let textWrapper = document.querySelector(".text-wrapper")
let paperTwo = document.querySelector("#paperTwo")
let text = document.querySelector("#click")

let a = 1;
let delA = -0.01;


paperTwo.style.cursor = "pointer"
paperTwo.addEventListener("mouseover", function () {
    paperOne.style.scale = 1.02
    paperTwo.style.scale = 1.02
})
paperTwo.addEventListener("mouseout", function () {
    paperOne.style.scale = 1
    paperTwo.style.scale = 1
})
paperTwo.addEventListener("click", function () {
    document.location = "index1.html"
})


if (a < 0 || a > 1) {
    delA *= -1
}

setInterval(function () {
    if (a < 0 || a > 1.05) {
        delA *= -1
    }
    a += delA;
    text.style.color = "rgb(90, 90, 90, " + a + ")"
}, 15);