import "./style.css";
const canvas = document.getElementById("stars") as HTMLCanvasElement;
if (canvas) {
  const ctx = canvas.getContext("2d");

  let stars: {
    x: number;
    y: number;
    size: number;
    speed: number;
    alpha: number;
  }[] = [];
  const STAR_COUNT = 120;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  function createStars() {
    stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.3 + 0.05,
        alpha: Math.random(),
      });
    }
  }

  createStars();

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      star.y += star.speed;

      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }

      star.alpha += (Math.random() - 0.5) * 0.02;

      ctx.globalAlpha = star.alpha;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}
