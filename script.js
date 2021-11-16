

const button = document.querySelector(".submit-button")
const form = document.querySelector(".submit-guess")
const input = document.querySelector(".guess")
const tooHigh = document.querySelector(".too-high")
const tooLow = document.querySelector(".too-low")
const correct = document.querySelector(".correct-guess")


let randomNr = Math.floor(Math.random() * 11)
const goodJob = document.createElement("h2")
goodJob.innerText = "You got it! The answer is " + randomNr

button.addEventListener("click", (e) => {
    e.preventDefault()
    let guess = input.value
    if (randomNr > guess) {
        input.value = ""
        tooLow.classList.add("show")
        tooHigh.classList.remove("show")
        console.log(randomNr, guess, "You guessed too low")
    } else if (randomNr < guess) {
        input.value = ""

        tooHigh.classList.add("show")
        tooLow.classList.remove("show")
        console.log(randomNr, guess, "You guessed too high")
    } if (guess == randomNr) {
        console.log("You got it!")

        input.value = ""
        tooHigh.classList.remove("show")
        tooLow.classList.remove("show")
        correct.appendChild(goodJob)

        setTimeout(() => {
            correct.removeChild(goodJob)
        }, 3000)
        randomNr = Math.floor(Math.random() * 11)

    }


})

form.addEventListener("submit", e => {
    input.innerHTML = ""

})


