function incrementOnePoint(team) {
    const teamscore = document.getElementById("score" + team);
    let incrementScore = Number(teamscore.textContent);
    teamscore.textContent = ++incrementScore
}

function decrementOnePoint(team) {
    const teamscore = document.getElementById("score" + team);
    let decrementScore = Number(teamscore.innerHTML);
    if (decrementScore > 0) {
        decrementScore -= 1;
        teamscore.innerHTML = decrementScore;
    } else {
        alert("This is a basketball game, and there is no chance that score is bellow 0!!");
    }
}

function resetScore(team) {
    let teamscore = document.getElementById("score" + team);
    let getScore = Number(teamscore.textContent);
    getScore = 0;
    teamscore.textContent = getScore;
}

function setName(team) {
    let newName = prompt("What is your new team name?");
    if (newName !== null && isNaN(newName)) {
        document.getElementById("teamName" + team).textContent = newName.toString();
    } else {
        alert("You cannot write a number! Use string!");
    }
}

function setScore(team) {
    let newScore = prompt("How many points do you want to enter into the score value?");
    newScore = parseInt(newScore);
    if (!isNaN(newScore) && newScore !== null && (Number.isInteger(newScore))) {
        document.getElementById("score" + team).innerHTML = newScore;
    } else {
        alert("You cannot write a string! Use number!");
    }
}