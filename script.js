function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("hidden");
}

function showAlert(message, type = "success") {
  const alertBox = document.getElementById("alertBox");
  alertBox.innerHTML = `<div class="colorful-alert ${type}">${message}</div>`;
  setTimeout(() => (alertBox.innerHTML = ""), 3000);
}

function clearGameArea() {
  document.getElementById("gameArea").innerHTML = "";
}

// Color Match Game
function playColorMatch() {
  clearGameArea();
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const correct = colors[Math.floor(Math.random() * colors.length)];

  const area = document.getElementById("gameArea");
  area.innerHTML = `<h2>Click the <span style="color:${correct};text-shadow:1px 1px #000">${correct}</span> box!</h2>`;

  colors.forEach((color) => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.onclick = () => {
      if (color === correct) {
        showAlert("Correct! Great job!", "success");
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
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    const span = document.createElement("span");
    span.id = "alphabetBox";
    span.textContent = randomLetter;
    span.onclick = () => {
      if (randomLetter === correct) {
        showAlert("Nice! You caught it!", "success");
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
      } else {
        showAlert(`Nope, it was ${correct}. Try again!`, "error");
      }
    };
    area.appendChild(btn);
  });
}
