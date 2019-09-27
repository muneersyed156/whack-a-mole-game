var tt = document.getElementById("clock")
var m = document.querySelectorAll(".mole")
var s = document.querySelector(".score")
var wp = document.getElementById("winPopup")
var ws = document.getElementById("winScore")
var pg = document.getElementById("playAgainButton")
var lp = document.getElementById("losePopup")
var lpb = document.getElementById("retryButton")
var ls = document.getElementById("loseScore")
pg.addEventListener("click", startGame)
var t = 21
var c = 0
var timeup
for (var i = 0; i < m.length; i++) {
    m[i].addEventListener("click", incr)
}
pg.addEventListener("click", function () {
    window.location.href = "./index.html"
})
lpb.addEventListener("click", function () {
    window.location.href = "./index.html"
})
function startGame() {
    setInterval(function () {
        if (t - 1 >= -1) {
            if (t - 1 >= 0) {
                tt.innerHTML = t - 1
                var r = Math.floor(Math.random() * (255 - 0) + 0) + 0
                var g = Math.floor(Math.random() * (255 - 0 + 0)) + 0
                var b = Math.floor(Math.random() * (255 - 0 + 0)) + 0
                tt.style.background = `rgb(${r},${g},${b})`
                genpics()
            }
            t = t - 1
            if (t == -1) {
                if (c >= 4) {
                    wp.style.display = "block"
                    ws.innerHTML = c

                }
                else {
                    lp.style.display = "block"
                    ls.innerHTML = c
                }
            }
        }
        else {
            clearInterval()
        }
    }, 1000)
}
function genpics() {
    var k = Math.floor(Math.random() * (6 - 1) + 1) + 1
    var td = document.getElementsByClassName("hole hole" + (k.toString()))
    td[0].classList.add("up")

    var rt = Math.floor(Math.random() * (1000 - 300) + 300) + 300
    setTimeout(function () {
        td[0].classList.remove("up")
    }, rt)
}

function incr() {
    c += 1
    s.textContent = c
}

