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

  const saved = localStorage.getItem("myNote");
  if (saved) {
    noteBox.value = saved;
  }

  noteBox.addEventListener("input", function () {
    localStorage.setItem("myNote", noteBox.value);
  });
}
function goals() {}

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
window.addEventListener("DOMContentLoaded", savedNote);