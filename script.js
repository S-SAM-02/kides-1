/* Game Styling */
.color-box {
  width: 80px;
  height: 80px;
  display: inline-block;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid #fff;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}

.shape {
  width: 80px;
  height: 80px;
  background-color: #ffcc80;
  border-radius: 50%;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
}

.colorful-alert {
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 15px;
  width: fit-content;
  margin: 15px auto;
  animation: popIn 0.3s ease-out;
}

.colorful-alert.success {
  background: #c8e6c9;
  color: #2e7d32;
  border: 2px solid #81c784;
}

.colorful-alert.error {
  background: #ffcdd2;
  color: #c62828;
  border: 2px solid #e57373;
}

@keyframes popIn {
  from { transform: scale(0.5); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
function showAlert(message, type = "success") {
  const alertBox = document.getElementById("alertBox");
  alertBox.innerHTML = `<div class="colorful-alert ${type}">${message}</div>`;
  setTimeout(() => (alertBox.innerHTML = ""), 2000);
}

function clearGameArea() {
  document.getElementById("gameArea").innerHTML = "";
}

// Automatically load a new random game
function nextGame() {
  const games = [
    playColorMatch,
    playShapePop,
    playAlphabetCatcher,
    playAnimalQuiz,
    playMemoryFlip,
    playNumberPuzzle
  ];
  const randomGame = games[Math.floor(Math.random() * games.length)];
  setTimeout(randomGame, 2000); // Delay to show success message
}

// Color Match Game
function playColorMatch() {
  clearGameArea();
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const correct = colors[Math.floor(Math.random() * colors.length)];
  const area = document.getElementById("gameArea");

  area.innerHTML = `<h2>Click the <span style="color:${correct}">${correct}</span> box!</h2>`;
  colors.forEach((color) => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.onclick = () => {
      if (color === correct) {
        showAlert("Correct! Great job!", "success");
        nextGame();
      } else {
        showAlert(`Oops! It was ${correct}. Try again!`, "error");
      }
    };
    area.appendChild(box);
  });
}

// Shape Pop Game
function playShapePop() {
  clearGameArea();
  const shapes = ["circle", "square", "triangle"];
  const correct = shapes[Math.floor(Math.random() * shapes.length)];
  const area = document.getElementById("gameArea");

  area.innerHTML = `<h2>Pop the <span style="color:#ff4081">${correct}</span> shape!</h2>`;
  shapes.forEach((shape) => {
    const div = document.createElement("div");
    div.className = "shape";
    if (shape === "square") {
      div.style.borderRadius = "0%";
    } else if (shape === "triangle") {
      div.style.width = "0";
      div.style.height = "0";
      div.style.borderLeft = "40px solid transparent";
      div.style.borderRight = "40px solid transparent";
      div.style.borderBottom = "80px solid #ffcc80";
      div.style.backgroundColor = "transparent";
    }
    div.onclick = () => {
      if (shape === correct) {
        showAlert("Yay! You popped the right shape!", "success");
        nextGame();
      } else {
        showAlert(`Oops! It was a ${correct}. Try again!`, "error");
      }
    };
    area.appendChild(div);
  });
}

// Alphabet Catcher Game
function playAlphabetCatcher() {
  clearGameArea();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const correct = alphabet[Math.floor(Math.random() * alphabet.length)];
  const area = document.getElementById("gameArea");

  area.innerHTML = `<h2>Catch the letter <span style="color:#ff4081">${correct}</span>!</h2>`;
  for (let i = 0; i < 6; i++) {
    const span = document.createElement("span");
    span.className = "alphabetBox";
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    span.textContent = randomLetter;
    span.onclick = () => {
      if (span.textContent === correct) {
        showAlert("Nice! You caught it!", "success");
        nextGame();
      } else {
        showAlert(`Wrong! It was ${correct}`, "error");
      }
    };
    area.appendChild(span);
  }
}

// Animal Quiz Game
function playAnimalQuiz() {
  clearGameArea();
  const animals = ["Cat", "Dog", "Elephant", "Lion"];
  const correct = animals[Math.floor(Math.random() * animals.length)];
  const area = document.getElementById("gameArea");

  area.innerHTML = `<h2>Guess the animal!</h2>`;
  animals.forEach((animal) => {
    const btn = document.createElement("button");
    btn.className = "game-btn";
    btn.textContent = animal;
    btn.onclick = () => {
      if (animal === correct) {
        showAlert("Roar! You got it!", "success");
        nextGame();
      } else {
        showAlert(`Nope, it was ${correct}. Try again!`, "error");
      }
    };
    area.appendChild(btn);
  });
}

// Memory Flip Game
function playMemoryFlip() {
  clearGameArea();
  const emojis = ["🐶", "🐱", "🐶", "🐱"];
  const shuffled = emojis.sort(() => 0.5 - Math.random());
  let selected = [];
  let matched = 0;
  const area = document.getElementById("gameArea");

  area.innerHTML = `<h2>Match the same animals!</h2>`;
  shuffled.forEach((emoji, index) => {
    const box = document.createElement("div");
    box.className = "alphabet-box";
    box.dataset.index = index;
    box.dataset.emoji = emoji;
    box.textContent = "❓";
    box.onclick = () => {
      if (box.textContent === "❓" && selected.length < 2) {
        box.textContent = emoji;
        selected.push(box);

        if (selected.length === 2) {
          setTimeout(() => {
            if (selected[0].dataset.emoji === selected[1].dataset.emoji) {
              showAlert("Yay! You found a match!", "success");
              matched++;
              if (matched === emojis.length / 2) {
                showAlert("All pairs matched! 🎉", "success");
                nextGame();
              }
            } else {
              selected[0].textContent = "❓";
              selected[1].textContent = "❓";
              showAlert("Oops! Not a match!", "error");
            }
            selected = [];
          }, 600);
        }
      }
    };
    area.appendChild(box);
  });
}

// Number Puzzle Game
function playNumberPuzzle() {
  clearGameArea();
  const numbers = [1, 2, 3, 4, 5];
  const correct = numbers[Math.floor(Math.random() * numbers.length)];
  const area = document.getElementById("gameArea");

  area.innerHTML = `<h2>Click on number <span style='color:orange'>${correct}</span></h2>`;
  numbers.sort(() => 0.5 - Math.random()).forEach((num) => {
    const btn = document.createElement("button");
    btn.textContent = num;
    btn.onclick = () => {
      if (num === correct) {
        showAlert("Correct! You're a number wizard! ✨", "success");
        nextGame();
      } else {
        showAlert(`Oops! It was ${correct}. Try again!`, "error");
      }
    };
    area.appendChild(btn);
  });
}
box.onclick = () => {
  if (color === correct) {
    showAlert("Correct! Great job!", "success");
    setTimeout(playColorMatch, 1500); // Reload game after 1.5 sec
  } else {
    showAlert(`Oops! It was ${correct}. Try again!`, "error");
  }
};
