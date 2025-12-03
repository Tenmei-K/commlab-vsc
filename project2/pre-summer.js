let doorbell = document.createElement("audio")
doorbell.src = "sounds/doorbell.mp3"


clickOne = document.querySelector("#clickOne")
clickOne.style.cursor = "pointer"

clickOne.addEventListener("click", function () {
    clickOne.style.opacity = 0

    doorbell.play()
    doorbell.loop = false

    let clickTwo = document.createElement("h5")
    clickTwo.innerHTML = '<a href="summer.html" style="color: white; background-color: rgb(90, 90, 90); " id="clickTwo"> "Hi! Could I stay in your house for a few days?" </a>'
    clickTwo.style.position = "fixed"
    clickTwo.style.bottom = 12 + "%"
    clickTwo.style.fontSize = 16 + "px"
    clickTwo.style.display = "block"

    document.body.append(clickTwo)

    clickOne.remove()
})