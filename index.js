let homeScore = document.getElementById("home-scr")
let guestScore = document.getElementById("guest-scr")
let homeResult = 0
let guestResult = 0


function addOneHome() {
    homeResult += 1
    homeScore.textContent = homeResult
}

function addTwoHome() {
    homeResult += 2
    homeScore.textContent = homeResult
}

function addThreeHome() {
    homeResult += 3
    homeScore.textContent =homeResult
}

function addOneGuest() {
    guestResult += 1
    guestScore.textContent = guestResult
}

function addTwoGuest() {
    guestResult += 2
    guestScore.textContent = guestResult
}

function addThreeGuest() {
    guestResult += 3
    guestScore.textContent = guestResult
}