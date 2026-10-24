const homeScoreDisplay = document.getElementById("home-score");
const guestScoreDisplay = document.getElementById("guest-score");
const resetButton = document.getElementById("reset-button");

let homeScore = 0;
let guestScore = 0;

const scoringButtons = document.querySelectorAll(".buttons button");

scoringButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const team = button.dataset.team;
        const points = Number(button.dataset.points);

        if (team === "home") {
            homeScore = homeScore + points;
            homeScoreDisplay.textContent = homeScore;
        } else if (team === "guest") {
            guestScore = guestScore + points;
            guestScoreDisplay.textContent = guestScore;}});
});

resetButton.addEventListener("click", function () {
    homeScore = 0;
    guestScore = 0;

    homeScoreDisplay.textContent = homeScore;
    guestScoreDisplay.textContent = guestScore;});