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

function generateQuote() {
  document.getElementById("generatedQuote").innerHTML = "hello"
}
window.addEventListener("DOMContentLoaded", saveGoals);
window.addEventListener("DOMContentLoaded", savedNote);
