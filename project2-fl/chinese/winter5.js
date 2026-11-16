let biteaudio = document.createElement("audio")
biteaudio.src = "../sounds/pear.mp3"
biteaudio.loop = false

let hintaudio = document.createElement("audio")
hintaudio.src = "../sounds/木头咚.wav"
hintaudio.loop = false

let audios = [];
audios.push(biteaudio);
audios.push(hintaudio);
let audioVolumeP = 1;


let forkOne = document.querySelector("#forkOne")
let forkTwo = document.querySelector("#forkTwo")
let fork = document.querySelectorAll(".fork")


let background = document.querySelector("#backgroundWinter")
background.style.opacity = 0.4

biteaudio.pause();
biteaudio.currentTime = 0;
biteaudio.play()

let hint = document.createElement("p")
hint.innerText = "*她咬了一口梨，然后凝视你的脸。无形的压力迅速爬上你的小腿。*"
hint.classList.add("hint")
let hint1 = document.createElement("p")
hint1.innerText = "*她咬了一口梨，然后凝视你的脸。无形的压力迅速爬上你的小腿。*"
hint1.classList.add("hint")

document.body.append(hint)
document.body.append(hint1)


setTimeout(function () {
    hint.remove()
    hint1.remove()
}, 3000)


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
    document.location = "winter6.html"
})
forkTwo.addEventListener("click", function () {
    hintaudio.play()
    let hint = document.createElement("p")
    hint.innerText = "*她咬了一口梨，然后凝视你的脸。无形的压力迅速爬上你的小腿。*"
    hint.classList.add("hint")
    let hint1 = document.createElement("p")
    hint1.innerText = "*她咬了一口梨，然后凝视你的脸。无形的压力迅速爬上你的小腿。*"
    hint1.classList.add("hint")

    document.body.append(hint)
    document.body.append(hint1)


    setTimeout(function () {
        hint.remove()
        hint1.remove()
    }, 6000)

})
