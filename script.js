const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const users = document.querySelector('#users');
const computerUser = document.querySelector('#computer');
const result = document.querySelector("#result");
const resultRock = `rock.png`;
const resultPaper = `paper.png`;
const resultScissor = `scissors.png`;
const pieces = [rock, paper, scissors];

pieces[0].addEventListener('click', () => {
    users.innerHTML = `
        <img class="rock" src="rock.png">
    `;
    const computer = pieces[Math.floor(Math.random() * 3)];

    if (computer == rock) {
        computerUser.innerHTML = `
            <img class="rock" src="rock.png">
        `;
    } else if (computer == paper) {
        computerUser.innerHTML = `
            <img class="paper" src="paper.png">
        `;
    } else if (computer == scissors) {
        computerUser.innerHTML = `
        <img class="scissors" src="scissors.png">
    `;
    }
    resultPosibility()
});

pieces[1].addEventListener('click', () => {
    users.innerHTML = `
        <img class="paper" src="paper.png">
    `;
    const computer = pieces[Math.floor(Math.random() * 3)];

    if (computer == rock) {
        computerUser.innerHTML = `
            <img class="rock" src="rock.png">
        `;
    } else if (computer == paper) {
        computerUser.innerHTML = `
            <img class="paper" src="paper.png">
        `;
    } else if (computer == scissors) {
        computerUser.innerHTML = `
        <img class="scissors" src="scissors.png">
    `;
    }
    resultPosibility()
});

pieces[2].addEventListener('click', () => {
    users.innerHTML = `
        <img class="scissors" src="scissors.png">
    `;
    const computer = pieces[Math.floor(Math.random() * 3)];

    if (computer == rock) {
        computerUser.innerHTML = `
            <img class="rock" src="rock.png">
        `;
    } else if (computer == paper) {
        computerUser.innerHTML = `
            <img class="paper" src="paper.png">
        `;
    } else if (computer == scissors) {
        computerUser.innerHTML = `
        <img class="scissors" src="scissors.png">
    `;
    }
    resultPosibility()
});

function resultPosibility() {
    const userChoice = users.querySelector("img").getAttribute("src");
    const computerChoice = computerUser.querySelector("img").getAttribute("src");

    if (computerChoice == resultPaper) {
        if (userChoice == resultScissor) {
            return result.innerHTML = `🎉✨ You are the Winner!!! ✨🎉`;
        } else if (userChoice == resultPaper) {
            return result.innerHTML = `🔥🔥 It's a Tie!!! 🔥🔥`;
        } else if (userChoice == resultRock) {
            return result.innerHTML = `🚨🚨 You are the Loser!!! 🚨🚨`;
        }
    }

    if (computerChoice == resultScissor) {
        if (userChoice == resultPaper) {
            return result.innerHTML = `🚨🚨 You are the Loser!!! 🚨🚨`;
        } else if (userChoice == resultRock) {
            return result.innerHTML = `🎉✨ You are the Winner!!! ✨🎉`;
        } else if (userChoice == resultScissor) {
            return result.innerHTML = `🔥🔥 It's a Tie!!! 🔥🔥`;
        }
    }

    if (computerChoice == resultRock) {
        if (userChoice == resultPaper) {
            return result.innerHTML = `🎉✨ You are the Winner!!! ✨🎉`;
        } else if (userChoice == resultScissor) {
            return result.innerHTML = `🚨🚨 You are the Loser!!! 🚨🚨`;
        } else if (userChoice == resultRock) {
            return result.innerHTML = `🔥🔥 It's a Tie!!! 🔥🔥`;
        }
    }
}