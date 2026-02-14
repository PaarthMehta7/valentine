const openBtn = document.getElementById("openBtn");
const envelopeScreen = document.getElementById("envelope-screen");

const letterScreen = document.getElementById("letter-screen");
const letterText = document.getElementById("letter-text");
const nextBtn = document.getElementById("nextBtn");

const bgBlur = document.querySelector(".background-blur");
const bgMain = document.querySelector(".background-main");
const overlay = document.querySelector(".overlay");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("music");

let yesClicks = 0;
let scale = 1;
let finished = false;

/* ================= LOVE LETTER MESSAGE ================= */
const message = `Happy Valentines Day Babyyy
From the day I have been with you
I have felt nothing but happiness.

I know we have distance as a barrier 
but one day it will all be worth it.
Ahhh the delulu of just living together after all this💖

I cannot imagine to live in a world without you 
and i am so in love with you so i guess
its time to ask the big question...

`;

/* ================= TYPEWRITER EFFECT ================= */
let index = 0;

function typeWriter() {
  if (index < message.length) {
    letterText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

/* ================= OPEN ENVELOPE ================= */
openBtn.addEventListener("click", () => {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  setTimeout(() => {
    envelopeScreen.style.display = "none";
    letterScreen.classList.remove("hidden");
    typeWriter();
    startPetals();
  }, 1200);
});

/* ================= NEXT BUTTON ================= */
nextBtn.addEventListener("click", () => {
  letterScreen.style.display = "none";

  bgBlur.classList.remove("hidden");
  bgMain.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

/* ================= FLOATING PETALS ================= */
function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.innerText = "🌸";
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}

function startPetals() {
  setInterval(createPetal, 500);
}

/* ================= ORIGINAL YES BUTTON ================= */
yesBtn.addEventListener("click", () => {
  music.play();

  if (finished) return;

  yesClicks++;
  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;

  if (yesClicks >= 4) {
    finished = true;

    document.querySelector(".overlay h1")
      .classList.add("hide-question");

    yesBtn.textContent = "YAYYY ❤️";
    yesBtn.classList.add("final");
    noBtn.style.display = "none";

    for (let i = 0; i < 70; i++) {
      setTimeout(createHeart, i * 50);
    }
  }
});

/* ================= NO RUNS AWAY ================= */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

/* ================= HEARTS ================= */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
