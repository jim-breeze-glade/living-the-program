document.getElementById("living").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const entry = {};
  formData.forEach((value, key) => {
    entry[key] = value;
  });

  entry.timestamp = new Date().toISOString();
  entry.date = new Date().toLocaleDateString();

  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");

  entries.push(entry);

  localStorage.setItem("journalEntries", JSON.stringify(entries));

  alert("Entry saved!");
  e.target.reset();
});

function toggleRan() {
  const ifSoRadio = document.getElementById("ifSoRanYes");
  const ifSoTextBox = document.getElementById("ifSoRanText");
  const ifSoRanHow = document.getElementById("ifSoRanHow");

  if (ifSoRadio.checked) {
    ifSoTextBox.style.display = "inline-block";
    ifSoRanHow.style.display = "inline-block";
  } else {
    ifSoTextBox.style.display = "none";
    ifSoRanHow.style.display = "none";
  }
}

function toggleWhereAttend() {
  const whereAttendRadio = document.getElementById("whereAttendYes");
  const whereAttendTextBox = document.getElementById("whereAttendText");
  const whereAttendLabel = document.getElementById("whereAttendP");

  if (whereAttendRadio.checked) {
    whereAttendTextBox.style.display = "inline-block";
    whereAttendLabel.style.display = "inline-block";
  } else {
    whereAttendTextBox.style.display = "none";
    whereAttendLabel.style.display = "none";
  }
}

function toggleWhatHarm() {
  const whatHarmRadio = document.getElementById("causeHarmYes");
  const whatHarmTextBox = document.getElementById("whatHarmText");
  const whatHarmLabel = document.getElementById("whatHarmP");

  if (whatHarmRadio.checked) {
    whatHarmTextBox.style.display = "inline-block";
    whatHarmLabel.style.display = "inline-block";
  } else {
    whatHarmTextBox.style.display = "none";
    whatHarmLabel.style.display = "none";
  }
}

document
  .getElementById("inventoryBtn")
  .addEventListener("click", displayInventory);
document.getElementById("viewBtn").addEventListener("click", displayEntries);
document.getElementById("aboutBtn").addEventListener("click", displayAbout);

function displayInventory() {
  entriesContainer.style.display = "none";
  about.style.display = "none";
  living.style.display = "inline-block";
  pageHeader.textContent = "A Daily Inventory";
}

function displayAbout() {
  entriesContainer.style.display = "none";
  living.style.display = "none";
  about.style.display = "inline-block";
  pageHeader.textContent = "About this site";
}

function displayEntries() {
  const entries = JSON.parse(localStorage.getItem("journalEntries") || "[]");
  const container = document.getElementById("entriesContainer");

  container.innerHTML = "";
  living.style.display = "none";
  about.style.display = "none";
  entriesContainer.style.display = "inline-block";
  pageHeader.textContent = "History";

  [...entries].reverse().forEach((entry) => {
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
      <p><strong>Did I talk to my sponsor today?</strong> ${entry.talkToSponsor}</p>
      <p><strong>Did I attend a meeting today?</strong> ${entry.attendMeeting}</p>
      <p><strong>Where?</strong> ${entry.whereAttend}</p>
      <p><strong>Did I share my experiences, strength, and hope?</strong> ${entry.share}</p>
      <p><strong>Who are the people in my life that I trust today?</strong> ${entry.peopleITrust}</p>
      <p><strong>Who has trust in me today?</strong> ${entry.trustMe}</p>
      <p><strong>Did I read from our literature today?</strong> ${entry.read}</p>
      <p><strong>What steps did I consciously work?</strong> ${entry.stepsWorked}</p>
      <p><strong>Did I admit my powerlessness today?</strong> ${entry.admit}</p>
      <p><strong>Was I able to put my trust in my Higher Power today?</strong> ${entry.higherPower}</p>
      <p><strong>What did I learn about myself today?</strong> ${entry.learnAboutMyself}</p>
      <p><strong>Did I make any amends today?</strong> ${entry.makeAmends}</p>
      <p><strong>Do I owe any?</strong> ${entry.oweAmends}</p>
      <p><strong>Did I admit fault to anyone today?</strong> ${entry.admitFault}</p>
      <p><strong>Did I worry about yesterday or tomorrow?</strong> ${entry.worry}</p>
      <p><strong>Can I accept myself as I am today?</strong> ${entry.acceptToday}</p>
      <p><strong>Did I feel like I was a part of humanity today?</strong> ${entry.partOfHumanity}</p>
      <p><strong>Did I allow myself to bocome obsessed by anything today?</strong> ${entry.becomeObsessed}</p>
      <p><strong>What has God given me to be grateful for today?</strong> ${entry.gratefulFor}</p>
      <p><strong>Have I done anything to cause harm to myself or to another today?</strong> ${entry.causeHarm}</p>
      <p><strong>If so, what?</strong> ${entry.whatHarm}</p>
      <p><strong>Am I willing to change today?</strong> ${entry.willingToChange}</p>
      <p><strong>Did I pray or meditate today?</strong> ${entry.prayToday}</p>
      <p><strong>How did this affect my life?</strong> ${entry.affectMyLife}</p>
      <p><strong>What spiritual principles have I been able to practice in my life today?</strong> ${entry.spiritualPrinciples}</p>
      <p><strong>Was the most important thing in my life today staying clean?</strong> ${entry.importantThing}</p>
      <p><strong>Have I given of myself today without expecting anything in return?</strong> ${entry.givenMyself}</p>
      <p><strong>Was there fear in my life today?</strong> ${entry.fearLife}</p>
      <p><strong>Did I feel intense joy or pain?</strong> ${entry.feelIntense}</p>
      <p><strong>Did I call or visit someone in program today?</strong> ${entry.visitSomeone}</p>
      <p><strong>Did I pray for the well-being of another today?</strong> ${entry.prayForAnother}</p>
      <p><strong>Was I happy today?</strong> ${entry.happyToday}</p>
      <p><strong>Have I been peaceful today?</strong> ${entry.peacefulToday}</p>
      <p><strong>Did I consciously remember that I have a choice today?</strong> ${entry.rememberChoice}</p>
      <p><strong>Notes: </strong> ${entry.notes}</p>
      
      <hr>
    `;
    container.appendChild(entryDiv);
  });
}
