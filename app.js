/* =========================================================
   MO GYM PRO 2.0
   FINAL APP.JS
========================================================= */


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "moGymPro20";


/* =========================================================
   DEFAULT DATA
========================================================= */

const defaultData = {

  name: "Mohamed",

  weight: 79,

  goalWeight: 85,

  xp: 0,

  level: 1,

  streak: 0,

  totalWorkouts: 0,

  language: "en",

  theme: "dark",

  restTimer: 90,

  selectedRoutine: "Torso A",

  lastWorkoutDate: null,

  history: [],

  weightHistory: [],

  photos: []

};


let data = loadData();


function loadData() {

  try {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {

      return {
        ...defaultData
      };

    }

    return {
      ...defaultData,
      ...JSON.parse(saved)
    };

  } catch (error) {

    console.error(error);

    return {
      ...defaultData
    };

  }

}


function saveData() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );

}


/* =========================================================
   ROUTINES
========================================================= */

const routines = {

  "Torso A": [

    ["Incline Dumbbell Press", 3, "8–10", "Chest"],
    ["Flat Barbell Bench Press", 3, "6–10", "Chest"],
    ["Lat Pulldown", 3, "8–12", "Back"],
    ["Chest Supported Row", 3, "8–12", "Back"],
    ["Dumbbell Lateral Raise", 3, "12–15", "Shoulders"],
    ["EZ-Bar Curl", 2, "8–12", "Biceps"],
    ["Cable Triceps Pushdown", 2, "10–15", "Triceps"]

  ],

  "Limbs A": [

    ["Squat", 3, "6–10", "Quads"],
    ["Leg Press", 2, "10–15", "Quads"],
    ["Leg Extension", 2, "10–15", "Quads"],
    ["Romanian Deadlift", 3, "8–12", "Hamstrings"],
    ["Leg Curl", 2, "10–15", "Hamstrings"],
    ["Incline Dumbbell Curl", 2, "8–12", "Biceps"],
    ["Overhead Cable Triceps", 2, "10–15", "Triceps"],
    ["Standing Calf Raise", 3, "10–15", "Calves"]

  ],

  "Torso B": [

    ["Flat Barbell Bench Press", 3, "6–10", "Chest"],
    ["Incline Machine Press", 3, "8–12", "Chest"],
    ["Lat Pulldown", 3, "8–12", "Back"],
    ["Seated Cable Row", 3, "8–12", "Back"],
    ["Dumbbell Shoulder Press", 2, "8–12", "Shoulders"],
    ["Cable Lateral Raise", 3, "12–15", "Shoulders"],
    ["Reverse Pec Deck", 2, "12–15", "Rear Delts"],
    ["EZ-Bar Curl", 2, "8–12", "Biceps"],
    ["Cable Triceps Pushdown", 2, "10–15", "Triceps"]

  ],

  "Limbs B": [

    ["Hack Squat", 3, "8–12", "Quads"],
    ["Bulgarian Split Squat", 2, "8–12", "Quads"],
    ["Leg Extension", 2, "10–15", "Quads"],
    ["Romanian Deadlift", 2, "8–12", "Hamstrings"],
    ["Seated Leg Curl", 3, "10–15", "Hamstrings"],
    ["EZ-Bar Curl", 3, "8–12", "Biceps"],
    ["Skull Crushers", 3, "8–12", "Triceps"],
    ["Seated Calf Raise", 3, "10–15", "Calves"]

  ]

};


/* =========================================================
   EXERCISE IMAGES
========================================================= */

const exerciseImages = {

  "Incline Dumbbell Press":
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80",

  "Flat Barbell Bench Press":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "Lat Pulldown":
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=500&q=80",

  "Chest Supported Row":
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=500&q=80",

  "Dumbbell Lateral Raise":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "EZ-Bar Curl":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "Cable Triceps Pushdown":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "Squat":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80",

  "Leg Press":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80",

  "Leg Extension":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80",

  "Romanian Deadlift":
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=500&q=80",

  "Leg Curl":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80",

  "Incline Dumbbell Curl":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "Overhead Cable Triceps":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "Standing Calf Raise":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80",

  "Incline Machine Press":
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80",

  "Seated Cable Row":
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=500&q=80",

  "Dumbbell Shoulder Press":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "Cable Lateral Raise":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "Reverse Pec Deck":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "Hack Squat":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80",

  "Bulgarian Split Squat":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80",

  "Seated Leg Curl":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80",

  "Skull Crushers":
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80",

  "Seated Calf Raise":
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80"

};


/* =========================================================
   WORKOUT STATE
========================================================= */

let currentRoutine = data.selectedRoutine || "Torso A";

let currentWorkout = [];


/* =========================================================
   TIMER STATE
========================================================= */

let timerInterval = null;

let timerSeconds = Number(data.restTimer) || 90;

let timerRemaining = timerSeconds;

let timerRunning = false;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  applyTheme();

  applyLanguage();

  updateDashboard();

  renderWorkout();

  renderWeightHistory();

  renderPhotos();

  renderWorkoutHistory();

  initTimer();

  calculateCalories();

  const nameInput = document.getElementById("nameInput");

  if (nameInput) {
    nameInput.value = data.name;
  }

});


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageId, navButton = null) {

  document.querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });

  const page = document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }


  document.querySelectorAll(".nav-item")
    .forEach(button => {
      button.classList.remove("active");
    });


  if (navButton) {

    navButton.classList.add("active");

  } else {

    const map = {
      homePage: 0,
      workoutPage: 1,
      evolutionPage: 2,
      caloriesPage: 3,
      settingsPage: 4
    };

    const index = map[pageId];

    if (index !== undefined) {

      const buttons =
        document.querySelectorAll(".nav-item");

      if (buttons[index]) {
        buttons[index].classList.add("active");
      }

    }

  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   WORKOUT OPEN
========================================================= */

function openWorkout(navButton = null) {

  showPage(
    "workoutPage",
    navButton
  );

  renderWorkout();

}


/* =========================================================
   ROUTINE SELECT
========================================================= */

function selectRoutine(name) {

  if (!routines[name]) return;

  currentRoutine = name;

  data.selectedRoutine = name;

  saveData();

  renderWorkout();

  updateDashboard();

}


/* =========================================================
   RENDER WORKOUT
========================================================= */

function renderWorkout() {

  const list =
    document.getElementById("exerciseList");

  if (!list) return;

  const title =
    document.getElementById("workoutTitle");

  if (title) {
    title.textContent = currentRoutine;
  }


  document
    .querySelectorAll("[data-routine]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.routine === currentRoutine
      );

    });


  const workout =
    routines[currentRoutine] || [];


  currentWorkout = workout;


  list.innerHTML = "";


  workout.forEach((exercise, exerciseIndex) => {

    const [
      name,
      sets,
      reps,
      muscle
    ] = exercise;


    const image =
      exerciseImages[name] || "";


    const card =
      document.createElement("div");

    card.className =
      "exercise-card";


    let setHTML = "";


    for (
      let set = 1;
      set <= sets;
      set++
    ) {

      setHTML += `

        <div class="set-row">

          <span>${set}</span>

          <input
            type="number"
            step="0.5"
            inputmode="decimal"
            placeholder="kg"
            data-exercise="${exerciseIndex}"
            data-set="${set}"
            class="weight-input">

          <input
            type="number"
            inputmode="numeric"
            placeholder="reps"
            data-exercise="${exerciseIndex}"
            data-set="${set}"
            class="reps-input">

          <span>${reps}</span>

          <button
            class="set-done"
            onclick="toggleSetDone(this)">
            ✓
          </button>

        </div>

      `;

    }


    card.innerHTML = `

      <div class="exercise-head">

        <img
          class="exercise-image"
          src="${image}"
          alt="${name}"
          loading="lazy">

        <div class="exercise-main">

          <strong>${name}</strong>

          <small>
            ${muscle} · ${sets} sets · ${reps}
          </small>

        </div>

      </div>

      <div class="exercise-sets">

        ${setHTML}

      </div>

    `;


    list.appendChild(card);

  });

}


/* =========================================================
   SET DONE
========================================================= */

function toggleSetDone(button) {

  button.classList.toggle("done");

  if (button.classList.contains("done")) {

    startRestTimer();

  }

}


/* =========================================================
   FINISH WORKOUT
========================================================= */

function finishWorkout() {

  const today =
    new Date().toISOString().split("T")[0];


  const previousDate =
    data.lastWorkoutDate;


  let streakIncrease = false;


  if (previousDate !== today) {

    if (previousDate) {

      const previous =
        new Date(previousDate);

      const current =
        new Date(today);

      const difference =
        Math.round(
          (current - previous) /
          86400000
        );

      if (difference === 1) {

        data.streak++;

      } else {

        data.streak = 1;

      }

    } else {

      data.streak = 1;

    }

    data.lastWorkoutDate = today;

    streakIncrease = true;

  }


  data.totalWorkouts++;


  const workoutRecord = {

    id: Date.now(),

    date: today,

    routine: currentRoutine,

    xp: 50

  };


  data.history.unshift(
    workoutRecord
  );


  addXP(50);


  saveData();


  updateDashboard();

  renderWorkoutHistory();


  if (streakIncrease) {

    showToast(
      `🔥 Streak: ${data.streak} days`
    );

  } else {

    showToast(
      "Workout completed! +50 XP"
    );

  }


  setTimeout(() => {

    showPage("homePage");

  }, 800);

}


/* =========================================================
   XP SYSTEM
========================================================= */

function xpNeeded(level) {

  return 100 + ((level - 1) * 50);

}


function addXP(amount) {

  const oldLevel =
    data.level;


  data.xp += amount;


  while (
    data.xp >= xpNeeded(data.level)
  ) {

    data.xp -= xpNeeded(data.level);

    data.level++;

  }


  saveData();

  updateDashboard();


  if (data.level > oldLevel) {

    showLevelUp(
      data.level
    );

  }

}


/* =========================================================
   DASHBOARD
========================================================= */

function updateDashboard() {

  const level =
    document.getElementById("levelValue");

  const homeLevel =
    document.getElementById("homeLevel");

  const xpText =
    document.getElementById("xpText");

  const xpProgress =
    document.getElementById("xpProgress");

  const streak =
    document.getElementById("streakValue");

  const workouts =
    document.getElementById("workoutCount");

  const totalXP =
    document.getElementById("totalXP");

  const weight =
    document.getElementById("homeWeight");

  const greeting =
    document.getElementById("userGreeting");


  if (level) level.textContent = data.level;

  if (homeLevel) {
    homeLevel.textContent = data.level;
  }

  if (streak) {
    streak.textContent = data.streak;
  }

  if (workouts) {
    workouts.textContent = data.totalWorkouts;
  }

  if (weight) {
    weight.textContent = data.weight;
  }

  if (greeting) {
    greeting.textContent = data.name;
  }


  const needed =
    xpNeeded(data.level);

  if (xpText) {

    xpText.textContent =
      `${data.xp} / ${needed}`;

  }


  if (xpProgress) {

    const percentage =
      Math.min(
        100,
        (data.xp / needed) * 100
      );

    xpProgress.style.width =
      `${percentage}%`;

  }


  if (totalXP) {

    const total =
      data.history.reduce(
        (sum, item) =>
          sum + Number(item.xp || 0),
        0
      );

    totalXP.textContent = total;

  }


  const routine =
    document.getElementById("todayRoutine");

  const exercises =
    document.getElementById("todayExercises");

  if (routine) {

    routine.textContent =
      currentRoutine;

  }

  if (exercises) {

    exercises.textContent =
      `${routines[currentRoutine].length} exercises`;

  }


  updateWeightProgress();

}


/* =========================================================
   REST TIMER
========================================================= */

function getRestDuration() {

  const saved =
    Number(data.restTimer);

  if (
    [30,60,90,120].includes(saved)
  ) {

    return saved;

  }

  return 90;

}


function formatTime(seconds) {

  const minutes =
    Math.floor(seconds / 60)
      .toString()
      .padStart(2,"0");

  const secondsPart =
    (seconds % 60)
      .toString()
      .padStart(2,"0");

  return `${minutes}:${secondsPart}`;

}


function updateTimerDisplay() {

  const formatted =
    formatTime(timerRemaining);


  const small =
    document.getElementById("timerDisplay");

  const large =
    document.getElementById("timerDisplayLarge");


  if (small) {
    small.textContent = formatted;
  }

  if (large) {
    large.textContent = formatted;
  }

}


function initTimer() {

  timerSeconds =
    getRestDuration();

  timerRemaining =
    timerSeconds;

  updateTimerDisplay();

  updateRestButtons();

}


function startRestTimer() {

  stopTimer();

  timerSeconds =
    getRestDuration();

  timerRemaining =
    timerSeconds;

  openTimer();

  timerRunning = true;

  updateTimerButton();


  timerInterval =
    setInterval(() => {

      if (timerRemaining > 0) {

        timerRemaining--;

        updateTimerDisplay();

      } else {

        finishRestTimer();

      }

    },1000);

}


function toggleTimer() {

  const card =
    document.getElementById("timerCard");


  if (!card) return;


  if (
    card.classList.contains("hidden")
  ) {

    startRestTimer();

    return;

  }


  if (timerRunning) {

    pauseTimer();

  } else {

    resumeTimer();

  }

}


function openTimer() {

  const card =
    document.getElementById("timerCard");

  if (!card) return;

  card.classList.remove("hidden");

  updateTimerDisplay();

  updateTimerButton();

}


function closeTimer() {

  stopTimer();

  const card =
    document.getElementById("timerCard");

  if (card) {

    card.classList.add("hidden");

  }

}


function pauseTimer() {

  timerRunning = false;

  if (timerInterval) {

    clearInterval(timerInterval);

    timerInterval = null;

  }

  updateTimerButton();

}


function resumeTimer() {

  if (timerRemaining <= 0) {

    startRestTimer();

    return;

  }


  timerRunning = true;


  if (timerInterval) {

    clearInterval(timerInterval);

  }


  timerInterval =
    setInterval(() => {

      if (timerRemaining > 0) {

        timerRemaining--;

        updateTimerDisplay();

      } else {

        finishRestTimer();

      }

    },1000);


  updateTimerButton();

}


function stopTimer() {

  timerRunning = false;


  if (timerInterval) {

    clearInterval(timerInterval);

    timerInterval = null;

  }


  updateTimerButton();

}


function resetTimer() {

  stopTimer();

  timerSeconds =
    getRestDuration();

  timerRemaining =
    timerSeconds;

  updateTimerDisplay();

}


function finishRestTimer() {

  stopTimer();

  timerRemaining = 0;

  updateTimerDisplay();

  showToast(
    "🔥 Rest finished — next set!"
  );

}


function updateTimerButton() {

  const button =
    document.getElementById("timerToggleBtn");

  if (!button) return;


  button.textContent =
    timerRunning
      ? "Pause"
      : "Start";

}


/* =========================================================
   REST TIMER SETTINGS
========================================================= */

function setRest(seconds) {

  seconds =
    Number(seconds);


  if (
    ![30,60,90,120].includes(seconds)
  ) {

    seconds = 90;

  }


  data.restTimer =
    seconds;


  timerSeconds =
    seconds;

  timerRemaining =
    seconds;


  stopTimer();


  saveData();


  updateTimerDisplay();

  updateRestButtons();


  const current =
    document.getElementById(
      "currentRestText"
    );


  if (current) {

    current.textContent =
      `${seconds} sec`;

  }


  showToast(
    `Rest timer: ${seconds} seconds`
  );

}


function updateRestButtons() {

  const selected =
    getRestDuration();


  document
    .querySelectorAll("[data-rest]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        Number(button.dataset.rest) === selected
      );

    });


  const current =
    document.getElementById(
      "currentRestText"
    );


  if (current) {

    current.textContent =
      `${selected} sec`;

  }

}


/* =========================================================
   WEIGHT
========================================================= */

function saveWeight() {

  const input =
    document.getElementById(
      "weightInput"
    );


  const weight =
    Number(input.value);


  if (
    !weight ||
    weight < 30 ||
    weight > 300
  ) {

    showToast(
      "Enter a valid weight"
    );

    return;

  }


  data.weight =
    weight;


  data.weightHistory.unshift({

    date:
      new Date()
        .toISOString()
        .split("T")[0],

    weight

  });


  saveData();


  updateDashboard();

  renderWeightHistory();

  updateWeightProgress();


  input.value = "";


  addXP(10);


  showToast(
    "Weight updated +10 XP"
  );

}


function updateWeightProgress() {

  const current =
    Number(data.weight);

  const goal =
    Number(data.goalWeight);


  const progress =
    Math.max(
      0,
      Math.min(
        100,
        (current / goal) * 100
      )
    );


  const bar =
    document.getElementById(
      "weightProgress"
    );

  const value =
    document.getElementById(
      "evolutionWeight"
    );


  const goalText =
    document.getElementById(
      "goalWeightText"
    );


  if (bar) {

    bar.style.width =
      `${progress}%`;

  }

  if (value) {

    value.textContent =
      current;

  }

  if (goalText) {

    goalText.textContent =
      goal;

  }

}


function renderWeightHistory() {

  const container =
    document.getElementById(
      "weightHistory"
    );


  if (!container) return;


  if (
    !data.weightHistory.length
  ) {

    container.innerHTML = `

      <div class="history-item">

        <div>

          <strong>
            No weight records yet
          </strong>

          <small>
            Start tracking your progress.
          </small>

        </div>

      </div>

    `;

    return;

  }


  container.innerHTML =
    data.weightHistory
      .slice(0,20)
      .map(item => `

        <div class="history-item">

          <div>

            <strong>
              ${item.weight} kg
            </strong>

            <small>
              ${item.date}
            </small>

          </div>

          <span class="history-xp">
            ⚖
          </span>

        </div>

      `)
      .join("");

}


/* =========================================================
   BODY PHOTOS
========================================================= */

function saveBodyPhoto(event) {

  const file =
    event.target.files[0];

  if (!file) return;


  const reader =
    new FileReader();


  reader.onload =
    function(e) {

      data.photos.unshift(
        e.target.result
      );


      data.photos =
        data.photos.slice(0,30);


      saveData();

      renderPhotos();


      addXP(10);


      showToast(
        "Progress photo saved +10 XP"
      );

    };


  reader.readAsDataURL(file);

}


function renderPhotos() {

  const grid =
    document.getElementById(
      "photoGrid"
    );


  if (!grid) return;


  grid.innerHTML =
    data.photos
      .map(photo => `

        <img
          src="${photo}"
          alt="Progress photo">

      `)
      .join("");

}


/* =========================================================
   WORKOUT HISTORY
========================================================= */

function renderWorkoutHistory() {

  const container =
    document.getElementById(
      "workoutHistory"
    );


  if (!container) return;


  if (!data.history.length) {

    container.innerHTML = `

      <div class="history-item">

        <div>

          <strong>
            No workouts yet
          </strong>

          <small>
            Complete your first workout.
          </small>

        </div>

      </div>

    `;

    return;

  }


  container.innerHTML =
    data.history
      .slice(0,30)
      .map(item => `

        <div class="history-item">

          <div>

            <strong>
              ${item.routine}
            </strong>

            <small>
              ${item.date}
            </small>

          </div>

          <span class="history-xp">
            +${item.xp} XP
          </span>

        </div>

      `)
      .join("");

}


/* =========================================================
   CALORIES
========================================================= */

function calculateCalories() {

  const weight =
    Number(
      document.getElementById(
        "calWeight"
      )?.value
    );

  const height =
    Number(
      document.getElementById(
        "calHeight"
      )?.value
    );

  const age =
    Number(
      document.getElementById(
        "calAge"
      )?.value
    );

  const activity =
    Number(
      document.getElementById(
        "activityLevel"
      )?.value
    );


  if (
    !weight ||
    !height ||
    !age ||
    !activity
  ) {

    return;

  }


  /*
    Mifflin-St Jeor
    Male
  */

  const bmr =
    (10 * weight)
    +
    (6.25 * height)
    -
    (5 * age)
    +
    5;


  const tdee =
    bmr * activity;


  const bulk =
    tdee + 250;


  const result =
    document.getElementById(
      "calorieResult"
    );


  if (result) {

    result.classList.remove(
      "hidden"
    );

  }


  document.getElementById(
    "bmrValue"
  ).textContent =
    Math.round(bmr);


  document.getElementById(
    "tdeeValue"
  ).textContent =
    Math.round(tdee);


  document.getElementById(
    "bulkValue"
  ).textContent =
    Math.round(bulk);

}


/* =========================================================
   NAME
========================================================= */

function saveName() {

  const input =
    document.getElementById(
      "nameInput"
    );


  const name =
    input.value.trim();


  if (!name) {

    showToast(
      "Enter your name"
    );

    return;

  }


  data.name =
    name;


  saveData();

  updateDashboard();


  showToast(
    "Name saved"
  );

}


/* =========================================================
   THEME
========================================================= */

function applyTheme() {

  document.body.classList.toggle(
    "light",
    data.theme === "light"
  );


  const button =
    document.getElementById(
      "themeBtn"
    );


  if (button) {

    button.textContent =
      data.theme === "light"
        ? "☀"
        : "☾";

  }

}


function setTheme(theme) {

  data.theme =
    theme;


  saveData();

  applyTheme();

}


/* =========================================================
   QUICK THEME TOGGLE
========================================================= */

function toggleTheme() {

  data.theme =
    data.theme === "dark"
      ? "light"
      : "dark";


  saveData();

  applyTheme();

}


/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

  en: {

    welcome: "WELCOME BACK",

    keepGoing: "Keep building.",

    streak: "Streak",

    workouts: "Workouts",

    today: "Today"

  },

  ar: {

    welcome: "أهلاً بعودتك",

    keepGoing: "كمل طريقك.",

    streak: "الاستمرارية",

    workouts: "التمارين",

    today: "اليوم"

  }

};


function setLanguage(language) {

  if (
    !translations[language]
  ) return;


  data.language =
    language;


  saveData();

  applyLanguage();

}


function applyLanguage() {

  const language =
    data.language || "en";


  document.documentElement.lang =
    language;


  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;


      if (
        translations[language] &&
        translations[language][key]
      ) {

        element.textContent =
          translations[language][key];

      }

    });


  const ar =
    document.getElementById(
      "langAr"
    );

  const en =
    document.getElementById(
      "langEn"
    );


  if (ar) {

    ar.classList.toggle(
      "active",
      language === "ar"
    );

  }


  if (en) {

    en.classList.toggle(
      "active",
      language === "en"
    );

  }

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout = null;


function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  if (!toast) return;


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimeout
  );


  toastTimeout =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    },2500);

}


/* =========================================================
   LEVEL UP
========================================================= */

function showLevelUp(level) {

  const overlay =
    document.getElementById(
      "levelUp"
    );


  const number =
    document.getElementById(
      "levelUpNumber"
    );


  if (!overlay) return;


  if (number) {

    number.textContent =
      level;

  }


  overlay.classList.remove(
    "hidden"
  );

}


function hideLevelUp() {

  const overlay =
    document.getElementById(
      "levelUp"
    );


  if (overlay) {

    overlay.classList.add(
      "hidden"
    );

  }

}


/* =========================================================
   RESET APP
========================================================= */

function resetApp() {

  const confirmed =
    confirm(
      "Reset all MO GYM PRO data?"
    );


  if (!confirmed) return;


  localStorage.removeItem(
    STORAGE_KEY
  );


  localStorage.removeItem(
    "moGymRestTimer"
  );


  data = {
    ...defaultData
  };


  currentRoutine =
    "Torso A";


  timerSeconds =
    90;

  timerRemaining =
    90;


  saveData();


  location.reload();

}


/* =========================================================
   SAFETY
========================================================= */

window.addEventListener(
  "beforeunload",
  () => {

    if (timerInterval) {

      clearInterval(
        timerInterval
      );

      timerInterval = null;

    }

  }
);
