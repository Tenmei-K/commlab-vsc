let seconds = document.querySelector(".seconds")
let sound = document.querySelector("#sound")

function getTheTime() {
  let now = new Date(); // returns the current moment

  let h = now.getHours();      // 0–23
  let m = now.getMinutes();    // 0–59
  let s = now.getSeconds();    // 0–59


  console.log(h, m, s);
  seconds.innerHTML = ""

  repeat(s, function () {
    let div = document.createElement("div")
    seconds.append(div)
    sound.play()
  })

}


setInterval(getTheTime, 1000)










// Leon's Helper function:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}