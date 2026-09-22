/* =========================================================
   MO GYM PRO
   Complete Workout Tracker
========================================================= */

const STORAGE_KEY = "MO_GYM_PRO";

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
   Put your cartoon illustrations inside /images
========================================================= */

const exerciseImages = {

    "Incline Dumbbell Press": "images/incline-db-press.png",
    "Flat Barbell Bench Press": "images/bench-press.png",
    "Lat Pulldown": "images/lat-pulldown.png",
    "Chest Supported Row": "images/chest-supported-row.png",
    "Dumbbell Lateral Raise": "images/lateral-raise.png",
    "EZ-Bar Curl": "images/ez-curl.png",
    "Cable Triceps Pushdown": "images/triceps-pushdown.png",

    "Squat": "images/squat.png",
    "Leg Press": "images/leg-press.png",
    "Leg Extension": "images/leg-extension.png",
    "Romanian Deadlift": "images/rdl.png",
    "Leg Curl": "images/leg-curl.png",
    "Incline Dumbbell Curl": "images/incline-curl.png",
    "Overhead Cable Triceps": "images/overhead-triceps.png",
    "Standing Calf Raise": "images/calf-raise.png",

    "Incline Machine Press": "images/incline-machine.png",
    "Seated Cable Row": "images/cable-row.png",
    "Dumbbell Shoulder Press": "images/shoulder-press.png",
    "Cable Lateral Raise": "images/cable-lateral.png",
    "Reverse Pec Deck": "images/reverse-pec-deck.png",

    "Hack Squat": "images/hack-squat.png",
    "Bulgarian Split Squat": "images/bulgarian.png",
    "Seated Leg Curl": "images/seated-leg-curl.png",
    "Skull Crushers": "images/skull-crushers.png",
    "Seated Calf Raise": "images/seated-calf.png"
};


/* =========================================================
   DATA
========================================================= */

let data = loadData();

let currentDay = data.currentDay || "Torso A";

let timerInterval = null;
let timerTotal = 90;
let timerRemaining = 90;

let autoSaveTimeout = null;


/* =========================================================
   DEFAULT DATA
========================================================= */

function defaultData() {

    return {
        currentDay: "Torso A",

        drafts: {},

        workouts: [],

        weights: [],

        prs: {},

        prEvents: 0
    };
}


/* =========================================================
   LOAD / SAVE
========================================================= */

function loadData() {

    try {

        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return defaultData();
        }

        return {
            ...defaultData(),
            ...JSON.parse(saved)
        };

    } catch (error) {

        console.error(error);

        return defaultData();
    }
}


function persistData() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}


/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderDashboard();

    renderWorkout();

    renderProgress();

    renderHistory();

    updateBottomNav();

    setupInputListeners();

});


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });

    const page = document.getElementById(pageId);

    if (!page) return;

    page.classList.add("active");

    updateBottomNav();

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

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function updateBottomNav() {

    const activePage =
        document.querySelector(".page.active")?.id;

    document.querySelectorAll(".nav-item").forEach(btn => {

        btn.classList.toggle(
            "active",
            btn.dataset.page === activePage
        );

    });
}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    const workoutCount =
        data.workouts.length;

    const setCount =
        data.workouts.reduce(
            (sum, workout) =>
                sum + (workout.totalSets || 0),
            0
        );

    const prCount =
        Object.keys(data.prs).length;

    const latestWeight =
        getLatestWeight();


    document.getElementById("statWorkouts").textContent =
        workoutCount;

    document.getElementById("statPR").textContent =
        prCount;

    document.getElementById("statSets").textContent =
        setCount;

    document.getElementById("statWeight").textContent =
        latestWeight ? latestWeight : "--";

    document.getElementById("heroStreak").textContent =
        calculateStreak();


    const nextDay =
        getNextWorkoutDay();

    document.getElementById("nextWorkoutName").textContent =
        nextDay;

    document.getElementById("nextWorkoutType").textContent =
        nextDay.includes("Torso")
            ? "TORSO"
            : "LIMBS";


    const preview =
        document.getElementById("previewExercises");

    preview.innerHTML = "";

    routines[nextDay]
        .slice(0, 4)
        .forEach(exercise => {

            const item =
                document.createElement("div");

            item.className = "preview-item";

            item.innerHTML = `
                <span>${exercise[0]}</span>
                <span>${exercise[1]} × ${exercise[2]}</span>
            `;

            preview.appendChild(item);
        });


    const challenge =
        Math.min(workoutCount, 30);

    const percent =
        Math.round((challenge / 30) * 100);

    document.getElementById("challengeBar")
        .style.width = `${percent}%`;

    document.getElementById("challengePercent")
        .textContent = `${percent}%`;

    document.getElementById("challengeText")
        .textContent = `${challenge} / 30 تمرين`;
}


function getNextWorkoutDay() {

    const order = [
        "Torso A",
        "Limbs A",
        "Torso B",
        "Limbs B"
    ];

    if (!data.workouts.length) {
        return "Torso A";
    }

    const last =
        data.workouts[data.workouts.length - 1].day;

    const index =
        order.indexOf(last);

    return order[(index + 1) % order.length];
}


function startNextWorkout() {

    currentDay =
        getNextWorkoutDay();

    data.currentDay =
        currentDay;

    persistData();

    renderWorkout();

    showPage("workoutPage");

    showToast(
        "🏋️",
        `${currentDay} جاهز`
    );
}


/* =========================================================
   WORKOUT DAY
========================================================= */

function changeWorkoutDay(day) {

    saveWorkoutDraft(false);

    currentDay = day;

    data.currentDay = day;

    persistData();

    renderWorkout();

    showToast(
        "🏋️",
        `تم اختيار ${day}`
    );
}


function renderWorkout() {

    currentDay =
        data.currentDay || currentDay;

    document.getElementById("workoutDayTitle")
        .textContent = currentDay;


    document
        .querySelectorAll(".day-selector button")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.day === currentDay
            );

        });


    const routine =
        routines[currentDay];

    const draft =
        getDraft(currentDay);


    const totalSets =
        routine.reduce(
            (sum, ex) => sum + ex[1],
            0
        );


    let completedSets = 0;

    draft.exercises.forEach(exercise => {

        exercise.sets.forEach(set => {

            if (
                Number(set.weight) > 0 &&
                Number(set.reps) > 0 &&
                set.done
            ) {
                completedSets++;
            }

        });

    });


    const percent =
        totalSets
            ? Math.round((completedSets / totalSets) * 100)
            : 0;


    document.getElementById("sessionPercent")
        .textContent = `${percent}%`;

    document.getElementById("sessionSetsText")
        .textContent =
        `${completedSets} / ${totalSets} sets`;

    document.getElementById("sessionProgressBar")
        .style.width = `${percent}%`;


    const list =
        document.getElementById("exerciseList");

    list.innerHTML = "";


    routine.forEach((exercise, exerciseIndex) => {

        const [
            name,
            setsCount,
            repRange,
            muscle
        ] = exercise;


        const savedExercise =
            draft.exercises[exerciseIndex];


        const previous =
            findPreviousPerformance(
                name,
                currentDay
            );


        const suggestion =
            getOverloadSuggestion(
                name,
                repRange,
                previous
            );


        const card =
            document.createElement("article");

        card.className =
            "exercise-card";


        const image =
            exerciseImages[name];


        const imageHTML = image

            ? `
                <img
                    src="${image}"
                    alt="${name}"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
                >
                <span
                    class="exercise-placeholder"
                    style="display:none"
                >🏋️</span>
              `

            : `
                <span class="exercise-placeholder">
                    🏋️
                </span>
              `;


        card.innerHTML = `

            <div class="exercise-head">

                <div class="exercise-thumb">
                    ${imageHTML}
                </div>

                <div class="exercise-title">

                    <h3>${name}</h3>

                    <span>
                        ${muscle} · ${setsCount} × ${repRange}
                    </span>

                </div>

                <button
                    class="rest-mini"
                    onclick="startRestTimer(90)"
                    title="Rest"
                >
                    ⏱
                </button>

            </div>


            ${
                previous
                    ? `
                        <div class="previous-performance">
                            آخر مرة:
                            <strong>
                                ${previous}
                            </strong>
                        </div>
                    `
                    : ""
            }


            ${
                suggestion
                    ? `
                        <div class="overload-tip">
                            ⚡ ${suggestion}
                        </div>
                    `
                    : ""
            }


            <div class="sets-container">

                ${Array.from(
                    { length: setsCount },
                    (_, setIndex) => {

                        const set =
                            savedExercise.sets[setIndex];

                        return `

                            <div class="set-row">

                                <div class="set-number">
                                    ${setIndex + 1}
                                </div>


                                <div class="set-input">

                                    <span>KG</span>

                                    <input
                                        type="number"
                                        min="0"
                                        step="0.5"
                                        value="${set.weight || ""}"
                                        data-exercise="${exerciseIndex}"
                                        data-set="${setIndex}"
                                        data-field="weight"
                                        placeholder="0"
                                    >

                                </div>


                                <div class="set-input">

                                    <span>REPS</span>

                                    <input
                                        type="number"
                                        min="0"
                                        value="${set.reps || ""}"
                                        data-exercise="${exerciseIndex}"
                                        data-set="${setIndex}"
                                        data-field="reps"
                                        placeholder="0"
                                    >

                                </div>


                                <button
                                    class="set-check ${set.done ? "done" : ""}"
                                    onclick="toggleSet(${exerciseIndex}, ${setIndex}, this)"
                                >
                                    ${set.done ? "✓" : "○"}
                                </button>

                            </div>

                        `;
                    }
                ).join("")}

            </div>


            <input
                class="note-input"
                type="text"
                placeholder="ملاحظة عن التمرين..."
                value="${escapeHTML(savedExercise.note || "")}"
                data-exercise="${exerciseIndex}"
                data-note="true"
            >

        `;


        list.appendChild(card);

    });


    setupInputListeners();
}


/* =========================================================
   DRAFT
========================================================= */

function createDraft(day) {

    return {

        exercises:
            routines[day].map(exercise => {

                return {

                    name: exercise[0],

                    sets:
                        Array.from(
                            { length: exercise[1] },
                            () => ({
                                weight: "",
                                reps: "",
                                done: false
                            })
                        ),

                    note: ""

                };

            })

    };
}


function getDraft(day) {

    if (!data.drafts[day]) {

        data.drafts[day] =
            createDraft(day);

        persistData();
    }

    return data.drafts[day];
}


/* =========================================================
   INPUT HANDLERS
========================================================= */

function setupInputListeners() {

    document
        .querySelectorAll(
            "#exerciseList input[data-exercise]"
        )
        .forEach(input => {

            input.addEventListener(
                "input",
                handleExerciseInput
            );

        });
}


function handleExerciseInput(event) {

    const input =
        event.target;

    const exerciseIndex =
        Number(input.dataset.exercise);

    const setIndex =
        Number(input.dataset.set);

    const field =
        input.dataset.field;

    const draft =
        getDraft(currentDay);


    if (input.dataset.note) {

        draft.exercises[
            exerciseIndex
        ].note = input.value;

    } else {

        draft.exercises[
            exerciseIndex
        ].sets[
            setIndex
        ][field] = input.value;

    }


    clearTimeout(autoSaveTimeout);

    document.getElementById("autosaveText")
        .textContent = "جاري الحفظ...";


    autoSaveTimeout =
        setTimeout(() => {

            saveWorkoutDraft(false);

            document.getElementById("autosaveText")
                .textContent = "تم الحفظ تلقائيًا ✓";

        }, 600);
}


/* =========================================================
   SET TOGGLE
========================================================= */

function toggleSet(
    exerciseIndex,
    setIndex,
    button
) {

    const draft =
        getDraft(currentDay);

    const set =
        draft.exercises[
            exerciseIndex
        ].sets[
            setIndex
        ];


    if (
        !set.weight ||
        !set.reps
    ) {

        showToast(
            "⚠️",
            "اكتب الوزن والعدات الأول"
        );

        button.classList.add("shake");

        setTimeout(
            () => button.classList.remove("shake"),
            400
        );

        return;
    }


    set.done =
        !set.done;


    if (set.done) {

        button.classList.add("done");

        button.textContent = "✓";

        startRestTimer(
            90
        );

        animateCompletedSet(button);

    } else {

        button.classList.remove("done");

        button.textContent = "○";
    }


    saveWorkoutDraft(false);

    renderWorkoutProgressOnly();
}


function renderWorkoutProgressOnly() {

    const draft =
        getDraft(currentDay);

    const total =
        routines[currentDay]
            .reduce(
                (sum, ex) => sum + ex[1],
                0
            );

    let completed = 0;

    draft.exercises.forEach(ex => {

        ex.sets.forEach(set => {

            if (
                set.done &&
                set.weight &&
                set.reps
            ) {
                completed++;
            }

        });

    });


    const percent =
        total
            ? Math.round(
                completed / total * 100
            )
            : 0;


    document.getElementById(
        "sessionPercent"
    ).textContent = `${percent}%`;

    document.getElementById(
        "sessionSetsText"
    ).textContent =
        `${completed} / ${total} sets`;

    document.getElementById(
        "sessionProgressBar"
    ).style.width =
        `${percent}%`;
}


/* =========================================================
   SAVE
========================================================= */

function saveWorkoutDraft(showMessage = false) {

    const draft =
        getDraft(currentDay);

    data.drafts[currentDay] =
        draft;

    data.currentDay =
        currentDay;

    persistData();


    if (showMessage) {

        const page =
            document.getElementById(
                "workoutPage"
            );

        page.classList.add(
            "flash-save"
        );

        setTimeout(
            () => page.classList.remove("flash-save"),
            700
        );

        showToast(
            "💾",
            "تم حفظ التمرين"
        );

    }
}


/* =========================================================
   FINISH WORKOUT
========================================================= */

function finishWorkout() {

    const draft =
        getDraft(currentDay);


    let completedSets = 0;

    let totalSets = 0;

    const sessionExercises = [];


    draft.exercises.forEach(
        exercise => {

            exercise.sets.forEach(
                set => {

                    totalSets++;

                    if (
                        set.weight &&
                        set.reps &&
                        set.done
                    ) {

                        completedSets++;

                    }

                }
            );


            sessionExercises.push({

                name: exercise.name,

                sets:
                    exercise.sets
                        .filter(
                            set =>
                                set.weight &&
                                set.reps
                        )
                        .map(
                            set => ({
                                weight:
                                    Number(
                                        set.weight
                                    ),

                                reps:
                                    Number(
                                        set.reps
                                    )
                            })
                        )

            });

        }
    );


    if (completedSets === 0) {

        showToast(
            "⚠️",
            "اعمل Set واحدة على الأقل"
        );

        return;
    }


    const newPRs =
        detectPRs(
            sessionExercises
        );


    const workout = {

        id:
            Date.now(),

        date:
            new Date().toISOString(),

        day:
            currentDay,

        totalSets:
            completedSets,

        exercises:
            sessionExercises,

        prs:
            newPRs

    };


    data.workouts.push(
        workout
    );


    delete data.drafts[
        currentDay
    ];


    persistData();


    renderDashboard();

    renderProgress();

    renderHistory();

    renderWorkout();


    if (newPRs.length) {

        showToast(
            "🏆",
            `PR جديد! ${newPRs.length}`
        );

        launchPRAnimation();

    } else {

        showToast(
            "🔥",
            "التمرين خلص يا وحش"
        );
    }


    setTimeout(
        () => showPage("dashboardPage"),
        900
    );
}


/* =========================================================
   PR SYSTEM
========================================================= */

function detectPRs(
    sessionExercises
) {

    const newPRs = [];


    sessionExercises.forEach(
        exercise => {

            if (!exercise.sets.length) {
                return;
            }


            const sessionMax =
                Math.max(
                    ...exercise.sets.map(
                        set => set.weight
                    )
                );


            const oldPR =
                Number(
                    data.prs[
                        exercise.name
                    ] || 0
                );


            if (sessionMax > oldPR) {

                data.prs[
                    exercise.name
                ] = sessionMax;

                data.prEvents =
                    Number(
                        data.prEvents || 0
                    ) + 1;


                newPRs.push({
                    name:
                        exercise.name,

                    weight:
                        sessionMax
                });

            }

        }
    );


    return newPRs;
}


/* =========================================================
   PREVIOUS PERFORMANCE
========================================================= */

function findPreviousPerformance(
    exerciseName,
    day
) {

    for (
        let i =
            data.workouts.length - 1;

        i >= 0;

        i--
    ) {

        const workout =
            data.workouts[i];


        const exercise =
            workout.exercises?.find(
                ex =>
                    ex.name === exerciseName
            );


        if (
            exercise &&
            exercise.sets?.length
        ) {

            return exercise.sets
                .map(
                    set =>
                        `${set.weight}kg × ${set.reps}`
                )
                .join(" / ");

        }

    }


    return null;
}


/* =========================================================
   OVERLOAD SUGGESTION
========================================================= */

function getOverloadSuggestion(
    name,
    repRange,
    previous
) {

    if (!previous) {
        return "ابدأ بوزن يسمح لك بالحركة الصحيحة.";
    }


    const numbers =
        repRange.match(/\d+/g);

    if (!numbers) {
        return "";
    }


    const maxReps =
        Number(numbers[1] || numbers[0]);


    const previousSets =
        previous.split(" / ");


    const allHitTop =
        previousSets.every(set => {

            const match =
                set.match(/×\s*(\d+)/);

            return (
                match &&
                Number(match[1]) >= maxReps
            );

        });


    if (allHitTop) {

        return "⚡ وصلت للحد الأعلى — جرّب زيادة بسيطة في الوزن.";

    }


    return "استهدف زيادة عدة أو عدة عدات قبل زيادة الوزن.";
}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

    const prEntries =
        Object.entries(data.prs)
            .sort(
                (a,b) => b[1] - a[1]
            );


    document.getElementById(
        "progressPRCount"
    ).textContent =
        prEntries.length;


    const list =
        document.getElementById(
            "prList"
        );


    if (!prEntries.length) {

        list.innerHTML = `
            <div class="previous-performance">
                لسه مفيش PRs — أول تمرين هيبدأ السجل 💪
            </div>
        `;

    } else {

        const max =
            Math.max(
                ...prEntries.map(
                    item => item[1]
                )
            );


        list.innerHTML =
            prEntries
                .map(
                    ([name, weight]) => {

                        const percentage =
                            Math.max(
                                5,
                                Math.round(
                                    weight / max * 100
                                )
                            );

                        return `

                            <div class="pr-item">

                                <strong>
                                    ${name}
                                </strong>

                                <div class="bar">
                                    <div
                                        style="width:${percentage}%"
                                    ></div>
                                </div>

                                <div class="pr-weight">
                                    ${weight}kg
                                </div>

                            </div>

                        `;

                    }
                )
                .join("");

    }


    renderWeights();
}


/* =========================================================
   BODY WEIGHT
========================================================= */

function openWeightModal() {

    const latest =
        getLatestWeight();

    document.getElementById(
        "bodyWeightInput"
    ).value =
        latest || "";


    document.getElementById(
        "weightModal"
    ).classList.add("show");
}


function closeWeightModal() {

    document.getElementById(
        "weightModal"
    ).classList.remove("show");
}


function saveWeight() {

    const input =
        document.getElementById(
            "bodyWeightInput"
        );

    const weight =
        Number(input.value);


    if (
        !weight ||
        weight < 20 ||
        weight > 300
    ) {

        showToast(
            "⚠️",
            "اكتب وزن صحيح"
        );

        return;
    }


    data.weights.push({

        date:
            new Date().toISOString(),

        weight

    });


    persistData();

    closeWeightModal();

    renderDashboard();

    renderProgress();

    showToast(
        "⚖️",
        `تم تسجيل ${weight} KG`
    );
}


function getLatestWeight() {

    if (!data.weights.length) {
        return null;
    }

    return data.weights[
        data.weights.length - 1
    ].weight;
}


function renderWeights() {

    const latest =
        getLatestWeight();


    document.getElementById(
        "currentBodyWeight"
    ).textContent =
        latest || "--";


    const history =
        document.getElementById(
            "weightHistory"
        );


    if (!data.weights.length) {

        history.innerHTML = `
            <div class="previous-performance">
                سجل وزنك عشان نتابع التطور.
            </div>
        `;

        return;
    }


    history.innerHTML =
        data.weights
            .slice(-8)
            .reverse()
            .map(item => {

                const date =
                    new Date(
                        item.date
                    ).toLocaleDateString(
                        "ar-EG",
                        {
                            day: "numeric",
                            month: "short"
                        }
                    );

                return `
                    <div class="weight-item">
                        <strong>
                            ${item.weight}
                        </strong>
                        <span>
                            ${date}
                        </span>
                    </div>
                `;

            })
            .join("");
}


/* =========================================================
   HISTORY
========================================================= */

function renderHistory() {

    const list =
        document.getElementById(
            "historyList"
        );


    if (!data.workouts.length) {

        list.innerHTML = `
            <div class="section-card">
                <div class="previous-performance">
                    مفيش تمارين مسجلة لسه.
                    أول تمرين هتعمله هيظهر هنا 🔥
                </div>
            </div>
        `;

        return;
    }


    list.innerHTML =
        [...data.workouts]
            .reverse()
            .map(workout => {

                const date =
                    new Date(
                        workout.date
                    ).toLocaleDateString(
                        "ar-EG",
                        {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }
                    );


                const prs =
                    workout.prs?.length || 0;


                return `

                    <article class="history-item">

                        <div>

                            <h3>
                                ${workout.day}
                            </h3>

                            <span>
                                ${date}
                            </span>

                        </div>


                        <div class="history-right">

                            <strong>
                                ${workout.totalSets}
                            </strong>

                            <span>
                                sets
                                ${prs ? ` · 🏆 ${prs}` : ""}
                            </span>

                        </div>

                    </article>

                `;

            })
            .join("");
}


/* =========================================================
   REST TIMER
========================================================= */

function startRestTimer(seconds = 90) {

    clearInterval(timerInterval);


    timerTotal =
        Number(seconds);

    timerRemaining =
        Number(seconds);


    updateTimerUI();


    document
        .getElementById("timerCard")
        .classList.add("show");


    timerInterval =
        setInterval(
            () => {

                timerRemaining--;

                updateTimerUI();


                if (
                    timerRemaining <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    timerRemaining = 0;

                    updateTimerUI();

                    timerFinished();

                }

            },
            1000
        );
}


function updateTimerUI() {

    const minutes =
        Math.floor(
            timerRemaining / 60
        );

    const seconds =
        timerRemaining % 60;


    document.getElementById(
        "timerDisplay"
    ).textContent =
        `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;


    const percentage =
        timerTotal
            ? timerRemaining /
              timerTotal * 100
            : 0;


    document.getElementById(
        "timerBar"
    ).style.width =
        `${percentage}%`;
}


function timerFinished() {

    showToast(
        "⏱️",
        "خلصت الراحة — يلا Set جديدة!"
    );


    const card =
        document.getElementById(
            "timerCard"
        );

    card.classList.add(
        "pr-pop"
    );

    setTimeout(
        () => card.classList.remove("pr-pop"),
        700
    );
}


function closeRestTimer() {

    clearInterval(
        timerInterval
    );

    document
        .getElementById("timerCard")
        .classList.remove("show");
}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(
    icon,
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    document.getElementById(
        "toastIcon"
    ).textContent =
        icon;


    document.getElementById(
        "toastMessage"
    ).textContent =
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
            2200
        );
}


/* =========================================================
   ANIMATIONS
========================================================= */

function animateCompletedSet(
    element
) {

    element.animate(
        [
            {
                transform:
                    "scale(1)"
            },
            {
                transform:
                    "scale(1.25)"
            },
            {
                transform:
                    "scale(1)"
            }
        ],
        {
            duration: 350,
            easing: "ease-out"
        }
    );
}


function launchPRAnimation() {

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.textContent =
            ["🏆","⚡","🔥","💪"][
                Math.floor(
                    Math.random() * 4
                )
            ];


        particle.style.position =
            "fixed";

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            "45%";

        particle.style.zIndex =
            "500";

        particle.style.fontSize =
            `${14 + Math.random() * 16}px`;

        particle.style.pointerEvents =
            "none";


        document.body.appendChild(
            particle
        );


        particle.animate(
            [
                {
                    transform:
                        "translate(0,0) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(
                            ${(Math.random() - .5) * 180}px,
                            ${-100 - Math.random() * 220}px
                        ) scale(.3)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    900 + Math.random() * 600,
                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );


        setTimeout(
            () => particle.remove(),
            1600
        );
    }
}


/* =========================================================
   STREAK
========================================================= */

function calculateStreak() {

    if (!data.workouts.length) {
        return 0;
    }


    const dates =
        data.workouts
            .map(
                workout =>
                    new Date(
                        workout.date
                    ).toDateString()
            );


    const uniqueDates =
        [...new Set(dates)]
            .reverse();


    let streak = 0;

    let current =
        new Date();


    for (
        let i = 0;
        i < uniqueDates.length;
        i++
    ) {

        const expected =
            new Date(
                current
            ).toDateString();


        if (
            uniqueDates[i] === expected
        ) {

            streak++;

            current.setDate(
                current.getDate() - 1
            );

        } else if (
            i === 0
        ) {

            current.setDate(
                current.getDate() - 1
            );

            if (
                uniqueDates[i] ===
                current.toDateString()
            ) {

                streak++;

                current.setDate(
                    current.getDate() - 1
                );

            } else {

                break;

            }

        } else {

            break;

        }
    }


    return streak;
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


    link.href = url;

    link.download =
        `MO-GYM-backup-${new Date()
            .toISOString()
            .slice(0,10)}.json`;


    link.click();


    URL.revokeObjectURL(
        url
    );


    showToast(
        "📤",
        "تم تصدير البيانات"
    );
}


/* =========================================================
   IMPORT
========================================================= */

function importData(event) {

    const file =
        event.target.files?.[0];


    if (!file) return;


    const reader =
        new FileReader();


    reader.onload =
        function(e) {

            try {

                const imported =
                    JSON.parse(
                        e.target.result
                    );


                data = {
                    ...defaultData(),
                    ...imported
                };


                persistData();


                currentDay =
                    data.currentDay ||
                    "Torso A";


                renderDashboard();

                renderWorkout();

                renderProgress();

                renderHistory();


                showToast(
                    "📥",
                    "تم استرجاع البيانات"
                );


            } catch {

                showToast(
                    "❌",
                    "الملف غير صالح"
                );

            }

        };


    reader.readAsText(file);
}


/* =========================================================
   RESET
========================================================= */

function resetData() {

    const confirmed =
        confirm(
            "متأكد إنك عايز تمسح كل بيانات MO GYM؟"
        );


    if (!confirmed) return;


    localStorage.removeItem(
        STORAGE_KEY
    );


    data =
        defaultData();


    currentDay =
        "Torso A";


    renderDashboard();

    renderWorkout();

    renderProgress();

    renderHistory();


    showToast(
        "🗑️",
        "تم مسح البيانات"
    );
}


/* =========================================================
   HELPERS
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
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeRestTimer();

            closeWeightModal();

        }

        if (
            event.code === "Space" &&
            document.activeElement.tagName !== "INPUT"
        ) {

            event.preventDefault();

            startRestTimer(90);

        }

    }
);
