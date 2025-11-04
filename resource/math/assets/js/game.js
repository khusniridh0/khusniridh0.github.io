const mode = document.querySelectorAll(".link-mode");
const lavel = document.querySelectorAll(".link-lavel");
const question = document.querySelectorAll(".question-box .question span");
const title = document.querySelector(".question-box .title");
const timer = document.querySelector(".timer h2");
const answer = document.querySelector(".answer-input");
const bestScore = document.querySelector(".best-score h2");
const score = document.querySelector(".summary .score .stat-value span:nth-child(2)");
const correctAnswer = document.querySelector(".summary .correct .stat-value span:nth-child(2)");
const wrongAnswer = document.querySelector(".summary .wrong .stat-value span:nth-child(2)");
const totalQuestions = document.querySelector(".summary .total-questions .stat-value span:nth-child(2)");
const avrageScore = document.querySelector(".summary .avrage-questions .stat-value span:nth-child(2)");

const config = {
    ready: true,
    start: false,
    lavel: 'easy', // easy, medium, hard, extreme
    slectedMode: '',
    modeName: '',
    modeSimbol: '',
    time: 150,
    bestScore: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    totalQuestions: 0,
    avrageScore: 0,
    num1: 0,
    num2: 0
}

const count = {
    add: (num1, num2) => {
        return num1 + num2;
    },

    sub: (num1, num2) => {
        return num1 - num2;
    },

    mul: (num1, num2) => {
        return num1 * num2;
    },

    div: (num1, num2) => {
        return num1 / num2;
    }
}

function getNumber() {
    config.totalQuestions += 1;
    result = []
    const min = config.lavel === 'easy' ? 1 : config.lavel === 'medium' ? 10 : config.lavel === 'hard' ? 100 : 1000;
    const max = config.lavel === 'easy' ? 9 : config.lavel === 'medium' ? 99 : config.lavel === 'hard' ? 999 : 9999;

    for (let i = 0; i < 2; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return result.sort((a, b) => b - a);
}

const resetGame = () => {
    config.time = 150;
    config.score = 0;
    config.correctAnswers = 0;
    config.wrongAnswers = 0;
    config.totalQuestions = 0;
    config.avrageScore = 0;
    config.ready = true;
    config.start = false;
    [config.num1, config.num2] = getNumber()
}

const convertToTime = () => {
    const minutes = Math.floor(config.time / 60);
    const seconds = config.time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const firstLoad = () => {
    [config.num1, config.num2] = getNumber()
    config.slectedMode = "add";
    config.modeName = "Addition";
    config.modeSimbol = " + ";
}

const updateView = () => {
    title.textContent = config.modeName;
    question[0].textContent = config.num1;
    question[1].textContent = config.modeSimbol;
    question[2].textContent = config.num2;
    timer.textContent = convertToTime();
    bestScore.textContent = config.bestScore;
    correctAnswer.textContent = config.correctAnswers;
    wrongAnswer.textContent = config.wrongAnswers;
    score.textContent = config.score;
    totalQuestions.textContent = config.totalQuestions;
    avrageScore.textContent = config.totalQuestions > 0 ? (config.score / config.totalQuestions).toFixed(2) : 0;

    if (config.score > config.bestScore) {
        config.bestScore = config.score;
        bestScore.textContent = config.bestScore;
    }
}

const timerInterval = setInterval(() => {
    if (config.start) {
        timer.textContent = convertToTime();
        if (config.time <= 0) {
            // clearInterval(timerInterval);
            config.start = false;
            config.ready = false;
        } else {
            config.time--;
        }
    }
}, 1000);

const wrongAnswerInterval = () => {
    if (config.start) {
        answer.classList.add("wrong");
        setTimeout(() => {
            answer.classList.remove("wrong");
        }, 500);
    }
};

mode.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        config.slectedMode = e.target.getAttribute("data-operator");
        [config.num1, config.num2] = getNumber()

        switch (config.slectedMode) {
            case "add":
                config.slectedMode = "add";
                config.modeName = "Addition";
                config.modeSimbol = " + ";
                break;
            case "sub":
                config.slectedMode = "sub";
                config.modeName = "Subtraction";
                config.modeSimbol = " - ";
                break;
            case "mul":
                config.slectedMode = "mul";
                config.modeName = "Multiplication";
                config.modeSimbol = " × ";
                break;
            case "div":
                config.slectedMode = "div";
                config.modeName = "Division";
                config.modeSimbol = " ÷ ";
                break;
            default:
                config.slectedMode = "add";
                config.modeName = "Addition";
                config.modeSimbol = " + ";
        }

        answer.value = ""
        answer.focus();

        resetGame()
        updateView()
    })
})

lavel.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        config.lavel = e.target.getAttribute("data-lavel");
        [config.num1, config.num2] = getNumber()
        answer.value = ""
        answer.focus();
        resetGame()
        updateView()
    })
})

answer.addEventListener("keydown", (e) => {
    e.preventDefault();

    if (e.key === "F5" || (e.ctrlKey && e.key === "r")) {
        location.reload();
    }

    if (e.key >= 0 && e.key <= 9) {
        if (!config.start) {
            config.start = true;
        }
        answer.value = answer.value + e.key;
    }

    if (e.key === "Backspace") {
        answer.value = answer.value.slice(0, -1);
    }

    if (!config.ready) {
        answer.value = "";
        return
    }

    if (e.key === "Enter") {
        let userAnswer = parseFloat(answer.value);
        let correctAnswer;

        switch (config.slectedMode) {
            case "add":
                correctAnswer = count.add(config.num1, config.num2);
                break;
            case "sub":
                correctAnswer = count.sub(config.num1, config.num2);
                break;
            case "mul":
                correctAnswer = count.mul(config.num1, config.num2);
                break;
            case "div":
                correctAnswer = count.div(config.num1, config.num2);
                break;
            default:
                correctAnswer = count.add(config.num1, config.num2);
        }

        if (userAnswer === correctAnswer) {
            config.correctAnswers += 1;
            config.score += config.lavel === 'easy' ? 2 : config.lavel === 'medium' ? 4 : config.lavel === 'hard' ? 6 : 8;
        } else {
            config.wrongAnswers += 1;
            wrongAnswerInterval();
        }

        [config.num1, config.num2] = getNumber()
        updateView()
        answer.value = "";
    }
})

window.addEventListener('load', () => {
    firstLoad()
    updateView()
    answer.focus();
})