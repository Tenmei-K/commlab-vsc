let biteaudio = document.createElement("audio")
biteaudio.src = "sounds/pear.mp3"
biteaudio.loop = false

let hintaudio = document.createElement("audio")
hintaudio.src = "sounds/木头咚.wav"
hintaudio.loop = false

let forkOne = document.querySelector("#forkOne")
let forkTwo = document.querySelector("#forkTwo")
let fork = document.querySelectorAll(".fork")


let background = document.querySelector("#backgroundWinter")
background.style.opacity = 1

let bowl = document.querySelector("#bowl")

biteaudio.play()

bowl.style.cursor = "pointer"

bowl.addEventListener("click", function () {
    document.location = "index4.html"
})