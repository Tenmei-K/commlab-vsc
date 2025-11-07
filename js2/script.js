// 其实我已经忘了这条讲了什么但它真的很重要，总之很便捷吧！
let container = document.querySelector("#container")
// # this is called pound sign (啊？)


function showText() {
    //creating element in "JS space"
    let headline = document.createElement("h5")
    //modify
    headline.innerText = "Welcome to my page"


    //put it on the page
    // document.body.append(headline)

    //put it into another element
    container.append(headline)

    //delete
    document.querySelector(".notWanted").remove()
}

function moveBox() {
    container.classList.toggle("move")

    //random between 0 and 1
    let r1 = Math.random()
    console.log(r1)

    //custom number size
    let r2 = Math.random() * 100
    console.log(r2)

    //cuntom min and max
    let r3 = 10 + Math.random() * 10
    // let r3 = (1 + Math.random()) * 10  这个也可以！嬉しい！
    console.log(r3)

    //round a number
    let r4 = Math.floor(r3)
    console.log(r4)



    // style怎么改是真的忘干净了对不起.jpg
    document.querySelector(".notWanted").style.fontSize = r2 + "px"
}