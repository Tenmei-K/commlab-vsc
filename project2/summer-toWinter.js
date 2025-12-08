let door = document.querySelector("#door")


let clientHeight = document.body.clientHeight
let clientWidth = document.body.clientWidth
console.log(clientHeight, clientWidth)



door.style.cursor = "pointer"
door.addEventListener("mouseover", function () {
    door.style.scale = 1.05
})
door.addEventListener("mouseout", function () {
    door.style.scale = 1
})
door.addEventListener("click", function () {
    document.location = "winter.html"
}
)

document.addEventListener("mousemove", function (eventInfo) {
    if (eventInfo.pageY > 0.15 * clientHeight && eventInfo.pageY < 0.85 * clientHeight) {

        document.querySelector("#Goverflow").style.opacity = 1
        document.querySelector("#GWrapper").style.opacity = 1
        document.querySelector("#Goverflow").style.left = eventInfo.pageX + "px"

        document.querySelector("#GWrapper").style.left = - eventInfo.pageX + "px"

        document.querySelector("#BMonitorStW").style.opacity = 1
    } else {
        document.querySelector("#Goverflow").style.opacity = 0
    }
})