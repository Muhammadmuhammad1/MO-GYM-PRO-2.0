/* =========================================================
   MO GYM PRO 2.0
   APPLICATION ENGINE
========================================================= */


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
    "images/incline-db-press.png",

  "Flat Barbell Bench Press":
    "images/bench-press.png",

  "Lat Pulldown":
    "images/lat-pulldown.png",

  "Chest Supported Row":
    "images/chest-supported-row.png",

  "Dumbbell Lateral Raise":
    "images/lateral-raise.png",

  "EZ-Bar Curl":
    "images/ez-curl.png",

  "Cable Triceps Pushdown":
    "images/triceps-pushdown.png",

  "Squat":
    "images/squat.png",

  "Leg Press":
    "images/leg-press.png",

  "Leg Extension":
    "images/leg-extension.png",

  "Romanian Deadlift":
    "images/rdl.png",

  "Leg Curl":
    "images/leg-curl.png",

  "Incline Dumbbell Curl":
    "images/incline-curl.png",

  "Overhead Cable Triceps":
    "images/overhead-triceps.png",

  "Standing Calf Raise":
    "images/calf-raise.png",

  "Incline Machine Press":
    "images/incline-machine.png",

  "Seated Cable Row":
    "images/cable-row.png",

  "Dumbbell Shoulder Press":
    "images/shoulder-press.png",

  "Cable Lateral Raise":
    "images/cable-lateral.png",

  "Reverse Pec Deck":
    "images/reverse-pec-deck.png",

  "Hack Squat":
    "images/hack-squat.png",

  "Bulgarian Split Squat":
    "images/bulgarian.png",

  "Seated Leg Curl":
    "images/seated-leg-curl.png",

  "Skull Crushers":
    "images/skull-crushers.png",

  "Seated Calf Raise":
    "images/seated-calf.png"

};


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

  ar: {

    startWorkout: "ابدأ التمرين",
    streak: "الاستمرارية",
    weight: "الوزن",
    dailyQuest: "مهمة اليوم",
    nextWorkout: "التمرين القادم",
    attributes: "إحصائيات اللاعب",
    workout: "التمرين",
    save: "حفظ",
    finish: "إنهاء المهمة",
    bodyEvolution: "تطور الجسم",
    currentBody: "شكل جسمك الحالي",
    front: "أمامي",
    side: "جانبي",
    back: "خلفي",
    weightHistory: "سجل الوزن",
    achievements: "الإنجازات",
    calories: "السعرات",
    age: "العمر",
    height: "الطول",
    sex: "النوع",
    activity: "مستوى النشاط",
    goal: "الهدف",
    calculate: "احسب",
    history: "السجل",
    settings: "الإعدادات",
    language: "اللغة",
    theme: "المظهر",
    themeDesc: "اختار الشكل المناسب لك",
    timer: "مؤقت الراحة",
    export: "تصدير البيانات",
    import: "استيراد البيانات",
    reset: "مسح كل البيانات",
    home: "الرئيسية",
    evolution: "التطور"

  },

  en: {

    startWorkout: "Start Workout",
    streak: "Streak",
    weight: "Weight",
    dailyQuest: "Daily Quest",
    nextWorkout: "Next Workout",
    attributes: "Hunter Attributes",
    workout: "Workout",
    save: "Save",
    finish: "Finish Quest",
    bodyEvolution: "Body Evolution",
    currentBody: "Current body image",
    front: "Front",
    side: "Side",
    back: "Back",
    weightHistory: "Weight History",
    achievements: "Achievements",
    calories: "Calories",
    age: "Age",
    height: "Height",
    sex: "Sex",
    activity: "Activity",
    goal: "Goal",
    calculate: "Calculate",
    history: "History",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    themeDesc: "Choose your visual mode",
    timer: "Rest Timer",
    export: "Export Data",
    import: "Import Data",
    reset: "Reset App",
    home: "Home",
    evolution: "Evolution"

  }

};


/* =========================================================
   DEFAULT DATA
========================================================= */

const defaultData = {

  xp: 0,

  level: 1,

  weight: null,

  weights: [],

  history: [],

  prs: [],

  streak: 0,

  lastWorkout: null,

  dayIndex: 0,

  theme: "dark",

  lang: "ar",

  photos: {
    front: null,
    side: null,
    back: null
  },

  drafts: {},

  totalSets: 0,

  totalVolume: 0,

  workouts: 0

};


let data = loadData();

let currentDay = Object.keys(routines)[data.dayIndex % 4];

let timerSeconds = 90;

let timerTotal = 90;

let timerInterval = null;


/* =========================================================
   STORAGE
========================================================= */

function loadData() {

  try {

    const saved =
      localStorage.getItem("moGymPro20");

    if (!saved) {
      return structuredClone(defaultData);
    }

    return {
      ...structuredClone(defaultData),
      ...JSON.parse(saved)
    };

  } catch (error) {

    console.error(error);

    return structuredClone(defaultData);

  }

}


function saveData() {

  localStorage.setItem(
    "moGymPro20",
    JSON.stringify(data)
  );

}


/* =========================================================
   DATE
========================================================= */

function today() {

  return new Date()
    .toISOString()
    .split("T")[0];

}


function yesterday() {

  const date = new Date();

  date.setDate(
    date.getDate() - 1
  );

  return date
    .toISOString()
    .split("T")[0];

}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageId) {

  document
    .querySelectorAll(".page")
    .forEach(page => {

      page.classList.remove("active");

    });


  const page =
    document.getElementById(pageId);

  if (page) {
    page.classList.add("active");
  }


  document
    .querySelectorAll(".nav-item")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === pageId
      );

    });


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  if (pageId === "dashboardPage") {
    renderDashboard();
  }

  if (pageId === "workoutPage") {
    renderWorkout();
  }

  if (pageId === "progressPage") {
    renderProgress();
  }

  if (pageId === "historyPage") {
    renderHistory();
  }

}


/* =========================================================
   XP SYSTEM
========================================================= */

function xpNeeded(level) {

  return Math.round(
    500 *
    Math.pow(level, 1.35)
  );

}


function totalXPForLevel(level) {

  let total = 0;

  for (let i = 1; i < level; i++) {

    total += xpNeeded(i);

  }

  return total;

}


function calculateLevel(xp) {

  let level = 1;

  while (
    xp >= totalXPForLevel(level + 1)
  ) {

    level++;

    if (level > 100) {
      break;
    }

  }

  return level;

}


function getRank(level) {

  if (level >= 41) {
    return "LEGEND";
  }

  if (level >= 31) {
    return "MASTER";
  }

  if (level >= 21) {
    return "ELITE";
  }

  if (level >= 11) {
    return "WARRIOR";
  }

  if (level >= 6) {
    return "FIGHTER";
  }

  return "NOVICE";

}


function addXP(amount) {

  const oldLevel = data.level;

  data.xp += amount;

  data.level =
    calculateLevel(data.xp);

  saveData();

  if (data.level > oldLevel) {

    showLevelUp(
      data.level
    );

  }

}


/* =========================================================
   LEVEL UP SCREEN
========================================================= */

function showLevelUp(level) {

  const overlay =
    document.createElement("div");

  overlay.className =
    "level-up-effect";

  overlay.innerHTML = `

    <div class="level-up-box">

      <small>LEVEL UP</small>

      <strong>
        ${level}
      </strong>

    </div>

  `;

  document.body.appendChild(
    overlay
  );

  setTimeout(() => {

    overlay.remove();

  }, 1600);

}


/* =========================================================
   RENDER DASHBOARD
========================================================= */

function renderDashboard() {

  data.level =
    calculateLevel(data.xp);

  const rank =
    getRank(data.level);


  document.getElementById(
    "levelTitle"
  ).textContent =
    `LEVEL ${data.level}`;


  document.getElementById(
    "rankBadge"
  ).textContent =
    rank;


  document.getElementById(
    "statXP"
  ).textContent =
    data.xp.toLocaleString();


  document.getElementById(
    "statPR"
  ).textContent =
    data.prs.length;


  document.getElementById(
    "statStreak"
  ).textContent =
    data.streak;


  document.getElementById(
    "statWeight"
  ).textContent =
    data.weight
      ? `${data.weight} kg`
      : "—";


  const currentLevelXP =
    totalXPForLevel(data.level);


  const nextLevelXP =
    totalXPForLevel(
      data.level + 1
    );


  const insideXP =
    data.xp - currentLevelXP;

  const requiredXP =
    nextLevelXP - currentLevelXP;


  const percent =
    Math.min(
      100,
      Math.max(
        0,
        (insideXP / requiredXP) * 100
      )
    );


  document.getElementById(
    "xpCurrent"
  ).textContent =
    `${insideXP.toLocaleString()} XP`;


  document.getElementById(
    "xpNext"
  ).textContent =
    `${requiredXP.toLocaleString()} XP`;


  document.getElementById(
    "xpBar"
  ).style.width =
    `${percent}%`;


  document.getElementById(
    "levelMessage"
  ).textContent =
    getLevelMessage();


  /* CHARACTER PHOTO */

  const hero =
    document.querySelector(
      ".character-card"
    );

  const bg =
    document.getElementById(
      "characterBackground"
    );

  if (data.photos.front) {

    bg.style.backgroundImage =
      `url("${data.photos.front}")`;

    hero.classList.add(
      "has-photo"
    );

  } else {

    bg.style.backgroundImage =
      "none";

    hero.classList.remove(
      "has-photo"
    );

  }


  /* NEXT WORKOUT */

  const days =
    Object.keys(routines);

  currentDay =
    days[
      data.dayIndex % days.length
    ];

  document.getElementById(
    "nextWorkoutType"
  ).textContent =
    currentDay;

  document.getElementById(
    "nextWorkoutName"
  ).textContent =
    workoutFriendlyName(
      currentDay
    );


  /* QUEST */

  const completedToday =
    data.lastWorkout === today();


  document.getElementById(
    "questCounter"
  ).textContent =
    completedToday
      ? "1 / 1"
      : "0 / 1";


  document.getElementById(
    "questTitle"
  ).textContent =
    completedToday
      ? "Quest completed ✓"
      : "Complete today's workout";


  document.getElementById(
    "questDescription"
  ).textContent =
    completedToday
      ? "You earned today's XP."
      : "Finish one workout to earn bonus XP.";


  renderAttributes();

}


/* =========================================================
   LEVEL MESSAGE
========================================================= */

function getLevelMessage() {

  const messages = {

    NOVICE:
      "كل بداية صغيرة... المهم تبدأ.",

    FIGHTER:
      "بدأت تتحول من متدرب إلى مقاتل.",

    WARRIOR:
      "الاستمرارية بدأت تظهر عليك.",

    ELITE:
      "مستواك أصبح واضحًا.",

    MASTER:
      "أنت الآن في مرحلة مختلفة.",

    LEGEND:
      "المستوى ده مش بيتاخد بسهولة."

  };

  return messages[
    getRank(data.level)
  ];

}


/* =========================================================
   WORKOUT FRIENDLY NAME
========================================================= */

function workoutFriendlyName(day) {

  const names = {

    "Torso A":
      "Chest & Back",

    "Limbs A":
      "Legs & Arms",

    "Torso B":
      "Upper Power",

    "Limbs B":
      "Legs & Arms B"

  };

  return names[day] || day;

}


/* =========================================================
   ATTRIBUTES
========================================================= */

function renderAttributes() {

  const strength =
    Math.max(
      1,
      Math.min(
        99,
        Math.floor(
          data.totalVolume / 1000
        ) + 1
      )
    );


  const endurance =
    Math.max(
      1,
      Math.min(
        99,
        data.totalSets + 1
      )
    );


  const consistency =
    Math.max(
      1,
      Math.min(
        99,
        data.streak * 5 + 1
      )
    );


  const volume =
    Math.max(
      1,
      Math.min(
        99,
        Math.floor(
          data.totalVolume / 2000
        ) + 1
      )
    );


  setAttribute(
    "attrStrength",
    "strengthBar",
    strength
  );

  setAttribute(
    "attrEndurance",
    "enduranceBar",
    endurance
  );

  setAttribute(
    "attrConsistency",
    "consistencyBar",
    consistency
  );

  setAttribute(
    "attrVolume",
    "volumeBar",
    volume
  );

}


function setAttribute(
  textId,
  barId,
  value
) {

  document.getElementById(
    textId
  ).textContent =
    value;


  document.getElementById(
    barId
  ).style.width =
    `${value}%`;

}


/* =========================================================
   DAY TABS
========================================================= */

function renderDayTabs() {

  const container =
    document.getElementById(
      "dayTabs"
    );

  container.innerHTML = "";

  Object.keys(routines)
    .forEach(day => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "day-tab";

      if (day === currentDay) {
        button.classList.add(
          "active"
        );
      }

      button.textContent =
        day;

      button.onclick = () => {

        currentDay = day;

        renderWorkout();

      };

      container.appendChild(
        button
      );

    });

}


/* =========================================================
   DRAFT KEY
========================================================= */

function draftKey(day) {

  return day;

}


function getDraft(day) {

  const key =
    draftKey(day);

  if (!data.drafts[key]) {

    data.drafts[key] =
      routines[day].map(
        exercise => {

          return {

            name: exercise[0],

            sets:
              Array.from(
                {
                  length:
                    exercise[1]
                },
                () => ({
                  weight: "",
                  reps: "",
                  done: false
                })
              )

          };

        }
      );

  }

  return data.drafts[key];

}


/* =========================================================
   RENDER WORKOUT
========================================================= */

function renderWorkout() {

  renderDayTabs();

  const routine =
    routines[currentDay];

  const draft =
    getDraft(currentDay);

  const totalSets =
    routine.reduce(
      (sum, ex) =>
        sum + ex[1],
      0
    );


  document.getElementById(
    "workoutDayTitle"
  ).textContent =
    currentDay;


  const list =
    document.getElementById(
      "exerciseList"
    );

  list.innerHTML = "";


  routine.forEach(
    (exercise, index) => {

      const [
        name,
        setsCount,
        repsRange,
        muscle
      ] = exercise;


      const item =
        draft[index];


      const card =
        document.createElement(
          "div"
        );

      card.className =
        "exercise-card";


      const completed =
        item.sets.every(
          set => set.done
        );


      if (completed) {

        card.classList.add(
          "completed"
        );

      }


      const previous =
        getPreviousPerformance(
          name
        );


      card.innerHTML = `

        <div class="exercise-top">

          <div class="exercise-image">

            <img
              src="${exerciseImages[name] || ""}"
              alt=""
              onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='block';
              "
            >

            <span
              class="fallback"
              style="display:none"
            >
              🏋️
            </span>

          </div>


          <div class="exercise-info">

            <h3>
              ${escapeHTML(name)}
            </h3>

            <small>
              ${escapeHTML(muscle)}
              •
              ${escapeHTML(repsRange)}
            </small>

            <small class="previous">
              ${previous}
            </small>

          </div>

          <span class="exercise-menu">
            ⋮
          </span>

        </div>


        <div class="sets">

          ${item.sets.map(
            (set, setIndex) => `

              <div class="set-row">

                <span class="set-number">
                  ${setIndex + 1}
                </span>

                <input
                  class="set-input"
                  type="number"
                  min="0"
                  step="0.5"
                  placeholder="kg"
                  value="${set.weight}"
                  onchange="
                    updateSet(
                      ${index},
                      ${setIndex},
                      'weight',
                      this.value
                    )
                  "
                >

                <input
                  class="set-input"
                  type="number"
                  min="0"
                  placeholder="reps"
                  value="${set.reps}"
                  onchange="
                    updateSet(
                      ${index},
                      ${setIndex},
                      'reps',
                      this.value
                    )
                  "
                >

                <button
                  class="set-check ${set.done ? "checked" : ""}"
                  onclick="
                    toggleSet(
                      ${index},
                      ${setIndex}
                    )
                  "
                >
                  ${set.done ? "✓" : "○"}
                </button>

              </div>

            `
          ).join("")}

        </div>

      `;


      list.appendChild(card);

    }
  );


  updateSessionProgress();

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   UPDATE SET
========================================================= */

function updateSet(
  exerciseIndex,
  setIndex,
  field,
  value
) {

  const draft =
    getDraft(currentDay);

  draft[
    exerciseIndex
  ].sets[
    setIndex
  ][field] =
    value;

  saveData();

}


/* =========================================================
   TOGGLE SET
========================================================= */

function toggleSet(
  exerciseIndex,
  setIndex
) {

  const draft =
    getDraft(currentDay);

  const set =
    draft[
      exerciseIndex
    ].sets[
      setIndex
    ];


  set.done =
    !set.done;


  saveData();

  renderWorkout();


  if (set.done) {

    showToast(
      "+10 XP potential — Set completed"
    );

    startTimer();

  }

}


/* =========================================================
   SESSION PROGRESS
========================================================= */

function updateSessionProgress() {

  const draft =
    getDraft(currentDay);


  let completed = 0;

  let total = 0;


  draft.forEach(
    exercise => {

      exercise.sets.forEach(
        set => {

          total++;

          if (set.done) {
            completed++;
          }

        }
      );

    }
  );


  const percent =
    total
      ? Math.round(
          completed / total * 100
        )
      : 0;


  document.getElementById(
    "sessionSetsText"
  ).textContent =
    `${completed} / ${total} sets`;


  document.getElementById(
    "sessionPercent"
  ).textContent =
    `${percent}%`;


  document.getElementById(
    "sessionProgressBar"
  ).style.width =
    `${percent}%`;

}


/* =========================================================
   SAVE WORKOUT DRAFT
========================================================= */

function saveWorkoutDraft() {

  saveData();

  showToast(
    data.lang === "ar"
      ? "تم حفظ التمرين ✓"
      : "Workout saved ✓"
  );

}


/* =========================================================
   FINISH WORKOUT
========================================================= */

function finishWorkout() {

  const draft =
    getDraft(currentDay);


  let completed = 0;

  let volume = 0;

  let prsThisWorkout = 0;


  draft.forEach(
    exercise => {

      exercise.sets.forEach(
        set => {

          if (
            set.done &&
            Number(set.reps) > 0
          ) {

            completed++;

            volume +=
              Number(set.weight || 0) *
              Number(set.reps || 0);

          }

        }
      );


      const best =
        Math.max(
          0,
          ...exercise.sets
            .filter(set => set.done)
            .map(set =>
              Number(set.weight || 0)
            )
        );


      if (best > 0) {

        const oldPR =
          getExercisePR(
            exercise.name
          );


        if (best > oldPR) {

          setExercisePR(
            exercise.name,
            best
          );

          prsThisWorkout++;

        }

      }

    }
  );


  if (completed === 0) {

    showToast(
      data.lang === "ar"
        ? "لازم تسجل مجموعة واحدة على الأقل."
        : "Complete at least one set first."
    );

    return;

  }


  /* STREAK */

  const todayDate =
    today();

  const previous =
    data.lastWorkout;


  if (previous === todayDate) {

    /* Same day */

  } else if (
    previous === yesterday()
  ) {

    data.streak++;

  } else {

    data.streak = 1;

  }


  /* XP */

  const xpGain =
    100 +
    completed * 10 +
    prsThisWorkout * 50;


  const oldLevel =
    data.level;


  data.totalSets +=
    completed;


  data.totalVolume +=
    volume;


  data.workouts++;


  data.lastWorkout =
    todayDate;


  data.history.unshift({

    day: currentDay,

    date: todayDate,

    sets: completed,

    volume: Math.round(volume),

    prs: prsThisWorkout,

    xp: xpGain

  });


  addXP(xpGain);


  data.dayIndex =
    (data.dayIndex + 1) % 4;


  delete data.drafts[
    currentDay
  ];


  saveData();


  showToast(
    data.lang === "ar"
      ? `⚡ +${xpGain} XP — أحسنت!`
      : `⚡ +${xpGain} XP — Great job!`
  );


  if (data.level > oldLevel) {

    setTimeout(() => {

      showLevelUp(
        data.level
      );

    }, 400);

  }


  currentDay =
    Object.keys(routines)[
      data.dayIndex
    ];


  renderDashboard();

  showPage(
    "dashboardPage"
  );

}


/* =========================================================
   PREVIOUS PERFORMANCE
========================================================= */

function getPreviousPerformance(
  exerciseName
) {

  const entries =
    data.history || [];


  const records = [];


  Object.keys(data.drafts)
    .forEach(day => {

      data.drafts[day]
        ?.forEach(exercise => {

          if (
            exercise.name ===
            exerciseName
          ) {

            exercise.sets
              .filter(
                set =>
                  set.weight &&
                  set.reps
              )
              .forEach(set => {

                records.push(
                  `${set.weight}kg × ${set.reps}`
                );

              });

          }

        });

    });


  const pr =
    getExercisePR(
      exerciseName
    );


  if (pr) {

    return `Best: ${pr} kg`;

  }


  if (records.length) {

    return `Previous: ${records[0]}`;

  }


  return "No previous record";

}


/* =========================================================
   PR SYSTEM
========================================================= */

function getExercisePR(
  name
) {

  const record =
    data.prs.find(
      item =>
        item.exercise === name
    );

  return record
    ? Number(record.weight)
    : 0;

}


function setExercisePR(
  name,
  weight
) {

  const existing =
    data.prs.find(
      item =>
        item.exercise === name
    );


  if (existing) {

    existing.weight =
      weight;

  } else {

    data.prs.push({

      exercise: name,

      weight: weight

    });

  }

}


/* =========================================================
   PROGRESS / EVOLUTION
========================================================= */

function renderProgress() {

  data.level =
    calculateLevel(data.xp);


  document.getElementById(
    "evolutionLevel"
  ).textContent =
    `LEVEL ${data.level}`;


  document.getElementById(
    "evolutionRank"
  ).textContent =
    getRank(data.level);


  const evolution =
    document.getElementById(
      "evolutionBackground"
    );


  const evolutionCard =
    document.querySelector(
      ".evolution-card"
    );


  if (data.photos.front) {

    evolution.style.backgroundImage =
      `url("${data.photos.front}")`;

    evolutionCard.classList.add(
      "has-photo"
    );

  } else {

    evolution.style.backgroundImage =
      "none";

    evolutionCard.classList.remove(
      "has-photo"
    );

  }


  renderPhotos();

  renderWeights();

  renderAchievements();

}


/* =========================================================
   BODY PHOTOS
========================================================= */

function saveBodyPhoto(
  type,
  file
) {

  if (!file) {
    return;
  }


  if (!file.type.startsWith("image/")) {

    showToast(
      "Please select an image."
    );

    return;

  }


  const reader =
    new FileReader();


  reader.onload = event => {

    data.photos[type] =
      event.target.result;


    saveData();

    renderProgress();

    renderDashboard();


    showToast(
      data.lang === "ar"
        ? "تم حفظ الصورة ✓"
        : "Photo saved ✓"
    );

  };


  reader.readAsDataURL(file);

}


function renderPhotos() {

  const names = {

    front: "frontPhotoName",

    side: "sidePhotoName",

    back: "backPhotoName"

  };


  Object.entries(names)
    .forEach(
      ([type, elementId]) => {

        document.getElementById(
          elementId
        ).textContent =
          data.photos[type]
            ? "Photo saved ✓"
            : "Add photo";

      }
    );

}


/* =========================================================
   WEIGHT
========================================================= */

function addWeight() {

  const value =
    prompt(
      data.lang === "ar"
        ? "اكتب وزنك الحالي بالكيلو:"
        : "Enter your current weight in kg:"
    );


  if (
    value === null ||
    value === "" ||
    Number(value) <= 0
  ) {

    return;

  }


  const weight =
    Number(value);


  data.weight =
    weight;


  data.weights.unshift({

    weight: weight,

    date: today()

  });


  saveData();

  renderProgress();

  renderDashboard();


  showToast(
    data.lang === "ar"
      ? `تم تسجيل ${weight} kg`
      : `${weight} kg recorded`
  );

}


function renderWeights() {

  const container =
    document.getElementById(
      "weightHistory"
    );


  if (
    !data.weights ||
    data.weights.length === 0
  ) {

    container.innerHTML = `

      <div class="empty-state">

        <strong>
          No weight data
        </strong>

        <small>
          Add your first measurement.
        </small>

      </div>

    `;

    return;

  }


  container.innerHTML =
    data.weights
      .slice(0, 12)
      .map(item => `

        <div class="weight-item">

          <strong>
            ${item.weight} kg
          </strong>

          <small>
            ${item.date}
          </small>

        </div>

      `)
      .join("");

}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function renderAchievements() {

  const container =
    document.getElementById(
      "achievements"
    );


  const achievements = [

    {
      icon: "🥉",
      title: "First Step",
      desc: "Complete 1 workout",
      unlocked:
        data.workouts >= 1
    },

    {
      icon: "🔥",
      title: "On Fire",
      desc: "Reach 3 day streak",
      unlocked:
        data.streak >= 3
    },

    {
      icon: "⚡",
      title: "Fighter",
      desc: "Reach level 6",
      unlocked:
        data.level >= 6
    },

    {
      icon: "🏆",
      title: "PR Hunter",
      desc: "Set 3 PRs",
      unlocked:
        data.prs.length >= 3
    },

    {
      icon: "💪",
      title: "Volume Beast",
      desc: "10,000 total volume",
      unlocked:
        data.totalVolume >= 10000
    },

    {
      icon: "👑",
      title: "Warrior",
      desc: "Reach level 11",
      unlocked:
        data.level >= 11
    }

  ];


  container.innerHTML =
    achievements.map(
      item => `

        <div
          class="
            achievement
            ${item.unlocked ? "unlocked" : ""}
          "
        >

          <div class="achievement-icon">
            ${item.icon}
          </div>

          <strong>
            ${item.title}
          </strong>

          <small>
            ${item.desc}
          </small>

        </div>

      `
    ).join("");

}


/* =========================================================
   CALORIE CALCULATOR
========================================================= */

function calculateCalories() {

  const age =
    Number(
      document.getElementById(
        "calAge"
      ).value
    );


  const height =
    Number(
      document.getElementById(
        "calHeight"
      ).value
    );


  const weight =
    Number(
      document.getElementById(
        "calWeight"
      ).value
    );


  const sex =
    document.getElementById(
      "calSex"
    ).value;


  const activity =
    Number(
      document.getElementById(
        "calActivity"
      ).value
    );


  const goal =
    document.getElementById(
      "calGoal"
    ).value;


  if (
    age <= 0 ||
    height <= 0 ||
    weight <= 0
  ) {

    showToast(
      "Enter valid values."
    );

    return;

  }


  /* Mifflin-St Jeor */

  const bmr =
    10 * weight +
    6.25 * height -
    5 * age +
    (
      sex === "male"
        ? 5
        : -161
    );


  const tdee =
    bmr * activity;


  let target =
    tdee;


  if (goal === "bulk") {
    target += 250;
  }

  if (goal === "cut") {
    target -= 400;
  }


  target =
    Math.round(target);


  const protein =
    Math.round(
      weight *
      (
        goal === "bulk"
          ? 2
          : 1.8
      )
    );


  const fat =
    Math.round(
      weight * 0.9
    );


  const remainingCalories =
    target -
    protein * 4 -
    fat * 9;


  const carbs =
    Math.max(
      0,
      Math.round(
        remainingCalories / 4
      )
    );


  const result =
    document.getElementById(
      "calorieResult"
    );


  result.classList.remove(
    "hidden"
  );


  result.innerHTML = `

    <div class="calorie-main">

      <span>
        ${goal === "bulk"
          ? "Lean Bulk Target"
          : goal === "cut"
            ? "Cut Target"
            : "Maintenance Target"
        }
      </span>

      <strong>
        ${target}
      </strong>

      <small>
        calories / day
      </small>

    </div>


    <div class="macro-grid">

      <div class="macro">

        <strong>
          ${protein}g
        </strong>

        <span>
          Protein
        </span>

      </div>


      <div class="macro">

        <strong>
          ${carbs}g
        </strong>

        <span>
          Carbs
        </span>

      </div>


      <div class="macro">

        <strong>
          ${fat}g
        </strong>

        <span>
          Fat
        </span>

      </div>

    </div>

  `;

}


/* =========================================================
   HISTORY
========================================================= */

function renderHistory() {

  const container =
    document.getElementById(
      "historyList"
    );


  if (
    !data.history ||
    data.history.length === 0
  ) {

    container.innerHTML = `

      <div class="empty-state">

        <strong>
          No workouts yet
        </strong>

        <small>
          Your completed workouts will appear here.
        </small>

      </div>

    `;

    return;

  }


  container.innerHTML =
    data.history
      .map(item => `

        <div class="history-item">

          <div>

            <strong>
              ${escapeHTML(item.day)}
            </strong>

            <small>
              ${item.date}
              •
              ${item.sets} sets
              •
              ${item.volume} kg volume
            </small>

          </div>

          <div class="history-xp">
            +${item.xp} XP
          </div>

        </div>

      `)
      .join("");

}


/* =========================================================
   REST TIMER
========================================================= */

function setRestTimer(seconds) {

  timerSeconds =
    seconds;

  timerTotal =
    seconds;


  updateTimerDisplay();

}


function startTimer() {

  setRestTimer(90);

  toggleTimer(true);

}


function toggleTimer(forceOpen = null) {

  const card =
    document.getElementById(
      "timerCard"
    );


  const shouldOpen =
    forceOpen === true
      ? true
      : card.classList.contains(
          "hidden"
        );


  if (shouldOpen) {

    card.classList.remove(
      "hidden"
    );

    startCountdown();

  } else {

    card.classList.add(
      "hidden"
    );

    stopCountdown();

  }

}


function startCountdown() {

  stopCountdown();


  updateTimerDisplay();


  timerInterval =
    setInterval(
      () => {

        if (
          timerSeconds <= 0
        ) {

          stopCountdown();

          timerSeconds =
            timerTotal;

          updateTimerDisplay();

          showToast(
            data.lang === "ar"
              ? "⏱️ خلصت الراحة!"
              : "⏱️ Rest finished!"
          );

          return;

        }


        timerSeconds--;

        updateTimerDisplay();

      },
      1000
    );

}


function stopCountdown() {

  if (timerInterval) {

    clearInterval(
      timerInterval
    );

    timerInterval =
      null;

  }

}


function updateTimerDisplay() {

  const minutes =
    Math.floor(
      timerSeconds / 60
    )
      .toString()
      .padStart(2, "0");


  const seconds =
    (
      timerSeconds % 60
    )
      .toString()
      .padStart(2, "0");


  const value =
    `${minutes}:${seconds}`;


  const display =
    document.getElementById(
      "timerDisplay"
    );

  const big =
    document.getElementById(
      "timerBig"
    );


  if (display) {
    display.textContent =
      value;
  }

  if (big) {
    big.textContent =
      value;
  }


  const percent =
    timerTotal > 0
      ? (
          timerSeconds /
          timerTotal
        ) * 100
      : 0;


  const bar =
    document.getElementById(
      "timerBar"
    );


  if (bar) {

    bar.style.width =
      `${percent}%`;

  }

}


/* =========================================================
   THEME
========================================================= */

function setTheme(theme) {

  data.theme =
    theme;


  document.body.classList.toggle(
    "light",
    theme === "light"
  );


  const select =
    document.getElementById(
      "themeSelect"
    );


  if (select) {
    select.value =
      theme;
  }


  saveData();

}


/* =========================================================
   LANGUAGE
========================================================= */

function setLanguage(lang) {

  data.lang =
    lang;


  document.documentElement
    .lang =
    lang;


  document.documentElement
    .dir =
    lang === "ar"
      ? "rtl"
      : "ltr";


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(element => {

      const key =
        element.dataset.i18n;


      if (
        translations[lang] &&
        translations[lang][key]
      ) {

        element.textContent =
          translations[lang][key];

      }

    });


  const select =
    document.getElementById(
      "languageSelect"
    );


  if (select) {
    select.value =
      lang;
  }


  saveData();

}


/* =========================================================
   EXPORT
========================================================= */

function exportData() {

  const blob =
    new Blob(
      [
        JSON.stringify(
          data,
          null,
          2
        )
      ],
      {
        type:
          "application/json"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;

  link.download =
    `mo-gym-backup-${today()}.json`;


  document.body.appendChild(
    link
  );

  link.click();

  link.remove();


  URL.revokeObjectURL(
    url
  );


  showToast(
    data.lang === "ar"
      ? "تم تصدير البيانات ✓"
      : "Data exported ✓"
  );

}


/* =========================================================
   IMPORT
========================================================= */

function importData(file) {

  if (!file) {
    return;
  }


  const reader =
    new FileReader();


  reader.onload =
    event => {

      try {

        const imported =
          JSON.parse(
            event.target.result
          );


        data = {
          ...structuredClone(
            defaultData
          ),
          ...imported
        };


        saveData();


        location.reload();

      } catch (error) {

        console.error(
          error
        );

        showToast(
          "Invalid backup file."
        );

      }

    };


  reader.readAsText(
    file
  );

}


/* =========================================================
   RESET
========================================================= */

function resetApp() {

  const answer =
    confirm(
      data.lang === "ar"
        ? "متأكد إنك عاوز تمسح كل البيانات؟"
        : "Are you sure you want to reset everything?"
    );


  if (!answer) {
    return;
  }


  localStorage.removeItem(
    "moGymPro20"
  );


  location.reload();

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


  const text =
    document.getElementById(
      "toastMessage"
    );


  text.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimeout
  );


  toastTimeout =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2500
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

function init() {

  data.level =
    calculateLevel(
      data.xp
    );


  setTheme(
    data.theme
  );


  setLanguage(
    data.lang
  );


  renderDashboard();

  renderWorkout();

  renderProgress();

  renderHistory();

  setRestTimer(90);


  /* CALORIE DEFAULTS */

  if (data.weight) {

    const input =
      document.getElementById(
        "calWeight"
      );

    if (input) {
      input.value =
        data.weight;
    }

  }


  /* INITIAL PAGE */

  showPage(
    "dashboardPage"
  );

}


document.addEventListener(
  "DOMContentLoaded",
  init
);
