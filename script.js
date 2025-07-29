function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("hidden");
}

// Optional dummy functions (replace with your real game logic)
function startColorMatch() {
  speak("Starting Color Match");
  // Your game logic here
}

function startShapePop() {
  speak("Starting Shape Pop");
  // Your game logic here
}

function startAlphabetCatcher() {
  speak("Starting Alphabet Catcher");
  // Your game logic here
}

function startNumberGame() {
  speak("Starting Number Hunt");
  // Your game logic here
}

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  window.speechSynthesis.speak(msg);
}

// Toggle the left menu bar (hamburger menu)
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("hidden");
}

// Video links for each category
const videoLinks = {
  cartoons: [
    "https://www.youtube.com/embed/MtN1YnoL46Q", // Peppa Pig - The Balloon Ride
    "https://www.youtube.com/embed/2S__fbCGwOM", // Masha and The Bear - Recipe for Disaster
    "https://www.youtube.com/embed/9xv-FjbXaqk", // Paw Patrol - Pups Save the Penguins
    "https://www.youtube.com/embed/2Xc9gXyf2G4", // Cocomelon - Yes Yes Vegetables Song
  ],
  rhymes: [
    "https://www.youtube.com/embed/Sb5aq5HcS1A", // Cocomelon - Wheels on the Bus
    "https://www.youtube.com/embed/yCjJyiqpAuU", // Baby Shark Dance
    "https://www.youtube.com/embed/75p-N9YKqNo", // Johny Johny Yes Papa
    "https://www.youtube.com/embed/0peZ5AN5vs8", // Five Little Ducks
  ],
  learning: [
    "https://www.youtube.com/embed/8yteMugRAc0", // Counting 1-20 - Cocomelon
    "https://www.youtube.com/embed/36IBDpTRVNE", // ABC Song - Cocomelon
    "https://www.youtube.com/embed/1I5ZMmrOfnA", // Colors Song - Cocomelon
    "https://www.youtube.com/embed/8v8Vo6M8p1c", // Shapes Song - Cocomelon
  ],
};

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.classList.toggle("hidden");
}
const speak = (text) => {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  window.speechSynthesis.speak(msg);
};

function startColorMatch() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const target = colors[Math.floor(Math.random() * colors.length)];
  speak("Tap the " + target + " box");

  let html = '<h2>🎨 Tap the "' + target + '" color!</h2>';
  colors.forEach((color) => {
    html += `<div class="color-box" style="background:${color}" onclick="checkColor('${color}', '${target}')"></div>`;
  });
  document.getElementById("gameArea").innerHTML = html;
}

function checkColor(chosen, target) {
  if (chosen === target) {
    speak("Great job! You got it!");
    alert("✅ Correct!");
  } else {
    speak("Oops! Try again!");
    alert("❌ That's not it!");
  }
}

function startShapePop() {
  speak("Pop the circle!");
  let html = "<h2>🟠 Tap the Circle!</h2>";
  html += `<div class="shape" onclick="popShape(true)"></div>`;
  html += `<div class="color-box" onclick="popShape(false)" style="background:gray"></div>`;
  html += `<div class="color-box" onclick="popShape(false)" style="background:orange"></div>`;
  document.getElementById("gameArea").innerHTML = html;
}

function popShape(correct) {
  if (correct) {
    speak("Yay! You popped it!");
    alert("🎉 Well done!");
  } else {
    speak("That's not the circle!");
    alert("❌ Try again!");
  }
}

function startAlphabetCatcher() {
  const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  speak("Find the letter " + letter);

  let html = `<h2>🔤 Tap the Letter "${letter}"</h2><div>`;
  for (let i = 0; i < 6; i++) {
    let char = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    html += `<span id="alphabetBox" onclick="checkLetter('${char}', '${letter}')">${char}</span>`;
  }
  html += "</div>";
  document.getElementById("gameArea").innerHTML = html;
}

function checkLetter(clicked, target) {
  if (clicked === target) {
    speak("Yippee! Correct letter!");
    alert("✅ Great!");
  } else {
    speak("Oops, that was the letter " + clicked);
    alert("❌ Try again!");
  }
}
function startNumberPuzzle() {
  // Simple number order puzzle
  const numbers = [1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);
  let html = "<h2>🧩 Arrange Numbers in Order</h2><div id='numberPuzzle'>";
  numbers.forEach((num) => {
    html += `<button onclick="selectNumber(this)">${num}</button> `;
  });
  html += "</div><div id='numberResult'></div>";
  document.getElementById("gameArea").innerHTML = html;
  window.selectedNumbers = [];
}

function selectNumber(btn) {
  btn.disabled = true;
  window.selectedNumbers.push(Number(btn.textContent));
  if (window.selectedNumbers.length === 5) {
    const correct = [1, 2, 3, 4, 5];
    if (window.selectedNumbers.every((n, i) => n === correct[i])) {
      speak("Awesome! Numbers are in order!");
      document.getElementById("numberResult").innerHTML = "✅ Correct Order!";
    } else {
      speak("Oops! Try again!");
      document.getElementById("numberResult").innerHTML = "❌ Wrong Order!";
    }
  }
}

function startMemoryFlip() {
  // Simple memory flip game with 2 pairs
  const cards = ["🐶", "🐱", "🐶", "🐱"].sort(() => Math.random() - 0.5);
  let html = "<h2>🧠 Memory Flip</h2><div id='memoryBoard'>";
  cards.forEach((card, i) => {
    html += `<button class='memory-card' onclick='flipCard(this, "${card}", ${i})'>❓</button> `;
  });
  html += "</div>";
  document.getElementById("gameArea").innerHTML = html;
  window.memoryState = { flipped: [], values: [], matched: [] };
}

function flipCard(btn, value, idx) {
  if (
    window.memoryState.flipped.length < 2 &&
    !window.memoryState.matched.includes(idx)
  ) {
    btn.textContent = value;
    window.memoryState.flipped.push(btn);
    window.memoryState.values.push({ value, idx });
    if (window.memoryState.flipped.length === 2) {
      setTimeout(() => {
        const [a, b] = window.memoryState.values;
        if (a.value === b.value && a.idx !== b.idx) {
          window.memoryState.matched.push(a.idx, b.idx);
          speak("Match found!");
          if (window.memoryState.matched.length === 4) {
            speak("You win!");
            alert("🎉 All pairs matched!");
          }
        } else {
          window.memoryState.flipped.forEach(
            (card) => (card.textContent = "❓")
          );
          speak("Try again!");
        }
        window.memoryState.flipped = [];
        window.memoryState.values = [];
      }, 800);
    }
  }
}

function startAnimalQuiz() {
  // Simple animal quiz
  const animals = [
    {
      q: "Which animal says 'meow'?",
      a: "Cat",
      options: ["Dog", "Cat", "Cow"],
    },
    {
      q: "Which animal is the king of the jungle?",
      a: "Lion",
      options: ["Lion", "Elephant", "Rabbit"],
    },
    {
      q: "Which animal can fly?",
      a: "Bird",
      options: ["Fish", "Bird", "Horse"],
    },
  ];
  const quiz = animals[Math.floor(Math.random() * animals.length)];
  let html = `<h2>🐾 Animal Quiz</h2><p>${quiz.q}</p>`;
  quiz.options.forEach((opt) => {
    html += `<button onclick="checkAnimalQuiz('${opt}', '${quiz.a}')">${opt}</button> `;
  });
  document.getElementById("gameArea").innerHTML = html;
}

function checkAnimalQuiz(selected, answer) {
  const gameArea = document.getElementById("gameArea");
  let resultBox = document.getElementById("quizResult");
  if (!resultBox) {
    resultBox = document.createElement("div");
    resultBox.id = "quizResult";
    gameArea.appendChild(resultBox);
  }
  if (selected === answer) {
    speak("Correct! Well done!");
    resultBox.innerHTML = `<div class="colorful-alert success">✅ Correct!</div>`;
  } else {
    speak("Oops! Try again!");
    resultBox.innerHTML = `<div class="colorful-alert error">❌ Wrong answer!</div>`;
  }
}
