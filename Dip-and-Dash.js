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
    document.getElementById("greeting").style.width = "30%";
    document.getElementById("mainGroup").style.display = "flex";
    body.style.backgroundColor = '#4A5759';
    body.style.backgroundImage = 'none';
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

function goalBox1() {
  const goaltextBox1 = document.getElementById("goal-list-textbox-1");
  const savedGoals1 = localStorage.getItem("myGoals1");
  if (savedGoals1) {
    goaltextBox1.value = savedGoals1;
  }
  goaltextBox1.addEventListener("input", function () {
  localStorage.setItem("myGoals1", goaltextBox1.value);
  });
}
function goalBox2() {
  const goaltextBox2 = document.getElementById("goal-list-textbox-2");
  const savedGoals2 = localStorage.getItem("myGoals2");
  if (savedGoals2) {
    goaltextBox2.value = savedGoals2;
  }
  goaltextBox2.addEventListener("input", function () {
  localStorage.setItem("myGoals2", goaltextBox2.value);
  });
}
function goalBox3() {
  const goaltextBox3 = document.getElementById("goal-list-textbox-3");
  const savedGoals3 = localStorage.getItem("myGoals3");
  if (savedGoals3) {
    goaltextBox3.value = savedGoals3;
  }
  goaltextBox3.addEventListener("input", function () {
  localStorage.setItem("myGoals3", goaltextBox3.value);
  });
}
function goalBox4() {
  const goaltextBox4 = document.getElementById("goal-list-textbox-4");
  const savedGoals4 = localStorage.getItem("myGoals4");
  if (savedGoals4) {
    goaltextBox4.value = savedGoals4;
  }
  goaltextBox4.addEventListener("input", function () {
  localStorage.setItem("myGoals4", goaltextBox4.value);
  });
}
function goalBox5() {
  const goaltextBox5 = document.getElementById("goal-list-textbox-5");
  const savedGoals5 = localStorage.getItem("myGoals5");
  if (savedGoals5) {
    goaltextBox5.value = savedGoals5;
  }
  goaltextBox5.addEventListener("input", function () {
  localStorage.setItem("myGoals5", goaltextBox5.value);
  });
}
function goalBox6() {
  const goaltextBox6 = document.getElementById("goal-list-textbox-6");
  const savedGoals6 = localStorage.getItem("myGoals6");
  if (savedGoals6) {
    goaltextBox6.value = savedGoals6;
  }
  goaltextBox6.addEventListener("input", function () {
  localStorage.setItem("myGoals6", goaltextBox6.value);
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

window.addEventListener("DOMContentLoaded", savedNote);
window.addEventListener("DOMContentLoaded", goalBox1);
window.addEventListener("DOMContentLoaded", goalBox2);
window.addEventListener("DOMContentLoaded", goalBox3);
window.addEventListener("DOMContentLoaded", goalBox4);
window.addEventListener("DOMContentLoaded", goalBox5);
window.addEventListener("DOMContentLoaded", goalBox6);
