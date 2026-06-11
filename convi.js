/* BOTÃO ENTRAR */

const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    // toca música se existir
    const music = document.getElementById("music");

    if (music) {
        music.play();
    }

});

/* ESTRELAS */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

let stars = [];

class Star {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.radius = Math.random() * 2;

        this.opacity = Math.random();

        this.speed = Math.random() * 0.015;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;

        ctx.shadowBlur = 15;
        ctx.shadowColor = "white";

        ctx.fill();

    }

    update() {

        this.opacity += this.speed;

        if (this.opacity <= 0) {
            this.speed = Math.abs(this.speed);
        }

        if (this.opacity >= 1) {
            this.speed = -Math.abs(this.speed);
        }

        this.draw();

    }

}

function initStars() {

    stars = [];

    for (let i = 0; i < 250; i++) {
        stars.push(new Star());
    }

}

function animateStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
        star.update();
    });

    requestAnimationFrame(animateStars);

}

initStars();
animateStars();

window.addEventListener("resize", () => {

    resizeCanvas();
    initStars();

});