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
background.style.opacity = 0.5

biteaudio.play()


let hint = document.createElement("p")
hint.innerText = "you didn't dare to look at her"
hint.classList.add("hint")
let hint1 = document.createElement("p")
hint1.innerText = "you didn't dare to look at her"
hint1.classList.add("hint")

document.body.append(hint)
document.body.append(hint1)


setTimeout(function () {
    hint.remove()
    hint1.remove()
}, 2000)


fork.forEach(function (e) {
    e.style.cursor = "pointer"
    e.addEventListener("mouseover", function () {
        e.style.scale = 1.05
    })
    e.addEventListener("mouseout", function () {
        e.style.scale = 1
    })
})

forkOne.addEventListener("click", function () {
    document.location = "winter7.html"
})
forkTwo.addEventListener("click", function () {
    hintaudio.play()
    let hint = document.createElement("p")
    hint.innerText = "*you are still trying to find some reason to persuade her. miriculously, she isn't anxious to cut you off.*"
    hint.classList.add("hint")
    let hint1 = document.createElement("p")
    hint1.innerText = "*you are still trying to find some reason to persuade her. miriculously, she isn't anxious to cut you off.*"
    hint1.classList.add("hint")

    document.body.append(hint)
    document.body.append(hint1)


    setTimeout(function () {
        hint.remove()
        hint1.remove()
    }, 3000)

})
