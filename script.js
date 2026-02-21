import { drawCanvas } from "./render.js";

let canvas = document.getElementById("sim-canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);

let Game = {
  fps: 60,  // UNUSED - NEXT UPDATE

  /**
   * contains all updates the website will receive on this loop
   * NOTE: Put any changes here in subfunctions, lets try and keep update() clean
   */
  update: function() {
    console.log();
  },
  /**
   * causes program to continuously loop, mostly reserved for looping logic and not actual code
   * NOTE: to be updated to a more robust version based on date/time
   * @param {*} timestamp 
   */
  loop: function(timestamp) {
    let progress = timestamp - lastRender;
    
    Game.update();
    
    lastRender = timestamp;
    window.requestAnimationFrame(Game.loop);
  }
}


// Begin looping
let lastRender = 0;
window.requestAnimationFrame(Game.loop);


/*****
COMMENTED OUT OLD ATOM CODE - REMOVE IF WANTED
*****/
// document.addEventListener('DOMContentLoaded', () => {
//   const sim = document.getElementById('sim-area');
//   if (!sim) return;

//   const particles = [];

//   function _clientToLocal(clientX, clientY) {
//     const rect = sim.getBoundingClientRect();
//     return { x: clientX - rect.left, y: clientY - rect.top };
//   }

//   function createParticleAt(clientX, clientY, opts = {}) {
//     const { x, y } = _clientToLocal(clientX, clientY);
//     const el = document.createElement('div');
//     el.className = 'particle';
//     if (opts.size === 'small') el.classList.add('small');
//     if (opts.size === 'large') el.classList.add('large');
//     el.style.left = x + 'px';
//     el.style.top = y + 'px';
//     el.dataset.type = opts.type || '';

//     sim.appendChild(el);
//     particles.push({ el, x, y, vx: 0, vy: 0 });

//     // simple fade-out after some time (placeholder behaviour)
//     if (opts.lifetime) {
//       setTimeout(() => {
//         el.style.opacity = '0';
//         setTimeout(() => el.remove(), 400);
//       }, opts.lifetime);
//     }

//     return el;
//   }

//   // Click inside sim area spawns a particle at click location
//   sim.addEventListener('click', (ev) => {
//     // Only respond to primary button
//     if (ev.button !== 0) return;
//     createParticleAt(ev.clientX, ev.clientY, { size: 'small' });
//   });

//   // expose helper for console/other scripts
//   window.createParticleAt = createParticleAt;
// });
