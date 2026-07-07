// ======================================
// RING ENGINE
// For Janat ❤️
// ======================================

const ring = document.createElement("div");

ring.id = "magicRing";

ring.innerHTML = `
<div class="diamond"></div>
`;

document.body.appendChild(ring);

// إظهار الخاتم بعد 3 ثواني
setTimeout(() => {

    ring.classList.add("show");

},3000);

// عند الضغط عليه
ring.addEventListener("click",()=>{

    ring.animate([

        {
            transform:"translateX(-50%) scale(1) rotateY(0deg)"
        },

        {
            transform:"translateX(-50%) scale(1.25) rotateY(180deg)"
        },

        {
            transform:"translateX(-50%) scale(1) rotateY(360deg)"
        }

    ],{

        duration:1200

    });

});