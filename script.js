const herName = "Bhumu";
const yesBtn = document.getElementById("yesBtn");
document.getElementById("Bhumu").innerText = herName;
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");
music.volume = 0.7;
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let scale = 1;


// No button runs away 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Yes button grows + confetti 🎉
yesBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  }

  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;
  launchConfetti();

  if (scale > 2.5) {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#ffebf0;
        font-family:Comic Sans MS;
        text-align:center;">
        <h1 style="color:#e91e63;">
          SHE SAID YES!!! 💍💖<br>
          Happy Valentine’s Day ❤️
        </h1>
      </div>
    `;
  }
});

// Confetti logic 🎊
const confettiPieces = [];

function launchConfetti() {
  for (let i = 0; i < 120; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10,
     color: ["#ff4d6d", "#ff85a1", "#ffb3c6"][Math.floor(Math.random() * 3)]
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach((p, i) => {
    ctx.fillStyle = p.color;
    ctx.font = `${p.r * 4}px serif`;
    ctx.fillText("❤️", p.x, p.y);

    p.y += p.d;
    p.x += Math.sin(p.y * 0.05);

    if (p.y > canvas.height) {
      confettiPieces.splice(i, 1);
    }
  });

  requestAnimationFrame(drawConfetti);
}

drawConfetti();
