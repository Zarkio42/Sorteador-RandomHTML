const buttonRandom = document.querySelector(".box button")
var numWinner = document.querySelector(".box h1")
var run = []

for (i = 0; i <= 50; i++) {
    run.push(i)
}

buttonRandom.addEventListener("click", () => {
    numWinner.innerHTML = "O número sorteado é " + run[Math.floor(Math.random() * run.length)]
})