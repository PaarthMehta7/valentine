const openBtn = document.getElementById("openBtn");
const envelopeScreen = document.getElementById("envelope-screen");

const bgBlur = document.querySelector(".background-blur");
const bgMain = document.querySelector(".background-main");
const overlay = document.querySelector(".overlay");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("music");

let yesClicks = 0;
let scale = 1;
let finished = false;

/* OPEN ENVELOPE */
openBtn.addEventListener("click", () => {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  setTimeout(() => {
    envelopeScreen.style.display = "none";
    bgBlur.classList.remove("hidden");
    bgMain.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }, 1200);
});

/* YES BUTTON */
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

/* NO RUNS AWAY */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

/* HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
