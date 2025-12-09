let door = document.querySelector("#door")
let button = document.querySelector(".doorButton")

let dooraudio = document.createElement("audio")
dooraudio.src = "sounds/lockedDoor.mp3"
dooraudio.loop = false


door.style.cursor = "pointer"
door.addEventListener("mouseover", function () {
    door.style.scale = 1.05
})
door.addEventListener("mouseout", function () {
    door.style.scale = 1
})
door.addEventListener("click", function () {
    dooraudio.play()
}
)

button.style.cursor = "pointer"
button.addEventListener("mouseover", function () {
    button.style.scale = 1.2
})
button.addEventListener("mouseout", function () {
    button.style.scale = 1
})
button.addEventListener("click", function () {
    document.location = "index.html"
}
)