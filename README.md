## 🧠 Quiz App README

### 📌 Overview

This is a **web-based Quiz Application** that fetches multiple-choice questions from an online trivia API and displays them in an interactive UI. Users can select answers and get their final score at the end of the quiz.

The app is built using **HTML, CSS, and JavaScript (Vanilla JS)** and does not require any backend setup.

---

### ✨ Features

* 📡 Fetches real-time quiz questions from Open Trivia Database API
* 🎲 Randomized answer options using shuffle logic
* 🧾 Decodes HTML entities for clean question display
* 📊 Displays final score after quiz completion
* 📱 Fully responsive UI design
* ⚡ Lightweight and fast loading

---

### 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
* **API:** Open Trivia Database ([https://opentdb.com/](https://opentdb.com/))

---

### 📂 Project Structure

```
quiz-app/
│
├── index.html     # Main HTML structure
├── style.css      # UI styling and responsive design
├── script.js      # Quiz logic and API handling
└── README.md
```

---

### ⚙️ How It Works

1. The app fetches **20 multiple-choice questions** from the Open Trivia API.
2. Questions and answers are cleaned using HTML entity decoding.
3. Answer options are shuffled randomly.
4. User selects an answer → score updates if correct.
5. After all questions → Final result is displayed.

---

### 🚀 Installation & Usage

1️⃣ Clone the repository

```
git clone https://github.com/your-username/quiz-app.git
```

2️⃣ Open project folder

```
cd quiz-app
```

3️⃣ Run the app

* Simply open **index.html** in any modern browser.

(No server or dependencies required)

---

### 📡 API Used

* Open Trivia Database API
* Endpoint Example:

```
https://opentdb.com/api.php?amount=20&type=multiple
```

---

### 🎯 Use Cases

* Learning JavaScript async API calls
* DOM Manipulation practice
* Beginner frontend project
* Educational quiz platforms

---

### 🔮 Future Improvements

* Add timer for each question
* Add category selection
* Add difficulty levels
* Add leaderboard system
* Store scores locally

---

