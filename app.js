/* =========================================================
   MO GYM PRO — APP.JS
   Motion + Interaction + Animation Engine
========================================================= */

"use strict";

/* =========================================================
   CONFIG
========================================================= */

const APP = {
    animationDuration: 350,
    toastDuration: 2200,
    autosaveDelay: 500,
    restDefault: 90
};


/* =========================================================
   DOM HELPERS
========================================================= */

const $ = selector => document.querySelector(selector);

const $$ = selector =>
    [...document.querySelectorAll(selector)];

const sleep = ms =>
    new Promise(resolve => setTimeout(resolve, ms));


/* =========================================================
   PAGE TRANSITIONS
========================================================= */

function animatePage(page) {

    if (!page) return;

    page.animate(
        [
            {
                opacity: 0,
                transform: "translateY(18px) scale(.985)"
            },
            {
                opacity: 1,
                transform: "translateY(0) scale(1)"
            }
        ],
        {
            duration: APP.animationDuration,
            easing: "cubic-bezier(.2,.8,.2,1)"
        }
    );
}


/* =========================================================
   NAVIGATION
========================================================= */

function showPage(id, button) {

    const pages = $$(".page");

    pages.forEach(page => {

        page.classList.remove("active");

    });

    const page = document.getElementById(id);

    if (!page) return;

    page.classList.add("active");

    animatePage(page);

    $$(".nav-btn").forEach(btn => {

        btn.classList.remove("active");

    });

    if (button) {

        button.classList.add("active");

        pulse(button);

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (id === "progressPage") {

        if (typeof renderProgress === "function") {
            renderProgress();
        }

    }

    if (id === "historyPage") {

        if (typeof renderHistory === "function") {
            renderHistory();
        }

    }

    if (id === "dashboard") {

        if (typeof updateDashboard === "function") {
            updateDashboard();
        }

    }
}


/* =========================================================
   BUTTON PRESS EFFECT
========================================================= */

document.addEventListener("click", event => {

    const button =
        event.target.closest("button");

    if (!button) return;

    button.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(.94)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 180,
            easing: "ease-out"
        }
    );

});


/* =========================================================
   PULSE
========================================================= */

function pulse(element) {

    if (!element) return;

    element.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.08)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 300,
            easing: "ease-out"
        }
    );

}


/* =========================================================
   EXERCISE CARDS
========================================================= */

function animateExerciseCards() {

    const cards = $$(".exercise");

    cards.forEach((card, index) => {

        card.animate(
            [
                {
                    opacity: 0,
                    transform:
                        "translateY(25px) scale(.97)"
                },
                {
                    opacity: 1,
                    transform:
                        "translateY(0) scale(1)"
                }
            ],
            {
                duration: 400,
                delay: index * 55,
                easing: "cubic-bezier(.2,.8,.2,1)",
                fill: "both"
            }
        );

    });

}


/* =========================================================
   SET COMPLETION ANIMATION
========================================================= */

function animateCompletedSet(row) {

    if (!row) return;

    row.classList.add("done");

    row.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.035)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 250,
            easing: "ease-out"
        }
    );

    const number =
        row.querySelector(".set-number");

    if (number) {

        number.animate(
            [
                {
                    transform: "rotate(0deg)"
                },
                {
                    transform: "rotate(-8deg) scale(1.15)"
                },
                {
                    transform: "rotate(0deg) scale(1)"
                }
            ],
            {
                duration: 300
            }
        );

    }

}


/* =========================================================
   INPUT INTERACTION
========================================================= */

document.addEventListener("input", event => {

    const input = event.target;

    if (!input.matches("input")) return;

    input.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.015)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 120
        }
    );

    const set = input.closest(".set");

    if (!set) return;

    const inputs =
        set.querySelectorAll("input");

    if (
        inputs.length >= 2 &&
        inputs[0].value &&
        inputs[1].value
    ) {

        animateCompletedSet(set);

    }

});


/* =========================================================
   EXERCISE PROGRESS
========================================================= */

function animateExerciseProgress(card) {

    if (!card) return;

    const sets =
        card.querySelectorAll(".set");

    const completed =
        [...sets].filter(set =>
            set.classList.contains("done")
        ).length;

    const percent =
        sets.length
            ? completed / sets.length * 100
            : 0;

    const bar =
        card.querySelector(
            ".exercise-progress div"
        );

    if (!bar) return;

    bar.animate(
        [
            {
                width: bar.style.width || "0%"
            },
            {
                width: `${percent}%`
            }
        ],
        {
            duration: 400,
            easing: "ease-out",
            fill: "forwards"
        }
    );

    bar.style.width =
        `${percent}%`;

}


/* =========================================================
   WORKOUT DAY SWITCH
========================================================= */

function animateDaySwitch() {

    const list =
        $("#exerciseList");

    if (!list) return;

    list.animate(
        [
            {
                opacity: 0,
                transform: "translateX(12px)"
            },
            {
                opacity: 1,
                transform: "translateX(0)"
            }
        ],
        {
            duration: 280,
            easing: "ease-out"
        }
    );

    setTimeout(
        animateExerciseCards,
        50
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;

function toast(message) {

    const box =
        $("#toast");

    if (!box) return;

    clearTimeout(toastTimeout);

    box.textContent = message;

    box.classList.add("show");

    box.animate(
        [
            {
                opacity: 0,
                transform:
                    "translate(-50%,-25px) scale(.95)"
            },
            {
                opacity: 1,
                transform:
                    "translate(-50%,0) scale(1)"
            }
        ],
        {
            duration: 300,
            easing: "cubic-bezier(.2,.8,.2,1)"
        }
    );

    toastTimeout =
        setTimeout(() => {

            box.classList.remove("show");

        }, APP.toastDuration);

}


/* =========================================================
   SUCCESS EFFECT
========================================================= */

function successAnimation() {

    const logo =
        $(".logo");

    if (!logo) return;

    logo.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.18) rotate(-8deg)"
            },
            {
                transform: "scale(1) rotate(0)"
            }
        ],
        {
            duration: 600,
            easing: "cubic-bezier(.2,.8,.2,1)"
        }
    );

}


/* =========================================================
   PR ANIMATION
========================================================= */

function prAnimation() {

    successAnimation();

    if (navigator.vibrate) {

        navigator.vibrate(
            [80, 50, 120]
        );

    }

    createParticles();

}


/* =========================================================
   GREEN PARTICLES
========================================================= */

function createParticles() {

    const amount = 18;

    for (let i = 0; i < amount; i++) {

        const particle =
            document.createElement("div");

        particle.style.position =
            "fixed";

        particle.style.width = "6px";
        particle.style.height = "6px";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            "#39ff88";

        particle.style.boxShadow =
            "0 0 10px #39ff88";

        particle.style.pointerEvents =
            "none";

        particle.style.zIndex = "9999";

        particle.style.left =
            `${50 + (Math.random() * 16 - 8)}%`;

        particle.style.top =
            `${45 + (Math.random() * 10 - 5)}%`;

        document.body.appendChild(
            particle
        );

        const x =
            (Math.random() - .5) * 280;

        const y =
            (Math.random() - .5) * 280;

        particle.animate(
            [
                {
                    transform:
                        "translate(0,0) scale(1)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px,${y}px) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    700 + Math.random() * 500,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        ).onfinish = () => {

            particle.remove();

        };

    }

}


/* =========================================================
   REST TIMER
========================================================= */

let motionTimerInterval = null;

function startTimer(seconds = APP.restDefault) {

    clearInterval(motionTimerInterval);

    let remaining = seconds;

    const card =
        $("#timerCard");

    const timer =
        $("#timer");

    if (!card || !timer) return;

    card.classList.add("show");

    animateTimerCard();

    updateTimerUI();

    motionTimerInterval =
        setInterval(() => {

            remaining--;

            updateTimerUI();

            if (remaining <= 0) {

                clearInterval(
                    motionTimerInterval
                );

                timer.textContent =
                    "00:00";

                toast(
                    "🔥 الراحة خلصت — يلا يا وحش!"
                );

                if (navigator.vibrate) {

                    navigator.vibrate(
                        [200,100,200]
                    );

                }

                pulse(card);

            }

        }, 1000);


    function updateTimerUI() {

        const minutes =
            Math.floor(remaining / 60)
            .toString()
            .padStart(2, "0");

        const secondsPart =
            (remaining % 60)
            .toString()
            .padStart(2, "0");

        timer.textContent =
            `${minutes}:${secondsPart}`;

    }

}


function animateTimerCard() {

    const card =
        $("#timerCard");

    if (!card) return;

    card.animate(
        [
            {
                opacity: 0,
                transform:
                    "translateY(20px)"
            },
            {
                opacity: 1,
                transform:
                    "translateY(0)"
            }
        ],
        {
            duration: 300,
            easing: "ease-out"
        }
    );

}


/* =========================================================
   COUNT-UP NUMBERS
========================================================= */

function countUp(element, target) {

    if (!element) return;

    const end =
        Number(target);

    if (isNaN(end)) return;

    const duration = 600;

    const startTime =
        performance.now();

    function update(time) {

        const progress =
            Math.min(
                (time - startTime) / duration,
                1
            );

        const eased =
            1 - Math.pow(1 - progress, 3);

        const value =
            Math.round(end * eased);

        element.textContent =
            value;

        if (progress < 1) {

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}


/* =========================================================
   PROGRESS BAR
========================================================= */

function animateProgressBar(bar, percent) {

    if (!bar) return;

    bar.animate(
        [
            {
                width: "0%"
            },
            {
                width: `${percent}%`
            }
        ],
        {
            duration: 800,
            easing: "cubic-bezier(.2,.8,.2,1)",
            fill: "forwards"
        }
    );

}


/* =========================================================
   DASHBOARD STATS ANIMATION
========================================================= */

function animateDashboardStats() {

    const stats =
        $$(".stat strong");

    stats.forEach((stat, index) => {

        const value =
            parseInt(stat.textContent) || 0;

        countUp(
            stat,
            value
        );

        stat.animate(
            [
                {
                    opacity: .4,
                    transform: "translateY(5px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 400,
                delay: index * 100
            }
        );

    });

}


/* =========================================================
   SAVE INDICATOR
========================================================= */

function showSavedIndicator() {

    const indicator =
        document.createElement("div");

    indicator.textContent =
        "✓ محفوظ";

    indicator.style.position =
        "fixed";

    indicator.style.bottom =
        "92px";

    indicator.style.left =
        "50%";

    indicator.style.transform =
        "translateX(-50%)";

    indicator.style.padding =
        "6px 12px";

    indicator.style.borderRadius =
        "20px";

    indicator.style.background =
        "#0d1710";

    indicator.style.border =
        "1px solid rgba(57,255,136,.3)";

    indicator.style.color =
        "#39ff88";

    indicator.style.fontSize =
        "11px";

    indicator.style.zIndex =
        "300";

    document.body.appendChild(
        indicator
    );

    indicator.animate(
        [
            {
                opacity: 0,
                transform:
                    "translate(-50%,10px)"
            },
            {
                opacity: 1,
                transform:
                    "translate(-50%,0)"
            }
        ],
        {
            duration: 200
        }
    );

    setTimeout(() => {

        indicator.animate(
            [
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ],
            {
                duration: 300
            }
        ).onfinish = () =>
            indicator.remove();

    }, 900);

}


/* =========================================================
   AUTO SAVE
========================================================= */

let autoSaveTimeout;

function autoSave() {

    clearTimeout(autoSaveTimeout);

    autoSaveTimeout =
        setTimeout(() => {

            showSavedIndicator();

        }, APP.autosaveDelay);

}


/* =========================================================
   WEIGHT MODAL
========================================================= */

function openWeightModal() {

    const modal =
        $("#weightModal");

    if (!modal) return;

    modal.classList.add("show");

    const box =
        modal.querySelector(".modal-box");

    if (box) {

        box.animate(
            [
                {
                    opacity: 0,
                    transform:
                        "translateY(30px) scale(.95)"
                },
                {
                    opacity: 1,
                    transform:
                        "translateY(0) scale(1)"
                }
            ],
            {
                duration: 300,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

    }

    setTimeout(() => {

        $("#weightInput")?.focus();

    }, 100);

}


function closeWeightModal() {

    const modal =
        $("#weightModal");

    if (!modal) return;

    const box =
        modal.querySelector(".modal-box");

    if (!box) {

        modal.classList.remove("show");

        return;

    }

    box.animate(
        [
            {
                opacity: 1,
                transform:
                    "translateY(0) scale(1)"
            },
            {
                opacity: 0,
                transform:
                    "translateY(20px) scale(.97)"
            }
        ],
        {
            duration: 180
        }
    ).onfinish = () => {

        modal.classList.remove("show");

    };

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        closeWeightModal();

    }
);


/* =========================================================
   SWIPE BETWEEN PAGES
========================================================= */

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener(
    "touchstart",
    event => {

        touchStartX =
            event.changedTouches[0].screenX;

        touchStartY =
            event.changedTouches[0].screenY;

    },
    {passive:true}
);


document.addEventListener(
    "touchend",
    event => {

        const endX =
            event.changedTouches[0].screenX;

        const endY =
            event.changedTouches[0].screenY;

        const dx =
            endX - touchStartX;

        const dy =
            endY - touchStartY;

        if (Math.abs(dx) < 80)
            return;

        if (Math.abs(dx) < Math.abs(dy))
            return;

        const pages = [
            "dashboard",
            "workout",
            "progressPage",
            "historyPage"
        ];

        const current =
            pages.findIndex(
                id =>
                    document
                    .getElementById(id)
                    ?.classList.contains("active")
            );

        let next =
            dx < 0
                ? current + 1
                : current - 1;

        if (next < 0)
            next = 0;

        if (next >= pages.length)
            next = pages.length - 1;

        const buttons =
            $$(".nav-btn");

        showPage(
            pages[next],
            buttons[next]
        );

    },
    {passive:true}
);


/* =========================================================
   DOUBLE CLICK — QUICK REST
========================================================= */

document.addEventListener(
    "dblclick",
    event => {

        if (
            event.target.closest(
                ".exercise"
            )
        ) {

            startTimer(90);

            toast(
                "⏱️ راحة 90 ثانية"
            );

        }

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                entry.target.animate(
                    [
                        {
                            opacity: 0,
                            transform:
                                "translateY(15px)"
                        },
                        {
                            opacity: 1,
                            transform:
                                "translateY(0)"
                        }
                    ],
                    {
                        duration: 450,
                        easing:
                            "cubic-bezier(.2,.8,.2,1)"
                    }
                );

                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: .1
        }
    );


function activateScrollAnimations() {

    $$(".chart, .history-item, .setting")
        .forEach(element => {

            observer.observe(element);

        });

}


/* =========================================================
   APP START
========================================================= */

window.addEventListener(
    "load",
    async () => {

        await sleep(150);

        document.body.animate(
            [
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ],
            {
                duration: 500
            }
        );

        activateScrollAnimations();

        animateExerciseCards();

        if (
            typeof updateDashboard ===
            "function"
        ) {

            updateDashboard();

        }

    }
);


/* =========================================================
   EXPOSE FUNCTIONS
========================================================= */

window.MOGYM = {

    showPage,
    startTimer,
    toast,
    openWeightModal,
    closeWeightModal,
    animateExerciseCards,
    animateCompletedSet,
    prAnimation,
    successAnimation,
    createParticles,
    countUp,
    animateProgressBar

};
