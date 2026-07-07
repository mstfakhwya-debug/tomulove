// =========================================
// FOR JANAT ❤️
// Version 1.0
// FINAL SCRIPT - PART 1
// Sky Engine
// =========================================

const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

// Canvas Resize
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// =========================================
// STAR CLASS
// =========================================

class Star {

    constructor() {
        this.reset();
    }

    reset() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + 1;

        this.alpha = Math.random();

        this.speed = Math.random() * 0.015 + 0.005;

        this.dir = Math.random() > 0.5 ? 1 : -1;

        this.rotate = Math.random() * Math.PI;

    }

    update() {

        this.alpha += this.speed * this.dir;

        if (this.alpha >= 1) this.dir = -1;

        if (this.alpha <= 0.2) this.dir = 1;

        this.rotate += 0.002;

    }

    draw() {

        ctx.save();

        ctx.translate(this.x, this.y);

        ctx.rotate(this.rotate);

        ctx.globalAlpha = this.alpha;

        ctx.fillStyle = "#ffffff";

        ctx.beginPath();

        for (let i = 0; i < 5; i++) {

            ctx.lineTo(
                Math.cos((18 + i * 72) * Math.PI / 180) * this.size * 4,
                -Math.sin((18 + i * 72) * Math.PI / 180) * this.size * 4
            );

            ctx.lineTo(
                Math.cos((54 + i * 72) * Math.PI / 180) * this.size * 1.8,
                -Math.sin((54 + i * 72) * Math.PI / 180) * this.size * 1.8
            );

        }

        ctx.closePath();

        ctx.fill();

        ctx.restore();

        ctx.globalAlpha = 1;

    }

}

const stars = [];

for (let i = 0; i < 180; i++) {

    stars.push(new Star());

}

// =========================================
// METEORS
// =========================================

class Meteor {

    constructor() {

        this.reset();

    }

    reset() {

        this.x = Math.random() * canvas.width;

        this.y = -100;

        this.speed = Math.random() * 6 + 8;

        this.life = 80;

    }

    update() {

        this.x += this.speed;

        this.y += this.speed;

        this.life--;

    }

    draw() {

        let g = ctx.createLinearGradient(
            this.x,
            this.y,
            this.x - 100,
            this.y - 100
        );

        g.addColorStop(0, "#ffffff");
        g.addColorStop(1, "transparent");

        ctx.beginPath();

        ctx.strokeStyle = g;

        ctx.lineWidth = 2;

        ctx.moveTo(this.x, this.y);

        ctx.lineTo(this.x - 100, this.y - 100);

        ctx.stroke();

    }

}

const meteors = [];

function spawnMeteor() {

    meteors.push(new Meteor());

    setTimeout(
        spawnMeteor,
        Math.random() * 5000 + 2000
    );

}

spawnMeteor();

// =========================================
// PARTICLES
// =========================================

const particles = [];

// =========================================
// LOOP
// =========================================

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Stars

    stars.forEach(star => {

        star.update();

        star.draw();

    });

    // Meteors

    for (let i = meteors.length - 1; i >= 0; i--) {

        meteors[i].update();

        meteors[i].draw();

        if (meteors[i].life <= 0) {

            meteors.splice(i, 1);

        }

    }

    // Fireworks

    // Fireworks

for (let i = particles.length - 1; i >= 0; i--) {

    if (particles[i].update) {
        particles[i].update();
    }

    if (particles[i].draw) {
        particles[i].draw();
    }

    if (particles[i].life <= 0) {
        particles.splice(i, 1);
    }

}

    requestAnimationFrame(animate);

}

animate();

// =========================================
// DOM
// =========================================

const intro = document.getElementById("intro");
const introText = document.getElementById("introText");

const main = document.getElementById("main");

const name = document.getElementById("name");

const message = document.getElementById("message");

const heart = document.getElementById("heart");

const music = document.getElementById("music");

const flash = document.getElementById("flash");

const giftBtn = document.getElementById("giftBtn");

heart.style.display = "none";

main.style.opacity = "0";
// =========================================
// FOR JANAT ❤️
// FINAL SCRIPT - PART 2
// Intro + Name + Message + Heart
// =========================================

const introLines = [
    "✨",
    "أهلاً بيكي ❤️",
    "الموقع ده معمول مخصوص ليكي",
    "Ready ؟"
];

const messageText = `

إلى أجمل إنسانة في حياتي ❤️

يمكن الكلمات متوصفش اللي جوايا...

لكن وجودك لوحده
خلّى أيامي أجمل.

أتمنى كل مرة تفتحي فيها الموقع...
تبتسمي 😊

وده لسه مجرد البداية...

`;

// =========================================

function typeWriter(text, element, speed, callback){

    let i = 0;

    element.innerHTML = "";

    function typing(){

        if(i < text.length){

            if(text[i] === "\n"){

                element.innerHTML += "<br>";

            }else{

                element.innerHTML += text[i];

            }

            i++;

            setTimeout(typing,speed);

        }else{

            if(callback){

                callback();

            }

        }

    }

    typing();

}

// =========================================

function showHeart(){

    heart.style.display="block";

    heart.animate([

        {
            transform:"scale(.3)",
            opacity:0
        },

        {
            transform:"scale(1.25)",
            opacity:1
        },

        {
            transform:"scale(1)"
        }

    ],{

        duration:700,
        easing:"ease-out"

    });

}

// =========================================

function writeName(){

    const letters=[

        "ج",

        "جن",

        "جنا",

        "جنات ❤️"

    ];

    let index=0;

    const timer=setInterval(()=>{

        name.innerHTML=letters[index];

        index++;

        if(index>=letters.length){

            clearInterval(timer);

            setTimeout(()=>{

                typeWriter(

                    messageText,

                    message,

                    35,

                    showHeart

                );

            },500);

        }

    },450);

}

// =========================================

function openMain(){

    intro.style.opacity="0";

    setTimeout(()=>{

        intro.style.display="none";

        main.style.opacity="1";

        main.style.transform="scale(1)";

        writeName();

    },1200);

}

// =========================================

function introSequence(){

    let i=0;

    function next(){

        if(i<introLines.length){

            introText.innerHTML=introLines[i];

            i++;

            setTimeout(next,1500);

        }

        else{

            openMain();

        }

    }

    next();

}

setTimeout(introSequence,1000);

// =========================================
// HEART CLICK
// =========================================

let clicked=false;

heart.onclick=function(){

    if(clicked) return;

    clicked=true;

    if(music){

        music.play().catch(()=>{});

    }

    if(navigator.vibrate){

        navigator.vibrate([100,60,100]);

    }

    flash.style.opacity=".85";

    setTimeout(()=>{

        flash.style.opacity="0";

    },200);

    createFirework(

        canvas.width/2,

        canvas.height/2

    );

    createFirework(

        canvas.width/2-150,

        canvas.height/2-80

    );

    createFirework(

        canvas.width/2+150,

        canvas.height/2-80

    );

    setTimeout(()=>{

        giftBtn.style.display="block";

    },2500);

};
// =========================================
// FOR JANAT ❤️
// FINAL SCRIPT - PART 3
// Fireworks + Gift
// =========================================

// ---------- Firework Particle ----------

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        this.vx=(Math.random()-0.5)*12;
        this.vy=(Math.random()-0.5)*12;

        this.gravity=.08;

        this.life=100;

        this.size=Math.random()*3+2;

        this.color=color;

    }

    update(){

        this.x+=this.vx;

        this.y+=this.vy;

        this.vy+=this.gravity;

        this.life--;

    }

    draw(){

        ctx.save();

        ctx.globalAlpha=this.life/100;

        ctx.fillStyle=this.color;

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

        ctx.fill();

        ctx.restore();

    }

}

// ---------- Flying Heart ----------

class HeartParticle{

    constructor(x,y){

        this.x=x;
        this.y=y;

        this.vx=(Math.random()-0.5)*8;
        this.vy=(Math.random()-0.5)*8;

        this.life=90;

        this.size=Math.random()*12+10;

    }

    update(){

        this.x+=this.vx;

        this.y+=this.vy;

        this.vy+=0.03;

        this.life--;

    }

    draw(){

        ctx.save();

        ctx.globalAlpha=this.life/90;

        ctx.font=this.size+"px Arial";

        ctx.fillText("❤️",this.x,this.y);

        ctx.restore();

    }

}

// ---------- Firework ----------

function createFirework(x,y){

    const colors=[

        "#ff4fa3",

        "#ff88cc",

        "#ffd700",

        "#ffffff",

        "#ff66ff"

    ];

    for(let i=0;i<140;i++){

        particles.push(

            new Particle(

                x,

                y,

                colors[Math.floor(Math.random()*colors.length)]

            )

        );

    }

    for(let i=0;i<35;i++){

        particles.push(

            new HeartParticle(

                x,

                y

            )

        );

    }

}

// ---------- Gift Button ----------

if(giftBtn){

giftBtn.onclick=function(){

    giftBtn.style.display="none";

    message.innerHTML=`
💍

يا جنات...

الموقع ده معمول علشانك ❤️

وأتمنى يفضل يفكرك إنك مميزة جدًا بالنسبة ليا.
`;

    createFirework(canvas.width/2,canvas.height/2);

    setTimeout(()=>{
        createFirework(canvas.width/2-180,canvas.height/2);
    },300);

    setTimeout(()=>{
        createFirework(canvas.width/2+180,canvas.height/2);
    },600);

    const game=document.createElement("div");

    game.id="game";

    game.innerHTML=`
        <h2>🎮 لعبة صغيرة</h2>
        <p>اضغط على القلب 10 مرات ❤️</p>
        <button id="miniHeart">❤️</button>
        <h3 id="score">0 / 10</h3>
    `;

    document.body.appendChild(game);

    let score = 0;

const miniHeart = game.querySelector("#miniHeart");
const scoreText = game.querySelector("#score");

miniHeart.addEventListener("click", function () {

    score++;

    scoreText.textContent = score + " / 10";

    createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height
    );

    if (score >= 10) {

        game.innerHTML = `
            <h1>❤️</h1>
            <h2> بحبك يا جنات ❤️ والصراحة الخاتم المفروض يبان بعدين بس مشي الدنيا</h2>
            <p>شكراً إنك وصلتي للنهاية 🌹</p>
        `;

    }

});

};   // نهاية giftBtn.onclick

}    // نهاية if(giftBtn)