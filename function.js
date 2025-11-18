document.getElementById("living").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const entry = {};
  formData.forEach((value, key) => {
    entry[key] = value;
    console.log(key);
    console.log(value);
  });

  entry.timestamp = new Date().toISOString();
  entry.date = new Date().toLocaleDateString();

  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");

  entries.push(entry);

  localStorage.setItem("journalEntries", JSON.stringify(entries));

  alert("Entry saved!");
  e.target.reset();
});

function toggleTextBox() {
  const ifSoRadio = document.getElementById("ifSoRanYes");
  const ifSoTextBox = document.getElementById("ifSoRanText");

  if (ifSoRadio.checked) {
    ifSoTextBox.style.display = "inline-block";
  } else {
    ifSoTextBox.style.display = "none";
  }
}

document.getElementById("viewBtn").addEventListener("click", displayEntries);

function displayEntries() {
  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");
  const container = document.getElementById("entriesContainer");

  container.innerHTML = "";

  [...entries].reverse().forEach(entry => {
    const entryDiv = document.createElement("div");
    entryDiv.innerHTML = `
      <h3>${entry.date}</h3>
      <p><strong>Am I clean today?</strong> ${entry.cleanToday}</p>
      <p><strong>How have I acted differently?</strong> ${entry.actedDifferently}</p>
      <p><strong>Did my disease run my life today?</strong> ${entry.runMyLife}</p>
      <p><strong>If so, how?</strong> ${entry.howRan}</p>
      <p><strong>What did I do today that I wish I had not done?</strong> ${entry.wishIhadNot}</p>
      <p><strong>What have I left undone that I wish I had done?</strong> ${entry.wishIhad}</p>
      <p><strong>Was I good to myself today?</strong> ${entry.goodToMyself}</p>
      <p><strong>How?</strong> ${entry.howGoodToMyself}</p>
      <p><strong>Was today a good day?</strong> ${entry.goodDay}</p>
      <p><strong>Was I happy?</strong> ${entry.happy}</p>
      <p><strong>Was I serene?</strong> ${entry.serene}</p>
      <p><strong>Did I feel like I was a part of humanity today?</strong> ${entry.partOfHumanity}</p>
      
      <hr>
    `;
    container.appendChild(entryDiv);
  });
}

displayEntries();
