const quizData = [
    { src: "sakana.mp3", answer: "sakanakution" },
    { src: "shikyuu.mp3", answer: "shikyuu" }
];

let currentQuestion = 0;
let score = 0;

const audio = document.getElementById("quiz-audio");
const progress = document.getElementById("progress");

function loadQuestion() {
    if (currentQuestion >= 5) {
        alert("おめでとう！！全問正解！");
        return;
    }
    const randomIndex = Math.floor(Math.random() * quizData.length);
    audio.src = quizData[randomIndex].src;
    audio.dataset.answer = quizData[randomIndex].answer;
    progress.textContent = `${currentQuestion + 1} / 5`;
}

function playAudio() {
    audio.currentTime = 0;
    audio.play();
}

function answer(choice) {
    const correct = audio.dataset.answer;
    if (choice === correct) {
        score++;
        currentQuestion++;
        loadQuestion();
    } else {
        alert("不正解！");
        window.location.href = "https://youtube.com/playlist?list=PLYDTOKL1kqVpghjT5nf85xn58ViMWdC2Z";
    }
}

window.onload = loadQuestion;
