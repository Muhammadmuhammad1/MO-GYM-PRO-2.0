const routines = {

"Torso A":[
    "Incline DB Press",
    "Bench Press",
    "Lat Pulldown",
    "Row",
    "Lateral Raise"
],

"Limbs A":[
    "Squat",
    "Leg Press",
    "RDL",
    "Leg Curl"
],

"Torso B":[
    "Bench Press",
    "Cable Row",
    "Shoulder Press"
],

"Limbs B":[
    "Hack Squat",
    "Leg Curl",
    "Calves"
]

};

let currentDay = "Torso A";

function showPage(id){

    document.querySelectorAll(".page")
    .forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(id)
    .classList.add("active");

}

function changeDay(day){

    currentDay = day;

    loadWorkout();

}

function loadWorkout(){

    const list =
        document.getElementById("exerciseList");

    list.innerHTML = "";

    routines[currentDay].forEach(ex=>{

        const card =
            document.createElement("div");

        card.className = "exercise";

        card.innerHTML = `
            <h3>${ex}</h3>

            <div class="set">
                <div>1</div>
                <input placeholder="kg">
                <input placeholder="reps">
            </div>

            <div class="set">
                <div>2</div>
                <input placeholder="kg">
                <input placeholder="reps">
            </div>

            <div class="set">
                <div>3</div>
                <input placeholder="kg">
                <input placeholder="reps">
            </div>
        `;

        list.appendChild(card);

    });

}

function toast(message){

    const box =
        document.getElementById("toast");

    box.innerText = message;

    box.style.display = "block";

    setTimeout(()=>{

        box.style.display = "none";

    },2000);

}

window.onload = ()=>{

    loadWorkout();

    toast("🔥 MO GYM جاهز");

};
