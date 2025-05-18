let questions = [];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

async function fetchQuestions() {
  const res = await fetch("https://opentdb.com/api.php?amount=20&type=multiple");
  const data = await res.json();
  questions = data.results.map(q => ({
    question: decodeHTMLEntities(q.question),
    options: shuffle([q.correct_answer, ...q.incorrect_answers]),
    answer: decodeHTMLEntities(q.correct_answer)
  }));
  loadQuestion();
}

function decodeHTMLEntities(str) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectAnswer(option);
    optionsEl.appendChild(li);
  });
}

function selectAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.textContent = `You scored ${score} out of ${questions.length}!`;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

fetchQuestions();
