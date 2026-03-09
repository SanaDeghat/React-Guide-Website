// Teleport the spotlight out of the main-content cage so animations don't break it!
const spotlight = document.getElementById('spotlight');
document.body.prepend(spotlight); 

const spotlightOverlay = document.getElementById('spotlight-overlay');
let overlayShown = false;

window.addEventListener('mousemove', (event) => {
    const rect = spotlight.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (!overlayShown) {
        spotlight.style.opacity = '1';
        overlayShown = true;
    }

    spotlightOverlay.style.background = `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(132, 146, 166, 0) 10px,
        rgba(249, 250, 252, 0.8) 125px
        )
    `;
});