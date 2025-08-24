var quoteTxt = 'quotes.txt';
const quotes = [];
quotes.length = 0;

function user() {
  let user = localStorage.getItem("user");
  if (!user) {
    user = prompt("what shall I call you?");
    if (user) {
      localStorage.setItem("user", user);
    }
  }
  if (user) {
      document.getElementById("greeting").innerHTML = `What's up, ${user}!`;
      document.getElementById("start-button").style.display = "none";
      document.getElementById("greeting").style.fontSize = "35px";
      document.getElementById("mainGroup").style.display = "flex";
  }
}
function hideElements() {
    document.getElementById("mainGroup").style.display = "none";
}
function hideWidgets() {
    document.getElementById("stickyNoteGroup").style.display = "none";
    document.getElementById("mainGroup").style.display = "flex";
}
function stickyNote() {
    document.getElementById("stickyNoteGroup").style.display = "flex";
    document.getElementById("closeImg").style.display = "block";
}
function savedNote() {
  const noteBox = document.getElementById("noteBox");

  const savedNote = localStorage.getItem("myNote");
  if (savedNote) {
    noteBox.value = savedNote;
  }

  noteBox.addEventListener("input", function () {
    localStorage.setItem("myNote", noteBox.value);
  });
}

function saveGoals() {
  const goalBox = document.getElementById("goalBox");

  const savedGoals = localStorage.getItem("myGoals");
  if (savedGoals) {
    goalBox.value = savedGoals;
  }
  goalBox.addEventListener("input", function () {
    localStorage.setItem("myGoals", goalBox.value);
  });
}

async function fetchQuote() {
  const opened = await fetch(quoteTxt);
  const Text = await opened.text();
  const lines = Text.split('\n');
  quotes.length = 0;
  for (let line = 0; line < lines.length ; line++) {
    quotes.push(lines[line]);
  }
  console.log("Quotes loaded:", quotes); // Add this line
}

async function generateQuote() {
  if (quotes.length === 0) {
    await fetchQuote();
  }
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("generatedQuote").innerHTML = quotes[index];
}

window.addEventListener("DOMContentLoaded", saveGoals);
window.addEventListener("DOMContentLoaded", savedNote);
